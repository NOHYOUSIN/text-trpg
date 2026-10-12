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
  // 기세: 공격으로 피해를 받을 때마다 1 쌓인다(최대 5). 기본공격·공격 스킬 피해에 단계 배율 없이 더한다. (2026-10-13, 투지 대체)
  warrior: { momentumMax: 5 },
  rogue: { firstStrikeMultiplier: 1.5, surpriseModifier: 3 },
  // 영창: 기본공격 대신 영창하고, 다음 기본공격·스킬 효과 ×1.75 (2026-10-13)
  mage: { chantMultiplier: 1.75 },
});

export const STATUS = Object.freeze({
  stunImmunityActions: 1,
});

export const RECOVERY = Object.freeze({
  restRatio: 0.5, // 2026-10-13: 40% → 50%
  zoneTransitionRatio: 0.3,
  // 전투에서 이기면 최대 HP의 10% 회복 (2026-10-13)
  victoryRatio: 0.1,
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
// 엘리트는 중간보스보다 한 단계 낮다. 최종 보스는 보상 없이 탐험이 끝난다.
export const BOSS_REWARD_GRADE = Object.freeze({
  elite: { 1: "common", 2: "uncommon", 3: "uncommon" },
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
  // 판매 가격 = 구매 가격 × 비율(내림). 가격이 없는 물건(시작 전용 소모품)은 팔 수 없다. (2026-10-13)
  sellRatio: 0.5,
});

// 장비·패시브 추가 능력 (2026-10-12)
export const ABILITY = Object.freeze({
  // 합친 값의 상한
  maxChance: 50, // 발동 확률(%)
  maxCrit: 3, // 치명타 범위 증가량 (기본 19~20 → 최대 16~20)
  maxEvade: 3, // 상대 빗나감 구간 증가량 (기본 1~2 → 최대 1~5)
  maxLifesteal: 10, // 준 피해 중 회복 비율(%) — 2026-10-12 플레이 테스트 후 20 → 10
  // 출혈: 새로 쌓일 때마다 지속시간을 이 값으로 되돌린다.
  bleedDuration: 2,
  // HP가 최대 HP의 이 비율 이하이면 lowHp 조건이 켜진다.
  lowHpRatio: 0.5,
});

// 사건 선택지 노출 (2026-10-11 확정 → 2026-10-12 구현)
export const EVENT_CHOICES = Object.freeze({
  // 한 번에 보여 줄 선택지 수("지나친다" 포함)
  minShown: 4,
  maxShown: 5,
  // 실제로 고를 수 있는 선택지 최소 수("지나친다" 제외)
  minSelectable: 2,
  // 같은 group의 사건은 최근 이 횟수의 사건 안에 다시 나오지 않는다.
  recentGroupExclusion: 3,
});

// 적 등급 (2026-10-12). veteran(정예)은 시트에 없고, 일반 적을 강화해 만든다.
export const ENEMY_RANKS = Object.freeze(["normal", "veteran", "elite", "midboss", "boss", "final"]);
export const BOSS_RANKS = Object.freeze(["midboss", "boss", "final"]);

// 일반 전투가 정예·엘리트로 바뀌는 확률(%) = base + perRound × (라운드 - 1) + 장소 eliteBonus(엘리트만)
export const ENEMY_VARIANT = Object.freeze({
  veteran: { base: 10, perRound: 0.5 },
  elite: { base: 3, perRound: 0.25 },
});

// 정예: 일반 적 수치·골드 배율
export const VETERAN = Object.freeze({ statMultiplier: 1.3, goldMultiplier: 1.5, namePrefix: "정예" });

// 전투 공식 3차 개편 (2026-10-13): 능력치 배율 폐지, 고정 기본값 + 능력치 × 계수
// 기본공격 = 무기 피해 × weaponRatio + 무기 연결 능력치 × statRatio (반올림) × 단계 배율
export const BASIC_ATTACK = Object.freeze({ weaponRatio: 2 / 3, statRatio: 1 });
// 최대 HP = 직업 기본 HP + 힘 × 2 + 민첩 × 1 + 지혜 × 1 + 장비 최대 HP
export const MAX_HP_PER_STAT = Object.freeze({ str: 2, agi: 1, wis: 1 });
