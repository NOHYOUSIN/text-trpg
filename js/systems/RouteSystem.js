import { ROUTE } from "../data/rules.js";
import { isEventAvailable } from "./EventSystem.js";

export const CONTENT_LABELS = Object.freeze({
  combat: "전투",
  event: "사건",
  rest: "휴식",
  treasure: "보물",
  shop: "상점",
});

export function getZone(dungeon, zoneNumber) {
  return dungeon.zones.find((zone) => zone.zone === zoneNumber) ?? null;
}

// 이 라운드가 보스 라운드면 { rank, enemyId }
export function getBossForRound(zone, round) {
  if (round === zone.bossRound && zone.bossId) {
    return { rank: "boss", enemyId: zone.bossId };
  }

  if (round === zone.midBossRound && zone.midBossId) {
    return { rank: "midboss", enemyId: zone.midBossId };
  }

  return null;
}

// 갈림길 후보: 2~3개, 한 갈림길 안에서 중복 없음, 최근 N라운드 장소 제외
export function createRouteCandidates(dungeon, run, dice) {
  const places = dungeon.places.filter((place) => place.zone === run.zone);
  const count = dice.int(ROUTE.minCandidates, ROUTE.maxCandidates);
  const fresh = places.filter((place) => !run.recentPlaces.includes(place.id));
  const pool = fresh.length >= count ? fresh : places;
  return dice.shuffle(pool).slice(0, count);
}

export function rollPlaceContent(place, dice) {
  return dice.pickWeighted(place.contentWeights);
}

// 장소 후보가 있으면 그중에서, 없으면 구역 공통 풀(일반 적)에서 고른다.
export function pickEnemy(dungeon, place, run, dice) {
  const candidates = place.enemyPool.length
    ? place.enemyPool
    : dungeon.enemies
      .filter((enemy) => enemy.zone === run.zone && enemy.rank === "normal")
      .map((enemy) => enemy.id);
  return dungeon.enemiesById.get(dice.pick(candidates)) ?? null;
}

// 장소 후보 중 등장 가능한 사건, 없으면 구역 공통 풀에서 고른다.
export function pickEvent(dungeon, place, run, dice) {
  const fromPlace = place.eventPool
    .map((id) => dungeon.eventsById.get(id))
    .filter((event) => event && isEventAvailable(event, run));

  if (fromPlace.length) {
    return dice.pick(fromPlace);
  }

  const fromZone = dungeon.events.filter(
    (event) => event.zone === run.zone && isEventAvailable(event, run),
  );
  return dice.pick(fromZone);
}
