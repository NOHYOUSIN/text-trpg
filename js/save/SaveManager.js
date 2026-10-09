// 진행 중인 탐험 자동 저장 1개. 탐험이 끝나면 지운다. 수동 저장·불러오기는 없다.
const STORAGE_KEY = "trpg-webgame-run";
const SAVE_VERSION = 1;

export class SaveManager {
  constructor(storage = globalThis.localStorage) {
    this.storage = storage;
  }

  save({ adventurer, run }) {
    const data = {
      version: SAVE_VERSION,
      savedAt: new Date().toISOString(),
      adventurer: adventurer.toJSON(),
      run: run.toJSON(),
    };

    try {
      this.storage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }

  load() {
    try {
      const raw = this.storage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : null;
      return data?.version === SAVE_VERSION ? data : null;
    } catch {
      return null;
    }
  }

  clear() {
    try {
      this.storage.removeItem(STORAGE_KEY);
    } catch {
      // 저장소를 쓸 수 없는 환경에서는 무시한다.
    }
  }
}
