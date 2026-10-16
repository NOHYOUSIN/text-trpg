import { catalog } from "../data/catalog.js?v=20261016-205734";
import { COMBAT, DICE, EFFECT_TIERS } from "../data/rules.js?v=20261016-205734";
import { Enemy } from "../models/Enemy.js?v=20261016-205734";
import { capEvade, capLifesteal, critMinFrom, runAbilities } from "./AbilitySystem.js?v=20261016-205734";
import { burstBonus, conditionalBonus, effectValue } from "./BuildEffects.js?v=20261016-205734";
import { applyReduction, computeEffect, describeCalculation, describeRoll, rollTier } from "./DamageSystem.js?v=20261016-205734";
import { consumableEffects, isElixir } from "./ConsumableEffects.js?v=20261016-205734";
import { chooseEnemySkillId } from "./EnemyAI.js?v=20261016-205734";
import { attackSkillBase, basicAttackBase, supportAmount } from "./FormulaSystem.js?v=20261016-205734";
import { parseEffects, STATUS_LABELS, toStatusSpec } from "./EffectParser.js?v=20261016-205734";
import { josa } from "./Josa.js?v=20261016-205734";
import { clamp, formatNumber as fmt, roundValue } from "./NumberRules.js?v=20261016-205734";
import {
  absorbWithShield,
  applyStatus,
  beginAction,
  clearStatuses,
  endAction,
  getDealtMultiplier,
  getEmpowerAmount,
  getGuardAmount,
  getStatus,
  getTakenMultiplier,
  hasStatus,
  removeStatus,
  durationText,
  statusValueText,
} from "./StatusSystem.js?v=20261016-205734";
import { getClassTrait, getProfile } from "./TraitSystem.js?v=20261016-205734";

const SELF_EFFECTS = new Set(["guard", "shield", "empower", "cleanse", "reflect", "critBoost"]);
const CRITICAL_TIER = EFFECT_TIERS.find((tier) => tier.id === "critical");
// 내가 거는 지속시간 +N(족쇄 부적) 대상
const DEBUFF_DURATION_TYPES = new Set(["weaken", "vulnerable", "poison"]);
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

// 영창한 상태에서만 쓰는 스킬(마력 응축: chantBoost)
export function needsChantState(skill) {
  return Boolean(skill?.effects.some((token) => token.startsWith("chantBoost:")));
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
    // 정비 특별 선택지의 기습은 반드시 성공한다
    this.surpriseCertain = Boolean(boon?.surprise) && surprise === "player";
    this.events = [];
    this.result = null; // "victory" | "defeat"
    this.awaitingInput = false;
    this.turnOwner = null;
    this.round = 0;
    // 출력 줄마다 기록할 "지금 행동 중인 쪽" (화면 강조용)
    this.actor = null;

    const profile = getProfile(adventurer, { extraSources: boon ? [boon] : [] });

    // 이번 전투에만 최대 HP가 줄면(정비 특별 선택지 maxHp:-N) 지금 HP도 그 안으로 맞춘다.
    if (boon && adventurer.hp > profile.maxHp) {
      adventurer.hp = profile.maxHp;
    }
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
      // 빌드 축 확장(2026-10-16): 이번 전투 영창 횟수(별똥별), 회복량(회심의 반격),
      // 행동을 쓰지 않는 소모품 사용 남은 횟수, 마력 응축으로 더한 영창 배율
      chantCount: 0,
      healedTotal: 0,
      freeItems: profile.modifiers.freeItemUse,
      chantBoost: 0,
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

      if (playerFirst) {
        runAbilities(this, "onFirstStrike");
      }
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

    // 소모품 사용이 행동을 쓰지 않는 횟수가 남았으면(준비성·응급 상자) 쓰고 다시 입력을 기다린다.
    if (action.type === "item" && this.player.freeItems > 0) {
      this.player.freeItems -= 1;
      this.useItem(action.itemId, { free: true });
      return this.takeEvents();
    }

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
      this.player.chantCount += 1;
      this.log("player", `${this.player.name} — 영창`, `다음 기본공격·스킬 효과 ×${this.chantMultiplierOf(this.player)}`);
      this.applyChantShield();
      runAbilities(this, "onChant");
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

      if (needsChantState(skill) && !this.player.chanted) {
        return { ok: false, reason: `${josa(skill.name, "은/는")} 영창한 상태에서만 쓸 수 있다.` };
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

  // 마법사: 영창된 상태면 영창 배율(기본 ×1.75 + 장비 + 마력 응축, 상한 ×2.5)을 돌려주고 영창을 푼다.
  consumeChant(user) {
    if (user.kind !== "player" || !user.chanted || !this.trait.chantMultiplier) {
      return [];
    }

    const value = this.chantMultiplierOf(user);
    user.chanted = false;
    user.chantBoost = 0;
    return [{ value, label: "영창" }];
  }

  chantMultiplierOf(user) {
    const raw = this.trait.chantMultiplier + user.profile.modifiers.chantBonus + user.chantBoost;
    return Math.round(Math.min(this.trait.chantMultiplierMax ?? raw, raw) * 100) / 100;
  }

  // 도적 기민함: 상대가 독·출혈·약화·취약 중 하나라도 걸려 있으면 ×1.2, 아니면 1(기절은 세지 않음)
  debuffedMultiplierAgainst(defender) {
    const { debuffedMultiplier, debuffedStatuses = [] } = this.trait;
    return debuffedMultiplier && debuffedStatuses.some((type) => hasStatus(defender, type)) ? debuffedMultiplier : 1;
  }

  // 전사 기세 최대치(기본 5 + 장비). 전사가 아니면 0(기세 없음)
  momentumMaxOf(side) {
    return side.kind === "player" && this.trait.momentumMax ? this.trait.momentumMax + side.profile.modifiers.momentumMax : 0;
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

    const regen = getStatus(side, "regen");

    if (!this.result && regen) {
      this.heal(side, regen.amount, "재생", { quiet: true });
    }

    if (!this.result && side.kind === "player") {
      runAbilities(this, "onTurnStart");
    }

    if (!this.result && stunned) {
      this.log("status", `${josa(side.name, "은/는")} 기절해 움직이지 못한다.`);

      if (side.chanted) {
        side.chanted = false;
        side.chantBoost = 0;
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
    // 확정 기습(정비 특별 선택지): 막기 판정 없이 성공한다(2026-10-16).
    const roll = this.surpriseCertain ? null : this.dice.rollD20();
    const total = roll === null ? null : roll + modifier;
    const defended = total !== null && total >= COMBAT.surpriseDefenseTarget;
    const modText = modifier ? ` ${modifier > 0 ? "+" : ""}${modifier} = ${total}` : "";

    this.log(
      "system",
      `${attacker.name}의 기습! ${defended ? `${josa(defender.name, "이/가")} 막아 냈다.` : `${josa(defender.name, "이/가")} 대비하지 못했다.`}`,
      roll === null ? "확정 기습" : `1d20: ${roll}${modText} / 기준 ${COMBAT.surpriseDefenseTarget} 이상`,
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
      + this.conditional(this.player, "basicAttackBonus");
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
    // 마력 응축(chantBoost)은 예외: 영창을 풀지 않고 이번 영창 배율을 높인다.
    const chantBoost = effectValue(effects, "chantBoost");
    const chant = chantBoost ? [] : this.consumeChant(user);

    if (isDamageSkill(skill)) {
      this.useAttackSkill(user, target, skill, effects, chant);
      return;
    }

    // 회복·방어·강화·약화: 주사위 없음. 효과량 = 기본값 + 능력치 × 계수 (적은 기본값)
    this.log(user.kind, `${user.name} — 「${skill.name}」${isFastSkill(skill) ? " (즉시 발동)" : ""}`);

    if (isPlayer) {
      this.applySkillCosts(user, skill, effects, chantBoost);
    }
    const amountBase = isPlayer ? supportAmount(skill.baseEffect, skill.scaling, user.profile.stats, user.mainStat) : skill.baseEffect;
    const amount = roundValue(chant.reduce((acc, item) => acc * item.value, amountBase));

    if (chant.length && amountBase > 0) {
      this.log("calc", "", `${fmt(amountBase)} × ${chant[0].value}(영창) = ${fmt(amount)}`);
    }

    const regenTurns = effectValue(effects, "regen");

    if (skill.type === "heal" && regenTurns) {
      // 지속 회복: 내 턴 시작마다 amount씩, regenTurns턴
      this.inflict(user, { type: "regen", amount, duration: regenTurns }, user);
    } else if (skill.type === "heal") {
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
    // 암살(executeCrit:N): 대상 HP가 N% 이하면 판정을 치명타로
    const execute = effectValue(effects, "executeCrit");
    const rollText = describeRoll(roll);

    if (isPlayer && execute && target.ref.hp <= target.ref.maxHp * execute / 100 && roll.tier.id !== "critical") {
      roll.tier = CRITICAL_TIER;
      roll.forced = true;
    }

    this.log(user.kind, `${user.name} — 「${skill.name}」`, `${rollText}${roll.forced ? " → 급소를 꿰뚫어 치명타" : ""}`);

    const weapon = isPlayer && user.ref.equipment.weapon ? catalog.equipment.get(user.ref.equipment.weapon) : null;
    const base = isPlayer ? attackSkillBase(skill, weapon, user.profile.stats, user.mainStat) : skill.baseEffect;
    // 터뜨리기(기세·보호막·출혈·잃은 HP·상태이상·영창·회복량): 빗나가면 쓰지 않는다.
    const burst = isPlayer && roll.tier.multiplier > 0 ? burstBonus({ effects, user, target }) : { amount: 0, notes: [] };
    this.dealSkillDamage(user, target, {
      base,
      tier: roll.tier,
      roll: roll.roll,
      skillMultipliers: chant,
      extra: burst.amount,
      extraNote: burst.notes.join(", "),
      extraLifesteal: effectValue(effects, "lifesteal"),
    });

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

  dealSkillDamage(user, target, { base, tier, roll, skillMultipliers, extra = 0, extraNote = "", extraLifesteal = 0 }) {
    const isPlayer = user.kind === "player";
    const multipliers = [...skillMultipliers];

    if (isPlayer && user.firstStrikePending) {
      multipliers.push({ value: this.trait.firstStrikeMultiplier, label: "선공" });
    }

    const flat = isPlayer ? user.profile.modifiers.skillDamageBonus + this.conditional(user, "skillDamageBonus") : 0;
    this.dealDamage(user, target, { base, flat, tier, multipliers, roll, momentum: isPlayer, extra, extraNote, extraLifesteal });
  }

  // 소모품 효과를 차례로 적용한다(붕대: 회복 → 출혈 해제).
  useItem(itemId, { free = false } = {}) {
    const item = catalog.consumables.get(itemId);
    const effects = consumableEffects(item);
    // 소모품 효과 증가(준비성·약초꾼의 주머니): 회복·피해량 +N%
    const boost = 1 + this.player.profile.modifiers.consumableBoost / 100;
    const amount = roundValue(item.amount * boost);

    this.player.ref.inventory.remove(itemId, 1);
    this.log("player", `${this.player.name} — ${item.name} 사용${free ? " (행동을 쓰지 않음)" : ""}`);

    for (const { key, args } of effects) {
      if (key === "heal") {
        this.heal(this.player, amount, item.name);
      } else if (key === "damage") {
        this.dealItemDamage(this.enemy, item, amount);
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
    const amount = supportAmount(shield.base, shield.scaling, stats, mainStat) + this.player.profile.modifiers.chantShieldBonus;

    if (amount > 0) {
      this.inflict(this.player, { type: "shield", amount, duration: shield.duration }, this.player);
    }
  }

  // ---------- 피해·회복·상태 ----------

  // roll: 굴린 주사위 값(보정 전). 결과 줄에 표시한다.
  // momentum: 전사 기세를 더하는 공격(플레이어의 기본공격·공격 스킬)
  // extra: 단계 배율 없이 더하는 터뜨리기 피해(extraNote: 계산 설명), extraLifesteal: 이 공격만의 흡혈(%)
  dealDamage(attacker, defender, { base, flat = 0, tier, multipliers = [], roll, momentum = false, extra = 0, extraNote = "", extraLifesteal = 0 }) {
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
    const burst = tier.multiplier > 0 ? extra : 0;
    // 도적 기민함: 약화된 상대에게 주는 공격 피해 배율(momentum은 플레이어의 기본공격·공격 스킬에만 켜진다)
    const agile = momentum && tier.multiplier > 0 ? this.debuffedMultiplierAgainst(defender) : 1;
    const raw = roundValue((computed + momentumBonus + burst) * agile);
    const reduction = this.reductionOf(defender);
    const afterReduction = applyReduction(raw, reduction, tier);
    // 보호막이 공격 피해를 먼저 막는다(독·출혈·반사는 막지 못한다).
    const hadShield = hasStatus(defender, "shield");
    // 조건부 반사(보호막이 있는 동안 등)는 맞기 직전 상태로 본다.
    const conditionalReflect = this.conditional(defender, "reflect");
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
    const extras = [
      momentumBonus ? `기세 +${fmt(momentumBonus)}` : "",
      burst ? `${extraNote} = +${fmt(burst)}` : "",
      agile !== 1 ? `기민함 ×${agile}` : "",
    ].filter(Boolean);
    this.log("damage", text, extras.length ? `${calc} (${extras.join(", ")} 포함)` : calc, fx);

    if (hadShield && !hasStatus(defender, "shield")) {
      this.onShieldBroken(defender);
    }

    // 공격으로 피해를 받으면 전사 기세가 쌓인다(독·출혈·반사는 이 경로를 지나지 않는다).
    if (final > 0 && defender.kind === "player") {
      this.gainMomentum(defender);
    }
    this.afterDamage(defender, before);

    if (final > 0 && !this.result) {
      this.afterHit(attacker, defender, { final, tier, extraLifesteal, conditionalReflect });
    }

    return final;
  }

  // 피해를 준 뒤의 능력: 공격자의 흡혈, 맞은 쪽의 반사(플레이어·적 공통),
  // 플레이어의 치명타 시·피격 시 발동 능력
  afterHit(attacker, defender, { final, tier, extraLifesteal = 0, conditionalReflect = 0 }) {
    const lifesteal = roundValue(final * capLifesteal(this.modsOf(attacker).lifesteal + extraLifesteal) / 100);

    if (lifesteal > 0) {
      this.heal(attacker, lifesteal, "흡혈", { quiet: true });
    }

    if (attacker.kind === "player" && tier.id === "critical" && !this.result) {
      runAbilities(this, "onCrit");
    }

    // 반사 = 장비·적 고정 수치 + 반사 상태(철벽) + 조건부 반사(보호막이 있는 동안 등)
    const reflect = this.modsOf(defender).reflect + (getStatus(defender, "reflect")?.amount ?? 0) + conditionalReflect;

    if (reflect > 0 && !this.result) {
      this.dealFixedDamage(attacker, reflect, "반사");
    }

    if (defender.kind === "player" && !this.result) {
      runAbilities(this, "onHurt");
    }
  }

  // 공격 소모품(마력 두루마리 등): 주사위·특성 배율 없이 정해진 피해, 적의 피해 감소는 적용한다.
  dealItemDamage(target, item, amount = item.amount) {
    const reduction = this.reductionOf(target);
    const afterReduction = Math.max(COMBAT.minDamage, roundValue(amount - reduction));
    const absorbed = absorbWithShield(target, afterReduction);
    const final = afterReduction - absorbed;
    const before = target.ref.hp;
    target.ref.hp = Math.max(0, roundValue(target.ref.hp - final));
    this.log(
      "damage",
      `→ ${target.name}에게 ${fmt(final)} 피해 (${[item.name, absorbed > 0 ? `보호막 ${fmt(absorbed)} 막음` : ""].filter(Boolean).join(" · ")})`,
      `${fmt(amount)} − 피해 감소 ${fmt(reduction)} → ${fmt(final)}`,
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
    this.addMomentum(side, 1);
  }

  // 기세를 n 쌓는다(투지의 포효·격전의 목걸이 등). 전사가 아니면 효과 없음. 최대치를 넘지 않는다.
  addMomentum(side, n, source = "") {
    const max = this.momentumMaxOf(side);

    if (!max || side.ref.hp <= 0 || side.momentum >= max || n <= 0) {
      return;
    }

    const gained = Math.min(n, max - side.momentum);
    side.momentum += gained;
    this.log("status", `→ ${source ? `${source}: ` : ""}기세 +${gained} (${side.momentum} / ${max})`, "", {
      target: side.kind,
      type: "status",
      label: `기세 ${side.momentum}`,
    });
  }

  // quiet: 장비 능력처럼 자동으로 일어나는 회복은 HP가 가득 차 있으면 출력하지 않는다.
  heal(side, amount, source, { quiet = false } = {}) {
    const isPlayer = side.kind === "player";
    const maxHp = isPlayer ? side.profile.maxHp : side.ref.maxHp;
    // 받는 회복 증가(재생의 로브): 흡혈 포함 모든 회복
    const boosted = isPlayer ? amount * (1 + side.profile.modifiers.healBonus / 100) : amount;
    const before = side.ref.hp;
    side.ref.hp = Math.min(maxHp, roundValue(side.ref.hp + boosted));
    const healed = roundValue(side.ref.hp - before);

    if (isPlayer && healed > 0) {
      side.healedTotal += healed;
    }

    if (quiet && healed <= 0) {
      return;
    }

    const text = healed > 0 ? `→ ${side.name} HP ${fmt(healed)} 회복 (${source})` : `→ ${side.name}의 HP가 이미 가득하다 (${source})`;
    this.log("heal", text, "", { target: side.kind, type: "heal", amount: healed });

    // 회복할 때 발동(회복의 고리). 흡혈은 공격마다 터지지 않게 뺀다.
    if (isPlayer && healed > 0 && source !== "흡혈" && !this.result) {
      runAbilities(this, "onHeal");
    }
  }

  // 스킬의 대가와 즉시 효과: HP 소모(광전사의 맹세), 기세(투지의 포효), 영창 배율(마력 응축)
  applySkillCosts(user, skill, effects, chantBoost) {
    const hpCost = effectValue(effects, "hpCost");

    if (hpCost) {
      const cost = Math.min(roundValue(user.profile.maxHp * hpCost / 100), user.ref.hp - 1);

      if (cost > 0) {
        user.ref.hp = roundValue(user.ref.hp - cost);
        this.log("status", `→ 대가: HP ${fmt(cost)} 소모`, "", { target: user.kind, type: "damage", tier: "low", amount: cost });
      }
    }

    const momentum = effectValue(effects, "momentum");

    if (momentum) {
      this.addMomentum(user, momentum, skill.name);
    }

    if (chantBoost && user.chanted) {
      user.chantBoost += chantBoost;
      this.log("status", `→ 영창 배율 ×${this.chantMultiplierOf(user)}`);
    }
  }

  // 내 보호막이 다 깨졌을 때(수호의 반지)
  onShieldBroken(side) {
    if (side.kind === "player" && !this.result) {
      runAbilities(this, "onShieldBreak");
    }
  }

  // 조건부 수치(HP 절반 이하·보호막이 있는 동안·기세 최대·대상 출혈·대상 약화/취약)
  conditional(side, key) {
    const target = side === this.player ? this.enemy : this.player;
    return conditionalBonus(side, key, { target, momentumMax: this.momentumMaxOf(side) });
  }

  inflict(target, baseSpec, source) {
    const spec = this.adjustSpec(target, { ...baseSpec }, source);
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

  // 플레이어가 거는 효과 보정: 약화·취약·독 지속시간 +N, 독 피해 +N, 내가 얻는 보호막 +N
  adjustSpec(target, spec, source) {
    if (source?.kind !== "player") {
      return spec;
    }

    const mods = source.profile.modifiers;

    if (target !== source && DEBUFF_DURATION_TYPES.has(spec.type) && mods.debuffDuration) {
      spec.duration += mods.debuffDuration;
    }

    if (target !== source && spec.type === "poison" && mods.poisonBonus) {
      spec.amount += mods.poisonBonus;
    }

    if (target === source && spec.type === "shield" && mods.shieldBonus) {
      spec.amount += mods.shieldBonus;
    }

    return spec;
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

  // 치명타 범위: 장비·패시브 + 치명타 범위 상태(급소 노리기 등), 합쳐서 상한 +3
  critMinOf(side) {
    if (side.kind !== "player") {
      return this.modsOf(side).critMin;
    }

    return critMinFrom(side.profile.modifiers.crit + (getStatus(side, "critBoost")?.amount ?? 0));
  }

  evadeOf(side) {
    return this.modsOf(side).evade;
  }

  reductionOf(side) {
    const base = side.kind === "player" ? side.profile.damageReduction + this.conditional(side, "damageReduction") : side.ref.damageReduction;
    return roundValue(base + getGuardAmount(side));
  }

  getActionOptions() {
    const skills = this.player.ref.skills.map((skillId, slot) => {
      const skill = skillId ? catalog.skills.get(skillId) : null;
      const remaining = skill ? this.player.cooldowns.get(skill.id) ?? 0 : 0;
      const needsChant = Boolean(this.trait.chantMultiplier) && !this.player.chanted && (isDamageSkill(skill) || needsChantState(skill));
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
      ? { chanted: this.player.chanted, multiplier: this.chantMultiplierOf(this.player) }
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
