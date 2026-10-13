import { ROUTE } from "../data/rules.js?v=20261014-041746";
import { isEventAvailable } from "./EventSystem.js?v=20261014-041746";

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

// 구역에 들어갈 때 보스 라운드마다 나올 보스를 정한다. { 라운드: 적 ID } (2026-10-14)
// 후보가 여럿이면(시트의 "|") 같은 확률로 하나를 고른다. 저장에 포함되어 이어하기 때도 같다.
export function pickZoneBosses(zone, dice) {
  const picks = {};

  for (const midBoss of zone.midBosses) {
    picks[midBoss.round] = dice.pick(midBoss.enemyIds);
  }

  if (hasZoneBoss(zone)) {
    picks[zone.bossRound] = dice.pick(zone.bossIds);
  }

  return picks;
}

// 이 라운드가 보스 라운드면 { rank, enemyId }. 미리 정한 보스가 없으면(이전 저장) 라운드 주사위로 고른다.
export function getBossForRound(zone, round, dice, picks = {}) {
  if (round === zone.bossRound && hasZoneBoss(zone)) {
    return { rank: "boss", enemyId: picks[round] ?? dice.pick(zone.bossIds) };
  }

  const midBoss = zone.midBosses.find((entry) => entry.round === round);

  if (midBoss) {
    return { rank: "midboss", enemyId: picks[round] ?? dice.pick(midBoss.enemyIds) };
  }

  return null;
}

// 이 정비 라운드 다음에 나올 보스(미리 정한 보스 중 가장 가까운 라운드)
export function upcomingBossId(zone, round, picks = {}) {
  const next = Object.keys(picks).map(Number).filter((r) => r > round).sort((a, b) => a - b)[0];
  return next === undefined ? null : picks[next];
}

// 정비 라운드 특별 선택지: 이 구역·라운드에 맞고, 플래그를 갖췄고, 다가오는 보스가 맞을 때만
export function availableCampOptions(dungeon, run) {
  const zone = getZone(dungeon, run.zone);
  const bossId = upcomingBossId(zone, run.round, run.bossPicks);
  return (dungeon.campOptions ?? []).filter(
    (option) => option.zone === run.zone
      && option.round === run.round
      && option.bossId === bossId
      && option.requiresFlags.every((flag) => run.hasFlag(flag)),
  );
}

// 정비 라운드인지: 갈림길 대신 휴식/탐색 고정 선택지 (2026-10-13)
export function isCampRound(zone, round) {
  return Boolean(zone?.campRounds?.includes(round));
}

// 구역 보스가 정해져 있는지(없으면 콘텐츠가 없는 구역)
export function hasZoneBoss(zone) {
  return Boolean(zone?.bossIds?.length);
}

// 갈림길 후보: 2~3개, 한 갈림길 안에서 중복 없음. (2026-10-14: 간 장소는 그 구역에서 다시 나오지 않는다)
// 아직 안 간 장소 중 직전 갈림길에 보이지 않았던 곳을 먼저 쓰고(그 안에서는 덜 보인 곳부터),
// 모자라면 직전에 보였던 곳, 그래도 모자라면 가장 오래전에 간 장소부터 다시 넣는다.
export function createRouteCandidates(dungeon, run, dice) {
  const places = dungeon.places.filter((place) => place.zone === run.zone);
  const count = Math.min(dice.int(ROUTE.minCandidates, ROUTE.maxCandidates), places.length);
  const unvisited = places.filter((place) => !run.recentPlaces.includes(place.id));
  const fresh = unvisited.filter((place) => !run.lastShownPlaces.includes(place.id));
  const shownBefore = unvisited.filter((place) => run.lastShownPlaces.includes(place.id));
  const oldestVisited = run.recentPlaces
    .map((id) => places.find((place) => place.id === id))
    .filter((place, index, list) => place && list.indexOf(place) === index);
  const shows = (place) => run.placeShows[place.id] ?? 0;
  const leastShownFirst = (list) => dice.shuffle(list).sort((a, b) => shows(a) - shows(b));
  const candidates = [...leastShownFirst(fresh), ...leastShownFirst(shownBefore), ...oldestVisited].slice(0, count);
  run.lastShownPlaces = candidates.map((place) => place.id);

  for (const place of candidates) {
    run.placeShows[place.id] = shows(place) + 1;
  }

  return candidates;
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
// 조건(requiresFlags)을 갖춘 후속 사건이 후보에 있으면 그것을 먼저 고른다.
export function pickEvent(dungeon, place, run, dice) {
  const fromPlace = place.eventPool
    .map((id) => dungeon.eventsById.get(id))
    .filter((event) => event && isEventAvailable(event, run));

  if (fromPlace.length) {
    return dice.pick(preferFollowups(fromPlace));
  }

  const fromZone = dungeon.events.filter(
    (event) => event.zone === run.zone && isEventAvailable(event, run),
  );
  return dice.pick(preferFollowups(fromZone));
}

// 등장 가능한 사건 중 후속 사건(조건 플래그가 있는 사건)만 추린다. 없으면 전체를 돌려준다.
function preferFollowups(events) {
  const followups = events.filter((event) => event.requiresFlags.length > 0);
  return followups.length ? followups : events;
}
