import { ABILITY } from "../data/rules.js?v=20261016-055455";
import { parseToken, toStatusSpec } from "./EffectParser.js?v=20261016-055455";
import { clamp } from "./NumberRules.js?v=20261016-055455";

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
  // 2026-10-16 빌드 축 확장
  "whileShield", // 보호막이 있는 동안 (수치 보너스만)
  "fullMomentum", // 기세가 최대일 때 (수치 보너스만)
  "ifBleeding", // 대상이 출혈 상태면 (수치 보너스만)
  "ifDebuffed", // 대상이 약화·취약 상태면 (수치 보너스만)
  "onShieldBreak", // 내 보호막이 다 깨질 때
  "onFirstStrike", // 선공한 전투의 시작
  "onChant", // 영창할 때
  "onHeal", // 회복할 때(흡혈 제외)
]);

const SELF_STATUSES = new Set(["guard", "shield", "empower", "critBoost"]);
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

  // 쿨타임: 방금 쓴 스킬(onSkill), 그 밖의 조건이면 쿨타임이 가장 긴 스킬
  if (key === "cooldown") {
    const skillId = ctx.skillId ?? [...player.cooldowns.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    const current = skillId ? player.cooldowns.get(skillId) ?? 0 : 0;
    const next = Math.max(ctx.skillId ? 1 : 0, current + value);

    if (next < current) {
      player.cooldowns.set(skillId, next);
      combat.log("status", `→ ${source}: 쿨타임 ${current - next} 감소`);
    }

    return;
  }

  if (key === "momentum") {
    combat.addMomentum(player, value, source);
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
