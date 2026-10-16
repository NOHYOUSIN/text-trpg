import { catalog } from "../data/catalog.js?v=20261016-205734";
import { ELIXIR, ESSENCE } from "../data/rules.js?v=20261016-205734";
import { consumableEffects, isElixir } from "./ConsumableEffects.js?v=20261016-205734";
import { mainStatsOf, STAT_KEYS } from "./TraitSystem.js?v=20261016-205734";

const STAT_LABELS = { str: "힘", agi: "민첩", wis: "지혜" };

// 전투 보상 정수(내단·정수·혼·비약)인지. 영약과 같은 효과지만 영약 뽑기에는 나오지 않는다.
export function isEssence(item) {
  return Boolean(item?.id?.startsWith(ESSENCE.idPrefix));
}

function statUpOf(item) {
  return consumableEffects(item).find((e) => e.key === "statUp")?.args[0];
}

// 영약 데이터 찾기: 능력치와 진한 영약(+2) 여부
function findElixir(stat, strong) {
  const elixirs = [...catalog.consumables.values()].filter((item) => isElixir(item) && !isEssence(item));
  const matching = elixirs.filter((item) => consumableEffects(item).some((e) => e.key === "statUp" && e.args[0] === stat));
  const sorted = matching.sort((a, b) => a.amount - b.amount);
  return strong ? sorted[sorted.length - 1] : sorted[0];
}

// 무작위 영약의 능력치: 주 능력치 1개면 60% / 나머지 각 20%, 2개면 각 40% / 나머지 20%
// 장비 뽑기의 연결 능력치에도 같은 확률을 쓴다(2026-10-16).
export function rollElixirStat(adventurer, dice) {
  const mains = mainStatsOf(adventurer);
  const weights = {};

  for (const stat of STAT_KEYS) {
    weights[stat] = mains.includes(stat) ? ELIXIR.mainStatWeight[mains.length] ?? 40 : ELIXIR.otherStatWeight;
  }

  return dice.pickWeighted(weights);
}

// 무작위 영약(보물·정비 탐색·엘리트 보상·사건 item:random:elixir). 드물게 진한 영약.
export function pickRandomElixir({ adventurer, dice }) {
  const stat = rollElixirStat(adventurer, dice);
  return findElixir(stat, dice.chance(ELIXIR.strongChance));
}

// 전투 보상 정수: 무작위 영약과 같은 능력치 확률, 항상 +1. 이름은 "<적 이름>의 <표현>".
export function pickEssence({ adventurer, dice, enemyName, word }) {
  const stat = rollElixirStat(adventurer, dice);
  const item = [...catalog.consumables.values()].find((entry) => isEssence(entry) && statUpOf(entry) === stat);
  return item ? { id: item.id, label: `${enemyName}의 ${word || ESSENCE.defaultWord} (${STAT_LABELS[stat]} +${item.amount})` } : null;
}

// 중간보스·구역 보스 보상 후보: 항상 주 능력치의 진한 영약(주 능력치가 2개면 둘 중 무작위)
export function pickBossElixir({ adventurer, dice }) {
  return findElixir(dice.pick(mainStatsOf(adventurer)), true);
}

// 영약을 마신다: 기본 능력치가 영구히 오른다. 결과 문구를 돌려준다.
export function drinkElixir(adventurer, item) {
  const effect = consumableEffects(item).find((e) => e.key === "statUp");
  const stat = effect.args[0];
  const before = adventurer.baseStats[stat] ?? 0;
  adventurer.baseStats[stat] = before + item.amount;
  return `${item.name} 사용: ${STAT_LABELS[stat]} +${item.amount} (기본 ${before} → ${adventurer.baseStats[stat]})`;
}
