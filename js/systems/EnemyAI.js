// 적의 행동 선택.
// pattern: "default" 또는 규칙 목록(;)
//   hpBelowHalf:스킬     — HP가 절반 이하이고 그 스킬이 준비되면 먼저 쓴다.
//   hpBelowHalfOnce:스킬 — HP가 처음 절반 이하가 되면 한 번만 쓴다. 평소 순환에서는 쓰지 않는다.
// 규칙에 걸리지 않으면 준비된 스킬 중 첫 번째, 없으면 기본공격(null).

export function parsePattern(pattern) {
  if (!pattern || pattern === "default") {
    return [];
  }

  return pattern.split(";").filter(Boolean).map((rule) => {
    const [kind, skillId] = rule.split(":");
    return { kind, skillId };
  });
}

// side: 전투 중 적 { ref, cooldowns, onceUsed: Set }
export function chooseEnemySkillId(side) {
  const enemy = side.ref;
  const rules = parsePattern(enemy.pattern);
  const isReady = (id) => (side.cooldowns.get(id) ?? 0) === 0;
  const belowHalf = enemy.hp <= enemy.maxHp / 2;
  const reserved = new Set(rules.filter((rule) => rule.kind === "hpBelowHalfOnce").map((rule) => rule.skillId));

  for (const rule of rules) {
    if (!belowHalf || !isReady(rule.skillId)) {
      continue;
    }

    if (rule.kind === "hpBelowHalfOnce" && !side.onceUsed.has(rule.skillId)) {
      side.onceUsed.add(rule.skillId);
      return rule.skillId;
    }

    if (rule.kind === "hpBelowHalf") {
      return rule.skillId;
    }
  }

  return enemy.skills.find((id) => !reserved.has(id) && isReady(id)) ?? null;
}
