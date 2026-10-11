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
    recentEventGroups = [],
    seenUniques = [],
    defeatedBosses = [],
    enemiesDefeated = 0,
    roundSeed = null,
  }) {
    this.dungeonId = dungeonId;
    this.zone = zone;
    this.round = round;
    this.flags = new Set(flags);
    this.seenEvents = new Set(seenEvents);
    this.recentPlaces = [...recentPlaces];
    // 직전 갈림길에 보였던 장소. 다음 갈림길 후보에서 뺀다.
    this.lastShownPlaces = [...lastShownPlaces];
    // 최근 라운드에 나온 사건 묶음(group). 비슷한 사건이 연달아 나오지 않게 한다.
    this.recentEventGroups = [...recentEventGroups];
    this.seenUniques = new Set(seenUniques);
    this.defeatedBosses = [...defeatedBosses];
    this.enemiesDefeated = enemiesDefeated;
    // 라운드마다 정하는 주사위 시드. 저장 후 이어하면 같은 선택에 같은 결과가 나온다.
    this.roundSeed = roundSeed;
  }

  hasFlag(flag) {
    return this.flags.has(flag);
  }

  setFlag(flag) {
    this.flags.add(flag);
  }

  rememberPlace(placeId, keep) {
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
      recentEventGroups: [...this.recentEventGroups],
      seenUniques: [...this.seenUniques],
      defeatedBosses: [...this.defeatedBosses],
      enemiesDefeated: this.enemiesDefeated,
      roundSeed: this.roundSeed,
    };
  }
}
