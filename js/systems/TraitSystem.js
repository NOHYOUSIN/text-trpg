import { catalog } from "../data/catalog.js?v=20261010-022808";
import { CLASS_TRAITS, EFFECT_TIERS } from "../data/rules.js?v=20261010-022808";
import { parseEffects } from "./EffectParser.js?v=20261010-022808";
import { roundValue } from "./NumberRules.js?v=20261010-022808";

const STAT_KEYS = ["str", "agi", "wis"];
const DEFAULT_CRIT_MIN = EFFECT_TIERS.find((tier) => tier.id === "critical").min;

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
    onHitPoison: [],
    immune: new Set(),
    exploreBonus: 0,
    combatStartHeal: 0,
    critMin: DEFAULT_CRIT_MIN,
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
    sources.push({ effects: item.effects, stat: item.stat });
  }

  for (const skillId of adventurer.skills) {
    const skill = skillId ? catalog.skills.get(skillId) : null;

    if (skill?.type === "passive") {
      sources.push({ effects: skill.effects, stat: skill.stat });
    }
  }

  for (const source of sources) {
    for (const effect of parseEffects(source.effects)) {
      applyEffect(modifiers, effect, source.stat);
    }
  }

  return modifiers;
}

function applyEffect(modifiers, { key, args }, sourceStat) {
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
    case "combatStartHeal":
      modifiers.combatStartHeal += value;
      break;
    case "critRange":
      modifiers.critMin = Math.min(modifiers.critMin, value);
      break;
    case "immune":
      modifiers.immune.add(args[0]);
      break;
    case "damageReduction":
      // damageReduction:stat:0.4 → 연결 능력치 × 0.4
      modifiers.reductionByStat.push({ stat: sourceStat, ratio: Number(args[1]) });
      break;
    case "onHitPoison":
      modifiers.onHitPoison.push({
        chance: Number(args[0]),
        amount: Number(args[1]),
        duration: Number(args[2]),
      });
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
    (sum, entry) => sum + stats[entry.stat] * entry.ratio,
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
