import { DICE, EVENT_CHOICES, EXPLORE_DIFFICULTIES } from "../data/rules.js?v=20261013-032945";
import { catalog } from "../data/catalog.js?v=20261013-032945";
import { parseToken } from "./EffectParser.js?v=20261013-032945";
import { clamp, formatNumber as fmt } from "./NumberRules.js?v=20261013-032945";
import { getProfile } from "./TraitSystem.js?v=20261013-032945";

const STAT_LABELS = { str: "힘", agi: "민첩", wis: "지혜" };

// 행동 동사별 선택지 옆 표시. 지나친다(pass)와 동사 없는 선택지는 표시하지 않는다.
export const VERB_TAGS = Object.freeze({
  force: "힘",
  stealth: "민첩",
  insight: "지혜",
  use: "사용",
  persuade: "설득",
  threaten: "위협",
});

export const OUTCOME_LABELS = Object.freeze({
  fail: "실패",
  partial: "부분 성공",
  success: "성공",
});

// 한 탐험에서 같은 사건은 한 번만(반복 가능 표시 예외), 최근에 나온 묶음 제외, 플래그 조건 확인
export function isEventAvailable(event, run) {
  if (!event.repeatable && run.seenEvents.has(event.id)) {
    return false;
  }

  if (event.group && run.recentEventGroups.includes(event.group)) {
    return false;
  }

  if (!event.requiresFlags.every((flag) => run.hasFlag(flag))) {
    return false;
  }

  return !event.forbiddenFlags.some((flag) => run.hasFlag(flag));
}

// 선택지 조건: gold:5 → 골드 5 이상, item:ID → 보유, str:5 → 힘 5 이상, skill:ID → 장착
export function checkCondition(choice, adventurer) {
  const stats = getProfile(adventurer).stats;

  for (const token of choice.condition) {
    const { key, args } = parseToken(token);

    if (STAT_LABELS[key] && stats[key] < Number(args[0])) {
      return { ok: false, reason: `${STAT_LABELS[key]} ${fmt(Number(args[0]))} 필요` };
    }

    if (key === "skill" && !adventurer.skills.includes(args[0])) {
      return { ok: false, reason: `${catalog.skills.get(args[0])?.name ?? args[0]} 필요` };
    }

    if (key === "gold" && adventurer.gold < Number(args[0])) {
      return { ok: false, reason: `골드 ${args[0]} 필요` };
    }

    if (key === "item" && adventurer.inventory.count(args[0]) <= 0) {
      const name = catalog.consumables.get(args[0])?.name ?? catalog.equipment.get(args[0])?.name ?? args[0];
      return { ok: false, reason: `${name} 필요` };
    }
  }

  return { ok: true };
}

// 장착한 스킬에 따른 판정 보정. 해당하는 스킬이 여러 개면 합친다(주사위 보정 최대치는 판정에서 자른다).
export function getSkillBonus(choice, adventurer) {
  const matched = choice.skillBonus.filter((entry) => adventurer.skills.includes(entry.skillId));
  return {
    total: matched.reduce((sum, entry) => sum + entry.bonus, 0),
    names: matched.map((entry) => `${catalog.skills.get(entry.skillId)?.name ?? entry.skillId} +${entry.bonus}`),
  };
}

// 이번에 보여 줄 선택지를 고른다.
// - 지나친다(pass)는 항상 보여 준다.
// - 같은 동사의 변형은 하나만 뽑는다(고를 수 있는 변형 우선). 동사 없는 선택지는 각각 따로 센다.
// - 고를 수 있는 선택지를 최소 개수만큼 먼저 채우고, 나머지는 무작위로 채운다.
// - 써 둔 선택지가 보여 줄 수보다 적으면 모두 보여 준다(기존 사건).
export function pickShownChoices(event, adventurer, dice) {
  const passes = event.choices.filter((choice) => choice.verb === "pass");
  const groups = new Map();

  for (const choice of event.choices) {
    if (choice.verb === "pass") {
      continue;
    }

    const key = choice.verb || choice.id;
    groups.set(key, [...(groups.get(key) ?? []), choice]);
  }

  const shownCount = dice.int(EVENT_CHOICES.minShown, EVENT_CHOICES.maxShown) - passes.length;
  // 변형 중 고를 수 있는 것이 있으면 그중에서 뽑는다. 하나도 없으면 흐린 선택지로 보여 준다.
  const candidates = [...groups.values()].map((variants) => {
    const usable = variants.filter((choice) => checkCondition(choice, adventurer).ok);
    return dice.pick(usable.length ? usable : variants);
  });

  if (candidates.length <= shownCount && candidates.length === event.choices.length - passes.length) {
    return event.choices;
  }

  const shuffled = dice.shuffle(candidates);
  const selectable = shuffled.filter((choice) => checkCondition(choice, adventurer).ok);
  const picked = selectable.slice(0, EVENT_CHOICES.minSelectable);

  for (const choice of shuffled) {
    if (picked.length >= shownCount) {
      break;
    }

    if (!picked.includes(choice)) {
      picked.push(choice);
    }
  }

  return [...picked, ...passes].sort((a, b) => a.order - b.order);
}

// 난이도별 3단계 판정. 판정 없는 선택지는 항상 success.
export function resolveChoice(choice, { dice, modifier = 0 }) {
  if (choice.difficulty === "none") {
    return { rolled: false, outcomeId: "success", outcome: choice.outcomes.success };
  }

  const band = EXPLORE_DIFFICULTIES[choice.difficulty];
  const roll = dice.rollD20();
  const appliedModifier = clamp(modifier, -DICE.maxModifier, DICE.maxModifier);
  const total = roll + appliedModifier;
  let outcomeId = "success";

  if (total <= band.failMax) {
    outcomeId = "fail";
  } else if (total <= band.partialMax) {
    outcomeId = "partial";
  }

  return {
    rolled: true,
    roll,
    modifier: appliedModifier,
    total,
    outcomeId,
    outcome: choice.outcomes[outcomeId],
  };
}
