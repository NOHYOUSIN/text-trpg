// 게임 규칙 수치.
// 프로토타입 플레이로 조정할 값은 이 파일에서만 바꾼다.

// 1d20 결과별 효과 단계 (6장)
export const EFFECT_TIERS = Object.freeze([
  { id: "none", label: "효과 없음", min: 1, max: 2, multiplier: 0 },
  { id: "low", label: "낮은 효과", min: 3, max: 7, multiplier: 0.5 },
  { id: "normal", label: "일반 효과", min: 8, max: 13, multiplier: 1 },
  { id: "high", label: "높은 효과", min: 14, max: 18, multiplier: 1.5 },
  { id: "critical", label: "치명타", min: 19, max: 20, multiplier: 2 },
]);

export const DICE = Object.freeze({
  sides: 20,
  // 주사위 덧셈 보정 합계의 최대치
  maxModifier: 5,
});

export const COMBAT = Object.freeze({
  minDamage: 2,
  unarmedDamage: 3,
  surpriseDefenseTarget: 11,
  // 동률이면 플레이어 선공
  playerWinsAgilityTie: true,
});

// 탐험(사건) 판정: 각 결과의 최대 주사위 값. 그 이상은 성공 (6장, 10장)
export const EXPLORE_DIFFICULTIES = Object.freeze({
  easy: { label: "쉬움", failMax: 4, partialMax: 10 },
  normal: { label: "보통", failMax: 7, partialMax: 13 },
  hard: { label: "어려움", failMax: 10, partialMax: 16 },
});

export const CLASS_TRAITS = Object.freeze({
  warrior: { healRatio: 0.25, triggerRatio: 0.5, usesPerCombat: 1 },
  rogue: { firstStrikeMultiplier: 1.5, surpriseModifier: 3 },
  mage: { skillDamageMultiplier: 1.25 },
});

export const STATUS = Object.freeze({
  stunImmunityActions: 1,
});

export const RECOVERY = Object.freeze({
  restRatio: 0.4,
  zoneTransitionRatio: 0.3,
});

export const INVENTORY = Object.freeze({
  slots: 6,
  equipmentStack: 1,
  defaultMaxStack: 3,
});

export const SKILL_SLOTS = 3;

export const ROUTE = Object.freeze({
  minCandidates: 2,
  maxCandidates: 3,
  recentPlaceExclusion: 3,
});

export const GRADES = Object.freeze({
  common: { label: "일반", color: "#e8e8e8" },
  uncommon: { label: "고급", color: "#4caf50" },
  rare: { label: "희귀", color: "#4a8ee8" },
  unique: { label: "유일", color: "#a35ed8" },
});

// 일반 보상의 등급 확률(%) — 구역별 (10장)
export const GRADE_WEIGHTS_BY_ZONE = Object.freeze({
  1: { common: 70, uncommon: 25, rare: 5, unique: 0 },
  2: { common: 50, uncommon: 35, rare: 13, unique: 2 },
  3: { common: 30, uncommon: 40, rare: 25, unique: 5 },
});

// 보스 보상 후보의 확정 등급
export const BOSS_REWARD_GRADE = Object.freeze({
  midboss: { 1: "uncommon", 2: "rare", 3: "rare" },
  boss: { 1: "rare", 2: "unique" },
});

export const BOSS_REWARD_CANDIDATES = Object.freeze({ min: 2, max: 3 });

export const LOOT = Object.freeze({
  combatConsumableChance: 20,
  combatEquipmentChance: 10,
  treasureWeights: { equipment: 50, consumable: 25, skill: 25 },
});

// 1구역 앞부분 사건 보너스: 판정이 있는 선택지의 결과가 실패가 아니고 빈 스킬 슬롯이 있으면 확률로 무작위 스킬 추가 (2026-10-09)
export const EARLY_SKILL = Object.freeze({
  zone: 1,
  maxRound: 6,
  chance: 50,
});

// 무작위 스킬: 직업 전용을 뽑을 확률(%). 나머지는 공용. (2026-10-09)
export const SKILL_POOL = Object.freeze({
  classChance: 60,
});

// 사건 결과 skill:choice — 후보 수 (2026-10-10)
export const EVENT_SKILL_CHOICE = Object.freeze({ min: 2, max: 3 });

export const SHOP = Object.freeze({
  guaranteedItem: "con_potion",
  randomConsumables: 1,
  equipment: 1,
  skills: 1,
  // 스킬 가격 범위 (장비·소모품은 데이터의 price 사용)
  skillPrice: { common: 30, uncommon: 40, rare: 50 },
});
