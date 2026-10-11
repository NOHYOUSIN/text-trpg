import { catalog } from "../data/catalog.js?v=20261012-012115";
import { parseAbility } from "../systems/AbilitySystem.js?v=20261012-012115";
import { parseToken } from "../systems/EffectParser.js?v=20261012-012115";
import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261012-012115";

// 장비·스킬·소모품의 수치를 한 줄 설명으로 만든다. (선택 판단용)
const STAT_LABELS = { str: "힘", agi: "민첩", wis: "지혜", main: "주 능력치" };
const SLOT_LABELS = { weapon: "무기", armor: "방어구", ring: "반지", necklace: "목걸이" };
const SKILL_TYPE_LABELS = {
  attack: "공격",
  heal: "회복",
  defense: "방어",
  buff: "강화",
  debuff: "약화",
  passive: "패시브",
};

const TRIGGER_LABELS = {
  onHit: "기본공격 적중 시",
  onCrit: "치명타 시",
  onSkill: "스킬 사용 시",
  onHurt: "피격 시",
  onBattleStart: "전투 시작 시",
  onTurnStart: "내 턴 시작 시",
  onKill: "적 처치 시",
  lowHp: "HP 절반 이하일 때",
};

// "조건 > 효과" 능력 한 줄 설명
function describeAbility({ trigger, chance, effect }) {
  const { key, args } = effect;
  const [a, b] = args;
  const head = `${TRIGGER_LABELS[trigger] ?? trigger}${chance < 100 ? ` ${chance}% 확률로` : ""}`;
  const body = {
    poison: () => `독 ${fmt(Number(a))} (${b}턴)`,
    bleed: () => `출혈 ${fmt(Number(a))} 쌓기`,
    stun: () => "기절",
    weaken: () => `약화(주는 피해 ×${a}) ${b}턴`,
    vulnerable: () => `취약(받는 피해 ×${a}) ${b}턴`,
    guard: () => `방어 ${fmt(Number(a))} (${b}턴)`,
    empower: () => `강화 ${fmt(Number(a))} (${b}턴)`,
    heal: () => `HP ${fmt(Number(a))} 회복`,
    damage: () => `추가 피해 ${fmt(Number(a))}`,
    cooldown: () => `그 스킬 대기 ${a}`,
    basicAttackBonus: () => `기본공격 피해 +${fmt(Number(a))}`,
    skillDamageBonus: () => `스킬 피해 +${fmt(Number(a))}`,
  }[key];
  return `${head} ${body ? body() : key}`;
}

export function describeEffectToken(token) {
  const ability = parseAbility(token);

  if (ability) {
    return describeAbility(ability);
  }

  const { key, args } = parseToken(token);
  const [a, b] = args;

  if (STAT_LABELS[key]) {
    return `${STAT_LABELS[key]} +${fmt(Number(a))}`;
  }

  switch (key) {
    case "poison":
      return `독 ${fmt(Number(a))} × ${b}턴`;
    case "stun":
      return `기절 ${a}턴`;
    case "weaken":
      return `약화(주는 피해 ×${a}) ${b}턴`;
    case "vulnerable":
      return `취약(받는 피해 ×${a}) ${b}턴`;
    case "guard":
      return `효과량만큼 받는 피해 감소 ${a}턴`;
    case "strike":
      return `피해 ${a} + 연결 능력치`;
    case "empower":
      return `효과량만큼 주는 피해 증가 ${a}턴`;
    case "cleanse":
      return "상태이상 해제";
    case "basicAttackBonus":
      return `기본공격 피해 +${fmt(Number(a))}`;
    case "skillDamageBonus":
      return `스킬 피해 +${fmt(Number(a))}`;
    case "damageReduction":
      return `연결 능력치 × ${b} 피해 감소`;
    case "cooldownReduction":
      return `모든 스킬 대기 -${a}`;
    case "immune":
      return a === "poison" ? "독 면역" : `${a} 면역`;
    case "maxHp":
      return `최대 HP +${fmt(Number(a))}`;
    case "exploreBonus":
      return `탐험 판정 +${a}`;
    case "crit":
      return `치명타 범위 +${a}`;
    case "evade":
      return `회피 +${a}`;
    case "reflect":
      return `피격 시 반사 ${fmt(Number(a))}`;
    case "lifesteal":
      return `준 피해의 ${a}% 회복`;
    case "bleed":
      return `출혈 ${fmt(Number(a))} 쌓기`;
    default:
      return token;
  }
}

export function describeEquipment(item) {
  const parts = [SLOT_LABELS[item.slot]];

  if (item.slot === "weapon") {
    parts.push(`피해 ${fmt(item.damage)} + ${STAT_LABELS[item.stat]}`);
  }

  if (item.damageReduction) {
    parts.push(`피해 감소 ${fmt(item.damageReduction)}`);
  }

  if (item.maxHp) {
    parts.push(`최대 HP +${fmt(item.maxHp)}`);
  }

  for (const [stat, value] of Object.entries(item.statBonus)) {
    parts.push(`${STAT_LABELS[stat]} +${fmt(value)}`);
  }

  parts.push(...item.effects.map(describeEffectToken));
  return parts.join(" · ");
}

export function describeSkill(skill) {
  const owner = skill.class ? `${catalog.classes.get(skill.class)?.name ?? skill.class} 전용` : "공용";
  const parts = [owner, SKILL_TYPE_LABELS[skill.type], `${STAT_LABELS[skill.stat]} 연결`];

  if (skill.type !== "passive") {
    if (skill.baseEffect > 0) {
      parts.push(`효과량 ${fmt(skill.baseEffect)} + ${STAT_LABELS[skill.stat]}`);
    }

    parts.push(`대기 ${skill.cooldown}`);
  }

  parts.push(...skill.effects.map(describeEffectToken));
  return parts.join(" · ");
}

export function describeConsumable(item) {
  const { key, args } = parseToken(item.effect);
  let effect = item.description;

  if (key === "heal") {
    effect = `HP ${fmt(item.amount)} 회복`;
  } else if (key === "cure") {
    effect = `${args[0] === "poison" ? "독" : args[0]} 해제 (전투 중)`;
  } else if (key === "buff") {
    effect = `이번 전투 동안 ${describeEffectToken(`${args[0]}:${args[1]}`)} (전투 중)`;
  }

  return `소모품 · ${effect} · 한 칸에 ${item.maxStack}개`;
}

// kind: "skill" | "item"
export function describeStats(kind, id) {
  if (kind === "skill") {
    const skill = catalog.skills.get(id);
    return skill ? describeSkill(skill) : "";
  }

  const equipment = catalog.equipment.get(id);

  if (equipment) {
    return describeEquipment(equipment);
  }

  const consumable = catalog.consumables.get(id);
  return consumable ? describeConsumable(consumable) : "";
}

// 수치 줄과 설명 문구를 함께
export function describeFull(kind, id) {
  const entry = kind === "skill" ? catalog.skills.get(id) : catalog.equipment.get(id) ?? catalog.consumables.get(id);
  return [describeStats(kind, id), entry?.description].filter(Boolean).join("\n");
}

export { SKILL_TYPE_LABELS, STAT_LABELS };
