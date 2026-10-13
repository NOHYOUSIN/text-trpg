import { ABILITY } from "../data/rules.js?v=20261014-041746";
import { parseToken, toStatusSpec } from "./EffectParser.js?v=20261014-041746";
import { clamp } from "./NumberRules.js?v=20261014-041746";

// 장비·패시브 스킬의 "조건 > 효과" 능력.
// 표기: "onHit>bleed:1", "onSkill@30>cooldown:-1" (@ 뒤는 발동 확률 %)
export const TRIGGERS = Object.freeze([
  "onHit", // 기본공격 적중 시
  "onCrit", // 치명타 시 (기본공격·스킬)
  "onSkill", // 액티브 스킬 사용 시
  "onHurt", // 피격 시 (공격으로 피해를 받았을 때)
  "onBattleStart", // 전투 시작 시
  "onTurnStart", // 내 턴 시작 시
  "onKill", // 적 처치 시
  "lowHp", // HP가 절반 이하인 동안 (수치 보너스만)
]);

const SELF_STATUSES = new Set(["guard", "shield", "empower"]);
const BASE_CRIT_MIN = 19;

// 조건이 붙은 표기면 { trigger, chance, effect, source }, 아니면 null.
export function parseAbility(token, source = "") {
  const at = token.indexOf(">");

  if (at < 0) {
    return null;
  }

  const [trigger, chance] = token.slice(0, at).split("@");
  return {
    trigger,
    chance: chance === undefined ? 100 : Math.min(Number(chance), ABILITY.maxChance),
    effect: parseToken(token.slice(at + 1)),
    source,
  };
}

// 합친 값에 상한을 적용한 최종 수치
export function critMinFrom(crit) {
  return BASE_CRIT_MIN - clamp(crit, 0, ABILITY.maxCrit);
}

export function capEvade(evade) {
  return clamp(evade, 0, ABILITY.maxEvade);
}

export function capLifesteal(percent) {
  return clamp(percent, 0, ABILITY.maxLifesteal);
}

// HP가 절반 이하일 때만 켜지는 수치 보너스(lowHp>basicAttackBonus:3 등)의 합
export function lowHpBonus(side, key) {
  const maxHp = side.profile.maxHp;

  if (side.ref.hp > maxHp * ABILITY.lowHpRatio) {
    return 0;
  }

  return side.profile.modifiers.abilities
    .filter((ability) => ability.trigger === "lowHp" && ability.effect.key === key)
    .reduce((sum, ability) => sum + Number(ability.effect.args[0]), 0);
}

// 조건에 맞는 플레이어 능력을 발동한다. ctx.skillId: onSkill에서 방금 쓴 스킬
export function runAbilities(combat, trigger, ctx = {}) {
  const player = combat.player;

  for (const ability of player.profile.modifiers.abilities) {
    if (combat.result) {
      return;
    }

    if (ability.trigger !== trigger) {
      continue;
    }

    if (ability.chance < 100 && !combat.dice.chance(ability.chance)) {
      continue;
    }

    applyAbilityEffect(combat, ability, ctx);
  }
}

function applyAbilityEffect(combat, { effect, source }, ctx) {
  const { key, args } = effect;
  const player = combat.player;
  const enemy = combat.enemy;
  const value = Number(args[0]);

  if (key === "heal") {
    combat.heal(player, value, source, { quiet: true });
    return;
  }

  if (key === "damage") {
    combat.dealFixedDamage(enemy, value, source);
    return;
  }

  if (key === "cooldown" && ctx.skillId) {
    const current = player.cooldowns.get(ctx.skillId) ?? 0;
    const next = Math.max(1, current + value);

    if (next < current) {
      player.cooldowns.set(ctx.skillId, next);
      combat.log("status", `→ ${source}: 쿨타임 ${current - next} 감소`);
    }

    return;
  }

  if (SELF_STATUSES.has(key)) {
    combat.inflict(player, { type: key, amount: value, duration: Number(args[1]) }, player);
    return;
  }

  const spec = toStatusSpec(effect);

  if (spec) {
    combat.inflict(enemy, spec, player);
  }
}
