import { catalog } from "../data/catalog.js?v=20261014-041746";
import { COMBAT, DICE } from "../data/rules.js?v=20261014-041746";
import { Enemy } from "../models/Enemy.js?v=20261014-041746";
import { capEvade, capLifesteal, critMinFrom, lowHpBonus, runAbilities } from "./AbilitySystem.js?v=20261014-041746";
import { applyReduction, computeEffect, describeCalculation, describeRoll, rollTier } from "./DamageSystem.js?v=20261014-041746";
import { consumableEffects, isElixir } from "./ConsumableEffects.js?v=20261014-041746";
import { chooseEnemySkillId } from "./EnemyAI.js?v=20261014-041746";
import { attackSkillBase, basicAttackBase, supportAmount } from "./FormulaSystem.js?v=20261014-041746";
import { parseEffects, STATUS_LABELS, toStatusSpec } from "./EffectParser.js?v=20261014-041746";
import { josa } from "./Josa.js?v=20261014-041746";
import { clamp, formatNumber as fmt, roundValue } from "./NumberRules.js?v=20261014-041746";
import {
  absorbWithShield,
  applyStatus,
  beginAction,
  clearStatuses,
  endAction,
  getDealtMultiplier,
  getEmpowerAmount,
  getGuardAmount,
  getTakenMultiplier,
  hasStatus,
  removeStatus,
  durationText,
  statusValueText,
} from "./StatusSystem.js?v=20261014-041746";
import { getClassTrait, getProfile } from "./TraitSystem.js?v=20261014-041746";

const SELF_EFFECTS = new Set(["guard", "shield", "empower", "cleanse"]);
// 효과량을 자신에게 거는 스킬: 방어(보호막), 강화(주는 피해 증가). 효과량 = 기본값 + 능력치 × 계수, 주사위 없음
const SELF_AMOUNT_STATUS = { defense: "shield", buff: "empower" };

// 즉시 발동 스킬(fast): 행동을 쓰지 않는다(쓴 뒤 같은 턴에 다른 행동을 할 수 있다).
export function isFastSkill(skill) {
  return Boolean(skill?.effects.includes("fast"));
}

// 피해를 주는 스킬(마법사는 영창해야 쓸 수 있다)
export function isDamageSkill(skill) {
  return skill?.type === "attack";
}
// 피해 줄에 붙는 판정 표시: (🎲굴린 값 · 판정 이름)
const HIT_LABELS = { low: "스침", normal: "명중", high: "강타", critical: "치명타!" };

// 결과 괄호: " (🎲15 · 강타 · 보호막 7 막음)". extra는 괄호 안 끝에 덧붙인다.
function hitTag(roll, tier, extra = "") {
  const parts = roll === undefined ? [] : [`🎲${roll}`, HIT_LABELS[tier.id]].filter(Boolean);

  if (extra) {
    parts.push(extra);
  }

  return parts.length ? ` (${parts.join(" · ")})` : "";
}
const NEGATIVE_STATUSES = ["poison", "bleed", "stun", "weaken", "vulnerable"];

// 1:1 전투 한 번. 플레이어 입력이 필요할 때까지 자동으로 진행한다.
// 사용: const combat = new Combat({ adventurer, enemyData, dungeon, dice, surprise });
//       combat.begin(); combat.act({ type: "attack" }); combat.takeEvents();
export class Combat {
  // boon: 이번 보스전에만 붙는 효과(정비 특별 선택지) { name, effects }
  constructor({ adventurer, enemyData, dungeon, dice, surprise = null, boon = null }) {
    this.dice = dice;
    this.dungeon = dungeon;
    this.surprise = surprise; // "player" | "enemy" | null
    this.events = [];
    this.result = null; // "victory" | "defeat"
    this.awaitingInput = false;
    this.turnOwner = null;
    this.round = 0;
    // 출력 줄마다 기록할 "지금 행동 중인 쪽" (화면 강조용)
    this.actor = null;

    const profile = getProfile(adventurer, { extraSources: boon ? [boon] : [] });
    this.trait = getClassTrait(adventurer.classId);
    this.player = {
      kind: "player",
      // 공용 스킬의 "main" 능력치는 직업의 주 능력치로 계산한다.
      mainStat: catalog.classes.get(adventurer.classId)?.mainStat ?? "str",
      name: adventurer.name,
      ref: adventurer,
      profile,
      statuses: [],
      stunImmunity: 0,
      immune: profile.modifiers.immune,
      cooldowns: new Map(),
      // 이번 행동에 쓴 스킬(즉시 발동 스킬을 포함해 쿨타임을 이번 행동에 줄이지 않는다)
      usedSkills: new Set(),
      buffs: { basicAttackBonus: 0 },
      // 전사 기세(전투가 끝나면 사라진다)
      momentum: 0,
      firstStrikePending: false,
      actions: 0,
      // 마법사 영창: 전투는 영창된 상태로 시작한다.
      chanted: Boolean(this.trait.chantMultiplier),
    };

    const enemy = new Enemy(enemyData);
    this.enemy = {
      kind: "enemy",
      name: enemy.name,
      ref: enemy,
      mods: enemyMods(enemy.effects),
      statuses: [],
      stunImmunity: 0,
      immune: new Set(),
      cooldowns: new Map(),
      usedSkills: new Set(),
      // hpBelowHalfOnce 패턴으로 이미 쓴 스킬
      onceUsed: new Set(),
      actions: 0,
    };
  }

  // ---------- 진행 ----------

  begin() {
    // 엘리트는 등장 메시지 중 하나로 전투를 연다.
    const enemyRef = this.enemy.ref;
    const opening = enemyRef.rank === "elite" && enemyRef.intros.length ? this.dice.pick(enemyRef.intros) : enemyRef.description;
    this.log("system", opening);
    runAbilities(this, "onBattleStart");
    this.resolveSurprise();

    if (!this.result) {
      const playerFirst = this.playerAgi() >= this.enemy.ref.agi;
      this.turnOwner = playerFirst ? "player" : "enemy";
      this.player.firstStrikePending = playerFirst && Boolean(this.trait.firstStrikeMultiplier);
      this.log(
        "system",
        `${josa(playerFirst ? this.player.name : this.enemy.name, "이/가")} 먼저 움직인다.`,
        `민첩 ${fmt(this.playerAgi())} : ${fmt(this.enemy.ref.agi)}`,
      );
      this.advance();
    }

    return this.takeEvents();
  }

  advance() {
    while (!this.result) {
      if (this.turnOwner === "enemy") {
        this.runEnemyTurn();
        this.turnOwner = "player";
        continue;
      }

      this.round += 1;
      this.beginTurnLog(this.player);
      const start = this.startTurn(this.player);

      if (this.result) {
        return;
      }

      if (start.stunned) {
        this.finishTurn(this.player);
        this.turnOwner = "enemy";
        continue;
      }

      this.awaitingInput = true;
      return;
    }
  }

  // action: { type: "attack" } | { type: "chant" } | { type: "skill", slot } | { type: "item", itemId }
  act(action) {
    if (!this.awaitingInput || this.result) {
      return [];
    }

    const check = this.canAct(action);

    if (!check.ok) {
      this.log("system", check.reason);
      return this.takeEvents();
    }

    const skill = action.type === "skill" ? catalog.skills.get(this.player.ref.skills[action.slot]) : null;

    // 즉시 발동 스킬은 행동을 쓰지 않는다: 쓰고 나서 다시 입력을 기다린다.
    if (skill && isFastSkill(skill)) {
      this.useSkill(this.player, this.enemy, skill);
      runAbilities(this, "onSkill", { skillId: skill.id });
      return this.takeEvents();
    }

    this.awaitingInput = false;
    this.player.actions += 1;

    if (action.type === "attack") {
      this.playerBasicAttack();
    } else if (action.type === "chant") {
      this.player.chanted = true;
      this.log("player", `${this.player.name} — 영창`, `다음 기본공격·스킬 효과 ×${this.trait.chantMultiplier}`);
      this.applyChantShield();
    } else if (skill) {
      this.useSkill(this.player, this.enemy, skill);
      runAbilities(this, "onSkill", { skillId: skill.id });
    } else if (action.type === "item") {
      this.useItem(action.itemId);
    }

    this.player.firstStrikePending = false;

    if (!this.result) {
      this.finishTurn(this.player);
      this.turnOwner = "enemy";
      this.advance();
    }

    return this.takeEvents();
  }

  canAct(action) {
    const isMage = Boolean(this.trait.chantMultiplier);

    if (action.type === "attack") {
      return isMage && !this.player.chanted ? { ok: false, reason: "영창해야 공격할 수 있다." } : { ok: true };
    }

    if (action.type === "chant") {
      return isMage && !this.player.chanted ? { ok: true } : { ok: false, reason: "지금은 영창할 수 없다." };
    }

    if (action.type === "skill") {
      const skill = catalog.skills.get(this.player.ref.skills[action.slot]);

      if (!skill || skill.type === "passive") {
        return { ok: false, reason: "사용할 수 있는 스킬이 아니다." };
      }

      if ((this.player.cooldowns.get(skill.id) ?? 0) > 0) {
        return { ok: false, reason: `${josa(skill.name, "은/는")} 아직 쿨타임이 남아 있다.` };
      }

      if (isMage && !this.player.chanted && isDamageSkill(skill)) {
        return { ok: false, reason: "영창해야 공격 스킬을 쓸 수 있다." };
      }

      return { ok: true };
    }

    if (action.type === "item") {
      const item = catalog.consumables.get(action.itemId);

      if (!item || this.player.ref.inventory.count(action.itemId) <= 0) {
        return { ok: false, reason: "사용할 수 있는 아이템이 없다." };
      }

      if (isElixir(item)) {
        return { ok: false, reason: "영약은 전투 밖에서만 마실 수 있다." };
      }

      return { ok: true };
    }

    return { ok: false, reason: "알 수 없는 행동" };
  }

  // 마법사: 영창된 상태면 ×1.75 배율을 돌려주고 영창을 푼다. 아니면 배율 없음.
  consumeChant(user) {
    if (user.kind !== "player" || !user.chanted || !this.trait.chantMultiplier) {
      return [];
    }

    user.chanted = false;
    return [{ value: this.trait.chantMultiplier, label: "영창" }];
  }

  startTurn(side) {
    const { poisonDamage, bleedDamage, stunned } = beginAction(side);

    if (poisonDamage > 0) {
      const before = side.ref.hp;
      side.ref.hp = Math.max(0, roundValue(side.ref.hp - poisonDamage));
      this.log("status", `독이 퍼진다. ${josa(side.name, "이/가")} ${fmt(poisonDamage)} 피해를 입었다.`, "", {
        target: side.kind,
        type: "damage",
        tier: "low",
        amount: poisonDamage,
      });
      this.afterDamage(side, before);
    }

    if (!this.result && bleedDamage > 0) {
      this.dealFixedDamage(side, bleedDamage, "출혈");
    }

    if (!this.result && side.kind === "player") {
      runAbilities(this, "onTurnStart");
    }

    if (!this.result && stunned) {
      this.log("status", `${josa(side.name, "은/는")} 기절해 움직이지 못한다.`);

      if (side.chanted) {
        side.chanted = false;
        this.log("status", "→ 기절해 영창이 풀렸다.");
      }
    }

    return { stunned };
  }

  finishTurn(side) {
    for (const [skillId, remaining] of side.cooldowns) {
      if (!side.usedSkills.has(skillId) && remaining > 0) {
        side.cooldowns.set(skillId, remaining - 1);
      }
    }

    side.usedSkills.clear();
    endAction(side);
  }

  runEnemyTurn() {
    this.beginTurnLog(this.enemy);
    const start = this.startTurn(this.enemy);

    if (this.result) {
      return;
    }

    if (!start.stunned) {
      this.enemy.actions += 1;
      const skill = this.chooseEnemySkill();

      if (skill) {
        this.useSkill(this.enemy, this.player, skill);
      } else {
        this.basicAttack(this.enemy, this.player, { base: this.enemy.ref.damage, label: "공격" });
      }
    }

    if (!this.result) {
      this.finishTurn(this.enemy);
    }
  }

  chooseEnemySkill() {
    const id = chooseEnemySkillId(this.enemy);
    return id ? this.dungeon.enemySkillsById.get(id) : null;
  }

  // ---------- 기습·전투 시작 ----------

  resolveSurprise() {
    if (!this.surprise) {
      return;
    }

    const attacker = this.surprise === "player" ? this.player : this.enemy;
    const defender = this.surprise === "player" ? this.enemy : this.player;
    const rogueBonus = this.trait.surpriseModifier ?? 0;
    const modifier = clamp(
      this.surprise === "enemy" ? rogueBonus : -rogueBonus,
      -DICE.maxModifier,
      DICE.maxModifier,
    );
    const roll = this.dice.rollD20();
    const total = roll + modifier;
    const defended = total >= COMBAT.surpriseDefenseTarget;
    const modText = modifier ? ` ${modifier > 0 ? "+" : ""}${modifier} = ${total}` : "";

    this.log(
      "system",
      `${attacker.name}의 기습! ${defended ? `${josa(defender.name, "이/가")} 막아 냈다.` : `${josa(defender.name, "이/가")} 대비하지 못했다.`}`,
      `1d20: ${roll}${modText} / 기준 ${COMBAT.surpriseDefenseTarget} 이상`,
    );

    if (defended) {
      return;
    }

    this.actor = attacker.kind;

    if (attacker === this.player) {
      this.playerBasicAttack({ isSurprise: true });
    } else {
      this.basicAttack(this.enemy, this.player, { base: this.enemy.ref.damage, label: "기습 공격" });
    }
  }

  // ---------- 행동 ----------

  playerBasicAttack({ isSurprise = false } = {}) {
    const profile = this.player.profile;
    const weapon = this.player.ref.equipment.weapon
      ? catalog.equipment.get(this.player.ref.equipment.weapon)
      : null;
    const bonus = profile.modifiers.basicAttackBonus
      + this.player.buffs.basicAttackBonus
      + lowHpBonus(this.player, "basicAttackBonus");
    // 기본공격 = 무기 피해 × 2/3 + 무기 연결 능력치 (반올림) × 단계 배율 (2026-10-13)
    const base = basicAttackBase(weapon, profile.stats);
    const multipliers = isSurprise ? [] : this.consumeChant(this.player);

    if (!isSurprise && this.player.firstStrikePending) {
      multipliers.push({ value: this.trait.firstStrikeMultiplier, label: "선공" });
    }

    const hit = this.basicAttack(this.player, this.enemy, {
      base,
      flat: bonus,
      momentum: true,
      multipliers,
      label: isSurprise ? "기습 공격" : weapon ? `${josa(weapon.name, "으로/로")} 공격` : "맨손 공격",
    });

    if (hit.damage > 0 && !this.result) {
      runAbilities(this, "onHit");
    }
  }

  basicAttack(attacker, defender, { base, flat = 0, multipliers = [], label, momentum = false }) {
    const roll = rollTier(this.dice, { critMin: this.critMinOf(attacker), missBonus: this.evadeOf(defender) });
    this.log(attacker.kind, `${attacker.name} — ${label}`, describeRoll(roll));
    const damage = this.dealDamage(attacker, defender, { base, flat, tier: roll.tier, multipliers, roll: roll.roll, momentum });
    return { tier: roll.tier, damage };
  }

  useSkill(user, target, skill) {
    const isPlayer = user.kind === "player";
    const cooldown = Math.max(1, skill.cooldown - (isPlayer ? user.profile.modifiers.cooldownReduction : 0));
    const effects = parseEffects(skill.effects);

    user.cooldowns.set(skill.id, cooldown);
    user.usedSkills.add(skill.id);
    // 마법사 영창: 영창된 상태에서 쓰면 ×1.75(피해·회복·보호막·강화) 후 영창이 풀린다.
    const chant = this.consumeChant(user);

    if (isDamageSkill(skill)) {
      this.useAttackSkill(user, target, skill, effects, chant);
      return;
    }

    // 회복·방어·강화·약화: 주사위 없음. 효과량 = 기본값 + 능력치 × 계수 (적은 기본값)
    this.log(user.kind, `${user.name} — 「${skill.name}」${isFastSkill(skill) ? " (즉시 발동)" : ""}`);
    const amountBase = isPlayer ? supportAmount(skill.baseEffect, skill.scaling, user.profile.stats, user.mainStat) : skill.baseEffect;
    const amount = roundValue(chant.reduce((acc, item) => acc * item.value, amountBase));

    if (chant.length) {
      this.log("calc", "", `${fmt(amountBase)} × ${chant[0].value}(영창) = ${fmt(amount)}`);
    }

    if (skill.type === "heal") {
      this.heal(user, amount, skill.name);
    } else if (SELF_AMOUNT_STATUS[skill.type] && amount > 0) {
      const statusType = SELF_AMOUNT_STATUS[skill.type];
      const token = effects.find((effect) => effect.key === statusType || (statusType === "shield" && effect.key === "guard"));
      this.inflict(user, { type: statusType, amount, duration: token ? Number(token.args[0]) : 1 }, user);
    }

    this.applySkillEffects(user, target, effects, null);
  }

  // 공격 스킬 = (무기 피해 + 능력치 × 계수) × 단계 배율 (적은 기본값 × 단계 배율)
  useAttackSkill(user, target, skill, effects, chant) {
    const isPlayer = user.kind === "player";
    const roll = rollTier(this.dice, { critMin: this.critMinOf(user), missBonus: this.evadeOf(target) });
    this.log(user.kind, `${user.name} — 「${skill.name}」`, describeRoll(roll));

    const weapon = isPlayer && user.ref.equipment.weapon ? catalog.equipment.get(user.ref.equipment.weapon) : null;
    const base = isPlayer ? attackSkillBase(skill, weapon, user.profile.stats, user.mainStat) : skill.baseEffect;
    this.dealSkillDamage(user, target, { base, tier: roll.tier, roll: roll.roll, skillMultipliers: chant });

    if (this.result || roll.tier.multiplier === 0) {
      return;
    }

    this.applySkillEffects(user, target, effects, { tier: roll.tier, multipliers: chant });
  }

  // 스킬의 부가 효과(상태이상·정화). 공격 스킬의 독은 단계 배율·영창 배율을 반영한다.
  applySkillEffects(user, target, effects, scaling) {
    for (const effect of effects) {
      if (["guard", "shield", "empower", "strike", "fast"].includes(effect.key)) {
        continue;
      }

      if (effect.key === "cleanse") {
        NEGATIVE_STATUSES.forEach((type) => removeStatus(user, type));
        this.log("status", `${user.name}의 상태이상이 사라졌다.`);
        continue;
      }

      const spec = toStatusSpec(effect);

      if (!spec) {
        continue;
      }

      if (spec.type === "poison" && scaling) {
        const product = scaling.multipliers.reduce((acc, item) => acc * item.value, 1);
        spec.amount = roundValue(spec.amount * scaling.tier.multiplier * product);
      }

      this.inflict(SELF_EFFECTS.has(effect.key) ? user : target, spec, user);

      if (this.result) {
        return;
      }
    }
  }

  dealSkillDamage(user, target, { base, tier, roll, skillMultipliers }) {
    const isPlayer = user.kind === "player";
    const multipliers = [...skillMultipliers];

    if (isPlayer && user.firstStrikePending) {
      multipliers.push({ value: this.trait.firstStrikeMultiplier, label: "선공" });
    }

    const flat = isPlayer ? user.profile.modifiers.skillDamageBonus + lowHpBonus(user, "skillDamageBonus") : 0;
    this.dealDamage(user, target, { base, flat, tier, multipliers, roll, momentum: isPlayer });
  }

  // 소모품 효과를 차례로 적용한다(붕대: 회복 → 출혈 해제).
  useItem(itemId) {
    const item = catalog.consumables.get(itemId);
    const effects = consumableEffects(item);

    this.player.ref.inventory.remove(itemId, 1);
    this.log("player", `${this.player.name} — ${item.name} 사용`);

    for (const { key, args } of effects) {
      if (key === "heal") {
        this.heal(this.player, item.amount, item.name);
      } else if (key === "damage") {
        this.dealItemDamage(this.enemy, item);
      } else if (key === "cure") {
        const label = STATUS_LABELS[args[0]] ?? args[0];

        if (hasStatus(this.player, args[0])) {
          removeStatus(this.player, args[0]);
          this.log("status", `${josa(label, "이/가")} 사라졌다.`);
        } else if (effects.length === 1) {
          this.log("status", `${label} 상태가 아니었다.`);
        }
      } else if (key === "buff") {
        this.player.buffs[args[0]] = (this.player.buffs[args[0]] ?? 0) + Number(args[1]);
        this.log("status", `이번 전투 동안 ${item.description}`);
      }
    }
  }

  // 마법사 영창 보호막: [영창] 행동 때 (2 + 지혜 × 0.3), 1턴. 주사위 없음.
  applyChantShield() {
    const shield = this.trait.chantShield;

    if (!shield) {
      return;
    }

    const { stats, mainStat } = this.player.profile;
    const amount = supportAmount(shield.base, shield.scaling, stats, mainStat);

    if (amount > 0) {
      this.inflict(this.player, { type: "shield", amount, duration: shield.duration }, this.player);
    }
  }

  // ---------- 피해·회복·상태 ----------

  // roll: 굴린 주사위 값(보정 전). 결과 줄에 표시한다.
  // momentum: 전사 기세를 더하는 공격(플레이어의 기본공격·공격 스킬)
  dealDamage(attacker, defender, { base, flat = 0, tier, multipliers = [], roll, momentum = false }) {
    const all = [...multipliers];
    const dealt = getDealtMultiplier(attacker);
    const taken = getTakenMultiplier(defender);

    if (dealt !== 1) {
      all.push({ value: dealt, label: "약화" });
    }

    if (taken !== 1) {
      all.push({ value: taken, label: "취약" });
    }

    // 강화 상태면 효과량만큼 고정 보너스에 더한다(능력치 배율은 받지 않는다).
    flat = roundValue(flat + getEmpowerAmount(attacker));
    const computed = computeEffect({ base, flat, tier, multipliers: all });
    // 전사 기세: 단계·그 밖의 배율 없이 더한다. 빗나감(효과 없음)이면 더하지 않는다.
    const momentumBonus = momentum && tier.multiplier > 0 ? attacker.momentum ?? 0 : 0;
    const raw = computed + momentumBonus;
    const reduction = this.reductionOf(defender);
    const afterReduction = applyReduction(raw, reduction, tier);
    // 보호막이 공격 피해를 먼저 막는다(독·출혈·반사는 막지 못한다).
    const absorbed = absorbWithShield(defender, afterReduction);
    const final = afterReduction - absorbed;
    const before = defender.ref.hp;
    const shieldNote = absorbed > 0 ? `보호막 ${fmt(absorbed)} 막음` : "";

    defender.ref.hp = Math.max(0, roundValue(defender.ref.hp - final));
    let text = `→ 빗나갔다!${hitTag(roll, tier)}`;
    let fx = { target: defender.kind, type: "miss", tier: tier.id };

    if (final > 0) {
      text = `→ ${defender.name}에게 ${fmt(final)} 피해${hitTag(roll, tier, shieldNote)}`;
      fx = { target: defender.kind, type: "damage", tier: tier.id, amount: final };
    } else if (absorbed > 0) {
      text = `→ 보호막이 ${fmt(absorbed)} 피해를 모두 막았다${hitTag(roll, tier)}`;
      fx = { target: defender.kind, type: "status", label: "보호막" };
    }

    const calc = describeCalculation({ base, flat, tier, multipliers: all, raw: computed, reduction, final: afterReduction });
    this.log("damage", text, momentumBonus ? `${calc} (기세 +${fmt(momentumBonus)} 포함)` : calc, fx);

    // 공격으로 피해를 받으면 전사 기세가 쌓인다(독·출혈·반사는 이 경로를 지나지 않는다).
    if (final > 0 && defender.kind === "player") {
      this.gainMomentum(defender);
    }
    this.afterDamage(defender, before);

    if (final > 0 && !this.result) {
      this.afterHit(attacker, defender, { final, tier });
    }

    return final;
  }

  // 피해를 준 뒤의 능력: 공격자의 흡혈, 맞은 쪽의 반사(플레이어·적 공통),
  // 플레이어의 치명타 시·피격 시 발동 능력
  afterHit(attacker, defender, { final, tier }) {
    const lifesteal = roundValue(final * this.modsOf(attacker).lifesteal / 100);

    if (lifesteal > 0) {
      this.heal(attacker, lifesteal, "흡혈", { quiet: true });
    }

    if (attacker.kind === "player" && tier.id === "critical" && !this.result) {
      runAbilities(this, "onCrit");
    }

    const reflect = this.modsOf(defender).reflect;

    if (reflect > 0 && !this.result) {
      this.dealFixedDamage(attacker, reflect, "반사");
    }

    if (defender.kind === "player" && !this.result) {
      runAbilities(this, "onHurt");
    }
  }

  // 공격 소모품(마력 두루마리 등): 주사위·특성 배율 없이 정해진 피해, 적의 피해 감소는 적용한다.
  dealItemDamage(target, item) {
    const reduction = this.reductionOf(target);
    const afterReduction = Math.max(COMBAT.minDamage, roundValue(item.amount - reduction));
    const absorbed = absorbWithShield(target, afterReduction);
    const final = afterReduction - absorbed;
    const before = target.ref.hp;
    target.ref.hp = Math.max(0, roundValue(target.ref.hp - final));
    this.log(
      "damage",
      `→ ${target.name}에게 ${fmt(final)} 피해 (${[item.name, absorbed > 0 ? `보호막 ${fmt(absorbed)} 막음` : ""].filter(Boolean).join(" · ")})`,
      `${fmt(item.amount)} − 피해 감소 ${fmt(reduction)} → ${fmt(final)}`,
      { target: target.kind, type: "damage", tier: "high", amount: final },
    );
    this.afterDamage(target, before);
  }

  // 판정 없이 정해진 피해(출혈·반사 등). 피해 감소를 무시한다.
  dealFixedDamage(target, amount, source) {
    if (amount <= 0 || this.result) {
      return;
    }

    const before = target.ref.hp;
    target.ref.hp = Math.max(0, roundValue(target.ref.hp - amount));
    this.log("status", `→ ${source}: ${josa(target.name, "이/가")} ${fmt(amount)} 피해를 입었다.`, "", {
      target: target.kind,
      type: "damage",
      tier: "low",
      amount,
    });
    this.afterDamage(target, before);
  }

  afterDamage(side, hpBefore) {
    if (this.player.ref.hp <= 0) {
      this.finish("defeat");
    } else if (this.enemy.ref.hp <= 0) {
      runAbilities(this, "onKill");
      this.finish("victory");
    }
  }

  // 전사 기세: 최대치까지 1씩 쌓는다.
  gainMomentum(side) {
    const max = this.trait.momentumMax;

    if (!max || side.ref.hp <= 0 || side.momentum >= max) {
      return;
    }

    side.momentum += 1;
    this.log("status", `→ 기세 +1 (${side.momentum} / ${max})`, "", { target: side.kind, type: "status", label: `기세 ${side.momentum}` });
  }

  // quiet: 장비 능력처럼 자동으로 일어나는 회복은 HP가 가득 차 있으면 출력하지 않는다.
  heal(side, amount, source, { quiet = false } = {}) {
    const maxHp = side.kind === "player" ? side.profile.maxHp : side.ref.maxHp;
    const before = side.ref.hp;
    side.ref.hp = Math.min(maxHp, roundValue(side.ref.hp + amount));
    const healed = roundValue(side.ref.hp - before);

    if (quiet && healed <= 0) {
      return;
    }

    const text = healed > 0 ? `→ ${side.name} HP ${fmt(healed)} 회복 (${source})` : `→ ${side.name}의 HP가 이미 가득하다 (${source})`;
    this.log("heal", text, "", { target: side.kind, type: "heal", amount: healed });
  }

  inflict(target, spec, source) {
    const outcome = applyStatus(target, spec, { appliedBySelf: target === source });
    const label = STATUS_LABELS[spec.type] ?? spec.type;

    if (!outcome.applied) {
      this.log("status", `→ ${target.name}에게 ${josa(label, "이/가")} 통하지 않았다.`);
      return;
    }

    const text = outcome.stacked !== undefined
      ? `→ ${target.name}: ${label} +${fmt(spec.amount)} (남은 ${label} ${fmt(outcome.stacked)})`
      : `→ ${target.name}: ${label}${statusValueText(spec)} (${durationText(spec.duration)}${outcome.refreshed ? ", 갱신" : ""})`;
    this.log("status", text, "", {
      target: target.kind,
      type: "status",
      label,
    });
  }

  finish(result) {
    if (this.result) {
      return;
    }

    this.result = result;
    this.awaitingInput = false;
    clearStatuses(this.player);
    clearStatuses(this.enemy);
    this.log(
      "result",
      result === "victory" ? `${josa(this.enemy.name, "을/를")} 쓰러뜨렸다!` : `${josa(this.player.name, "이/가")} 쓰러졌다…`,
    );
  }

  // ---------- 조회 ----------

  playerAgi() {
    return this.player.profile.stats.agi;
  }

  // 고정 특수 능력: 플레이어는 장비·패시브, 적은 시트의 effects
  modsOf(side) {
    return side.kind === "player" ? side.profile.modifiers : side.mods;
  }

  critMinOf(side) {
    return this.modsOf(side).critMin;
  }

  evadeOf(side) {
    return this.modsOf(side).evade;
  }

  reductionOf(side) {
    const base = side.kind === "player" ? side.profile.damageReduction : side.ref.damageReduction;
    return roundValue(base + getGuardAmount(side));
  }

  getActionOptions() {
    const skills = this.player.ref.skills.map((skillId, slot) => {
      const skill = skillId ? catalog.skills.get(skillId) : null;
      const remaining = skill ? this.player.cooldowns.get(skill.id) ?? 0 : 0;
      const needsChant = Boolean(this.trait.chantMultiplier) && !this.player.chanted && isDamageSkill(skill);
      return {
        slot,
        skill,
        remaining,
        fast: isFastSkill(skill),
        needsChant,
        usable: Boolean(skill) && skill.type !== "passive" && remaining === 0 && !needsChant,
      };
    });

    const seen = new Set();
    const items = [];

    for (const slot of this.player.ref.inventory.slots) {
      const item = catalog.consumables.get(slot.id);

      // 영약은 전투 중에 마실 수 없다.
      if (item && !isElixir(item) && !seen.has(item.id)) {
        seen.add(item.id);
        items.push({ item, count: this.player.ref.inventory.count(item.id) });
      }
    }

    // 마법사: 영창 상태와 기본공격 자리(영창 / 공격)
    const chant = this.trait.chantMultiplier
      ? { chanted: this.player.chanted, multiplier: this.trait.chantMultiplier }
      : null;
    return { skills, items, chant };
  }

  // 출력 줄: 그 시점의 HP와 행동 중인 쪽을 함께 기록해 화면이 순서대로 재생할 수 있게 한다.
  // fx: 화면 연출용 정보 { target: "player"|"enemy", type: "damage"|"miss"|"heal"|"status", tier, amount, label }
  log(kind, text, detail = "", fx = null) {
    this.events.push({
      kind,
      text,
      detail,
      fx,
      actor: this.actor,
      hp: { player: this.player.ref.hp, enemy: this.enemy.ref.hp },
    });
  }

  beginTurnLog(side) {
    this.actor = side.kind;
    const label = side.kind === "player" ? `${this.round}턴 · ${side.name}의 차례` : `${side.name}의 차례`;
    this.log("turn", label);
  }

  takeEvents() {
    const events = this.events;
    this.events = [];
    return events;
  }
}

// 적의 고정 특수 능력(crit·evade·reflect·lifesteal)을 합치고 상한을 적용한다.
function enemyMods(effects) {
  const sums = { crit: 0, evade: 0, reflect: 0, lifesteal: 0 };

  for (const { key, args } of parseEffects(effects)) {
    if (key in sums) {
      sums[key] += Number(args[0]);
    }
  }

  return {
    critMin: critMinFrom(sums.crit),
    evade: capEvade(sums.evade),
    reflect: sums.reflect,
    lifesteal: capLifesteal(sums.lifesteal),
  };
}
