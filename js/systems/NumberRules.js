// 모든 수치는 정수로 반올림한다(0.5는 올림).
// 소수 계산 오차를 막기 위해 반올림은 이 함수로만 한다.
export function roundValue(value) {
  const sign = value < 0 ? -1 : 1;
  return sign * Math.round(Math.abs(value) + Number.EPSILON);
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function formatNumber(value) {
  return String(roundValue(value));
}

export function formatSigned(value) {
  return value >= 0 ? `+${value}` : `${value}`;
}
