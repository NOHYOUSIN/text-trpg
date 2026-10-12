import { catalog } from "../data/catalog.js?v=20261013-032945";
import { parseAbility } from "../systems/AbilitySystem.js?v=20261013-032945";
import { parseToken } from "../systems/EffectParser.js?v=20261013-032945";
import { attackSkillBase, basicAttackBase, supportAmount } from "../systems/FormulaSystem.js?v=20261013-032945";
import { formatNumber as fmt, roundValue } from "../systems/NumberRules.js?v=20261013-032945";
import { getProfile, isEquipmentEffectActive } from "../systems/TraitSystem.js?v=20261013-032945";

// 장비·스킬·소모품 설명(선택 판단용). 2026-10-13 전투 공식 3차 개편에 맞춘 표기:
// 1줄 = 종류, 2줄 = 결과 수치(계산식은 괄호), 3줄 = 부가 효과.
// 모험가를 넘기면 지금 능력치로 계산한 값을, 없으면(직업 선택 등) 공식을 보여 준다.
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
    bleed: () => `출혈 +${fmt(Number(a))}`,
    stun: () => "기절",
    weaken: () => `약화(주는 피해 ×${a}) ${b}턴`,
    vulnerable: () => `취약(받는 피해 ×${a}) ${b}턴`,
    guard: () => `방어 ${fmt(Number(a))} (${b}턴)`,
    shield: () => `보호막 ${fmt(Number(a))} (${b}턴)`,
    empower: () => `강화 ${fmt(Number(a))} (${b}턴)`,
    heal: () => `HP ${fmt(Number(a))} 회복`,
    damage: () => `추가 피해 ${fmt(Number(a))}`,
    cooldown: () => `그 스킬 쿨타임 ${a}`,
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
      return `피해 ${a}`;
    case "shield":
      return `보호막 ${a}턴`;
    case "fast":
      return "즉시 발동(행동을 쓰지 않음)";
    case "empower":
      return `${a}턴 동안`;
    case "cleanse":
      return "상태이상 해제";
    case "basicAttackBonus":
      return `기본공격 피해 +${fmt(Number(a))}`;
    case "skillDamageBonus":
      return `스킬 피해 +${fmt(Number(a))}`;
    case "damageReduction":
      return "받는 피해 감소";
    case "cooldownReduction":
      return `모든 스킬 쿨타임 -${a}`;
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
      return `출혈 +${fmt(Number(a))}`;
    default:
      return token;
  }
}

// "힘 × 2 + 주 능력치 × 0.3" 같은 능력치 계수 문구
export function describeScaling(scaling = []) {
  return scaling.map(({ stat, coef }) => `${STAT_LABELS[stat]} × ${coef}`).join(" + ");
}

// 그 장비를 장착했다고 가정한 모험가(이미 장착 중이면 그대로)
function withEquipped(adventurer, item) {
  if (adventurer.equipment[item.slot] === item.id) {
    return adventurer;
  }

  return { ...adventurer, equipment: { ...adventurer.equipment, [item.slot]: item.id } };
}

// 기본공격 값과 계산식 (예: "기본공격 9 (무기 5 × 2/3 + 민첩 7)")
function basicAttackLine(item, stats) {
  const statValue = stats[item.stat];
  return `기본공격 ${fmt(basicAttackBase(item, stats))} (무기 ${fmt(item.damage)} × 2/3 + ${STAT_LABELS[item.stat]} ${fmt(statValue)})`;
}

export function describeEquipment(item, adventurer = null) {
  const head = [SLOT_LABELS[item.slot]];

  if (item.stat) {
    head.push(STAT_LABELS[item.stat]);
  }

  const lines = [head.join(" · ")];
  const equipped = adventurer ? withEquipped(adventurer, item) : null;
  const profile = equipped ? getProfile(equipped) : null;
  const values = [];

  if (item.slot === "weapon") {
    values.push(profile
      ? basicAttackLine(item, profile.stats)
      : `무기 피해 ${fmt(item.damage)} (기본공격 = 무기 × 2/3 + ${STAT_LABELS[item.stat]})`);
  }

  for (const [stat, value] of Object.entries(item.statBonus)) {
    values.push(`${STAT_LABELS[stat]} +${fmt(value)}`);
  }

  if (item.damageReduction) {
    values.push(`피해 감소 ${fmt(item.damageReduction)}`);
  }

  if (item.maxHp) {
    values.push(`최대 HP +${fmt(item.maxHp)}`);
  }

  if (values.length) {
    lines.push(values.join(" · "));
  }

  if (item.effects.length) {
    let effects = item.effects.map(describeEffectToken).join(" · ");

    if (item.requirement) {
      const need = `${STAT_LABELS[item.requirement.stat]} ${fmt(item.requirement.value)}`;
      const active = equipped ? isEquipmentEffectActive(equipped, item) : true;
      effects += active ? ` (${need} 이상)` : ` [${need} 필요]`;
    }

    lines.push(effects);
  }

  return lines.join("\n");
}

// 무기를 바꿀 때 기본공격 변화 (예: "기본공격 8 → 9 (+1)"). 무기가 아니면 빈 문자열.
export function describeWeaponChange(adventurer, itemId) {
  const item = catalog.equipment.get(itemId);

  if (!adventurer || item?.slot !== "weapon") {
    return "";
  }

  const currentId = adventurer.equipment.weapon;
  const current = currentId ? catalog.equipment.get(currentId) : null;
  const before = basicAttackBase(current, getProfile(adventurer).stats);
  const after = basicAttackBase(item, getProfile(withEquipped(adventurer, item)).stats);
  const diff = after - before;
  return `기본공격 ${fmt(before)} → ${fmt(after)} (${diff >= 0 ? "+" : ""}${fmt(diff)})`;
}

// 요구 능력치를 채우지 못한 장비의 표시 문구 (예: "[힘 8 필요]")
export function describeRequirementShort(item) {
  return item?.requirement ? `[${STAT_LABELS[item.requirement.stat]} ${fmt(item.requirement.value)} 필요]` : "";
}

// "힘 5 × 2.0 + 민첩 2 × 0.1" (모험가 있음) 또는 "힘 × 2.0 + 민첩 × 0.1"
function scalingTerms(scaling, profile) {
  return scaling.map(({ stat, coef }) => {
    const key = stat === "main" ? profile?.mainStat : stat;
    return profile ? `${STAT_LABELS[key]} ${fmt(profile.stats[key])} × ${coef}` : `${STAT_LABELS[stat]} × ${coef}`;
  });
}

function formula(base, scaling, profile) {
  return [base ? fmt(base) : null, ...scalingTerms(scaling, profile)].filter(Boolean).join(" + ") || "0";
}

function durationOf(skill, key) {
  const token = skill.effects.map(parseToken).find((effect) => effect.key === key);
  return token ? Number(token.args[0]) : 1;
}

const SUPPORT_LABELS = { heal: "회복", defense: "보호막", buff: "주는 피해 +" };

// "회복 8", "주는 피해 +3": "+"로 끝나는 이름은 수치를 붙여 쓴다. 식이면 괄호로 묶는다("주는 피해 +(1 + 힘 × 0.3)").
function labeled(label, value) {
  if (!label.endsWith("+")) {
    return `${label} ${value}`;
  }

  return String(value).includes(" ") ? `${label}(${value})` : `${label}${value}`;
}

export function describeSkill(skill, adventurer = null) {
  const owner = skill.class ? `${catalog.classes.get(skill.class)?.name ?? skill.class} 전용` : "공용";
  const fast = skill.effects.includes("fast");
  const head = [owner, SKILL_TYPE_LABELS[skill.type]];

  if (fast) {
    head.push("즉시 발동");
  }

  if (skill.type !== "passive") {
    head.push(`쿨타임 ${skill.cooldown}`);
  }

  const profile = adventurer ? getProfile(adventurer) : null;
  const weapon = adventurer?.equipment.weapon ? catalog.equipment.get(adventurer.equipment.weapon) : null;
  const lines = [head.join(" · ")];
  const valueOf = () => supportAmount(skill.baseEffect, skill.scaling, profile.stats, profile.mainStat);

  if (skill.type === "attack") {
    const weaponText = profile ? `무기 ${fmt(weapon ? weapon.damage : 3)}` : "무기 피해";
    const expr = [weaponText, ...scalingTerms(skill.scaling, profile)].join(" + ");
    lines.push(profile
      ? `피해 ${fmt(roundValue(attackSkillBase(skill, weapon, profile.stats, profile.mainStat)))} (${expr}) × 주사위`
      : `피해 = (${expr}) × 주사위`);
  } else if (SUPPORT_LABELS[skill.type]) {
    const label = SUPPORT_LABELS[skill.type];
    const amount = profile ? `${labeled(label, fmt(valueOf()))} (${formula(skill.baseEffect, skill.scaling, profile)})` : labeled(label, formula(skill.baseEffect, skill.scaling, null));
    const durationKey = skill.type === "defense" ? "shield" : skill.type === "buff" ? "empower" : null;
    lines.push(durationKey ? `${amount}, ${durationOf(skill, durationKey)}턴` : amount);
  }

  const extras = skill.effects.filter((token) => !["fast", "shield:2", "empower:2"].includes(token) && !/^(shield|empower):/.test(token)).map((token) => {
    if (token === "damageReduction:base" || token === "basicAttackBonus:base") {
      const label = token.startsWith("damage") ? "받는 피해 감소" : "기본공격 피해 +";
      return profile ? `${labeled(label, fmt(valueOf()))} (${formula(skill.baseEffect, skill.scaling, profile)})` : labeled(label, formula(skill.baseEffect, skill.scaling, null));
    }

    return describeEffectToken(token);
  });

  if (extras.length) {
    lines.push(extras.join(" · "));
  }

  return lines.join("\n");
}

export function describeConsumable(item) {
  const { key, args } = parseToken(item.effect);
  let effect = item.description;

  if (key === "heal") {
    effect = `HP ${fmt(item.amount)} 회복`;
  } else if (key === "damage") {
    effect = `적에게 피해 ${fmt(item.amount)} (전투 중)`;
  } else if (key === "cure") {
    effect = `${args[0] === "poison" ? "독" : args[0]} 해제 (전투 중)`;
  } else if (key === "buff") {
    effect = `이번 전투 동안 ${describeEffectToken(`${args[0]}:${args[1]}`)}`;
  }

  return `소모품 · ${effect} · 한 칸에 ${item.maxStack}개`;
}

// kind: "skill" | "item". adventurer를 넘기면 지금 능력치로 계산한 값을 보여 준다.
export function describeStats(kind, id, adventurer = null) {
  if (kind === "skill") {
    const skill = catalog.skills.get(id);
    return skill ? describeSkill(skill, adventurer) : "";
  }

  const equipment = catalog.equipment.get(id);

  if (equipment) {
    return describeEquipment(equipment, adventurer);
  }

  const consumable = catalog.consumables.get(id);
  return consumable ? describeConsumable(consumable) : "";
}

// 수치 줄과 설명 문구를 함께
export function describeFull(kind, id, adventurer = null) {
  const entry = kind === "skill" ? catalog.skills.get(id) : catalog.equipment.get(id) ?? catalog.consumables.get(id);
  return [describeStats(kind, id, adventurer), entry?.description].filter(Boolean).join("\n");
}

export { SKILL_TYPE_LABELS, STAT_LABELS };
