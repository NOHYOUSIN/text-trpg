import { DICE, EXPLORE_DIFFICULTIES } from "../data/rules.js?v=20261010-022808";
import { catalog } from "../data/catalog.js?v=20261010-022808";
import { parseToken } from "./EffectParser.js?v=20261010-022808";
import { clamp } from "./NumberRules.js?v=20261010-022808";

export const OUTCOME_LABELS = Object.freeze({
  fail: "실패",
  partial: "부분 성공",
  success: "성공",
});

// 한 탐험에서 같은 사건은 한 번만(반복 가능 표시 예외), 플래그 조건 확인
export function isEventAvailable(event, run) {
  if (!event.repeatable && run.seenEvents.has(event.id)) {
    return false;
  }

  if (!event.requiresFlags.every((flag) => run.hasFlag(flag))) {
    return false;
  }

  return !event.forbiddenFlags.some((flag) => run.hasFlag(flag));
}

// 선택지 조건: gold:5 → 골드 5 이상, item:ID → 보유
export function checkCondition(choice, adventurer) {
  for (const token of choice.condition) {
    const { key, args } = parseToken(token);

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
