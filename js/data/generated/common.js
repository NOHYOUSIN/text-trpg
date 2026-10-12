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
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 2.0
        }
      ],
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
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 1.8
        }
      ],
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
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 2.0
        }
      ],
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
      "baseEffect": 4,
      "scaling": [
        {
          "stat": "main",
          "coef": 0.8
        }
      ],
      "cooldown": 3,
      "effects": [],
      "description": "상처를 동여매 피를 멎게 하고 HP를 회복한다."
    },
    {
      "id": "skl_guard_stance",
      "name": "방어 태세",
      "grade": "common",
      "class": null,
      "type": "defense",
      "stat": "main",
      "baseEffect": 2,
      "scaling": [
        {
          "stat": "main",
          "coef": 0.3
        }
      ],
      "cooldown": 4,
      "effects": [
        "shield:2",
        "fast"
      ],
      "description": "방패를 앞세워 자세를 굳힌다. 2턴 동안 받는 피해를 보호막으로 막는다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_poison_dart",
      "name": "독침",
      "grade": "uncommon",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 2.0
        }
      ],
      "cooldown": 3,
      "effects": [
        "poison:3:3"
      ],
      "description": "독을 바른 침을 날린다. 독 3 × 3턴."
    },
    {
      "id": "skl_shield_bash",
      "name": "방패 치기",
      "grade": "uncommon",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 2.0
        }
      ],
      "cooldown": 3,
      "effects": [
        "stun:1"
      ],
      "description": "묵직하게 들이받아 상대를 휘청이게 한다. 기절 1턴."
    },
    {
      "id": "skl_frost_arrow",
      "name": "서리 화살",
      "grade": "uncommon",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 2.1
        }
      ],
      "cooldown": 3,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "차가운 화살이 상대의 움직임을 무디게 한다. 약화 2턴."
    },
    {
      "id": "skl_battle_rhythm",
      "name": "전투 감각",
      "grade": "uncommon",
      "class": "warrior",
      "type": "passive",
      "stat": "str",
      "baseEffect": 1,
      "scaling": [
        {
          "stat": "str",
          "coef": 0.2
        }
      ],
      "cooldown": null,
      "effects": [
        "basicAttackBonus:base"
      ],
      "description": "싸움의 흐름을 몸이 기억한다. 기본공격 피해가 늘어난다."
    },
    {
      "id": "skl_ground_cleave",
      "name": "대지 가르기",
      "grade": "rare",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 2.6
        }
      ],
      "cooldown": 2,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "땅을 가를 듯한 일격이 상대의 자세를 무너뜨린다. 취약 2턴."
    },
    {
      "id": "skl_shadow_raid",
      "name": "그림자 습격",
      "grade": "rare",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 2.4
        }
      ],
      "cooldown": 2,
      "effects": [
        "poison:4:3"
      ],
      "description": "그림자처럼 파고들어 독 묻은 칼날을 꽂는다. 독 4 × 3턴."
    },
    {
      "id": "skl_life_bloom",
      "name": "생명의 꽃",
      "grade": "rare",
      "class": null,
      "type": "heal",
      "stat": "main",
      "baseEffect": 6,
      "scaling": [
        {
          "stat": "main",
          "coef": 1.0
        }
      ],
      "cooldown": 2,
      "effects": [
        "cleanse"
      ],
      "description": "상처 위로 꽃이 피어나며 HP를 회복하고 상태이상을 씻어 낸다."
    },
    {
      "id": "skl_iron_skin",
      "name": "강철 피부",
      "grade": "rare",
      "class": "warrior",
      "type": "passive",
      "stat": "str",
      "baseEffect": 1,
      "scaling": [
        {
          "stat": "str",
          "coef": 0.1
        }
      ],
      "cooldown": null,
      "effects": [
        "damageReduction:base"
      ],
      "description": "단련된 몸이 충격을 흘려 낸다. 받는 피해가 줄어든다."
    },
    {
      "id": "skl_mana_flow",
      "name": "마력 순환",
      "grade": "rare",
      "class": "mage",
      "type": "passive",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": null,
      "effects": [
        "cooldownReduction:1"
      ],
      "description": "마력이 막힘없이 흐른다. 모든 스킬 쿨타임 -1(최소 1)."
    },
    {
      "id": "skl_heavy_swing",
      "name": "내리찍기",
      "grade": "common",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 2.2
        }
      ],
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
      "baseEffect": 1,
      "scaling": [
        {
          "stat": "str",
          "coef": 0.3
        }
      ],
      "cooldown": 4,
      "effects": [
        "empower:2",
        "fast"
      ],
      "description": "함성으로 기세를 끌어올린다. 2턴 동안 주는 피해가 늘어난다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_rending_strike",
      "name": "찢어발기기",
      "grade": "uncommon",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 2.1
        }
      ],
      "cooldown": 3,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "갑옷째 찢어 상대를 무방비로 만든다. 취약 2턴."
    },
    {
      "id": "skl_quick_slash",
      "name": "고속 베기",
      "grade": "common",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 2.0
        }
      ],
      "cooldown": 3,
      "effects": [],
      "description": "눈에 보이지 않을 만큼 빠르게 벤다."
    },
    {
      "id": "skl_smoke_bomb",
      "name": "연막",
      "grade": "common",
      "class": "rogue",
      "type": "debuff",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "weaken:0.7:2",
        "fast"
      ],
      "description": "연막을 터뜨려 상대의 힘을 빼앗는다. 2턴 동안 상대가 주는 피해 ×0.7. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_crippling_cut",
      "name": "힘줄 끊기",
      "grade": "uncommon",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 2.0
        }
      ],
      "cooldown": 3,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "힘줄을 노려 상대의 힘을 빼앗는다. 약화 2턴."
    },
    {
      "id": "skl_mark_weakness",
      "name": "급소 표시",
      "grade": "uncommon",
      "class": "rogue",
      "type": "debuff",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "vulnerable:1.3:3",
        "fast"
      ],
      "description": "약점을 짚어 표시를 남긴다. 3턴 동안 상대가 받는 피해 ×1.3. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_killer_instinct",
      "name": "살수의 본능",
      "grade": "rare",
      "class": "rogue",
      "type": "passive",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": null,
      "effects": [
        "crit:3"
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
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 2.0
        }
      ],
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
      "baseEffect": 2,
      "scaling": [
        {
          "stat": "wis",
          "coef": 0.3
        }
      ],
      "cooldown": 4,
      "effects": [
        "shield:2",
        "fast"
      ],
      "description": "마력의 장벽을 두른다. 2턴 동안 받는 피해를 보호막으로 막는다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_flame_burst",
      "name": "화염 폭발",
      "grade": "uncommon",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 2.2
        }
      ],
      "cooldown": 3,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "불꽃이 터지며 상대의 방어를 무너뜨린다. 취약 2턴."
    },
    {
      "id": "skl_hex",
      "name": "저주",
      "grade": "uncommon",
      "class": "mage",
      "type": "debuff",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "weaken:0.7:3",
        "fast"
      ],
      "description": "저주를 걸어 상대의 힘을 갉아먹는다. 3턴 동안 상대가 주는 피해 ×0.7. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_thunderbolt",
      "name": "낙뢰",
      "grade": "rare",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 2.6
        }
      ],
      "cooldown": 2,
      "effects": [
        "stun:1"
      ],
      "description": "하늘을 가르는 번개가 상대를 꿰뚫는다. 기절 1턴."
    },
    {
      "id": "skl_second_wind",
      "name": "숨 고르기",
      "grade": "common",
      "class": null,
      "type": "heal",
      "stat": "main",
      "baseEffect": 4,
      "scaling": [
        {
          "stat": "main",
          "coef": 0.8
        }
      ],
      "cooldown": 3,
      "effects": [],
      "description": "호흡을 가다듬어 기운을 되찾는다. HP를 회복한다."
    },
    {
      "id": "skl_resolve",
      "name": "결의",
      "grade": "uncommon",
      "class": null,
      "type": "buff",
      "stat": "main",
      "baseEffect": 2,
      "scaling": [
        {
          "stat": "main",
          "coef": 0.3
        }
      ],
      "cooldown": 4,
      "effects": [
        "empower:2",
        "fast"
      ],
      "description": "이를 악물고 기세를 올린다. 2턴 동안 주는 피해가 늘어난다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_sidestep",
      "name": "몸 피하기",
      "grade": "uncommon",
      "class": null,
      "type": "defense",
      "stat": "main",
      "baseEffect": 2,
      "scaling": [
        {
          "stat": "main",
          "coef": 0.3
        },
        {
          "stat": "agi",
          "coef": 0.1
        }
      ],
      "cooldown": 4,
      "effects": [
        "shield:2",
        "fast"
      ],
      "description": "공격의 흐름을 읽고 흘려 낸다. 2턴 동안 받는 피해를 보호막으로 막는다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_wrap_wounds",
      "name": "상처 동여매기",
      "grade": "uncommon",
      "class": null,
      "type": "heal",
      "stat": "main",
      "baseEffect": 5,
      "scaling": [
        {
          "stat": "main",
          "coef": 0.8
        }
      ],
      "cooldown": 3,
      "effects": [
        "cleanse"
      ],
      "description": "상처를 단단히 동여매고 독기를 짜낸다. HP를 회복하고 상태이상을 해제한다."
    },
    {
      "id": "skl_desperate_blow",
      "name": "필사의 일격",
      "grade": "rare",
      "class": null,
      "type": "attack",
      "stat": "main",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "main",
          "coef": 2.6
        }
      ],
      "cooldown": 2,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "모든 것을 건 일격이 상대의 빈틈을 연다. 취약 2턴."
    }
  ],
  "equipment": [
    {
      "id": "wpn_sword_basic",
      "name": "낡은 검",
      "slot": "weapon",
      "grade": "common",
      "stat": "str",
      "damage": 5,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 4,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 5,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 3,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onHit@20>bleed:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 2
      },
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
      "damage": 3,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 1
      },
      "effects": [],
      "requirement": null,
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
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
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
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onHit@20>poison:2:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "칼날에 가시덩굴 즙이 배어 있다."
    },
    {
      "id": "wpn_willow_staff",
      "name": "버드나무 지팡이",
      "slot": "weapon",
      "grade": "uncommon",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "onSkill@30>cooldown:-1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
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
      "damage": 8,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "onHit>shield:2:1",
        "reflect:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
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
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "onHit@25>poison:3:2",
        "onCrit>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
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
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "skillDamageBonus:2",
        "onSkill@25>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "달빛을 머금은 지팡이."
    },
    {
      "id": "arm_leather_basic",
      "name": "가죽 갑옷",
      "slot": "armor",
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "onHurt@25>shield:3:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
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
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "immune:poison",
        "onTurnStart>heal:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "살아 있는 나무껍질로 엮었다."
    },
    {
      "id": "rng_strength",
      "name": "힘의 반지",
      "slot": "ring",
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [],
      "requirement": null,
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
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [],
      "requirement": null,
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
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [],
      "requirement": null,
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
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "숲 사냥꾼들이 끼던 반지."
    },
    {
      "id": "rng_oak_heart",
      "name": "참나무 심장 반지",
      "slot": "ring",
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "참나무 심장을 깎아 만든 반지."
    },
    {
      "id": "nck_lucky_charm",
      "name": "행운 부적",
      "slot": "necklace",
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 2
      },
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "네잎클로버를 엮은 부적."
    },
    {
      "id": "nck_vigor",
      "name": "활력의 목걸이",
      "slot": "necklace",
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>heal:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "맥박처럼 따뜻하게 뛰는 목걸이."
    },
    {
      "id": "nck_wolf_fang",
      "name": "늑대 이빨 목걸이",
      "slot": "necklace",
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "crit:1",
        "onCrit>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "늑대 이빨을 꿴 목걸이."
    },
    {
      "id": "wpn_wood_club",
      "name": "나무 몽둥이",
      "slot": "weapon",
      "grade": "common",
      "stat": "str",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "lowHp>basicAttackBonus:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "두꺼운 날이 달린 도끼. 쥐고 있으면 든든하다."
    },
    {
      "id": "wpn_bear_hammer",
      "name": "곰 사냥 망치",
      "slot": "weapon",
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "onCrit>stun:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "곰의 두개골도 깬다는 망치."
    },
    {
      "id": "wpn_short_bow",
      "name": "짧은 활",
      "slot": "weapon",
      "grade": "common",
      "stat": "agi",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 5,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "onHit>bleed:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
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
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "onHit@30>poison:3:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "독사의 이빨을 박아 넣은 칼."
    },
    {
      "id": "wpn_bone_wand",
      "name": "뼈 지팡이",
      "slot": "weapon",
      "grade": "common",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "skillDamageBonus:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "끝에서 작은 불씨가 꺼지지 않는다."
    },
    {
      "id": "wpn_star_staff",
      "name": "별빛 홀",
      "slot": "weapon",
      "grade": "rare",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "onBattleStart>heal:5",
        "onSkill>heal:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "별빛이 깃든 홀."
    },
    {
      "id": "arm_hide_vest",
      "name": "짐승 가죽 조끼",
      "slot": "armor",
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
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
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "onBattleStart>shield:3:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
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
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "reflect:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "가시가 돋친 조끼."
    },
    {
      "id": "arm_moonweave_robe",
      "name": "달빛 로브",
      "slot": "armor",
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "onBattleStart>heal:3",
        "evade:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "달빛으로 짠 로브."
    },
    {
      "id": "rng_warrior",
      "name": "전사의 반지",
      "slot": "ring",
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {
        "str": 3
      },
      "effects": [
        "reflect:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "오래된 전사의 문장이 새겨진 반지."
    },
    {
      "id": "rng_sage",
      "name": "현자의 반지",
      "slot": "ring",
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "skillDamageBonus:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "현자의 문양이 새겨진 반지."
    },
    {
      "id": "rng_shadow",
      "name": "그림자 반지",
      "slot": "ring",
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [
        "crit:1",
        "onCrit>empower:2:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "그림자처럼 빛을 삼키는 반지."
    },
    {
      "id": "nck_bone_charm",
      "name": "뼈 부적",
      "slot": "necklace",
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "basicAttackBonus:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 2
      },
      "unique": false,
      "starter": false,
      "price": 20,
      "description": "짐승 뼈를 깎아 만든 부적."
    },
    {
      "id": "nck_antidote_pendant",
      "name": "해독 펜던트",
      "slot": "necklace",
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "immune:poison"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "해독초 향이 배어 있는 펜던트."
    },
    {
      "id": "nck_owl_eye",
      "name": "부엉이 눈 목걸이",
      "slot": "necklace",
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:2",
        "evade:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "어둠 속에서도 빛나는 부엉이 눈."
    },
    {
      "id": "wpn_u_whisper_heart",
      "name": "속삭임의 심장",
      "slot": "weapon",
      "grade": "unique",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "cooldownReduction:1",
        "onSkill@30>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": true,
      "starter": false,
      "price": 40,
      "description": "숲의 속삭임이 깃든 지팡이."
    },
    {
      "id": "wpn_u_alpha_fang",
      "name": "우두머리의 송곳니",
      "slot": "weapon",
      "grade": "unique",
      "stat": "agi",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "onHit>bleed:2",
        "onKill>heal:10"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": true,
      "starter": false,
      "price": 40,
      "description": "숲 늑대 무리 우두머리의 송곳니."
    },
    {
      "id": "arm_u_ancient_bark",
      "name": "고목의 수호",
      "slot": "armor",
      "grade": "unique",
      "stat": "str",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 15,
      "statBonus": {},
      "effects": [
        "immune:poison",
        "reflect:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": true,
      "starter": false,
      "price": 40,
      "description": "천 년 묵은 고목의 껍질."
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
      "description": "HP를 20 회복한다.",
      "starter": false
    },
    {
      "id": "con_bandage",
      "name": "붕대",
      "effect": "heal;cure:bleed",
      "amount": 10,
      "maxStack": 3,
      "price": 5,
      "description": "HP를 10 회복하고 출혈을 멎게 한다.",
      "starter": false
    },
    {
      "id": "con_antidote",
      "name": "해독초",
      "effect": "cure:poison",
      "amount": null,
      "maxStack": 3,
      "price": 6,
      "description": "독을 해제한다.",
      "starter": false
    },
    {
      "id": "con_whetstone",
      "name": "숫돌",
      "effect": "buff:basicAttackBonus:3",
      "amount": null,
      "maxStack": 3,
      "price": 8,
      "description": "이번 전투 동안 기본공격 피해 +3.",
      "starter": false
    },
    {
      "id": "con_mana_scroll",
      "name": "마력 두루마리",
      "effect": "damage",
      "amount": 25,
      "maxStack": 3,
      "price": null,
      "description": "마력이 담긴 두루마리. 펼치면 적에게 피해를 25 준다.",
      "starter": true
    },
    {
      "id": "con_elixir_str",
      "name": "힘의 영약",
      "effect": "statUp:str",
      "amount": 1,
      "maxStack": 3,
      "price": null,
      "description": "마시면 힘이 영구히 1 오른다.",
      "starter": false
    },
    {
      "id": "con_elixir_agi",
      "name": "민첩의 영약",
      "effect": "statUp:agi",
      "amount": 1,
      "maxStack": 3,
      "price": null,
      "description": "마시면 민첩이 영구히 1 오른다.",
      "starter": false
    },
    {
      "id": "con_elixir_wis",
      "name": "지혜의 영약",
      "effect": "statUp:wis",
      "amount": 1,
      "maxStack": 3,
      "price": null,
      "description": "마시면 지혜가 영구히 1 오른다.",
      "starter": false
    },
    {
      "id": "con_elixir_str2",
      "name": "진한 힘의 영약",
      "effect": "statUp:str",
      "amount": 2,
      "maxStack": 3,
      "price": null,
      "description": "마시면 힘이 영구히 2 오른다.",
      "starter": false
    },
    {
      "id": "con_elixir_agi2",
      "name": "진한 민첩의 영약",
      "effect": "statUp:agi",
      "amount": 2,
      "maxStack": 3,
      "price": null,
      "description": "마시면 민첩이 영구히 2 오른다.",
      "starter": false
    },
    {
      "id": "con_elixir_wis2",
      "name": "진한 지혜의 영약",
      "effect": "statUp:wis",
      "amount": 2,
      "maxStack": 3,
      "price": null,
      "description": "마시면 지혜가 영구히 2 오른다.",
      "starter": false
    }
  ],
  "classes": [
    {
      "id": "warrior",
      "name": "전사",
      "mainStat": "str",
      "maxHp": 70,
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
      "traitName": "기세",
      "traitDesc": "공격으로 피해를 받을 때마다 기세가 1 쌓인다(최대 5). 기본공격과 공격 스킬의 피해가 기세만큼 늘어난다(주사위 배율을 받지 않는 고정값). 전투가 끝나면 사라진다."
    },
    {
      "id": "rogue",
      "name": "도적",
      "mainStat": "agi",
      "maxHp": 65,
      "stats": {
        "str": 2,
        "agi": 5,
        "wis": 0
      },
      "startWeapon": "wpn_dagger_basic",
      "startArmor": "arm_hide_vest",
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
      "maxHp": 65,
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
        },
        {
          "id": "con_mana_scroll",
          "count": 2
        }
      ],
      "startGold": 5,
      "traitName": "영창",
      "traitDesc": "기본공격 대신 영창한다. 영창하는 동안 보호막을 두른다. 영창한 다음 행동의 기본공격·스킬 효과 ×1.75(피해·회복·방어·강화). 영창하지 않은 상태에서는 피해를 주는 행동을 할 수 없고, 회복·방어·강화·약화 스킬과 소모품은 바로 쓸 수 있다. 기절하면 영창이 풀린다."
    }
  ]
};
