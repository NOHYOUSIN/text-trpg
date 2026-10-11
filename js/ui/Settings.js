// 화면 설정(이 브라우저에만 저장하는 편의 설정). 저장소를 쓸 수 없으면 이번 화면에서만 적용한다.
const CALC_STORAGE_KEY = "trpg-webgame-show-calc";

// 전투 로그의 "계산 보기"
export function readCalcSetting() {
  try {
    return localStorage.getItem(CALC_STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}

export function writeCalcSetting(value) {
  try {
    localStorage.setItem(CALC_STORAGE_KEY, value ? "on" : "off");
  } catch {
    // 저장하지 못해도 동작에는 문제없다.
  }
}
