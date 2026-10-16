import { ABILITY } from "../data/rules.js?v=20261016-205734";
import { getStatus, hasStatus } from "./StatusSystem.js?v=20261016-205734";

// 빌드 축 확장 (2026-10-16, 기획 문서 8장): 조건부 수치와 "모으기·터뜨리기" 계산.
// 전투(CombatSystem)는 여기서 값만 받아 쓴다.

// 상대에게 걸린 상태이상(약점 공략·균열 폭발이 세는 종류)
export const COUNTED_STATUSES = ["poison", "bleed", "weaken", "vulnerable", "stun"];

// 조건이 이어지는 동안만 켜지는 능력(lowHp·whileShield·fullMomentum·ifBleeding·ifDebuffed)
const CONDITIONS = {
  lowHp: ({ side }) => side.ref.hp <= side.profile.maxHp * ABILITY.lowHpRatio,
  whileShield: ({ side }) => hasStatus(side, "shield"),
  fullMomentum: ({ side, momentumMax }) => momentumMax > 0 && (side.momentum ?? 0) >= momentumMax,
  ifBleeding: ({ target }) => Boolean(target) && hasStatus(target, "bleed"),
  ifDebuffed: ({ target }) => Boolean(target) && (hasStatus(target, "weaken") || hasStatus(target, "vulnerable")),
};

export const CONDITION_TRIGGERS = Object.keys(CONDITIONS);

// 플레이어의 조건부 수치 합(예: whileShield>reflect:3). target: 상대
export function conditionalBonus(side, key, { target = null, momentumMax = 0 } = {}) {
  if (side.kind !== "player") {
    return 0;
  }

  return side.profile.modifiers.abilities
    .filter((ability) => CONDITIONS[ability.trigger] && ability.effect.key === key)
    .filter((ability) => CONDITIONS[ability.trigger]({ side, target, momentumMax }))
    .reduce((sum, ability) => sum + Number(ability.effect.args[0]), 0);
}

// 공격 스킬의 "터뜨리기" 추가 피해(단계 배율 없이 더한다, 빗나가면 0).
// 기세·보호막·출혈을 쓰는 표기는 여기서 그 값을 비운다. 돌려주는 값: { amount, notes: ["기세 5 × 3"] }
export function burstBonus({ effects, user, target }) {
  let amount = 0;
  const notes = [];
  const add = (value, note) => {
    if (value > 0) {
      amount += value;
      notes.push(note);
    }
  };

  for (const { key, args } of effects) {
    const n = Number(args[0]);

    switch (key) {
      case "consumeMomentum": {
        const used = user.momentum ?? 0;
        user.momentum = 0;
        add(used * n, `기세 ${used} × ${n}`);
        break;
      }
      case "consumeShield": {
        const shield = getStatus(user, "shield");
        const left = shield?.amount ?? 0;
        user.statuses = user.statuses.filter((status) => status.type !== "shield");
        add(Math.round(left * n), `보호막 ${left} × ${n}`);
        break;
      }
      case "consumeBleed": {
        const bleed = getStatus(target, "bleed");
        const stacks = bleed?.amount ?? 0;
        target.statuses = target.statuses.filter((status) => status.type !== "bleed");
        add(stacks * n, `출혈 ${stacks} × ${n}`);
        break;
      }
      case "missingHp": {
        const missing = Math.max(0, user.profile.maxHp - user.ref.hp);
        add(Math.round(missing * n), `잃은 HP ${missing} × ${n}`);
        break;
      }
      case "perStatus": {
        const count = COUNTED_STATUSES.filter((type) => hasStatus(target, type)).length;
        add(count * n, `상태이상 ${count}종 × ${n}`);
        break;
      }
      case "perChant":
        add((user.chantCount ?? 0) * n, `영창 ${user.chantCount ?? 0}번 × ${n}`);
        break;
      case "perHealed":
        add(Math.round((user.healedTotal ?? 0) * n), `회복한 HP ${user.healedTotal ?? 0} × ${n}`);
        break;
      default:
        break;
    }
  }

  return { amount, notes };
}

// 스킬 효과 표기에서 한 키의 첫 인자(없으면 0)
export function effectValue(effects, key) {
  const effect = effects.find((entry) => entry.key === key);
  return effect ? Number(effect.args[0]) : 0;
}
