import { catalog } from "../data/catalog.js?v=20261012-031843";
import { CLASS_TRAITS } from "../data/rules.js?v=20261012-031843";
import { capEvade, capLifesteal, critMinFrom, parseAbility } from "./AbilitySystem.js?v=20261012-031843";
import { statMultiplier } from "./DamageSystem.js?v=20261012-031843";
import { parseToken } from "./EffectParser.js?v=20261012-031843";
import { roundValue } from "./NumberRules.js?v=20261012-031843";

const STAT_KEYS = ["str", "agi", "wis"];

// 장착 장비와 패시브 스킬의 효과를 모은다.
export function collectModifiers(adventurer) {
  const modifiers = {
    statBonus: { str: 0, agi: 0, wis: 0 },
    maxHp: 0,
    damageReduction: 0,
    reductionByStat: [],
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
  };

  const sources = [];

  for (const itemId of Object.values(adventurer.equipment)) {
    const item = itemId ? catalog.equipment.get(itemId) : null;

    if (!item) {
      continue;
    }

    for (const [stat, value] of Object.entries(item.statBonus)) {
      modifiers.statBonus[stat] += value;
    }

    modifiers.damageReduction += item.damageReduction;
    modifiers.maxHp += item.maxHp;
    sources.push({ effects: item.effects, stat: item.stat, name: item.name });
  }

  for (const skillId of adventurer.skills) {
    const skill = skillId ? catalog.skills.get(skillId) : null;

    if (skill?.type === "passive") {
      sources.push({ effects: skill.effects, stat: skill.stat, name: skill.name, baseEffect: skill.baseEffect });
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
      modifiers.basicAttackBonus += value;
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
      // damageReduction:base → 패시브의 기본 효과량 × 연결 능력치 배율 (강철 피부: 3 × 힘 배율)
      modifiers.reductionByStat.push({ stat: source.stat, base: source.baseEffect });
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

export function getMaxHp(adventurer, modifiers = collectModifiers(adventurer)) {
  return roundValue(adventurer.baseMaxHp + modifiers.maxHp);
}

export function getDamageReduction(adventurer, modifiers, stats) {
  const fromStats = modifiers.reductionByStat.reduce(
    (sum, entry) => sum + roundValue(entry.base * statMultiplier(stats[entry.stat])),
    0,
  );
  return roundValue(modifiers.damageReduction + fromStats);
}

// 모험가의 현재 전투 수치를 한 번에 계산한다.
export function getProfile(adventurer) {
  const modifiers = collectModifiers(adventurer);
  const stats = getStats(adventurer, modifiers);
  return {
    modifiers,
    stats,
    maxHp: getMaxHp(adventurer, modifiers),
    damageReduction: getDamageReduction(adventurer, modifiers, stats),
  };
}

export function getClassTrait(classId) {
  return CLASS_TRAITS[classId] ?? {};
}
