import { catalog } from "../data/catalog.js?v=20261010-022808";
import { BOSS_REWARD_CANDIDATES, BOSS_REWARD_GRADE, EVENT_SKILL_CHOICE, GRADE_WEIGHTS_BY_ZONE, LOOT, SKILL_POOL } from "../data/rules.js?v=20261010-022808";

const GRADE_ORDER = ["common", "uncommon", "rare", "unique"];

export function rollGrade(zone, dice) {
  const weights = GRADE_WEIGHTS_BY_ZONE[zone] ?? GRADE_WEIGHTS_BY_ZONE[1];
  return dice.pickWeighted(weights);
}

// 원하는 등급에 후보가 없으면 한 단계씩 낮춘다. 그래도 없으면 전체에서 고른다.
function pickByGrade(list, grade, dice) {
  for (let i = GRADE_ORDER.indexOf(grade); i >= 0; i -= 1) {
    const candidates = list.filter((entry) => entry.grade === GRADE_ORDER[i]);

    if (candidates.length) {
      return dice.pick(candidates);
    }
  }

  return dice.pick(list);
}

function availableEquipment(run, excludeIds = []) {
  // 직업 시작 장비는 보상·상점에 나오지 않는다.
  return [...catalog.equipment.values()].filter(
    (item) => !item.starter && !(item.unique && run.seenUniques.has(item.id)) && !excludeIds.includes(item.id),
  );
}

// 공용 스킬과 자기 직업의 전용 스킬만 나온다. 이미 장착한 스킬은 제외한다.
function availableSkills(adventurer, excludeIds = []) {
  return [...catalog.skills.values()].filter(
    (skill) => (!skill.class || skill.class === adventurer.classId)
      && !adventurer.skills.includes(skill.id)
      && !excludeIds.includes(skill.id),
  );
}

export function pickEquipment({ run, dice, grade = rollGrade(run.zone, dice), excludeIds = [] }) {
  const item = pickByGrade(availableEquipment(run, excludeIds), grade, dice);

  if (item?.unique) {
    run.seenUniques.add(item.id);
  }

  return item;
}

// 직업 전용(SKILL_POOL.classChance%) 또는 공용 중 하나를 먼저 고르고, 그 안에서 등급으로 고른다.
// 고른 분류에 후보가 없으면 다른 분류에서 고른다.
export function pickSkill({ run, adventurer, dice, grade = rollGrade(run.zone, dice), excludeIds = [] }) {
  const candidates = availableSkills(adventurer, excludeIds);
  const classSkills = candidates.filter((skill) => skill.class);
  const commonSkills = candidates.filter((skill) => !skill.class);
  const preferClass = dice.chance(SKILL_POOL.classChance);
  const first = preferClass ? classSkills : commonSkills;
  const second = preferClass ? commonSkills : classSkills;
  return pickByGrade(first.length ? first : second, grade, dice);
}

// 서로 다른 스킬 후보 여러 개
export function pickSkillChoices({ run, adventurer, dice }) {
  const count = dice.int(EVENT_SKILL_CHOICE.min, EVENT_SKILL_CHOICE.max);
  const ids = [];

  for (let i = 0; i < count; i += 1) {
    const skill = pickSkill({ run, adventurer, dice, excludeIds: ids });

    if (skill) {
      ids.push(skill.id);
    }
  }

  return ids;
}

export function pickConsumable({ dice, excludeIds = [] }) {
  return dice.pick([...catalog.consumables.values()].filter((item) => !excludeIds.includes(item.id)));
}

// 획득 표기({ kind, id } 또는 { kind, random })를 실제 ID로 정한다.
export function resolveAcquisition(acquisition, { run, adventurer, dice }) {
  // 사건의 skill:choice — 후보 2~3개를 정해 두고, 플레이어가 고른다.
  if (acquisition.kind === "skill" && acquisition.choice) {
    const options = pickSkillChoices({ run, adventurer, dice });
    return options.length ? { kind: "skillChoice", options } : null;
  }

  if (acquisition.kind === "skill") {
    const skill = acquisition.id
      ? catalog.skills.get(acquisition.id)
      : pickSkill({ run, adventurer, dice });
    return skill ? { kind: "skill", id: skill.id } : null;
  }

  if (acquisition.id) {
    return { kind: "item", id: acquisition.id };
  }

  const item = acquisition.random === "equipment"
    ? pickEquipment({ run, dice })
    : pickConsumable({ dice });
  return item ? { kind: "item", id: item.id } : null;
}

// 일반 전투 보상(골드 외): 소모품 20%, 장비 10%
export function rollCombatLoot({ run, dice }) {
  const loot = [];

  if (dice.chance(LOOT.combatConsumableChance)) {
    loot.push({ kind: "item", random: "consumable" });
  }

  if (dice.chance(LOOT.combatEquipmentChance)) {
    loot.push({ kind: "item", random: "equipment" });
  }

  return loot;
}

export function rollTreasure({ dice }) {
  const kind = dice.pickWeighted(LOOT.treasureWeights);
  return kind === "skill" ? { kind: "skill", random: true } : { kind: "item", random: kind };
}

// 보스 보상 후보 2~3개: 확정 등급의 스킬 또는 장비
export function createBossRewardCandidates({ rank, run, adventurer, dice }) {
  const grade = BOSS_REWARD_GRADE[rank]?.[run.zone] ?? "rare";
  const count = dice.int(BOSS_REWARD_CANDIDATES.min, BOSS_REWARD_CANDIDATES.max);
  const candidates = [];
  const usedIds = [];

  for (let i = 0; i < count; i += 1) {
    const wantSkill = dice.chance(50);
    const entry = wantSkill
      ? pickSkill({ run, adventurer, dice, grade, excludeIds: usedIds })
      : pickByGrade(availableEquipment(run, usedIds), grade, dice);

    if (entry) {
      usedIds.push(entry.id);
      candidates.push({ kind: wantSkill ? "skill" : "item", id: entry.id });
    }
  }

  return candidates;
}

// 유일 장비는 선택했을 때 등장 처리한다.
export function markUniqueSeen(run, itemId) {
  if (catalog.equipment.get(itemId)?.unique) {
    run.seenUniques.add(itemId);
  }
}
