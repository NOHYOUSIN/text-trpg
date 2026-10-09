import { DICE } from "../data/rules.js?v=20261010-022808";

// 시드를 주면 같은 결과를 재현한다. (테스트·시뮬레이션용)
function createSeededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class DiceSystem {
  constructor(seed = null) {
    this.random = seed === null ? Math.random : createSeededRandom(seed);
  }

  rollD20() {
    return this.int(1, DICE.sides);
  }

  int(min, max) {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }

  chance(percent) {
    return this.random() * 100 < percent;
  }

  pick(list) {
    if (!list.length) {
      return null;
    }

    return list[Math.floor(this.random() * list.length)];
  }

  // weights: { key: weight }
  pickWeighted(weights) {
    const entries = Object.entries(weights).filter(([, weight]) => weight > 0);
    const total = entries.reduce((sum, [, weight]) => sum + weight, 0);

    if (total <= 0) {
      return null;
    }

    let roll = this.random() * total;

    for (const [key, weight] of entries) {
      roll -= weight;

      if (roll < 0) {
        return key;
      }
    }

    return entries[entries.length - 1][0];
  }

  shuffle(list) {
    const copy = [...list];

    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(this.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }
}
