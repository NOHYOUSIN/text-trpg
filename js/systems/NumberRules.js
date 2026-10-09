// 모든 수치는 소수점 둘째 자리에서 반올림해 한 자리까지 남긴다.
// 소수 계산 오차를 막기 위해 반올림은 이 함수로만 한다.
export function round1(value) {
  const sign = value < 0 ? -1 : 1;
  return (sign * Math.round((Math.abs(value) + Number.EPSILON) * 10)) / 10;
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function formatNumber(value) {
  return round1(value).toFixed(1);
}

export function formatSigned(value) {
  return value >= 0 ? `+${value}` : `${value}`;
}
