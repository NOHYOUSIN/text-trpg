import { catalog } from "../data/catalog.js";
import { COMBAT, DICE } from "../data/rules.js";
import { Enemy } from "../models/Enemy.js";
import { applyReduction, computeEffect, describeCalculation, describeRoll, rollTier } from "./DamageSystem.js";
import { parseEffects, parseToken, STATUS_LABELS, toStatusSpec } from "./EffectParser.js";
import { josa } from "./Josa.js";
import { clamp, formatNumber as fmt, round1 } from "./NumberRules.js";
import {
  applyStatus,
  beginAction,
  clearStatuses,
  endAction,
  getDealtMultiplier,
  getGuardAmount,
  getTakenMultiplier,
  removeStatus,
} from "./StatusSystem.js";
import { getClassTrait, getProfile } from "./TraitSystem.js";

const SELF_EFFECTS = new Set(["guard", "cleanse"]);
const TIER_TAGS = { none: "", low: " (약하게)", normal: "", high: " (강하게)", critical: " (치명타!)" };

function tierTag(tier) {
  return TIER_TAGS[tier.id] ?? "";
}
const NEGATIVE_STATUSES = ["poison", "stun", "weaken", "vulnerable"];

// 1:1 전투 한 번. 플레이어 입력이 필요할 때까지 자동으로 진행한다.
// 사용: const combat = new Combat({ adventurer, enemyData, dungeon, dice, surprise });
//       combat.begin(); combat.act({ type: "attack" }); combat.takeEvents();
export class Combat {
  constructor({ adventurer, enemyData, dungeon, dice, surprise = null }) {
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

    const profile = getProfile(adventurer);
    this.trait = getClassTrait(adventurer.classId);
    this.player = {
      kind: "player",
      name: adventurer.name,
      ref: adventurer,
      profile,
      statuses: [],
      stunImmunity: 0,
      immune: profile.modifiers.immune,
      cooldowns: new Map(),
      usedSkill: null,
      buffs: { basicAttackBonus: 0 },
      traitUsed: false,
      firstStrikePending: false,
      actions: 0,
    };

    const enemy = new Enemy(enemyData);
    this.enemy = {
      kind: "enemy",
      name: enemy.name,
      ref: enemy,
      statuses: [],
      stunImmunity: 0,
      immune: new Set(),
      cooldowns: new Map(),
      usedSkill: null,
      actions: 0,
    };
  }

  // ---------- 진행 ----------

  begin() {
    this.log("system", `${this.enemy.ref.description}`);
    this.applyCombatStartHeal();
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

  // action: { type: "attack" } | { type: "skill", slot } | { type: "item", itemId }
  act(action) {
    if (!this.awaitingInput || this.result) {
      return [];
    }

    const check = this.canAct(action);

    if (!check.ok) {
      this.log("system", check.reason);
      return this.takeEvents();
    }

    this.awaitingInput = false;
    this.player.actions += 1;

    if (action.type === "attack") {
      this.playerBasicAttack();
    } else if (action.type === "skill") {
      this.useSkill(this.player, this.enemy, catalog.skills.get(this.player.ref.skills[action.slot]));
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
    if (action.type === "attack") {
      return { ok: true };
    }

    if (action.type === "skill") {
      const skill = catalog.skills.get(this.player.ref.skills[action.slot]);

      if (!skill || skill.type === "passive") {
        return { ok: false, reason: "사용할 수 있는 스킬이 아니다." };
      }

      if ((this.player.cooldowns.get(skill.id) ?? 0) > 0) {
        return { ok: false, reason: `${josa(skill.name, "은/는")} 아직 대기 중이다.` };
      }

      return { ok: true };
    }

    if (action.type === "item") {
      const item = catalog.consumables.get(action.itemId);

      if (!item || this.player.ref.inventory.count(action.itemId) <= 0) {
        return { ok: false, reason: "사용할 수 있는 아이템이 없다." };
      }

      return { ok: true };
    }

    return { ok: false, reason: "알 수 없는 행동" };
  }

  startTurn(side) {
    const { poisonDamage, stunned } = beginAction(side);

    if (poisonDamage > 0) {
      const before = side.ref.hp;
      side.ref.hp = Math.max(0, round1(side.ref.hp - poisonDamage));
      this.log("status", `독이 퍼진다. ${josa(side.name, "이/가")} ${fmt(poisonDamage)} 피해를 입었다.`);
      this.afterDamage(side, before);
    }

    if (!this.result && stunned) {
      this.log("status", `${josa(side.name, "은/는")} 기절해 움직이지 못한다.`);
    }

    return { stunned };
  }

  finishTurn(side) {
    for (const [skillId, remaining] of side.cooldowns) {
      if (skillId !== side.usedSkill && remaining > 0) {
        side.cooldowns.set(skillId, remaining - 1);
      }
    }

    side.usedSkill = null;
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
    const enemy = this.enemy.ref;
    const ready = enemy.skills.filter((id) => (this.enemy.cooldowns.get(id) ?? 0) === 0);

    if (enemy.pattern.startsWith("hpBelowHalf:")) {
      const priority = enemy.pattern.split(":")[1];

      if (enemy.hp <= enemy.maxHp / 2 && ready.includes(priority)) {
        return this.dungeon.enemySkillsById.get(priority);
      }
    }

    return ready.length ? this.dungeon.enemySkillsById.get(ready[0]) : null;
  }

  // ---------- 기습·전투 시작 ----------

  applyCombatStartHeal() {
    const amount = this.player.profile.modifiers.combatStartHeal;

    if (amount > 0) {
      this.heal(this.player, amount, "전투 시작 회복");
    }
  }

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
    const bonus = profile.modifiers.basicAttackBonus + this.player.buffs.basicAttackBonus;
    const base = round1((weapon ? weapon.damage : COMBAT.unarmedDamage) + bonus);
    const stat = weapon ? profile.stats[weapon.stat] : 0;
    const multipliers = [];

    if (!isSurprise && this.player.firstStrikePending) {
      multipliers.push({ value: this.trait.firstStrikeMultiplier, label: "선공" });
    }

    const hit = this.basicAttack(this.player, this.enemy, {
      base,
      stat,
      multipliers,
      label: isSurprise ? "기습 공격" : weapon ? `${josa(weapon.name, "으로/로")} 공격` : "맨손 공격",
    });

    if (hit.tier.multiplier > 0 && !this.result) {
      for (const poison of profile.modifiers.onHitPoison) {
        if (this.dice.chance(poison.chance)) {
          this.inflict(this.enemy, {
            type: "poison",
            amount: round1(poison.amount * hit.tier.multiplier),
            duration: poison.duration,
          }, this.player);
        }
      }
    }
  }

  basicAttack(attacker, defender, { base, stat = 0, multipliers = [], label }) {
    const roll = rollTier(this.dice, { critMin: this.critMinOf(attacker) });
    this.log(attacker.kind, `${attacker.name} — ${label}`, describeRoll(roll));
    const damage = this.dealDamage(attacker, defender, { base, stat, tier: roll.tier, multipliers });
    return { tier: roll.tier, damage };
  }

  useSkill(user, target, skill) {
    const isPlayer = user.kind === "player";
    const stat = isPlayer ? user.profile.stats[skill.stat] : 0;
    const roll = rollTier(this.dice, { critMin: this.critMinOf(user) });
    const cooldown = Math.max(1, skill.cooldown - (isPlayer ? user.profile.modifiers.cooldownReduction : 0));

    user.cooldowns.set(skill.id, cooldown);
    user.usedSkill = skill.id;
    this.log(user.kind, `${user.name} — 「${skill.name}」`, describeRoll(roll));

    const tier = roll.tier;
    const skillMultipliers = [];

    if (isPlayer && this.trait.skillDamageMultiplier) {
      skillMultipliers.push({ value: this.trait.skillDamageMultiplier, label: "집중" });
    }

    if (skill.type === "attack" || (skill.type === "debuff" && skill.baseEffect > 0)) {
      const multipliers = [...skillMultipliers];

      if (isPlayer && user.firstStrikePending) {
        multipliers.push({ value: this.trait.firstStrikeMultiplier, label: "선공" });
      }

      const base = round1(skill.baseEffect + (isPlayer ? user.profile.modifiers.skillDamageBonus : 0));
      this.dealDamage(user, target, { base, stat, tier, multipliers });
    } else if (skill.type === "heal") {
      const amount = computeEffect({ base: skill.baseEffect, stat, tier });
      this.log("calc", "", describeCalculation({ base: skill.baseEffect, stat, tier, raw: amount }));
      this.heal(user, amount, skill.name);
    } else if (skill.type === "defense") {
      const amount = computeEffect({ base: skill.baseEffect, stat, tier });
      this.log("calc", "", describeCalculation({ base: skill.baseEffect, stat, tier, raw: amount }));

      if (amount > 0) {
        const guard = parseEffects(skill.effects).find((effect) => effect.key === "guard");
        this.inflict(user, { type: "guard", amount, duration: guard ? Number(guard.args[0]) : 1 }, user);
      }
    }

    if (tier.multiplier === 0) {
      if (skill.type !== "attack") {
        this.log("result", "→ 효과가 없었다.");
      }
      return;
    }

    if (this.result) {
      return;
    }

    for (const effect of parseEffects(skill.effects)) {
      if (effect.key === "guard") {
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

      if (spec.type === "poison") {
        const product = skillMultipliers.reduce((acc, item) => acc * item.value, 1);
        spec.amount = round1(spec.amount * tier.multiplier * product);
      }

      this.inflict(SELF_EFFECTS.has(effect.key) ? user : target, spec, user);
    }
  }

  useItem(itemId) {
    const item = catalog.consumables.get(itemId);
    const { key, args } = parseToken(item.effect);

    this.player.ref.inventory.remove(itemId, 1);
    this.log("player", `${this.player.name} — ${item.name} 사용`);

    if (key === "heal") {
      this.heal(this.player, item.amount, item.name);
    } else if (key === "cure") {
      removeStatus(this.player, args[0]);
      this.log("status", `${josa(STATUS_LABELS[args[0]] ?? args[0], "이/가")} 사라졌다.`);
    } else if (key === "buff") {
      this.player.buffs[args[0]] = (this.player.buffs[args[0]] ?? 0) + Number(args[1]);
      this.log("status", `이번 전투 동안 ${item.description}`);
    }
  }

  // ---------- 피해·회복·상태 ----------

  dealDamage(attacker, defender, { base, stat = 0, tier, multipliers = [] }) {
    const all = [...multipliers];
    const dealt = getDealtMultiplier(attacker);
    const taken = getTakenMultiplier(defender);

    if (dealt !== 1) {
      all.push({ value: dealt, label: "약화" });
    }

    if (taken !== 1) {
      all.push({ value: taken, label: "취약" });
    }

    const raw = computeEffect({ base, stat, tier, multipliers: all });
    const reduction = this.reductionOf(defender);
    const final = applyReduction(raw, reduction, tier);
    const before = defender.ref.hp;

    defender.ref.hp = Math.max(0, round1(defender.ref.hp - final));
    this.log(
      "damage",
      final > 0 ? `→ ${defender.name}에게 ${fmt(final)} 피해${tierTag(tier)}` : "→ 빗나갔다!",
      describeCalculation({ base, stat, tier, multipliers: all, raw, reduction, final }),
    );
    this.afterDamage(defender, before);
    return final;
  }

  afterDamage(side, hpBefore) {
    if (side.kind === "player") {
      this.checkWarriorTrait(hpBefore);
    }

    if (this.player.ref.hp <= 0) {
      this.finish("defeat");
    } else if (this.enemy.ref.hp <= 0) {
      this.finish("victory");
    }
  }

  checkWarriorTrait(hpBefore) {
    const trait = this.trait;
    const player = this.player;

    if (!trait.healRatio || player.traitUsed || player.ref.hp <= 0) {
      return;
    }

    const threshold = player.profile.maxHp * trait.triggerRatio;

    if (hpBefore > threshold && player.ref.hp <= threshold) {
      player.traitUsed = true;
      this.heal(player, round1(player.profile.maxHp * trait.healRatio), "투지");
    }
  }

  heal(side, amount, source) {
    const maxHp = side.kind === "player" ? side.profile.maxHp : side.ref.maxHp;
    const before = side.ref.hp;
    side.ref.hp = Math.min(maxHp, round1(side.ref.hp + amount));
    this.log("heal", `→ ${side.name} HP ${fmt(round1(side.ref.hp - before))} 회복 (${source})`);
  }

  inflict(target, spec, source) {
    const outcome = applyStatus(target, spec, { appliedBySelf: target === source });
    const label = STATUS_LABELS[spec.type] ?? spec.type;

    if (!outcome.applied) {
      this.log("status", `→ ${target.name}에게 ${josa(label, "이/가")} 통하지 않았다.`);
      return;
    }

    const value = spec.amount ? ` ${fmt(spec.amount)}` : spec.multiplier ? ` ×${spec.multiplier}` : "";
    this.log("status", `→ ${target.name}: ${label}${value} ${spec.duration}턴${outcome.refreshed ? " (갱신)" : ""}`);
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

  critMinOf(side) {
    return side.kind === "player" ? side.profile.modifiers.critMin : undefined;
  }

  reductionOf(side) {
    const base = side.kind === "player" ? side.profile.damageReduction : side.ref.damageReduction;
    return round1(base + getGuardAmount(side));
  }

  getActionOptions() {
    const skills = this.player.ref.skills.map((skillId, slot) => {
      const skill = skillId ? catalog.skills.get(skillId) : null;
      const remaining = skill ? this.player.cooldowns.get(skill.id) ?? 0 : 0;
      return {
        slot,
        skill,
        remaining,
        usable: Boolean(skill) && skill.type !== "passive" && remaining === 0,
      };
    });

    const seen = new Set();
    const items = [];

    for (const slot of this.player.ref.inventory.slots) {
      const item = catalog.consumables.get(slot.id);

      if (item && !seen.has(item.id)) {
        seen.add(item.id);
        items.push({ item, count: this.player.ref.inventory.count(item.id) });
      }
    }

    return { skills, items };
  }

  // 출력 줄: 그 시점의 HP와 행동 중인 쪽을 함께 기록해 화면이 순서대로 재생할 수 있게 한다.
  log(kind, text, detail = "") {
    this.events.push({
      kind,
      text,
      detail,
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
