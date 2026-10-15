import { STATUS_LABELS } from "../systems/EffectParser.js?v=20261016-040625";
import { josa } from "../systems/Josa.js?v=20261016-040625";
import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261016-040625";
import { durationText, statusValueText, UNTIL_END_TURNS } from "../systems/StatusSystem.js?v=20261016-040625";

// 상태이상 이름 옆에 보여 줄 짧은 표시와, 마우스를 올렸을 때 보여 줄 설명.
function effectText(status) {
  switch (status.type) {
    case "poison":
      return `행동하기 직전마다 ${fmt(status.amount)} 피해를 입는다. 피해 감소로 막을 수 없다.`;
    case "bleed":
      return `행동하기 직전마다 ${fmt(status.amount)} 피해를 입는다. 적중할 때마다 쌓이고, 새로 쌓이지 않으면 사라진다. 피해 감소로 막을 수 없다.`;
    case "stun":
      return "다음 행동을 건너뛴다. 풀린 직후 1회는 다시 기절하지 않는다.";
    case "weaken":
      return `주는 피해가 ${josa(`×${status.multiplier}`, "으로/로")} 줄어든다.`;
    case "vulnerable":
      return `받는 피해가 ${josa(`×${status.multiplier}`, "으로/로")} 늘어난다.`;
    case "shield":
      return `공격 피해를 합계 ${fmt(status.amount)}까지 막는다. 다 막으면 사라진다. 독·출혈·반사는 막지 못한다.`;
    case "guard":
      return `받는 피해가 ${fmt(status.amount)} 줄어든다.`;
    case "empower":
      return `주는 피해가 ${fmt(status.amount)} 늘어난다.`;
    case "reflect":
      return `공격을 받으면 ${fmt(status.amount)} 피해를 되돌려 준다.`;
    case "critBoost":
      return `치명타 범위가 ${fmt(status.amount)} 넓어진다(상한 +3).`;
    case "regen":
      return `턴을 시작할 때마다 HP를 ${fmt(status.amount)} 회복한다.`;
    default:
      return "";
  }
}

export function statusChip(status) {
  const label = STATUS_LABELS[status.type] ?? status.type;
  return {
    text: `${label}${statusValueText(status)} (${durationText(status.duration)})`,
    tip: `${effectText(status)} ${status.duration >= UNTIL_END_TURNS ? "전투가 끝날 때까지 이어진다." : `남은 시간: 이 대상이 ${status.duration}번 행동하면 사라진다.`}`,
  };
}
