import { BASIC_ATTACK, COMBAT, MAX_HP_PER_STAT } from "../data/rules.js?v=20261016-205734";
import { roundValue } from "./NumberRules.js?v=20261016-205734";

// 전투 공식 3차 개편 (2026-10-13): 고정 기본값 + 능력치 × 계수.
// scaling: [{ stat: "str" | "agi" | "wis" | "main", coef }] — main은 그 직업의 주 능력치

export function statValue(stats, key, mainStat) {
  return stats[key === "main" ? mainStat : key] ?? 0;
}

// 능력치 × 계수의 합(반올림 전)
export function scalingSum(scaling = [], stats, mainStat) {
  return scaling.reduce((sum, { stat, coef }) => sum + statValue(stats, stat, mainStat) * coef, 0);
}

// 기본공격 기본값 = 무기 피해 × 2/3 + 무기 연결 능력치 × 1.0 (반올림). 맨손은 3, 능력치 없음.
export function basicAttackBase(weapon, stats) {
  if (!weapon) {
    return COMBAT.unarmedDamage;
  }

  return roundValue(weapon.damage * BASIC_ATTACK.weaponRatio + stats[weapon.stat] * BASIC_ATTACK.statRatio);
}

// 공격 스킬 기본값 = 무기 피해(맨손 3) + 능력치 × 계수 (반올림은 단계 배율 뒤에 한 번)
export function attackSkillBase(skill, weapon, stats, mainStat) {
  const weaponDamage = weapon ? weapon.damage : COMBAT.unarmedDamage;
  return weaponDamage + scalingSum(skill.scaling, stats, mainStat);
}

// 회복·보호막·강화·패시브 = 기본값 + 능력치 × 계수 (주사위 없음, 반올림)
export function supportAmount(base, scaling, stats, mainStat) {
  return roundValue(base + scalingSum(scaling, stats, mainStat));
}

// 최대 HP = 직업 기본 HP + 힘 × 2 + 민첩 + 지혜 + 장비 최대 HP
export function maxHpFrom(baseHp, stats, equipmentHp = 0) {
  const fromStats = Object.entries(MAX_HP_PER_STAT).reduce((sum, [key, per]) => sum + (stats[key] ?? 0) * per, 0);
  return roundValue(baseHp + fromStats + equipmentHp);
}
