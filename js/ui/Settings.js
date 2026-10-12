// 화면 설정(이 브라우저에만 저장하는 편의 설정). 저장소를 쓸 수 없으면 이번 화면에서만 적용한다.
// 글자 출력 효과는 TextEffect.js가 따로 관리한다.

const reducedMotion = () => Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);

// key: 저장 키, fallback: 저장된 값이 없을 때의 기본값
const SETTINGS = Object.freeze({
  // 전투 로그의 "계산 보기"
  showCalc: { key: "trpg-webgame-show-calc", fallback: () => false },
  // 화면 연출: 전투 흔들림·떠오르는 숫자·번쩍임, 보스 등장 어두워짐
  screenFx: { key: "trpg-webgame-screen-fx", fallback: () => !reducedMotion() },
  // 전투 로그를 한 줄씩 순서대로 재생(끄면 한 번에 표시)
  logPlayback: { key: "trpg-webgame-log-playback", fallback: () => true },
});

const cache = {};

export function readSetting(name) {
  if (name in cache) {
    return cache[name];
  }

  const { key, fallback } = SETTINGS[name];
  let value = fallback();

  try {
    const stored = localStorage.getItem(key);

    if (stored !== null) {
      value = stored === "on";
    }
  } catch {
    // 저장소를 쓸 수 없으면 기본값
  }

  cache[name] = value;
  return value;
}

export function writeSetting(name, value) {
  cache[name] = value;

  try {
    localStorage.setItem(SETTINGS[name].key, value ? "on" : "off");
  } catch {
    // 저장하지 못해도 이번 화면에는 적용된다.
  }
}

export const readCalcSetting = () => readSetting("showCalc");
export const writeCalcSetting = (value) => writeSetting("showCalc", value);
export const isScreenFxEnabled = () => readSetting("screenFx");
export const isLogPlaybackEnabled = () => readSetting("logPlayback");
