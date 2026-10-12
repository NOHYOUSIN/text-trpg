import { catalog } from "../data/catalog.js?v=20261013-042652";
import { CLASS_TRAITS } from "../data/rules.js?v=20261013-042652";
import { capEvade, capLifesteal, critMinFrom, parseAbility } from "./AbilitySystem.js?v=20261013-042652";
import { parseToken } from "./EffectParser.js?v=20261013-042652";
import { maxHpFrom, supportAmount } from "./FormulaSystem.js?v=20261013-042652";
import { roundValue } from "./NumberRules.js?v=20261013-042652";

export const STAT_KEYS = ["str", "agi", "wis"];

export function mainStatOf(adventurer) {
  return catalog.classes.get(adventurer.classId)?.mainStat ?? "str";
}

// 주 능력치 목록(지금은 직업마다 1개. 주 능력치가 2개인 직업을 위해 목록으로 다룬다)
export function mainStatsOf(adventurer) {
  const main = catalog.classes.get(adventurer.classId)?.mainStat ?? "str";
  return Array.isArray(main) ? main : [main];
}

// 장비 능력치 보너스 합계(부가 효과와 달리 누구나 받는다)
function equipmentStatBonus(adventurer) {
  const bonus = { str: 0, agi: 0, wis: 0 };

  for (const itemId of Object.values(adventurer.equipment)) {
    const item = itemId ? catalog.equipment.get(itemId) : null;

    for (const [stat, value] of Object.entries(item?.statBonus ?? {})) {
      bonus[stat] += value;
    }
  }

  return bonus;
}

// 장비 부가 효과가 켜지는지: 연결 능력치(그 장비 자신의 보너스는 빼고)가 요구치 이상 (2026-10-12 확정)
export function isEquipmentEffectActive(adventurer, item, bonus = equipmentStatBonus(adventurer)) {
  const req = item?.requirement;

  if (!req) {
    return true;
  }

  const total = adventurer.baseStats[req.stat] + bonus[req.stat] - (item.statBonus[req.stat] ?? 0);
  return total >= req.value;
}

// 장착 장비와 패시브 스킬의 효과를 모은다.
export function collectModifiers(adventurer) {
  const modifiers = {
    statBonus: equipmentStatBonus(adventurer),
    maxHp: 0,
    damageReduction: 0,
    // 기본값 + 능력치 × 계수로 정해지는 패시브 수치(능력치가 정해진 뒤 계산)
    scaledReduction: [],
    scaledBasicAttack: [],
    basicAttackBonus: 0,
    skillDamageBonus: 0,
    cooldownReduction: 0,
    immune: new Set(),
    exploreBonus: 0,
    // 합친 뒤 상한을 적용하는 값
    crit: 0,
    evade: 0,
    reflect: 0,
    lifesteal: 0,
    // "조건 > 효과" 능력 목록 (AbilitySystem)
    abilities: [],
    critMin: 0,
    // 요구 능력치가 모자라 부가 효과가 꺼진 장비 ID
    inactiveEquipment: [],
  };

  const sources = [];

  for (const itemId of Object.values(adventurer.equipment)) {
    const item = itemId ? catalog.equipment.get(itemId) : null;

    if (!item) {
      continue;
    }

    // 기본 수치(피해 감소·최대 HP·능력치 보너스)는 항상 적용
    modifiers.damageReduction += item.damageReduction;
    modifiers.maxHp += item.maxHp;

    if (isEquipmentEffectActive(adventurer, item, modifiers.statBonus)) {
      sources.push({ effects: item.effects, name: item.name, baseEffect: 0, scaling: [] });
    } else if (item.effects.length) {
      modifiers.inactiveEquipment.push(item.id);
    }
  }

  for (const skillId of adventurer.skills) {
    const skill = skillId ? catalog.skills.get(skillId) : null;

    if (skill?.type === "passive") {
      sources.push({ effects: skill.effects, name: skill.name, baseEffect: skill.baseEffect, scaling: skill.scaling });
    }
  }

  for (const source of sources) {
    for (const token of source.effects) {
      const ability = parseAbility(token, source.name);

      if (ability) {
        modifiers.abilities.push(ability);
      } else {
        applyEffect(modifiers, parseToken(token), source);
      }
    }
  }

  modifiers.critMin = critMinFrom(modifiers.crit);
  modifiers.evade = capEvade(modifiers.evade);
  modifiers.lifesteal = capLifesteal(modifiers.lifesteal);
  return modifiers;
}

function applyEffect(modifiers, { key, args }, source) {
  const value = Number(args[0]);

  if (STAT_KEYS.includes(key)) {
    modifiers.statBonus[key] += value;
    return;
  }

  switch (key) {
    case "maxHp":
      modifiers.maxHp += value;
      break;
    case "basicAttackBonus":
      // basicAttackBonus:base → 패시브 기본값 + 능력치 × 계수 (전투 감각: 1 + 힘 × 0.2)
      if (args[0] === "base") {
        modifiers.scaledBasicAttack.push(source);
      } else {
        modifiers.basicAttackBonus += value;
      }
      break;
    case "skillDamageBonus":
      modifiers.skillDamageBonus += value;
      break;
    case "cooldownReduction":
      modifiers.cooldownReduction += value;
      break;
    case "exploreBonus":
      modifiers.exploreBonus += value;
      break;
    case "crit":
    case "evade":
    case "reflect":
    case "lifesteal":
      modifiers[key] += value;
      break;
    case "immune":
      modifiers.immune.add(args[0]);
      break;
    case "damageReduction":
      // damageReduction:base → 패시브 기본값 + 능력치 × 계수 (강철 피부: 1 + 힘 × 0.1)
      modifiers.scaledReduction.push(source);
      break;
    default:
      break;
  }
}

export function getStats(adventurer, modifiers = collectModifiers(adventurer)) {
  const stats = {};

  for (const key of STAT_KEYS) {
    stats[key] = roundValue(adventurer.baseStats[key] + modifiers.statBonus[key]);
  }

  return stats;
}

// 최대 HP = 직업 기본 HP + 힘 × 2 + 민첩 + 지혜 + 장비 최대 HP (2026-10-13)
export function getMaxHp(adventurer, modifiers = collectModifiers(adventurer)) {
  return maxHpFrom(adventurer.baseMaxHp, getStats(adventurer, modifiers), modifiers.maxHp);
}

function sumScaled(sources, stats, mainStat) {
  return sources.reduce((sum, source) => sum + supportAmount(source.baseEffect, source.scaling, stats, mainStat), 0);
}

// 모험가의 현재 전투 수치를 한 번에 계산한다.
export function getProfile(adventurer) {
  const modifiers = collectModifiers(adventurer);
  const stats = getStats(adventurer, modifiers);
  const mainStat = mainStatOf(adventurer);
  modifiers.basicAttackBonus = roundValue(modifiers.basicAttackBonus + sumScaled(modifiers.scaledBasicAttack, stats, mainStat));

  return {
    modifiers,
    stats,
    mainStat,
    maxHp: maxHpFrom(adventurer.baseMaxHp, stats, modifiers.maxHp),
    damageReduction: roundValue(modifiers.damageReduction + sumScaled(modifiers.scaledReduction, stats, mainStat)),
  };
}

export function getClassTrait(classId) {
  return CLASS_TRAITS[classId] ?? {};
}
