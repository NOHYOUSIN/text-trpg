// 자동 생성 파일. 직접 수정하지 않는다.
export const commonData = {
  "skills": [
    {
      "id": "skl_bash",
      "name": "강타",
      "grade": "common",
      "type": "attack",
      "stat": "str",
      "baseEffect": 20,
      "cooldown": 3,
      "effects": [],
      "description": "온 힘을 실어 내려친다."
    },
    {
      "id": "skl_vital_stab",
      "name": "급소 찌르기",
      "grade": "common",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 18,
      "cooldown": 3,
      "effects": [],
      "description": "갑옷 틈을 노려 날을 찔러 넣는다."
    },
    {
      "id": "skl_ember",
      "name": "불씨",
      "grade": "common",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 20,
      "cooldown": 3,
      "effects": [],
      "description": "손끝에서 작은 불꽃을 튕겨 낸다."
    },
    {
      "id": "skl_first_aid",
      "name": "응급 처치",
      "grade": "common",
      "type": "heal",
      "stat": "wis",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [],
      "description": "상처를 동여매 피를 멎게 한다."
    },
    {
      "id": "skl_guard_stance",
      "name": "방어 태세",
      "grade": "common",
      "type": "defense",
      "stat": "str",
      "baseEffect": 4,
      "cooldown": 3,
      "effects": [
        "guard:1"
      ],
      "description": "몸을 웅크려 다음 공격에 대비한다. 효과량만큼 다음 받는 피해가 줄어든다."
    },
    {
      "id": "skl_poison_dart",
      "name": "독침",
      "grade": "uncommon",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 22,
      "cooldown": 3,
      "effects": [
        "poison:3:3"
      ],
      "description": "독을 바른 침을 날린다."
    },
    {
      "id": "skl_shield_bash",
      "name": "방패 치기",
      "grade": "uncommon",
      "type": "attack",
      "stat": "str",
      "baseEffect": 22,
      "cooldown": 3,
      "effects": [
        "stun:1"
      ],
      "description": "묵직하게 들이받아 상대를 휘청이게 한다."
    },
    {
      "id": "skl_frost_arrow",
      "name": "서리 화살",
      "grade": "uncommon",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 24,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "차가운 화살이 상대의 움직임을 무디게 한다."
    },
    {
      "id": "skl_battle_rhythm",
      "name": "전투 감각",
      "grade": "uncommon",
      "type": "passive",
      "stat": "str",
      "baseEffect": null,
      "cooldown": null,
      "effects": [
        "basicAttackBonus:2"
      ],
      "description": "싸움의 흐름을 몸이 기억한다. 기본공격 피해 +2."
    },
    {
      "id": "skl_ground_cleave",
      "name": "대지 가르기",
      "grade": "rare",
      "type": "attack",
      "stat": "str",
      "baseEffect": 30,
      "cooldown": 2,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "땅을 가를 듯한 일격이 상대의 자세를 무너뜨린다."
    },
    {
      "id": "skl_shadow_raid",
      "name": "그림자 습격",
      "grade": "rare",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 28,
      "cooldown": 2,
      "effects": [
        "poison:4:3"
      ],
      "description": "그림자처럼 파고들어 독 묻은 칼날을 꽂는다."
    },
    {
      "id": "skl_life_bloom",
      "name": "생명의 꽃",
      "grade": "rare",
      "type": "heal",
      "stat": "wis",
      "baseEffect": 14,
      "cooldown": 2,
      "effects": [
        "cleanse"
      ],
      "description": "상처 위로 꽃이 피어나며 상태이상을 씻어 낸다."
    },
    {
      "id": "skl_iron_skin",
      "name": "강철 피부",
      "grade": "rare",
      "type": "passive",
      "stat": "str",
      "baseEffect": null,
      "cooldown": null,
      "effects": [
        "damageReduction:stat:0.4"
      ],
      "description": "단련된 몸이 충격을 흘려 낸다. 힘 × 0.4만큼 받는 피해가 줄어든다."
    },
    {
      "id": "skl_mana_flow",
      "name": "마력 순환",
      "grade": "rare",
      "type": "passive",
      "stat": "wis",
      "baseEffect": null,
      "cooldown": null,
      "effects": [
        "cooldownReduction:1"
      ],
      "description": "마력이 막힘없이 흐른다. 모든 스킬 대기시간 -1(최소 1)."
    }
  ],
  "equipment": [
    {
      "id": "wpn_sword_basic",
      "name": "낡은 검",
      "slot": "weapon",
      "grade": "common",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": true,
      "price": 20,
      "description": "전사의 시작 무기. 날이 무뎌졌지만 아직 쓸 만하다."
    },
    {
      "id": "wpn_dagger_basic",
      "name": "낡은 단검",
      "slot": "weapon",
      "grade": "common",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": true,
      "price": 20,
      "description": "도적의 시작 무기."
    },
    {
      "id": "wpn_staff_basic",
      "name": "낡은 지팡이",
      "slot": "weapon",
      "grade": "common",
      "stat": "wis",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": true,
      "price": 20,
      "description": "마법사의 시작 무기."
    },
    {
      "id": "wpn_hand_axe",
      "name": "손도끼",
      "slot": "weapon",
      "grade": "common",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "장작을 패던 도끼다."
    },
    {
      "id": "wpn_hunting_knife",
      "name": "사냥칼",
      "slot": "weapon",
      "grade": "common",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "손에 착 감기는 짧은 칼."
    },
    {
      "id": "wpn_oak_rod",
      "name": "참나무 막대",
      "slot": "weapon",
      "grade": "common",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "마력이 희미하게 스민 나뭇가지."
    },
    {
      "id": "wpn_iron_longsword",
      "name": "쇠 장검",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "str",
      "damage": 11,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "균형이 잘 잡힌 장검."
    },
    {
      "id": "wpn_thorn_dagger",
      "name": "가시 단검",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "agi",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onHitPoison:20:2:2"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "칼날에 가시덩굴 즙이 배어 있다. 명중 시 20% 확률로 독."
    },
    {
      "id": "wpn_willow_staff",
      "name": "버드나무 지팡이",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "wis",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "바람에 흔들리듯 마력이 유연하게 흐른다."
    },
    {
      "id": "wpn_guardian_mace",
      "name": "수호자의 철퇴",
      "slot": "weapon",
      "grade": "rare",
      "stat": "str",
      "damage": 14,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "숲 수호자들이 쓰던 철퇴. 휘두를 때 몸을 가려 준다."
    },
    {
      "id": "wpn_whisper_blade",
      "name": "속삭이는 칼날",
      "slot": "weapon",
      "grade": "rare",
      "stat": "agi",
      "damage": 14,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "onHitPoison:25:3:2"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "베일 때마다 나지막한 속삭임이 들린다."
    },
    {
      "id": "wpn_moonlit_staff",
      "name": "달빛 지팡이",
      "slot": "weapon",
      "grade": "rare",
      "stat": "wis",
      "damage": 14,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "skillDamageBonus:2"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "달빛을 머금은 지팡이. 스킬 피해 +2."
    },
    {
      "id": "arm_leather_basic",
      "name": "가죽 갑옷",
      "slot": "armor",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": true,
      "price": 20,
      "description": "전사의 시작 방어구."
    },
    {
      "id": "arm_padded_coat",
      "name": "누빈 외투",
      "slot": "armor",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "두툼하게 누빈 외투."
    },
    {
      "id": "arm_chain_shirt",
      "name": "사슬 셔츠",
      "slot": "armor",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 2,
      "maxHp": 10,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "촘촘한 사슬이 칼날을 막아 준다."
    },
    {
      "id": "arm_bark_mail",
      "name": "나무껍질 갑옷",
      "slot": "armor",
      "grade": "rare",
      "stat": null,
      "damage": null,
      "damageReduction": 2,
      "maxHp": 20,
      "statBonus": {},
      "effects": [
        "immune:poison"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "살아 있는 나무껍질로 엮었다. 독에 걸리지 않는다."
    },
    {
      "id": "rng_strength",
      "name": "힘의 반지",
      "slot": "ring",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": ""
    },
    {
      "id": "rng_agility",
      "name": "날쌘 반지",
      "slot": "ring",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": ""
    },
    {
      "id": "rng_wisdom",
      "name": "지혜의 반지",
      "slot": "ring",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": ""
    },
    {
      "id": "rng_hunter",
      "name": "사냥꾼의 반지",
      "slot": "ring",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "exploreBonus:1"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "탐험 판정 +1."
    },
    {
      "id": "rng_oak_heart",
      "name": "참나무 심장 반지",
      "slot": "ring",
      "grade": "rare",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "maxHp:10"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "최대 HP +10."
    },
    {
      "id": "nck_lucky_charm",
      "name": "행운 부적",
      "slot": "necklace",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:1"
      ],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "탐험 판정 +1."
    },
    {
      "id": "nck_vigor",
      "name": "활력의 목걸이",
      "slot": "necklace",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "combatStartHeal:3"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "전투 시작 시 HP 3 회복."
    },
    {
      "id": "nck_wolf_fang",
      "name": "늑대 이빨 목걸이",
      "slot": "necklace",
      "grade": "rare",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "critRange:18"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "기본공격·스킬의 치명타 범위가 18~20으로 넓어진다."
    }
  ],
  "consumables": [
    {
      "id": "con_potion",
      "name": "회복약",
      "effect": "heal",
      "amount": 20,
      "maxStack": 3,
      "price": 10,
      "description": "HP를 20 회복한다."
    },
    {
      "id": "con_bandage",
      "name": "붕대",
      "effect": "heal",
      "amount": 10,
      "maxStack": 3,
      "price": 5,
      "description": "HP를 10 회복한다."
    },
    {
      "id": "con_antidote",
      "name": "해독초",
      "effect": "cure:poison",
      "amount": null,
      "maxStack": 3,
      "price": 6,
      "description": "독을 해제한다."
    },
    {
      "id": "con_whetstone",
      "name": "숫돌",
      "effect": "buff:basicAttackBonus:3",
      "amount": null,
      "maxStack": 3,
      "price": 8,
      "description": "이번 전투 동안 기본공격 피해 +3."
    }
  ],
  "classes": [
    {
      "id": "warrior",
      "name": "전사",
      "mainStat": "str",
      "maxHp": 100,
      "stats": {
        "str": 5,
        "agi": 2,
        "wis": 0
      },
      "startWeapon": "wpn_sword_basic",
      "startArmor": "arm_leather_basic",
      "startItems": [
        {
          "id": "con_potion",
          "count": 1
        }
      ],
      "startGold": 5,
      "traitName": "투지",
      "traitDesc": "전투 중 피해를 받아 HP가 최대 HP의 절반 이하가 되면 최대 HP의 1/4을 회복한다. 전투당 1회."
    },
    {
      "id": "rogue",
      "name": "도적",
      "mainStat": "agi",
      "maxHp": 80,
      "stats": {
        "str": 2,
        "agi": 5,
        "wis": 0
      },
      "startWeapon": "wpn_dagger_basic",
      "startArmor": null,
      "startItems": [
        {
          "id": "con_potion",
          "count": 2
        }
      ],
      "startGold": 5,
      "traitName": "기민함",
      "traitDesc": "정규 전투에서 선공하면 첫 행동의 피해 ×1.5. 기습 판정 보정 ±3."
    },
    {
      "id": "mage",
      "name": "마법사",
      "mainStat": "wis",
      "maxHp": 80,
      "stats": {
        "str": 0,
        "agi": 2,
        "wis": 5
      },
      "startWeapon": "wpn_staff_basic",
      "startArmor": null,
      "startItems": [
        {
          "id": "con_potion",
          "count": 2
        }
      ],
      "startGold": 5,
      "traitName": "집중",
      "traitDesc": "피해를 주는 스킬의 피해량 ×1.1."
    }
  ]
};
