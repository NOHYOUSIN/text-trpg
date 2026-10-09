// 자동 생성 파일. 직접 수정하지 않는다.
export const commonData = {
  "skills": [
    {
      "id": "skl_bash",
      "name": "강타",
      "grade": "common",
      "class": "warrior",
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
      "class": "rogue",
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
      "class": "mage",
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
      "class": null,
      "type": "heal",
      "stat": "main",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [],
      "description": "상처를 동여매 피를 멎게 한다."
    },
    {
      "id": "skl_guard_stance",
      "name": "방어 태세",
      "grade": "common",
      "class": null,
      "type": "defense",
      "stat": "main",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [
        "strike:12",
        "guard:2"
      ],
      "description": "방패를 앞세워 들이받고 자세를 굳힌다. 피해를 주고 2턴 동안 효과량만큼 받는 피해가 줄어든다."
    },
    {
      "id": "skl_poison_dart",
      "name": "독침",
      "grade": "uncommon",
      "class": "rogue",
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
      "class": "warrior",
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
      "class": "mage",
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
      "class": "warrior",
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
      "class": "warrior",
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
      "class": "rogue",
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
      "class": null,
      "type": "heal",
      "stat": "main",
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
      "class": "warrior",
      "type": "passive",
      "stat": "str",
      "baseEffect": null,
      "cooldown": null,
      "effects": [
        "damageReduction:stat:0.8"
      ],
      "description": "단련된 몸이 충격을 흘려 낸다. 힘 × 0.8만큼 받는 피해가 줄어든다."
    },
    {
      "id": "skl_mana_flow",
      "name": "마력 순환",
      "grade": "rare",
      "class": "mage",
      "type": "passive",
      "stat": "wis",
      "baseEffect": null,
      "cooldown": null,
      "effects": [
        "cooldownReduction:1"
      ],
      "description": "마력이 막힘없이 흐른다. 모든 스킬 대기시간 -1(최소 1)."
    },
    {
      "id": "skl_heavy_swing",
      "name": "내리찍기",
      "grade": "common",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 22,
      "cooldown": 3,
      "effects": [],
      "description": "무기를 높이 들어 힘껏 내리찍는다."
    },
    {
      "id": "skl_war_cry",
      "name": "함성",
      "grade": "common",
      "class": "warrior",
      "type": "buff",
      "stat": "str",
      "baseEffect": 3,
      "cooldown": 3,
      "effects": [
        "strike:12",
        "empower:2"
      ],
      "description": "함성과 함께 몰아친다. 피해를 주고 2턴 동안 효과량만큼 주는 피해가 늘어난다."
    },
    {
      "id": "skl_rending_strike",
      "name": "찢어발기기",
      "grade": "uncommon",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 24,
      "cooldown": 3,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "갑옷째 찢어 상대를 무방비로 만든다."
    },
    {
      "id": "skl_quick_slash",
      "name": "빠른 베기",
      "grade": "common",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 20,
      "cooldown": 3,
      "effects": [],
      "description": "눈에 보이지 않을 만큼 빠르게 벤다."
    },
    {
      "id": "skl_smoke_bomb",
      "name": "연막",
      "grade": "common",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 12,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "연막 속에서 기습해 상대의 힘을 빼앗는다."
    },
    {
      "id": "skl_crippling_cut",
      "name": "힘줄 끊기",
      "grade": "uncommon",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 22,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "힘줄을 노려 상대의 힘을 빼앗는다."
    },
    {
      "id": "skl_mark_weakness",
      "name": "급소 표시",
      "grade": "uncommon",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 14,
      "cooldown": 3,
      "effects": [
        "vulnerable:1.3:3"
      ],
      "description": "약점을 찔러 표시를 남긴다. 이후의 공격이 더 아프게 들어간다."
    },
    {
      "id": "skl_killer_instinct",
      "name": "살수의 본능",
      "grade": "rare",
      "class": "rogue",
      "type": "passive",
      "stat": "agi",
      "baseEffect": null,
      "cooldown": null,
      "effects": [
        "critRange:16"
      ],
      "description": "급소가 눈에 들어온다. 치명타 범위가 16~20으로 넓어진다."
    },
    {
      "id": "skl_arcane_bolt",
      "name": "마력 화살",
      "grade": "common",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 20,
      "cooldown": 3,
      "effects": [],
      "description": "응축한 마력을 화살처럼 쏘아 보낸다."
    },
    {
      "id": "skl_mana_ward",
      "name": "마력 장벽",
      "grade": "common",
      "class": "mage",
      "type": "defense",
      "stat": "wis",
      "baseEffect": 6,
      "cooldown": 3,
      "effects": [
        "strike:12",
        "guard:2"
      ],
      "description": "마력의 파편을 날리며 장벽을 두른다. 피해를 주고 2턴 동안 효과량만큼 받는 피해가 줄어든다."
    },
    {
      "id": "skl_flame_burst",
      "name": "화염 폭발",
      "grade": "uncommon",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 25,
      "cooldown": 3,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "불꽃이 터지며 상대의 방어를 무너뜨린다."
    },
    {
      "id": "skl_hex",
      "name": "저주",
      "grade": "uncommon",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 14,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:3"
      ],
      "description": "저주를 실은 마력이 상대를 할퀴고 힘을 갉아먹는다."
    },
    {
      "id": "skl_thunderbolt",
      "name": "낙뢰",
      "grade": "rare",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 31,
      "cooldown": 2,
      "effects": [
        "stun:1"
      ],
      "description": "하늘을 가르는 번개가 상대를 꿰뚫는다."
    },
    {
      "id": "skl_second_wind",
      "name": "숨 고르기",
      "grade": "common",
      "class": null,
      "type": "heal",
      "stat": "main",
      "baseEffect": 7,
      "cooldown": 3,
      "effects": [],
      "description": "호흡을 가다듬어 기운을 되찾는다."
    },
    {
      "id": "skl_resolve",
      "name": "결의",
      "grade": "uncommon",
      "class": null,
      "type": "buff",
      "stat": "main",
      "baseEffect": 4,
      "cooldown": 3,
      "effects": [
        "strike:14",
        "empower:2"
      ],
      "description": "이를 악물고 내지른 일격으로 기세를 올린다. 피해를 주고 2턴 동안 효과량만큼 주는 피해가 늘어난다."
    },
    {
      "id": "skl_sidestep",
      "name": "몸 피하기",
      "grade": "uncommon",
      "class": null,
      "type": "defense",
      "stat": "main",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [
        "strike:14",
        "guard:2"
      ],
      "description": "공격을 흘려 내며 반격한다. 피해를 주고 2턴 동안 효과량만큼 받는 피해가 줄어든다."
    },
    {
      "id": "skl_wrap_wounds",
      "name": "상처 동여매기",
      "grade": "uncommon",
      "class": null,
      "type": "heal",
      "stat": "main",
      "baseEffect": 10,
      "cooldown": 3,
      "effects": [
        "cleanse"
      ],
      "description": "상처를 단단히 동여매고 독기를 짜낸다."
    },
    {
      "id": "skl_desperate_blow",
      "name": "필사의 일격",
      "grade": "rare",
      "class": null,
      "type": "attack",
      "stat": "main",
      "baseEffect": 30,
      "cooldown": 2,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "모든 것을 건 일격이 상대의 빈틈을 연다."
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
    },
    {
      "id": "wpn_wood_club",
      "name": "나무 몽둥이",
      "slot": "weapon",
      "grade": "common",
      "stat": "str",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "단단한 참나무를 깎아 만든 몽둥이."
    },
    {
      "id": "wpn_war_axe",
      "name": "전투 도끼",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "str",
      "damage": 12,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "maxHp:10"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "두꺼운 날이 달린 도끼. 쥐고 있으면 든든하다. 최대 HP +10."
    },
    {
      "id": "wpn_bear_hammer",
      "name": "곰 사냥 망치",
      "slot": "weapon",
      "grade": "rare",
      "stat": "str",
      "damage": 15,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "maxHp:10"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "곰의 두개골도 깬다는 망치. 최대 HP +10."
    },
    {
      "id": "wpn_short_bow",
      "name": "짧은 활",
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
      "description": "숲 사냥꾼들이 쓰는 작은 활."
    },
    {
      "id": "wpn_twin_daggers",
      "name": "쌍단검",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "agi",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "양손에 하나씩 쥐는 가벼운 단검."
    },
    {
      "id": "wpn_viper_fang",
      "name": "독사 송곳니",
      "slot": "weapon",
      "grade": "rare",
      "stat": "agi",
      "damage": 13,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "onHitPoison:30:3:2"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "독사의 이빨을 박아 넣은 칼. 명중 시 30% 확률로 독."
    },
    {
      "id": "wpn_bone_wand",
      "name": "뼈 지팡이",
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
      "description": "짐승 뼈를 엮어 만든 지팡이."
    },
    {
      "id": "wpn_ember_rod",
      "name": "불씨 막대",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "wis",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "skillDamageBonus:2"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "끝에서 작은 불씨가 꺼지지 않는다. 스킬 피해 +2."
    },
    {
      "id": "wpn_star_staff",
      "name": "별빛 홀",
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
        "combatStartHeal:5"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "별빛이 깃든 홀. 전투 시작 시 HP 5 회복."
    },
    {
      "id": "arm_hide_vest",
      "name": "짐승 가죽 조끼",
      "slot": "armor",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "거칠게 무두질한 가죽 조끼."
    },
    {
      "id": "arm_scale_mail",
      "name": "비늘 갑옷",
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
      "description": "겹겹이 이은 비늘이 몸을 감싼다."
    },
    {
      "id": "arm_thorn_vest",
      "name": "가시 조끼",
      "slot": "armor",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "immune:poison"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "가시덩굴 즙에 담가 독에 강하다."
    },
    {
      "id": "arm_moonweave_robe",
      "name": "달빛 로브",
      "slot": "armor",
      "grade": "rare",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 20,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "combatStartHeal:3"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "달빛으로 짠 로브. 전투 시작 시 HP 3 회복."
    },
    {
      "id": "rng_warrior",
      "name": "전사의 반지",
      "slot": "ring",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 3
      },
      "effects": [
        "maxHp:10"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "최대 HP +10."
    },
    {
      "id": "rng_sage",
      "name": "현자의 반지",
      "slot": "ring",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "skillDamageBonus:1"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "스킬 피해 +1."
    },
    {
      "id": "rng_shadow",
      "name": "그림자 반지",
      "slot": "ring",
      "grade": "rare",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [
        "critRange:19"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "치명타 범위 19~20."
    },
    {
      "id": "nck_bone_charm",
      "name": "뼈 부적",
      "slot": "necklace",
      "grade": "common",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "basicAttackBonus:2"
      ],
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "기본공격 피해 +2."
    },
    {
      "id": "nck_antidote_pendant",
      "name": "해독 펜던트",
      "slot": "necklace",
      "grade": "uncommon",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "immune:poison"
      ],
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "독에 걸리지 않는다."
    },
    {
      "id": "nck_owl_eye",
      "name": "부엉이 눈 목걸이",
      "slot": "necklace",
      "grade": "rare",
      "stat": null,
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:2",
        "critRange:19"
      ],
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "탐험 판정 +2, 치명타 범위 19~20."
    },
    {
      "id": "wpn_u_whisper_heart",
      "name": "속삭임의 심장",
      "slot": "weapon",
      "grade": "unique",
      "stat": "wis",
      "damage": 18,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "cooldownReduction:1"
      ],
      "unique": true,
      "starter": false,
      "price": 40,
      "description": "숲의 속삭임이 깃든 지팡이. 모든 스킬 대기시간 -1."
    },
    {
      "id": "wpn_u_alpha_fang",
      "name": "우두머리의 송곳니",
      "slot": "weapon",
      "grade": "unique",
      "stat": "agi",
      "damage": 17,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "onHitPoison:40:4:3"
      ],
      "unique": true,
      "starter": false,
      "price": 40,
      "description": "숲 늑대 무리 우두머리의 송곳니. 명중 시 40% 확률로 독."
    },
    {
      "id": "arm_u_ancient_bark",
      "name": "고목의 수호",
      "slot": "armor",
      "grade": "unique",
      "stat": null,
      "damage": null,
      "damageReduction": 3,
      "maxHp": 30,
      "statBonus": {},
      "effects": [
        "immune:poison"
      ],
      "unique": true,
      "starter": false,
      "price": 40,
      "description": "천 년 묵은 고목의 껍질. 독에 걸리지 않는다."
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
      "maxHp": 90,
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
      "maxHp": 90,
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
      "traitDesc": "피해를 주는 스킬의 피해량 ×1.25."
    }
  ]
};
