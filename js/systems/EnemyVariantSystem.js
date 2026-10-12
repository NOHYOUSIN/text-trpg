import { ENEMY_VARIANT, VETERAN } from "../data/rules.js?v=20261013-032945";
import { roundValue } from "./NumberRules.js?v=20261013-032945";

// 일반 전투의 적을 정예·엘리트로 바꿀지 정한다.
// 엘리트는 같은 계열(base)의 엘리트를 우선 고르고, 없으면 구역의 아무 엘리트나 고른다.
export function rollEnemyVariant(dungeon, enemyData, { place, run, dice }) {
  if (!enemyData || enemyData.rank !== "normal") {
    return enemyData;
  }

  const roundsPassed = run.round - 1;
  const eliteChance = ENEMY_VARIANT.elite.base + ENEMY_VARIANT.elite.perRound * roundsPassed + (place?.eliteBonus ?? 0);
  const elites = dungeon.enemies.filter((enemy) => enemy.zone === run.zone && enemy.rank === "elite");

  if (elites.length && dice.chance(eliteChance)) {
    const sameKind = elites.filter((enemy) => enemy.base === enemyData.id);
    return dice.pick(sameKind.length ? sameKind : elites);
  }

  const veteranChance = ENEMY_VARIANT.veteran.base + ENEMY_VARIANT.veteran.perRound * roundsPassed;
  return dice.chance(veteranChance) ? makeVeteran(enemyData) : enemyData;
}

// 정예: 일반 적의 HP·피해·골드를 키운 복사본
export function makeVeteran(enemyData) {
  const scale = (value, multiplier) => roundValue(value * multiplier);
  return {
    ...enemyData,
    name: `${VETERAN.namePrefix} ${enemyData.name}`,
    rank: "veteran",
    hp: scale(enemyData.hp, VETERAN.statMultiplier),
    damage: scale(enemyData.damage, VETERAN.statMultiplier),
    goldMin: scale(enemyData.goldMin, VETERAN.goldMultiplier),
    goldMax: scale(enemyData.goldMax, VETERAN.goldMultiplier),
  };
}
