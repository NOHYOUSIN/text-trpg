import { COMBAT, DICE, EFFECT_TIERS } from "../data/rules.js";
import { clamp, formatNumber as fmt, round1 } from "./NumberRules.js";

const CRITICAL = EFFECT_TIERS.find((tier) => tier.id === "critical");

// 5단계 판정: 굴린 값 + 보정(최대치 제한)을 1~20으로 자르고 단계를 정한다.
export function rollTier(dice, { modifier = 0, critMin = CRITICAL.min } = {}) {
  const roll = dice.rollD20();
  const appliedModifier = clamp(modifier, -DICE.maxModifier, DICE.maxModifier);
  const total = clamp(roll + appliedModifier, 1, DICE.sides);
  const tier = total >= critMin ? CRITICAL : getTierByValue(total);
  return { roll, modifier: appliedModifier, total, tier };
}

export function getTierByValue(value) {
  return EFFECT_TIERS.find((tier) => value >= tier.min && value <= tier.max);
}

// (기본 + 능력치) × 단계 배율 × 그 밖의 배율. 마지막에 한 번 반올림.
export function computeEffect({ base, stat = 0, tier, multipliers = [] }) {
  const product = multipliers.reduce((acc, item) => acc * item.value, 1);
  return round1((base + stat) * tier.multiplier * product);
}

// 피해 감소를 빼고 최소 피해를 적용한다. 효과 없음이면 0.
export function applyReduction(amount, reduction, tier) {
  if (tier.multiplier === 0) {
    return 0;
  }

  return Math.max(COMBAT.minDamage, round1(amount - reduction));
}

// 계산 과정을 사람이 읽을 수 있는 문장으로 만든다.
export function describeCalculation({ base, stat = 0, tier, multipliers = [], raw, reduction, final }) {
  const head = stat ? `(${fmt(base)} + ${fmt(stat)})` : `${fmt(base)}`;
  const extras = multipliers.map((item) => ` × ${item.value}(${item.label})`).join("");
  let text = `${head} × ${tier.multiplier}(${tier.label})${extras} = ${fmt(raw)}`;

  if (reduction !== undefined && tier.multiplier !== 0) {
    text += ` − 피해 감소 ${fmt(reduction)} → ${fmt(final)}`;
  }

  return text;
}

export function describeRoll({ roll, modifier, total, tier }) {
  const mod = modifier ? ` ${modifier > 0 ? "+" : ""}${modifier} = ${total}` : "";
  return `1d20: ${roll}${mod} → ${tier.label}`;
}
