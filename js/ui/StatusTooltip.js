import { STATUS_LABELS } from "../systems/EffectParser.js?v=20261010-000920";
import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261010-000920";

// 상태이상 이름 옆에 보여 줄 짧은 표시와, 마우스를 올렸을 때 보여 줄 설명.
function effectText(status) {
  switch (status.type) {
    case "poison":
      return `행동하기 직전마다 ${fmt(status.amount)} 피해를 입는다. 피해 감소로 막을 수 없다.`;
    case "stun":
      return "다음 행동을 건너뛴다. 풀린 직후 1회는 다시 기절하지 않는다.";
    case "weaken":
      return `주는 피해가 ×${status.multiplier}로 줄어든다.`;
    case "vulnerable":
      return `받는 피해가 ×${status.multiplier}로 늘어난다.`;
    case "guard":
      return `받는 피해가 ${fmt(status.amount)} 줄어든다.`;
    case "empower":
      return `주는 피해가 ${fmt(status.amount)} 늘어난다.`;
    default:
      return "";
  }
}

export function statusChip(status) {
  const label = STATUS_LABELS[status.type] ?? status.type;
  const value = status.amount ? ` ${fmt(status.amount)}` : status.multiplier ? ` ×${status.multiplier}` : "";
  return {
    text: `${label}${value} (${status.duration}턴)`,
    tip: `${effectText(status)} 남은 시간: 이 대상이 ${status.duration}번 행동하면 사라진다.`,
  };
}
