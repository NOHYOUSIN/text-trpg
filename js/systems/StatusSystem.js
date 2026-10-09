import { STATUS } from "../data/rules.js?v=20261010-022808";
import { STATUS_LABELS } from "./EffectParser.js?v=20261010-022808";
import { formatNumber as fmt } from "./NumberRules.js?v=20261010-022808";

// 상태이상과 지속 효과. 지속시간은 효과를 받은 쪽의 행동 횟수로 센다.
// combatant: { statuses: [], stunImmunity: 0, immune: Set }

export function applyStatus(target, spec, { appliedBySelf = false } = {}) {
  if (target.immune?.has(spec.type)) {
    return { applied: false, reason: "immune" };
  }

  if (spec.type === "stun" && target.stunImmunity > 0) {
    return { applied: false, reason: "stunImmune" };
  }

  const existing = target.statuses.find((status) => status.type === spec.type);

  // 같은 상태이상은 누적하지 않고 긴 지속시간으로 갱신한다.
  if (existing) {
    existing.duration = Math.max(existing.duration, spec.duration);
    existing.amount = Math.max(existing.amount ?? 0, spec.amount ?? 0);
    existing.multiplier = spec.multiplier ?? existing.multiplier;
    existing.appliedThisAction = existing.appliedThisAction || appliedBySelf;
    return { applied: true, refreshed: true };
  }

  target.statuses.push({ ...spec, appliedThisAction: appliedBySelf });
  return { applied: true, refreshed: false };
}

export function hasStatus(target, type) {
  return target.statuses.some((status) => status.type === type);
}

export function getStatus(target, type) {
  return target.statuses.find((status) => status.type === type) ?? null;
}

export function removeStatus(target, type) {
  target.statuses = target.statuses.filter((status) => status.type !== type);
}

// 주는 피해 배율 (약화)
export function getDealtMultiplier(target) {
  return getStatus(target, "weaken")?.multiplier ?? 1;
}

// 받는 피해 배율 (취약)
export function getTakenMultiplier(target) {
  return getStatus(target, "vulnerable")?.multiplier ?? 1;
}

export function getGuardAmount(target) {
  return getStatus(target, "guard")?.amount ?? 0;
}

// 강화: 효과량만큼 주는 피해의 기본값에 더한다.
export function getEmpowerAmount(target) {
  return getStatus(target, "empower")?.amount ?? 0;
}

// 행동 직전: 독 피해량과 기절 여부를 알려 준다. 기절이면 기절을 소모하고 면역을 준다.
export function beginAction(target) {
  const poison = getStatus(target, "poison");
  const stun = getStatus(target, "stun");

  // 기절은 건너뛴 행동마다 1씩 줄고, 풀리면 면역을 얻는다.
  // 면역 값은 이번(건너뛴) 행동의 endAction에서 1 줄어 다음 행동까지 유지된다.
  if (stun) {
    stun.duration -= 1;

    if (stun.duration <= 0) {
      removeStatus(target, "stun");
      target.stunImmunity = STATUS.stunImmunityActions + 1;
    }
  }

  return {
    poisonDamage: poison ? poison.amount : 0,
    stunned: Boolean(stun),
  };
}

// 행동 직후: 지속시간을 줄인다. 이번 행동에 자신에게 건 효과는 줄이지 않는다.
export function endAction(target) {
  for (const status of target.statuses) {
    if (status.type === "stun") {
      continue;
    }

    if (status.appliedThisAction) {
      status.appliedThisAction = false;
      continue;
    }

    status.duration -= 1;
  }

  target.statuses = target.statuses.filter((status) => status.duration > 0);

  if (target.stunImmunity > 0) {
    target.stunImmunity -= 1;
  }
}

export function clearStatuses(target) {
  target.statuses = [];
  target.stunImmunity = 0;
}

export function describeStatuses(target) {
  return target.statuses.map((status) => {
    const label = STATUS_LABELS[status.type] ?? status.type;
    const value = status.amount ? ` ${fmt(status.amount)}` : status.multiplier ? ` ×${status.multiplier}` : "";
    return `${label}${value} (${status.duration}턴)`;
  });
}
