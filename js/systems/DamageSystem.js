import { COMBAT, DICE, EFFECT_TIERS } from "../data/rules.js?v=20261016-205734";
import { clamp, formatNumber as fmt, roundValue } from "./NumberRules.js?v=20261016-205734";

const CRITICAL = EFFECT_TIERS.find((tier) => tier.id === "critical");
const NONE = EFFECT_TIERS.find((tier) => tier.id === "none");

// 5단계 판정: 굴린 값 + 보정(최대치 제한)을 1~20으로 자르고 단계를 정한다.
// critMin: 공격하는 쪽의 치명타 시작 값, missBonus: 맞는 쪽의 회피(빗나감 구간 확대)
export function rollTier(dice, { modifier = 0, critMin = CRITICAL.min, missBonus = 0 } = {}) {
  const roll = dice.rollD20();
  const appliedModifier = clamp(modifier, -DICE.maxModifier, DICE.maxModifier);
  const total = clamp(roll + appliedModifier, 1, DICE.sides);
  let tier = getTierByValue(total);

  if (total >= critMin) {
    tier = CRITICAL;
  } else if (total <= NONE.max + missBonus) {
    tier = NONE;
  }

  return { roll, modifier: appliedModifier, total, tier };
}

export function getTierByValue(value) {
  return EFFECT_TIERS.find((tier) => value >= tier.min && value <= tier.max);
}

// (기본값 + 고정 보너스) × 단계 배율 × 그 밖의 배율. 마지막에 한 번 반올림.
// base에는 능력치 × 계수가 이미 들어 있다(FormulaSystem). flat: 장비·패시브·강화 같은 고정 수치.
export function computeEffect({ base, flat = 0, tier, multipliers = [] }) {
  const product = multipliers.reduce((acc, item) => acc * item.value, 1);
  return roundValue((base + flat) * tier.multiplier * product);
}

// 피해 감소를 빼고 최소 피해를 적용한다. 효과 없음이면 0.
export function applyReduction(amount, reduction, tier) {
  if (tier.multiplier === 0) {
    return 0;
  }

  return Math.max(COMBAT.minDamage, roundValue(amount - reduction));
}

// 계산 과정을 사람이 읽을 수 있는 문장으로 만든다.
export function describeCalculation({ base, flat = 0, tier, multipliers = [], raw, reduction, final }) {
  let head = `${fmt(roundTo2(base))}`;

  if (flat) {
    head = `(${head} + ${fmt(flat)})`;
  }

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

function roundTo2(value) {
  return Math.round(value * 100) / 100;
}
