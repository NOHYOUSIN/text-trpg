import { catalog } from "../data/catalog.js?v=20261014-041746";
import {
  BOSS_REWARD_CANDIDATES,
  BOSS_REWARD_GRADE,
  ESSENCE,
  EVENT_SKILL_CHOICE,
  GRADE_WEIGHTS_BY_ZONE,
  LOOT,
  REWARD_CHOICE,
  SKILL_POOL,
} from "../data/rules.js?v=20261014-041746";
import { isElixir } from "./ConsumableEffects.js?v=20261014-041746";
import { pickBossElixir, pickEssence, pickRandomElixir } from "./ElixirSystem.js?v=20261014-041746";

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
  // 직업 시작 장비는 보상·상점에 나오지 않는다. 현재 구역의 장비만 나온다(2026-10-14).
  return [...catalog.equipment.values()].filter(
    (item) => !item.starter
      && (item.zone ?? 1) === run.zone
      && !(item.unique && run.seenUniques.has(item.id))
      && !excludeIds.includes(item.id),
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

// 서로 다른 스킬 후보 여러 개(count가 없으면 2~3개)
export function pickSkillChoices({ run, adventurer, dice, count = dice.int(EVENT_SKILL_CHOICE.min, EVENT_SKILL_CHOICE.max) }) {
  const ids = [];

  for (let i = 0; i < count; i += 1) {
    const skill = pickSkill({ run, adventurer, dice, excludeIds: ids });

    if (skill) {
      ids.push(skill.id);
    }
  }

  return ids;
}

// 서로 다른 장비 후보 여러 개(고르는 보상)
function pickEquipmentChoices({ run, dice, count }) {
  const ids = [];

  for (let i = 0; i < count; i += 1) {
    const item = pickByGrade(availableEquipment(run, ids), rollGrade(run.zone, dice), dice);

    if (item) {
      ids.push(item.id);
    }
  }

  return ids;
}

// 시작 지급 전용(starter) 소모품과 영약은 일반 소모품 뽑기(전투 보상·상점·item:random:consumable)에 나오지 않는다.
export function pickConsumable({ dice, excludeIds = [] }) {
  return dice.pick([...catalog.consumables.values()].filter((item) => !item.starter && !isElixir(item) && !excludeIds.includes(item.id)));
}

// 획득 표기({ kind, id } 또는 { kind, random })를 실제 ID로 정한다.
export function resolveAcquisition(acquisition, { run, adventurer, dice }) {
  // 스킬 선택(사건 skill:choice·skill:random, 보물·정비 탐색) — 후보 2~3개(바닥 보장은 count개) 중 플레이어가 고른다.
  if (acquisition.kind === "skill" && acquisition.choice) {
    const options = pickSkillChoices({ run, adventurer, dice, count: acquisition.count });
    return options.length ? { kind: "skillChoice", options } : null;
  }

  // 장비 선택(보물·정비 탐색, 사건 item:random:equipment) — 후보 중 하나를 고른다. 유일 장비는 고를 때 등장 처리한다.
  if (acquisition.random === "equipment" && acquisition.choice) {
    const options = pickEquipmentChoices({ run, dice, count: acquisition.choice });
    return options.length ? { kind: "equipmentChoice", options } : null;
  }

  // 전투 보상 정수: 화면 이름은 "<적 이름>의 <표현>"
  if (acquisition.random === "essence") {
    const essence = pickEssence({ adventurer, dice, enemyName: acquisition.enemyName, word: acquisition.word });
    return essence ? { kind: "item", id: essence.id, label: essence.label } : null;
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

  let item = null;

  if (acquisition.random === "equipment") {
    item = pickEquipment({ run, dice });
  } else if (acquisition.random === "elixir") {
    item = pickRandomElixir({ adventurer, dice });
  } else {
    item = pickConsumable({ dice });
  }

  return item ? { kind: "item", id: item.id } : null;
}

// 일반 전투 보상(골드 외): 소모품 20%, 장비 20%(정예 30%). 둘 다 없으면(골드만) 40%로 정수.
export function rollCombatLoot({ run, dice, enemy }) {
  const veteran = enemy?.rank === "veteran";
  const loot = [];

  if (dice.chance(LOOT.combatConsumableChance)) {
    loot.push({ kind: "item", random: "consumable" });
  }

  if (dice.chance(veteran ? LOOT.veteranEquipmentChance : LOOT.combatEquipmentChance)) {
    loot.push({ kind: "item", random: "equipment" });
  }

  if (!loot.length && enemy && dice.chance(ESSENCE.chance)) {
    loot.push({ kind: "item", random: "essence", enemyName: enemy.name, word: enemy.essence });
  }

  return loot;
}

// 보물·정비 탐색: 장비는 후보 2개, 스킬은 2~3개 중 고른다. 소모품·영약은 1개. (2026-10-14)
export function rollTreasure({ dice }) {
  const kind = dice.pickWeighted(LOOT.treasureWeights);

  if (kind === "skill") {
    return { kind: "skill", choice: true };
  }

  return kind === "equipment" ? { kind: "item", random: "equipment", choice: REWARD_CHOICE.equipment } : { kind: "item", random: kind };
}

// 보스 보상 후보 2~3개: 확정 등급의 스킬 또는 장비.
// 중간보스·구역 보스는 후보 하나가 주 능력치의 진한 영약이다. 엘리트 보상은 영약도 후보로 나온다. (2026-10-13)
export function createBossRewardCandidates({ rank, run, adventurer, dice }) {
  const grade = BOSS_REWARD_GRADE[rank]?.[run.zone] ?? "rare";
  const count = dice.int(BOSS_REWARD_CANDIDATES.min, BOSS_REWARD_CANDIDATES.max);
  const candidates = [];
  const usedIds = [];
  const isElite = rank === "elite";
  const bossElixir = isElite ? null : pickBossElixir({ adventurer, dice });

  // 엘리트 보상은 장비·스킬·소모품·영약 중에서, 보스 보상은 장비·스킬 중에서 고른다.
  const kinds = isElite ? ["skill", "equipment", "consumable", "elixir"] : ["skill", "equipment"];

  for (let i = 0; i < count - (bossElixir ? 1 : 0); i += 1) {
    const kind = dice.pick(kinds);
    let entry = null;

    if (kind === "skill") {
      entry = pickSkill({ run, adventurer, dice, grade, excludeIds: usedIds });
    } else if (kind === "equipment") {
      entry = pickByGrade(availableEquipment(run, usedIds), grade, dice);
    } else if (kind === "elixir") {
      entry = pickRandomElixir({ adventurer, dice });
      entry = entry && !usedIds.includes(entry.id) ? entry : null;
    } else {
      entry = pickConsumable({ dice, excludeIds: usedIds });
    }

    if (entry) {
      usedIds.push(entry.id);
      candidates.push({ kind: kind === "skill" ? "skill" : "item", id: entry.id });
    }
  }

  if (bossElixir) {
    candidates.push({ kind: "item", id: bossElixir.id });
  }

  return candidates;
}

// 유일 장비는 선택했을 때 등장 처리한다.
export function markUniqueSeen(run, itemId) {
  if (catalog.equipment.get(itemId)?.unique) {
    run.seenUniques.add(itemId);
  }
}
