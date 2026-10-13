// 한 번의 탐험 진행 상태. 탐험이 끝나면 버린다(이전 탐험 기록은 남기지 않는다).
export class RunState {
  constructor({
    dungeonId,
    zone = 1,
    round = 1,
    flags = [],
    seenEvents = [],
    recentPlaces = [],
    lastShownPlaces = [],
    placeShows = {},
    recentEventGroups = [],
    seenUniques = [],
    defeatedBosses = [],
    enemiesDefeated = 0,
    roundSeed = null,
    bossPicks = {},
    campBoon = null,
  }) {
    this.dungeonId = dungeonId;
    this.zone = zone;
    this.round = round;
    this.flags = new Set(flags);
    this.seenEvents = new Set(seenEvents);
    this.recentPlaces = [...recentPlaces];
    // 직전 갈림길에 보였던 장소. 다음 갈림길 후보에서 뺀다.
    this.lastShownPlaces = [...lastShownPlaces];
    // 이 구역에서 장소마다 갈림길에 보인 횟수. 덜 보인 장소를 먼저 보여 준다(구역에 들어갈 때 비운다).
    this.placeShows = { ...placeShows };
    // 최근 라운드에 나온 사건 묶음(group). 비슷한 사건이 연달아 나오지 않게 한다.
    this.recentEventGroups = [...recentEventGroups];
    this.seenUniques = new Set(seenUniques);
    this.defeatedBosses = [...defeatedBosses];
    this.enemiesDefeated = enemiesDefeated;
    // 라운드마다 정하는 주사위 시드. 저장 후 이어하면 같은 선택에 같은 결과가 나온다.
    this.roundSeed = roundSeed;
    // 구역에 들어갈 때 정한 보스 { 라운드: 적 ID }
    this.bossPicks = { ...bossPicks };
    // 정비 특별 선택지로 얻은 다가오는 보스전 효과 { bossId, name, effects, surprise }
    this.campBoon = campBoon;
  }

  hasFlag(flag) {
    return this.flags.has(flag);
  }

  setFlag(flag) {
    this.flags.add(flag);
  }

  // 이 구역에서 간 장소(구역에 들어갈 때 비운다). keep을 주면 최근 keep곳만 기억한다.
  rememberPlace(placeId, keep = Infinity) {
    this.recentPlaces.push(placeId);

    while (this.recentPlaces.length > keep) {
      this.recentPlaces.shift();
    }
  }

  // 사건이 나온 라운드마다 묶음을 기록한다(묶음이 없으면 빈칸으로 자리만 채운다).
  rememberEventGroup(group, keep) {
    this.recentEventGroups.push(group ?? "");

    while (this.recentEventGroups.length > keep) {
      this.recentEventGroups.shift();
    }
  }

  toJSON() {
    return {
      dungeonId: this.dungeonId,
      zone: this.zone,
      round: this.round,
      flags: [...this.flags],
      seenEvents: [...this.seenEvents],
      recentPlaces: [...this.recentPlaces],
      lastShownPlaces: [...this.lastShownPlaces],
      placeShows: { ...this.placeShows },
      recentEventGroups: [...this.recentEventGroups],
      seenUniques: [...this.seenUniques],
      defeatedBosses: [...this.defeatedBosses],
      enemiesDefeated: this.enemiesDefeated,
      roundSeed: this.roundSeed,
      bossPicks: { ...this.bossPicks },
      campBoon: this.campBoon,
    };
  }
}
