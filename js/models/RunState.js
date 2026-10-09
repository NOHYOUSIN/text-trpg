// 한 번의 탐험 진행 상태. 탐험이 끝나면 버린다(이전 탐험 기록은 남기지 않는다).
export class RunState {
  constructor({
    dungeonId,
    zone = 1,
    round = 1,
    flags = [],
    seenEvents = [],
    recentPlaces = [],
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

  toJSON() {
    return {
      dungeonId: this.dungeonId,
      zone: this.zone,
      round: this.round,
      flags: [...this.flags],
      seenEvents: [...this.seenEvents],
      recentPlaces: [...this.recentPlaces],
      seenUniques: [...this.seenUniques],
      defeatedBosses: [...this.defeatedBosses],
      enemiesDefeated: this.enemiesDefeated,
      roundSeed: this.roundSeed,
    };
  }
}
