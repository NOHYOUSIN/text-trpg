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
    },
    {
      "id": "skl_battle_roar",
      "name": "투지의 포효",
      "grade": "uncommon",
      "class": "warrior",
      "type": "buff",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "momentum:2",
        "fast"
      ],
      "description": "포효로 스스로를 몰아붙인다. 기세가 즉시 2 쌓인다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_crushing_blow",
      "name": "분쇄의 일격",
      "grade": "rare",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 1.6
        }
      ],
      "cooldown": 3,
      "effects": [
        "consumeMomentum:3"
      ],
      "description": "쌓인 기세를 한꺼번에 실어 내려찍는다. 기세를 모두 쓰고, 쓴 기세 × 3만큼 피해가 더해진다."
    },
    {
      "id": "skl_iron_wall",
      "name": "철벽",
      "grade": "uncommon",
      "class": "warrior",
      "type": "defense",
      "stat": "str",
      "baseEffect": 2,
      "scaling": [
        {
          "stat": "str",
          "coef": 0.3
        }
      ],
      "cooldown": 4,
      "effects": [
        "shield:2",
        "reflect:2:2",
        "fast"
      ],
      "description": "방패를 단단히 세운다. 2턴 동안 보호막을 두르고, 그동안 맞으면 피해를 되돌려 준다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_shield_return",
      "name": "방패 되받아치기",
      "grade": "uncommon",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 1.4
        }
      ],
      "cooldown": 3,
      "effects": [
        "consumeShield:1"
      ],
      "description": "막아 낸 힘을 그대로 되돌려 친다. 남은 보호막을 모두 쓰고, 그만큼 피해가 더해진다."
    },
    {
      "id": "skl_berserk_oath",
      "name": "광전사의 맹세",
      "grade": "common",
      "class": "warrior",
      "type": "buff",
      "stat": "str",
      "baseEffect": 2,
      "scaling": [
        {
          "stat": "str",
          "coef": 0.5
        }
      ],
      "cooldown": 4,
      "effects": [
        "hpCost:10",
        "empower:2",
        "fast"
      ],
      "description": "자신의 피를 대가로 힘을 끌어낸다. 최대 HP의 10%를 잃고, 2턴 동안 주는 피해가 늘어난다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_blood_strike",
      "name": "선혈의 일격",
      "grade": "rare",
      "class": "warrior",
      "type": "attack",
      "stat": "str",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "str",
          "coef": 1.8
        }
      ],
      "cooldown": 2,
      "effects": [
        "missingHp:0.2",
        "lifesteal:10"
      ],
      "description": "흘린 피만큼 무거워진 일격. 잃은 HP가 많을수록 피해가 커지고, 준 피해 일부를 회복한다."
    },
    {
      "id": "skl_hack",
      "name": "난도질",
      "grade": "common",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 1.5
        }
      ],
      "cooldown": 3,
      "effects": [
        "bleed:2"
      ],
      "description": "얕지만 여러 번 베어 피를 흘리게 한다. 출혈 2를 쌓는다."
    },
    {
      "id": "skl_tear_wounds",
      "name": "상처 찢기",
      "grade": "rare",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 1.6
        }
      ],
      "cooldown": 3,
      "effects": [
        "consumeBleed:4"
      ],
      "description": "벌어진 상처를 한 번에 찢어발긴다. 대상의 출혈을 모두 터뜨려, 남은 출혈 × 4만큼 피해가 더해진다."
    },
    {
      "id": "skl_mark_vitals",
      "name": "급소 노리기",
      "grade": "uncommon",
      "class": "rogue",
      "type": "buff",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "critBoost:2:2",
        "fast"
      ],
      "description": "숨을 고르고 급소만 노린다. 2턴 동안 치명타 범위가 2 넓어진다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_assassinate",
      "name": "암살",
      "grade": "rare",
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
        "executeCrit:50"
      ],
      "description": "숨이 가빠진 적의 급소를 정확히 꿰뚫는다. 대상의 HP가 절반 이하면 반드시 치명타가 된다."
    },
    {
      "id": "skl_toxic_haze",
      "name": "독무",
      "grade": "common",
      "class": "rogue",
      "type": "debuff",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "poison:3:3",
        "weaken:0.7:1",
        "fast"
      ],
      "description": "독 섞인 연기를 흩뿌린다. 독 3 × 3턴과 약화 1턴을 건다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_exploit",
      "name": "약점 공략",
      "grade": "uncommon",
      "class": "rogue",
      "type": "attack",
      "stat": "agi",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "agi",
          "coef": 1.6
        }
      ],
      "cooldown": 3,
      "effects": [
        "perStatus:4"
      ],
      "description": "상대가 약해진 틈을 파고든다. 대상에게 걸린 상태이상(독·출혈·약화·취약·기절) 1개마다 피해가 4 더해진다."
    },
    {
      "id": "skl_condense",
      "name": "마력 응축",
      "grade": "uncommon",
      "class": "mage",
      "type": "buff",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 4,
      "effects": [
        "chantBoost:0.5",
        "fast"
      ],
      "description": "영창 중에 마력을 한 번 더 눌러 담는다. 이번 영창 배율이 0.5 높아진다(×1.75 → ×2.25). 영창한 상태에서만 쓸 수 있고, 영창을 풀지 않는다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_meteor",
      "name": "별똥별",
      "grade": "rare",
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
        "perChant:2"
      ],
      "description": "긴 영창 끝에 하늘에서 별을 떨어뜨린다. 이번 전투에서 영창한 횟수 × 2만큼 피해가 더해진다."
    },
    {
      "id": "skl_binding_hex",
      "name": "속박의 주문",
      "grade": "common",
      "class": "mage",
      "type": "debuff",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": 5,
      "effects": [
        "weaken:0.7:1",
        "vulnerable:1.3:1",
        "fast"
      ],
      "description": "보이지 않는 사슬로 상대를 옭아맨다. 약화와 취약을 1턴씩 건다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_fracture",
      "name": "균열 폭발",
      "grade": "uncommon",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 1.6
        }
      ],
      "cooldown": 3,
      "effects": [
        "perStatus:5"
      ],
      "description": "흔들리는 상대의 틈을 마력으로 찢는다. 대상에게 걸린 상태이상 1종마다 피해가 5 더해진다."
    },
    {
      "id": "skl_crystal_ward",
      "name": "수정 방벽",
      "grade": "uncommon",
      "class": "mage",
      "type": "defense",
      "stat": "wis",
      "baseEffect": 3,
      "scaling": [
        {
          "stat": "wis",
          "coef": 0.4
        }
      ],
      "cooldown": 4,
      "effects": [
        "shield:3",
        "fast"
      ],
      "description": "수정 같은 장벽이 3턴 동안 몸을 감싼다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_ward_burst",
      "name": "장벽 파쇄",
      "grade": "rare",
      "class": "mage",
      "type": "attack",
      "stat": "wis",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "wis",
          "coef": 1.8
        }
      ],
      "cooldown": 3,
      "effects": [
        "consumeShield:1.5"
      ],
      "description": "두르고 있던 장벽을 깨뜨려 파편을 쏟아붓는다. 남은 보호막 × 1.5만큼 피해가 더해진다."
    },
    {
      "id": "skl_preparedness",
      "name": "준비성",
      "grade": "uncommon",
      "class": null,
      "type": "passive",
      "stat": "main",
      "baseEffect": 0,
      "scaling": [],
      "cooldown": null,
      "effects": [
        "consumableBoost:30",
        "freeItemUse:1"
      ],
      "description": "늘 쓸 것을 손 닿는 곳에 둔다. 소모품 효과가 30% 커지고, 전투마다 첫 소모품 사용은 행동을 쓰지 않는다."
    },
    {
      "id": "skl_second_breath",
      "name": "되살아나는 숨",
      "grade": "uncommon",
      "class": null,
      "type": "heal",
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
        "regen:3",
        "fast"
      ],
      "description": "깊은 숨으로 몸을 다시 일으킨다. 3턴 동안 내 턴마다 HP를 회복한다. 행동을 쓰지 않는다."
    },
    {
      "id": "skl_rally_strike",
      "name": "회심의 반격",
      "grade": "rare",
      "class": null,
      "type": "attack",
      "stat": "main",
      "baseEffect": 0,
      "scaling": [
        {
          "stat": "main",
          "coef": 1.8
        }
      ],
      "cooldown": 3,
      "effects": [
        "perHealed:0.3"
      ],
      "description": "버티며 되찾은 기운을 한 번에 쏟아 낸다. 이번 전투에서 회복한 HP × 0.3만큼 피해가 더해진다."
    }
  ],
  "equipment": [
    {
      "id": "wpn_sword_basic",
      "name": "낡은 검",
      "slot": "weapon",
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
      "zone": 1,
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
    },
    {
      "id": "wpn2_warden_axe",
      "name": "숲지기의 도끼",
      "slot": "weapon",
      "zone": 2,
      "grade": "common",
      "stat": "str",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "숲지기들이 길을 낼 때 쓰던 도끼."
    },
    {
      "id": "wpn2_moss_maul",
      "name": "이끼 망치",
      "slot": "weapon",
      "zone": 2,
      "grade": "common",
      "stat": "str",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "손잡이까지 이끼가 덮인 묵직한 망치."
    },
    {
      "id": "wpn2_sentinel_hammer",
      "name": "파수석 망치",
      "slot": "weapon",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 3
      },
      "effects": [
        "onHit@20>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "파수석의 돌 조각을 박아 넣은 망치."
    },
    {
      "id": "wpn2_warden_longsword",
      "name": "숲지기 장검",
      "slot": "weapon",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 3
      },
      "effects": [
        "onBattleStart>shield:4:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "숲지기 문장이 새겨진 장검."
    },
    {
      "id": "wpn2_thorn_spear",
      "name": "가시뿔 창",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "onHit>bleed:1",
        "crit:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "가시뿔 사슴의 뿔을 깎아 만든 창."
    },
    {
      "id": "wpn2_bear_greataxe",
      "name": "곰 사냥꾼의 대도끼",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "lowHp>basicAttackBonus:4"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "곰 사냥꾼들이 대대로 물려 쓰던 도끼."
    },
    {
      "id": "wpn2_hunter_shortbow",
      "name": "사냥꾼 단궁",
      "slot": "weapon",
      "zone": 2,
      "grade": "common",
      "stat": "agi",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "마을 사냥꾼들이 쓰던 작은 활."
    },
    {
      "id": "wpn2_bat_fang_dagger",
      "name": "박쥐 이빨 단검",
      "slot": "weapon",
      "zone": 2,
      "grade": "common",
      "stat": "agi",
      "damage": 5,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "박쥐 이빨로 날을 세운 단검."
    },
    {
      "id": "wpn2_barbed_bow",
      "name": "미늘 화살 활",
      "slot": "weapon",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "onHit@25>bleed:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "홀린 사냥꾼들이 쓰던 활. 화살촉에 미늘이 달렸다."
    },
    {
      "id": "wpn2_shadow_wing",
      "name": "그림자 날개 단검",
      "slot": "weapon",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 6,
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
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "박쥐 날개뼈로 만든 가벼운 단검."
    },
    {
      "id": "wpn2_chief_longbow",
      "name": "사냥꾼 우두머리의 장궁",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [
        "crit:1",
        "onCrit>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "급소만 노리던 우두머리의 활."
    },
    {
      "id": "wpn2_bat_lord_fang",
      "name": "박쥐 군주의 송곳니",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "박쥐 군주의 송곳니를 박은 단검."
    },
    {
      "id": "wpn2_moss_staff",
      "name": "이끼 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "common",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "이끼가 마력을 머금은 지팡이."
    },
    {
      "id": "wpn2_watch_staff",
      "name": "망루 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "common",
      "stat": "wis",
      "damage": 5,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "망루 나무의 가지로 만든 지팡이."
    },
    {
      "id": "wpn2_shade_lantern",
      "name": "망령 등불 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "onSkill@30>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "끝에 푸른 등불이 매달린 지팡이."
    },
    {
      "id": "wpn2_herbalist_staff",
      "name": "약초꾼의 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "onSkill>heal:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "약초 향이 배어 있는 지팡이."
    },
    {
      "id": "wpn2_whisper_crystal",
      "name": "속삭임 수정 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 4
      },
      "effects": [
        "skillDamageBonus:3",
        "onSkill@30>cooldown:-1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "수정 속에서 희미한 목소리가 울린다."
    },
    {
      "id": "wpn2_rite_scepter",
      "name": "숲지기 의식 홀",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 4
      },
      "effects": [
        "onBattleStart>shield:6:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "숲지기들이 의식 때 들던 홀."
    },
    {
      "id": "wpn2_u_warden_oath",
      "name": "녹슨 숲지기의 맹세",
      "slot": "weapon",
      "zone": 2,
      "grade": "unique",
      "stat": "str",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 5
      },
      "effects": [
        "onBattleStart>shield:8:2",
        "reflect:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": true,
      "starter": false,
      "price": 80,
      "description": "녹슨 숲지기가 끝까지 놓지 않았던 검."
    },
    {
      "id": "wpn2_u_crown_horn",
      "name": "가시왕관의 뿔",
      "slot": "weapon",
      "zone": 2,
      "grade": "unique",
      "stat": "agi",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 5
      },
      "effects": [
        "onHit>bleed:2",
        "onKill>heal:12"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": true,
      "starter": false,
      "price": 80,
      "description": "가시왕관의 뿔 끝을 날로 세웠다."
    },
    {
      "id": "wpn2_u_shaman_staff",
      "name": "이끼 무녀의 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "unique",
      "stat": "wis",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 5
      },
      "effects": [
        "cooldownReduction:1",
        "onSkill@30>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": true,
      "starter": false,
      "price": 80,
      "description": "수십 개의 목소리가 깃든 지팡이."
    },
    {
      "id": "arm2_hunter_leather",
      "name": "사냥꾼 가죽옷",
      "slot": "armor",
      "zone": 2,
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 5,
      "statBonus": {},
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "사냥꾼 마을에서 쓰던 가죽옷."
    },
    {
      "id": "arm2_warden_chain",
      "name": "숲지기 사슬옷",
      "slot": "armor",
      "zone": 2,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 0,
      "statBonus": {},
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "녹이 슬었지만 튼튼하다."
    },
    {
      "id": "arm2_moss_plate",
      "name": "이끼 덮인 판금",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "onHurt@25>shield:4:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "이끼가 충격을 흡수한다."
    },
    {
      "id": "arm2_bat_cloak",
      "name": "박쥐 가죽 망토",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "움직임을 흐리게 만드는 망토."
    },
    {
      "id": "arm2_shade_shroud",
      "name": "망령의 수의",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {
        "wis": 1
      },
      "effects": [
        "immune:weaken"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "서늘한 기운이 마음을 붙든다."
    },
    {
      "id": "arm2_sentinel_mail",
      "name": "파수석 갑주",
      "slot": "armor",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "reflect:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "파수석 조각을 엮은 갑옷."
    },
    {
      "id": "arm2_herb_robe",
      "name": "약초 향 로브",
      "slot": "armor",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "onTurnStart>heal:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "약초꾼이 지은 로브."
    },
    {
      "id": "arm2_u_bear_hide",
      "name": "늙은 곰의 가죽",
      "slot": "armor",
      "zone": 2,
      "grade": "unique",
      "stat": "str",
      "damage": null,
      "damageReduction": 4,
      "maxHp": 15,
      "statBonus": {},
      "effects": [
        "immune:bleed",
        "lowHp>basicAttackBonus:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": true,
      "starter": false,
      "price": 80,
      "description": "늙은 그루터기 곰의 두꺼운 가죽."
    },
    {
      "id": "rng2_strength",
      "name": "힘의 고리",
      "slot": "ring",
      "zone": 2,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 5
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "단단한 쇠고리."
    },
    {
      "id": "rng2_agility",
      "name": "날쌘 고리",
      "slot": "ring",
      "zone": 2,
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 5
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "가벼운 은고리."
    },
    {
      "id": "rng2_wisdom",
      "name": "지혜의 고리",
      "slot": "ring",
      "zone": 2,
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 5
      },
      "effects": [],
      "requirement": null,
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "이끼빛 돌을 박은 고리."
    },
    {
      "id": "rng2_warden_seal",
      "name": "숲지기 인장 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 6
      },
      "effects": [
        "reflect:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "숲지기 대장의 인장."
    },
    {
      "id": "rng2_horn_ring",
      "name": "사냥꾼의 뿔 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 6
      },
      "effects": [
        "crit:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "사슴뿔을 깎아 만든 반지."
    },
    {
      "id": "rng2_moss_ring",
      "name": "이끼 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 6
      },
      "effects": [
        "skillDamageBonus:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "이끼가 반지를 감싸 자란다."
    },
    {
      "id": "rng2_thorn_ring",
      "name": "가시 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 8
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "가시가 손가락을 파고든다."
    },
    {
      "id": "rng2_dusk_ring",
      "name": "어스름 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 8
      },
      "effects": [
        "evade:1",
        "onCrit>empower:3:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "빛을 삼키는 검은 반지."
    },
    {
      "id": "rng2_shaman_ring",
      "name": "무녀의 이끼 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 8
      },
      "effects": [
        "onSkill>heal:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "무녀가 끼던 반지. 속삭임이 들린다."
    },
    {
      "id": "nck2_tooth_necklace",
      "name": "사냥꾼의 이빨 목걸이",
      "slot": "necklace",
      "zone": 2,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "basicAttackBonus:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 11
      },
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "사냥감의 이빨을 꿴 목걸이."
    },
    {
      "id": "nck2_dried_flower",
      "name": "마른 꽃 부적",
      "slot": "necklace",
      "zone": 2,
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 11
      },
      "unique": false,
      "starter": false,
      "price": 35,
      "description": "제사터에 놓였던 꽃을 말린 부적."
    },
    {
      "id": "nck2_warden_badge",
      "name": "숲지기 휘장",
      "slot": "necklace",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>shield:5:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "숲지기의 은빛 휘장."
    },
    {
      "id": "nck2_bat_wing",
      "name": "박쥐 날개 목걸이",
      "slot": "necklace",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "작은 박쥐 날개를 말려 꿴 목걸이."
    },
    {
      "id": "nck2_clot_charm",
      "name": "지혈 부적",
      "slot": "necklace",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "immune:bleed"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "가시뿔 수액을 굳혀 만든 부적. 피가 멎는다."
    },
    {
      "id": "nck2_warning_charm",
      "name": "경고의 부적",
      "slot": "necklace",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "immune:weaken",
        "immune:vulnerable"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "\"돌아가라\"는 글귀가 새겨진 부적."
    },
    {
      "id": "nck2_thornhorn",
      "name": "가시뿔 목걸이",
      "slot": "necklace",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "crit:1",
        "onCrit>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "가시뿔 조각을 꿴 목걸이."
    },
    {
      "id": "nck_fervor",
      "name": "격전의 목걸이",
      "slot": "necklace",
      "zone": 1,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>momentum:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "싸움이 시작되면 피가 끓는다."
    },
    {
      "id": "rng_rage",
      "name": "분노의 반지",
      "slot": "ring",
      "zone": 1,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "momentumMax:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "분노가 끝없이 차오른다."
    },
    {
      "id": "arm_riposte_chain",
      "name": "반격의 사슬갑옷",
      "slot": "armor",
      "zone": 1,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "whileShield>reflect:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "보호막 너머로 칼날이 튀어나온다."
    },
    {
      "id": "rng_guardian",
      "name": "수호의 반지",
      "slot": "ring",
      "zone": 1,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "onShieldBreak>damage:6"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "깨진 방패의 파편이 적에게 박힌다."
    },
    {
      "id": "wpn_bloodied_axe",
      "name": "피에 젖은 도끼",
      "slot": "weapon",
      "zone": 1,
      "grade": "uncommon",
      "stat": "str",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "lowHp>basicAttackBonus:3",
        "onKill>heal:6"
      ],
      "requirement": {
        "stat": "str",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "마른 피가 날에 엉겨 붙은 도끼."
    },
    {
      "id": "nck_survivor",
      "name": "생존자의 목걸이",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "lowHp>damageReduction:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "죽음 앞에서 몇 번이고 살아 돌아온 자의 목걸이."
    },
    {
      "id": "wpn2_momentum_blade",
      "name": "기세의 대검",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "onHurt@50>momentum:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "맞을수록 손에 감기는 대검."
    },
    {
      "id": "arm2_struggle_plate",
      "name": "투쟁의 흉갑",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "fullMomentum>damageReduction:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "기세가 오를수록 단단해지는 흉갑."
    },
    {
      "id": "wpn2_shield_sword",
      "name": "방패검",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": 8,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [
        "whileShield>basicAttackBonus:4"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "날 옆에 작은 방패가 붙은 검."
    },
    {
      "id": "arm2_rebound_plate",
      "name": "되받이 판금",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "reflect:2",
        "whileShield>reflect:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "충격을 그대로 되돌려 주는 판금."
    },
    {
      "id": "rng2_berserker",
      "name": "광전사의 고리",
      "slot": "ring",
      "zone": 2,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 8
      },
      "effects": [
        "lowHp>skillDamageBonus:5"
      ],
      "requirement": {
        "stat": "str",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "피를 흘릴수록 뜨거워지는 고리."
    },
    {
      "id": "arm2_blood_mail",
      "name": "피의 갑주",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "onKill>heal:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "쓰러뜨린 적의 기운을 빨아들이는 갑옷."
    },
    {
      "id": "rng_crimson",
      "name": "선혈 반지",
      "slot": "ring",
      "zone": 1,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "onHit@30>bleed:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "끼고 휘두르면 상처가 잘 아물지 않는다."
    },
    {
      "id": "nck_blood_hook",
      "name": "피 갈고리 목걸이",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "ifBleeding>basicAttackBonus:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "피 냄새를 따라 칼끝이 이끌린다."
    },
    {
      "id": "wpn_keen_dagger",
      "name": "예리한 단검",
      "slot": "weapon",
      "zone": 1,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "crit:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "머리카락도 갈라질 만큼 날이 서 있다."
    },
    {
      "id": "nck_assassin_mark",
      "name": "암살자의 표식",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onCrit>vulnerable:1.3:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "급소를 찌를 때마다 표식이 새겨진다."
    },
    {
      "id": "rng_viper",
      "name": "독사의 반지",
      "slot": "ring",
      "zone": 1,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "poisonBonus:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "독사 비늘로 감싼 반지."
    },
    {
      "id": "nck_disarray",
      "name": "교란의 부적",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "ifDebuffed>skillDamageBonus:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "흔들리는 적을 놓치지 않는다."
    },
    {
      "id": "wpn2_serrated_dagger",
      "name": "톱니 단검",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [
        "onHit>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "톱니 날이 상처를 넓힌다."
    },
    {
      "id": "arm2_blood_scent",
      "name": "피 냄새 망토",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "ifBleeding>skillDamageBonus:4"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "피 냄새가 사냥 본능을 깨운다."
    },
    {
      "id": "rng2_first_blood",
      "name": "선수의 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 8
      },
      "effects": [
        "onFirstStrike>critBoost:2:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "먼저 움직인 자가 급소를 가진다."
    },
    {
      "id": "arm2_raider_leather",
      "name": "급습자의 경갑",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 5,
      "statBonus": {},
      "effects": [
        "onCrit>heal:4"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "급소를 찌를 때마다 숨이 트인다."
    },
    {
      "id": "wpn2_venom_bow",
      "name": "독침 단궁",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [
        "onHit@40>poison:4:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "화살촉마다 독이 발라져 있다."
    },
    {
      "id": "arm2_smoke_cloak",
      "name": "연막 망토",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>weaken:0.7:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "펼치는 순간 연기가 피어오른다."
    },
    {
      "id": "rng_resonance",
      "name": "공명 반지",
      "slot": "ring",
      "zone": 1,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "chantBonus:0.15"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "끼고 있으면 영창이 반지에 울린다."
    },
    {
      "id": "nck_star_beads",
      "name": "별빛 염주",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onChant>empower:3:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "영창할 때마다 염주알이 하나씩 빛난다."
    },
    {
      "id": "wpn_cursed_rod",
      "name": "저주받은 홀",
      "slot": "weapon",
      "zone": 1,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "onSkill@50>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "스치기만 해도 기운이 빠지는 홀."
    },
    {
      "id": "nck_shackle",
      "name": "족쇄 부적",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "debuffDuration:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "한 번 걸린 저주가 쉽게 풀리지 않는다."
    },
    {
      "id": "rng_ward",
      "name": "장벽 반지",
      "slot": "ring",
      "zone": 1,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "shieldBonus:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "장벽에 한 겹이 더 덧대어진다."
    },
    {
      "id": "nck_crystal",
      "name": "결정 목걸이",
      "slot": "necklace",
      "zone": 1,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "whileShield>skillDamageBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "장벽이 빛날 때 마력이 날카로워진다."
    },
    {
      "id": "wpn2_condense_staff",
      "name": "응축의 홀",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 4
      },
      "effects": [
        "chantBonus:0.25"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "마력을 끝까지 눌러 담는 홀."
    },
    {
      "id": "arm2_chanter_robe",
      "name": "영창자의 로브",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {
        "wis": 1
      },
      "effects": [
        "onChant>cooldown:-1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "영창 소리에 맞춰 로브가 떨린다."
    },
    {
      "id": "rng2_order",
      "name": "질서의 반지",
      "slot": "ring",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 8
      },
      "effects": [
        "ifDebuffed>skillDamageBonus:5"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "흐트러진 적을 바로잡듯 내리친다."
    },
    {
      "id": "arm2_binder_cloak",
      "name": "구속자의 망토",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "onHurt@25>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "맞을 때마다 보이지 않는 사슬이 튀어나간다."
    },
    {
      "id": "wpn2_crystal_staff",
      "name": "수정 지팡이",
      "slot": "weapon",
      "zone": 2,
      "grade": "rare",
      "stat": "wis",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 4
      },
      "effects": [
        "onBattleStart>shield:8:2",
        "whileShield>skillDamageBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "끝에 커다란 수정이 박힌 지팡이."
    },
    {
      "id": "arm2_crystal_robe",
      "name": "결정 로브",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "chantShieldBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "영창할 때 결정이 몸을 덮는다."
    },
    {
      "id": "nck_herb_pouch",
      "name": "약초꾼의 주머니",
      "slot": "necklace",
      "zone": 1,
      "grade": "uncommon",
      "stat": "main",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "consumableBoost:20"
      ],
      "requirement": {
        "stat": "main",
        "value": 5
      },
      "unique": false,
      "starter": false,
      "price": 30,
      "description": "쓸 만한 약초가 늘 손에 잡히는 주머니."
    },
    {
      "id": "rng_mending",
      "name": "회복의 고리",
      "slot": "ring",
      "zone": 1,
      "grade": "rare",
      "stat": "main",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onHeal>empower:2:1"
      ],
      "requirement": {
        "stat": "main",
        "value": 8
      },
      "unique": false,
      "starter": false,
      "price": 40,
      "description": "상처가 아물 때마다 손에 힘이 들어간다."
    },
    {
      "id": "arm2_renewal_robe",
      "name": "재생의 로브",
      "slot": "armor",
      "zone": 2,
      "grade": "uncommon",
      "stat": "main",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "onTurnStart>heal:2",
        "healBonus:20"
      ],
      "requirement": {
        "stat": "main",
        "value": 14
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "입고 있으면 상처가 조금씩 아문다."
    },
    {
      "id": "nck2_field_kit",
      "name": "응급 상자 목걸이",
      "slot": "necklace",
      "zone": 2,
      "grade": "rare",
      "stat": "main",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "freeItemUse:1",
        "consumableBoost:20"
      ],
      "requirement": {
        "stat": "main",
        "value": 17
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "작은 상자 안에 필요한 것이 다 들어 있다."
    },
    {
      "id": "wpn3_root_spear",
      "name": "뿌리 병사의 창",
      "slot": "weapon",
      "zone": 3,
      "grade": "common",
      "stat": "str",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "창대에 마른 뿌리가 감긴 왕국 병사의 창."
    },
    {
      "id": "wpn3_bronze_mace",
      "name": "청동 철퇴",
      "slot": "weapon",
      "zone": 3,
      "grade": "common",
      "stat": "str",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 4
      },
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "공방에서 찍어 낸 묵직한 철퇴."
    },
    {
      "id": "wpn3_knight_sword",
      "name": "기사단 장검",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 5
      },
      "effects": [
        "onBattleStart>shield:6:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "\"왕명이라면 경고도 베리라.\" 날에 맹세가 새겨져 있다."
    },
    {
      "id": "wpn3_guardian_hammer",
      "name": "파수기 망치",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 5
      },
      "effects": [
        "onHit@25>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "청동 파수기를 두드려 만들던 망치."
    },
    {
      "id": "wpn3_royal_greatsword",
      "name": "왕실 대검",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 6
      },
      "effects": [
        "crit:1",
        "onCrit>empower:4:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "왕의 의장대가 들던 대검. 금박이 아직 남아 있다."
    },
    {
      "id": "wpn3_root_cleaver",
      "name": "뿌리 가르개",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 5,
      "statBonus": {
        "str": 6
      },
      "effects": [
        "lowHp>basicAttackBonus:6"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "거대한 뿌리를 쪼개려고 벼린 도끼."
    },
    {
      "id": "wpn3_robber_dagger",
      "name": "도굴꾼 단검",
      "slot": "weapon",
      "zone": 3,
      "grade": "common",
      "stat": "agi",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "석관 틈을 비집는 데도 쓰는 짧은 칼."
    },
    {
      "id": "wpn3_aqueduct_crossbow",
      "name": "수로 경비의 석궁",
      "slot": "weapon",
      "zone": 3,
      "grade": "common",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 4
      },
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "수로를 지키던 경비가 쓰던 작은 석궁."
    },
    {
      "id": "wpn3_crow_knife",
      "name": "까마귀 깃 단도",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 5
      },
      "effects": [
        "onHit@25>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "손잡이에 까마귀 깃이 묶인 단도."
    },
    {
      "id": "wpn3_spore_darts",
      "name": "포자 투척침",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 5
      },
      "effects": [
        "onHit@25>poison:5:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "균류 정원의 포자를 바른 투척침."
    },
    {
      "id": "wpn3_royal_rapier",
      "name": "근위대 세검",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 6
      },
      "effects": [
        "evade:1",
        "crit:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "교대 박자에 맞춰 휘두르던 가는 검."
    },
    {
      "id": "wpn3_worm_fang",
      "name": "뿌리 벌레 송곳니",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 6
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "뿌리를 파먹던 벌레의 송곳니를 박은 단검."
    },
    {
      "id": "wpn3_priest_staff",
      "name": "사제의 지팡이",
      "slot": "weapon",
      "zone": 3,
      "grade": "common",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 4
      },
      "effects": [],
      "requirement": {
        "stat": "wis",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "대신전 사제들이 짚던 지팡이."
    },
    {
      "id": "wpn3_star_rod",
      "name": "천문대 측량봉",
      "slot": "weapon",
      "zone": 3,
      "grade": "common",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 4
      },
      "effects": [],
      "requirement": {
        "stat": "wis",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "별의 높이를 재던 청동 막대."
    },
    {
      "id": "wpn3_spore_censer",
      "name": "포자 향로",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 5
      },
      "effects": [
        "onSkill@30>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "흔들 때마다 흐린 포자가 피어오르는 향로."
    },
    {
      "id": "wpn3_drowned_tome",
      "name": "물에 젖은 마법서",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 5
      },
      "effects": [
        "skillDamageBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "번진 글씨 사이로 아직 주문이 읽힌다."
    },
    {
      "id": "wpn3_temple_scepter",
      "name": "대신전 의식 홀",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 6
      },
      "effects": [
        "onBattleStart>shield:10:2",
        "onSkill>heal:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "제단 앞에서 왕을 축복하던 홀."
    },
    {
      "id": "wpn3_dead_star",
      "name": "꺼진 별의 수정",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 6
      },
      "effects": [
        "skillDamageBonus:4",
        "onSkill@30>cooldown:-1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "\"성역의 별이 꺼졌다.\" 그날 떨어진 수정이라고 한다."
    },
    {
      "id": "wpn3_u_commander_blade",
      "name": "기사단장의 처형검",
      "slot": "weapon",
      "zone": 3,
      "grade": "unique",
      "stat": "str",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 7
      },
      "effects": [
        "onBattleStart>shield:12:2",
        "whileShield>basicAttackBonus:5"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": true,
      "starter": false,
      "price": 95,
      "description": "경고를 전하러 온 사절들의 목을 벤 검."
    },
    {
      "id": "wpn3_u_crow_talon",
      "name": "까마귀 손의 갈고리",
      "slot": "weapon",
      "zone": 3,
      "grade": "unique",
      "stat": "agi",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 7
      },
      "effects": [
        "crit:1",
        "evade:1",
        "onCrit>bleed:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": true,
      "starter": false,
      "price": 95,
      "description": "까마귀 손이 왕관을 노리며 갈아 온 갈고리 칼."
    },
    {
      "id": "wpn3_u_root_scepter",
      "name": "뿌리 왕의 홀",
      "slot": "weapon",
      "zone": 3,
      "grade": "unique",
      "stat": "wis",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 7
      },
      "effects": [
        "cooldownReduction:1",
        "onSkill@30>weaken:0.7:1",
        "onKill>heal:16"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": true,
      "starter": false,
      "price": 95,
      "description": "왕이 성역의 뿌리를 부르던 홀. 아직 맥박이 뛴다."
    },
    {
      "id": "arm3_root_mail",
      "name": "뿌리 엉킨 사슬옷",
      "slot": "armor",
      "zone": 3,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 10,
      "statBonus": {},
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "사슬 사이로 마른 뿌리가 엉켜 있다."
    },
    {
      "id": "arm3_robber_leather",
      "name": "도굴꾼 가죽옷",
      "slot": "armor",
      "zone": 3,
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 1,
      "maxHp": 10,
      "statBonus": {},
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "주머니가 잔뜩 달린 가죽옷."
    },
    {
      "id": "arm3_bronze_plate",
      "name": "청동 판갑",
      "slot": "armor",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 4,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "onHurt@25>shield:6:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "파수기 외판을 두드려 편 판갑."
    },
    {
      "id": "arm3_crow_cloak",
      "name": "까마귀 깃 망토",
      "slot": "armor",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "깃털이 소리를 삼킨다."
    },
    {
      "id": "arm3_noble_robe",
      "name": "망령 귀족의 예복",
      "slot": "armor",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 15,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "immune:vulnerable"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "연회장 의자에 걸려 있던 예복. 차갑다."
    },
    {
      "id": "arm3_royal_guard_plate",
      "name": "근위대 갑주",
      "slot": "armor",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 4,
      "maxHp": 15,
      "statBonus": {
        "str": 1
      },
      "effects": [
        "reflect:4"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "백 년째 교대를 서던 근위병의 갑주."
    },
    {
      "id": "arm3_priest_vestment",
      "name": "대사제의 제의",
      "slot": "armor",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 15,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "onTurnStart>heal:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "고해실에 남아 있던 대사제의 옷."
    },
    {
      "id": "arm3_u_devourer_bark",
      "name": "왕궁을 삼킨 뿌리의 껍질",
      "slot": "armor",
      "zone": 3,
      "grade": "unique",
      "stat": "main",
      "damage": null,
      "damageReduction": 5,
      "maxHp": 20,
      "statBonus": {},
      "effects": [
        "immune:bleed",
        "onTurnStart>heal:3"
      ],
      "requirement": {
        "stat": "main",
        "value": 26
      },
      "unique": true,
      "starter": false,
      "price": 95,
      "description": "왕궁을 통째로 조이던 뿌리의 껍질. 어느 직업이든 걸칠 수 있다."
    },
    {
      "id": "rng3_strength",
      "name": "왕국 병사의 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 8
      },
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "병사들이 입대할 때 받던 쇠반지."
    },
    {
      "id": "rng3_agility",
      "name": "수로 경비의 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 8
      },
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "물에 닳아 반들반들하다."
    },
    {
      "id": "rng3_wisdom",
      "name": "서기관의 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 8
      },
      "effects": [],
      "requirement": {
        "stat": "wis",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "도서관 서기관들이 끼던 은반지."
    },
    {
      "id": "rng3_knight_signet",
      "name": "기사단 인장 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 9
      },
      "effects": [
        "reflect:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "기사단 문장이 새겨진 인장 반지."
    },
    {
      "id": "rng3_crow_ring",
      "name": "까마귀 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 9
      },
      "effects": [
        "crit:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "도굴꾼끼리 알아보는 표식."
    },
    {
      "id": "rng3_star_ring",
      "name": "별빛 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 9
      },
      "effects": [
        "skillDamageBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "어둠 속에서 희미하게 빛난다."
    },
    {
      "id": "rng3_root_ring",
      "name": "뿌리 고리",
      "slot": "ring",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 11
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "손가락을 감은 뿌리가 피를 마신다."
    },
    {
      "id": "rng3_robber_king_ring",
      "name": "도굴왕의 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 11
      },
      "effects": [
        "evade:1",
        "onCrit>empower:4:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "석관에서 나온 반지. 원래 주인은 왕이었다."
    },
    {
      "id": "rng3_royal_seal",
      "name": "왕의 인장 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 11
      },
      "effects": [
        "onSkill>heal:5"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "\"무시하라.\" 그 서명에 찍힌 인장."
    },
    {
      "id": "nck3_knight_medal",
      "name": "기사단 훈장",
      "slot": "necklace",
      "zone": 3,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "basicAttackBonus:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "무릎 꿇은 기사의 가슴에 달려 있던 훈장."
    },
    {
      "id": "nck3_wish_charm",
      "name": "소원 쪽지 부적",
      "slot": "necklace",
      "zone": 3,
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 20
      },
      "unique": false,
      "starter": false,
      "price": 50,
      "description": "\"돌아가고 싶다.\" 쪽지를 접어 넣은 부적."
    },
    {
      "id": "nck3_guardian_core",
      "name": "파수기 핵 목걸이",
      "slot": "necklace",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>shield:8:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "식은 파수기 핵을 끈에 꿴 것. 아직 따뜻하다."
    },
    {
      "id": "nck3_mask_pendant",
      "name": "웃는 가면 펜던트",
      "slot": "necklace",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 1
      },
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "행렬의 가면을 작게 깎은 펜던트."
    },
    {
      "id": "nck3_purified_vial",
      "name": "정화수 병 목걸이",
      "slot": "necklace",
      "zone": 3,
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
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "되살린 샘물을 담은 작은 병."
    },
    {
      "id": "nck3_warden_letter",
      "name": "숲지기 편지 부적",
      "slot": "necklace",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "immune:stun",
        "immune:weaken"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "끝내 전해지지 못한 경고를 접어 넣은 부적."
    },
    {
      "id": "nck3_crow_feather",
      "name": "까마귀 깃털 목걸이",
      "slot": "necklace",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "crit:1",
        "onCrit>bleed:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "까마귀 손의 부하들이 목에 거는 깃털."
    },
    {
      "id": "wpn3_rampage_axe",
      "name": "폭주의 도끼",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 6
      },
      "effects": [
        "onHurt@50>momentum:1",
        "crit:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "맞을수록 손에 붙는 왕국 병사의 도끼."
    },
    {
      "id": "nck3_war_drum",
      "name": "전쟁 북 목걸이",
      "slot": "necklace",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>momentum:2",
        "fullMomentum>damageReduction:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "병영의 작은 북을 깎아 만든 목걸이. 두드리면 피가 끓는다."
    },
    {
      "id": "arm3_bastion_plate",
      "name": "성채 판금",
      "slot": "armor",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 4,
      "maxHp": 15,
      "statBonus": {},
      "effects": [
        "whileShield>reflect:5",
        "onShieldBreak>damage:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "성벽 돌을 덧댄 판금. 깨질 때 파편이 튄다."
    },
    {
      "id": "rng3_rampart_ring",
      "name": "방벽 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 9
      },
      "effects": [
        "whileShield>basicAttackBonus:5"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "성벽 수비대장이 끼던 반지."
    },
    {
      "id": "wpn3_blood_greatsword",
      "name": "선혈의 대검",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 5
      },
      "effects": [
        "lowHp>skillDamageBonus:6"
      ],
      "requirement": {
        "stat": "str",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "피를 머금을수록 무거워지는 대검."
    },
    {
      "id": "nck3_blood_oath",
      "name": "피의 맹세 목걸이",
      "slot": "necklace",
      "zone": 3,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "lowHp>damageReduction:3",
        "onKill>heal:14"
      ],
      "requirement": {
        "stat": "str",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "기사단장이 마지막 전투 전에 목에 걸었던 맹세."
    },
    {
      "id": "wpn3_barbed_kris",
      "name": "미늘 단검",
      "slot": "weapon",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 5
      },
      "effects": [
        "onHit@40>bleed:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "물결 모양 날에 미늘이 박혀 있다."
    },
    {
      "id": "rng3_hemorrhage_ring",
      "name": "출혈의 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 11
      },
      "effects": [
        "ifBleeding>skillDamageBonus:6",
        "ifBleeding>basicAttackBonus:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "붉게 녹슨 반지. 피 냄새를 맡으면 뜨거워진다."
    },
    {
      "id": "nck3_shadow_mark",
      "name": "그림자 사냥꾼의 표식",
      "slot": "necklace",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "crit:1",
        "onFirstStrike>critBoost:3:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "까마귀 손의 부하들이 첫 칼을 맡은 자에게 주던 표식."
    },
    {
      "id": "arm3_shadow_leather",
      "name": "그림자 경갑",
      "slot": "armor",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 10,
      "statBonus": {},
      "effects": [
        "onCrit>heal:6"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "도굴꾼들이 어둠 속 작업에 입던 경갑."
    },
    {
      "id": "wpn3_spore_crossbow",
      "name": "포자 석궁",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "agi",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 6
      },
      "effects": [
        "onHit@40>poison:6:2",
        "onCrit>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "화살촉마다 균류 정원의 포자를 묻힌 석궁."
    },
    {
      "id": "rng3_spore_venom_ring",
      "name": "포자 독 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 9
      },
      "effects": [
        "poisonBonus:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "반지 홈에 포자 가루가 차 있다."
    },
    {
      "id": "nck3_chant_bell",
      "name": "영창의 종 목걸이",
      "slot": "necklace",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "chantBonus:0.25"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "대신전 종을 녹여 만든 작은 종. 영창에 메아리가 실린다."
    },
    {
      "id": "rng3_echo_ring",
      "name": "메아리 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 9
      },
      "effects": [
        "onChant>empower:4:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "귀에 대면 왕국의 기도 소리가 들린다."
    },
    {
      "id": "wpn3_binding_rod",
      "name": "구속의 막대",
      "slot": "weapon",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 6
      },
      "effects": [
        "onSkill@30>weaken:0.7:1",
        "ifDebuffed>skillDamageBonus:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "옛 감옥 간수장이 죄수를 다스리던 막대."
    },
    {
      "id": "nck3_curse_locket",
      "name": "저주 로켓",
      "slot": "necklace",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "debuffDuration:1",
        "onSkill@25>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "망령 귀족의 초상이 든 로켓. 열면 한기가 흐른다."
    },
    {
      "id": "arm3_ward_robe",
      "name": "결계 로브",
      "slot": "armor",
      "zone": 3,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 15,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "chantShieldBonus:4",
        "whileShield>skillDamageBonus:3"
      ],
      "requirement": {
        "stat": "wis",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "숲지기 결계 문양을 수놓은 로브."
    },
    {
      "id": "rng3_crystal_ring",
      "name": "수정 결계 반지",
      "slot": "ring",
      "zone": 3,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 9
      },
      "effects": [
        "onBattleStart>shield:10:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "천문대 렌즈 조각을 박은 반지."
    },
    {
      "id": "arm3_mender_coat",
      "name": "치유사의 외투",
      "slot": "armor",
      "zone": 3,
      "grade": "rare",
      "stat": "main",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 20,
      "statBonus": {},
      "effects": [
        "healBonus:30",
        "onHeal>empower:3:1"
      ],
      "requirement": {
        "stat": "main",
        "value": 26
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "피난처 사람들이 은인에게 지어 준 외투."
    },
    {
      "id": "nck3_satchel_charm",
      "name": "약초 주머니 부적",
      "slot": "necklace",
      "zone": 3,
      "grade": "uncommon",
      "stat": "main",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "freeItemUse:1",
        "consumableBoost:20"
      ],
      "requirement": {
        "stat": "main",
        "value": 23
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "정원사가 버섯 사이에서 골라 준 약초를 담은 주머니."
    },
    {
      "id": "wpn4_megalith_club",
      "name": "거석 몽둥이",
      "slot": "weapon",
      "zone": 4,
      "grade": "common",
      "stat": "str",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 6
      },
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "거석 수호상의 팔을 깎아 만든 몽둥이."
    },
    {
      "id": "wpn4_expedition_axe",
      "name": "원정대 전투 도끼",
      "slot": "weapon",
      "zone": 4,
      "grade": "common",
      "stat": "str",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 6
      },
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "왕국 원정대가 성역의 나무를 베려고 가져온 도끼."
    },
    {
      "id": "wpn4_first_oak_maul",
      "name": "첫 나무 망치",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 7
      },
      "effects": [
        "onBattleStart>shield:8:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "첫 나무들이 스스로 떨어뜨린 가지로 만든 망치."
    },
    {
      "id": "wpn4_crystal_greatsword",
      "name": "수정 대검",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 7
      },
      "effects": [
        "onHit@25>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "날 전체가 수정으로 굳은 원정대 기사의 대검."
    },
    {
      "id": "wpn4_ancient_cleaver",
      "name": "태고의 가르개",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 8
      },
      "effects": [
        "crit:1",
        "onCrit>empower:5:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "거인의 뼈를 갈아 만든 날."
    },
    {
      "id": "wpn4_warden_glaive",
      "name": "숲지기 언월도",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 8,
      "statBonus": {
        "str": 8
      },
      "effects": [
        "lowHp>basicAttackBonus:8"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "봉인을 지키던 숲지기들의 긴 날."
    },
    {
      "id": "wpn4_star_knife",
      "name": "별빛 단도",
      "slot": "weapon",
      "zone": 4,
      "grade": "common",
      "stat": "agi",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 6
      },
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "나방 가루를 입혀 어둠 속에서 빛나는 단도."
    },
    {
      "id": "wpn4_expedition_bow",
      "name": "원정대 장궁",
      "slot": "weapon",
      "zone": 4,
      "grade": "common",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 6
      },
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "원정대 궁수들이 쓰던 긴 활."
    },
    {
      "id": "wpn4_wolf_fang_blade",
      "name": "태고의 늑대 이빨 칼",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 7
      },
      "effects": [
        "onHit@25>bleed:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "늙은 늑대가 남긴 이빨을 박은 칼."
    },
    {
      "id": "wpn4_moth_darts",
      "name": "나방 가루 투척침",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 7
      },
      "effects": [
        "onHit@25>poison:7:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "여왕의 가루를 묻힌 투척침."
    },
    {
      "id": "wpn4_crystal_rapier",
      "name": "수정 세검",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 8
      },
      "effects": [
        "evade:1",
        "crit:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "굳은 결투에서 빼낸 기사의 세검."
    },
    {
      "id": "wpn4_scale_blade",
      "name": "비늘 날",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 8
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "파수꾼의 허물에서 떨어진 비늘을 간 날."
    },
    {
      "id": "wpn4_first_branch",
      "name": "첫 나무의 가지",
      "slot": "weapon",
      "zone": 4,
      "grade": "common",
      "stat": "wis",
      "damage": 6,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 6
      },
      "effects": [],
      "requirement": {
        "stat": "wis",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "숨 쉬는 나무에서 떨어진 가지."
    },
    {
      "id": "wpn4_star_rod4",
      "name": "별자리 지팡이",
      "slot": "weapon",
      "zone": 4,
      "grade": "common",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 6
      },
      "effects": [],
      "requirement": {
        "stat": "wis",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "구덩이의 별자리를 새긴 지팡이."
    },
    {
      "id": "wpn4_moth_lantern",
      "name": "나방 등불",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 7
      },
      "effects": [
        "onSkill@30>weaken:0.7:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "별빛 나방이 갇혀 빛나는 등불."
    },
    {
      "id": "wpn4_warning_tablet",
      "name": "경고 석판",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 7
      },
      "effects": [
        "skillDamageBonus:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "첫 경고 비석에서 떨어진 작은 석판. 손에 쥐면 말이 들린다."
    },
    {
      "id": "wpn4_seal_staff",
      "name": "봉인의 지팡이",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 8
      },
      "effects": [
        "onBattleStart>shield:12:2",
        "onSkill>heal:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "봉인석 조각을 박은 지팡이."
    },
    {
      "id": "wpn4_fallen_star_orb",
      "name": "되살린 별의 구슬",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 8
      },
      "effects": [
        "skillDamageBonus:5",
        "onSkill@30>cooldown:-1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "떨어지던 별을 붙잡아 만든 구슬."
    },
    {
      "id": "wpn4_u_gate_maul",
      "name": "문지기의 거석 망치",
      "slot": "weapon",
      "zone": 4,
      "grade": "unique",
      "stat": "str",
      "damage": 10,
      "damageReduction": 1,
      "maxHp": 0,
      "statBonus": {
        "str": 9
      },
      "effects": [
        "onBattleStart>shield:16:2",
        "whileShield>basicAttackBonus:6"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": true,
      "starter": false,
      "price": 110,
      "description": "거석의 문 한 조각을 통째로 휘두른다."
    },
    {
      "id": "wpn4_u_star_rapier",
      "name": "꺼진 별의 세검",
      "slot": "weapon",
      "zone": 4,
      "grade": "unique",
      "stat": "agi",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 9
      },
      "effects": [
        "crit:1",
        "evade:1",
        "onCrit>bleed:4"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": true,
      "starter": false,
      "price": 110,
      "description": "왕자가 훔친 별 조각을 박은 세검. 아직 희미하게 빛난다."
    },
    {
      "id": "wpn4_u_first_warden_staff",
      "name": "첫 숲지기의 지팡이",
      "slot": "weapon",
      "zone": 4,
      "grade": "unique",
      "stat": "wis",
      "damage": 10,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 9
      },
      "effects": [
        "cooldownReduction:1",
        "onSkill@30>vulnerable:1.3:1",
        "onKill>heal:20"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": true,
      "starter": false,
      "price": 110,
      "description": "가장 먼저 경고를 듣고 남은 자의 지팡이."
    },
    {
      "id": "arm4_crystal_mail",
      "name": "수정 사슬옷",
      "slot": "armor",
      "zone": 4,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 15,
      "statBonus": {},
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "고리마다 수정이 돋은 사슬옷."
    },
    {
      "id": "arm4_moth_silk",
      "name": "나방 비단옷",
      "slot": "armor",
      "zone": 4,
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 2,
      "maxHp": 15,
      "statBonus": {},
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "별빛 나방 고치에서 뽑은 비단."
    },
    {
      "id": "arm4_megalith_plate",
      "name": "거석 판갑",
      "slot": "armor",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 5,
      "maxHp": 15,
      "statBonus": {},
      "effects": [
        "onHurt@25>shield:8:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "거석 조각을 덧댄 판갑."
    },
    {
      "id": "arm4_wolf_pelt",
      "name": "태고의 늑대 가죽",
      "slot": "armor",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "늙은 늑대의 털가죽. 따뜻하다."
    },
    {
      "id": "arm4_warden_robe",
      "name": "숲지기 예복",
      "slot": "armor",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 20,
      "statBonus": {
        "wis": 2
      },
      "effects": [
        "immune:weaken"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "쉼터 벽에 걸려 있던 숲지기의 예복."
    },
    {
      "id": "arm4_expedition_plate",
      "name": "원정대 기사 갑주",
      "slot": "armor",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 5,
      "maxHp": 20,
      "statBonus": {
        "str": 2
      },
      "effects": [
        "reflect:5"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "왕자를 따르던 기사단의 갑주."
    },
    {
      "id": "arm4_starlight_vestment",
      "name": "별빛 제의",
      "slot": "armor",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 20,
      "statBonus": {
        "wis": 4
      },
      "effects": [
        "onTurnStart>heal:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "별자리를 수놓은 제의."
    },
    {
      "id": "arm4_u_warden_scale",
      "name": "파수꾼의 비늘 갑주",
      "slot": "armor",
      "zone": 4,
      "grade": "unique",
      "stat": "main",
      "damage": null,
      "damageReduction": 6,
      "maxHp": 25,
      "statBonus": {},
      "effects": [
        "immune:stun",
        "onTurnStart>heal:4"
      ],
      "requirement": {
        "stat": "main",
        "value": 35
      },
      "unique": true,
      "starter": false,
      "price": 110,
      "description": "파수꾼이 벗어 둔 비늘로 엮은 갑주. 어느 직업이든 걸칠 수 있다."
    },
    {
      "id": "rng4_strength",
      "name": "거석의 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 11
      },
      "effects": [],
      "requirement": {
        "stat": "str",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "거석 조각을 깎은 묵직한 반지."
    },
    {
      "id": "rng4_agility",
      "name": "바람결 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "common",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 11
      },
      "effects": [],
      "requirement": {
        "stat": "agi",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "고요의 숲에서만 바람 소리가 나는 반지."
    },
    {
      "id": "rng4_wisdom",
      "name": "별빛 고리",
      "slot": "ring",
      "zone": 4,
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 11
      },
      "effects": [],
      "requirement": {
        "stat": "wis",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "별 조각을 박은 은고리."
    },
    {
      "id": "rng4_gate_ring",
      "name": "문지기 인장",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 12
      },
      "effects": [
        "reflect:4"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "거석의 문 문자가 새겨진 인장."
    },
    {
      "id": "rng4_pack_ring",
      "name": "무리의 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 12
      },
      "effects": [
        "crit:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "늑대 무리의 털을 엮어 감은 반지."
    },
    {
      "id": "rng4_tongue_ring",
      "name": "수많은 언어의 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 12
      },
      "effects": [
        "skillDamageBonus:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "안쪽에 같은 말이 여러 언어로 새겨져 있다."
    },
    {
      "id": "rng4_source_ring",
      "name": "근원의 고리",
      "slot": "ring",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 14
      },
      "effects": [
        "lifesteal:10"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "근원의 뿌리 한 가닥이 감긴 반지. 쓸수록 따뜻해진다."
    },
    {
      "id": "rng4_prince_ring",
      "name": "왕자의 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 14
      },
      "effects": [
        "evade:1",
        "onCrit>empower:5:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "\"돌아갈 날을 위해.\" 안쪽에 그렇게 새겨져 있다."
    },
    {
      "id": "rng4_seal_ring",
      "name": "봉인의 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 14
      },
      "effects": [
        "onSkill>heal:6"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "봉인석 조각을 박은 반지."
    },
    {
      "id": "nck4_wolf_tooth",
      "name": "늙은 늑대의 이빨",
      "slot": "necklace",
      "zone": 4,
      "grade": "common",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "basicAttackBonus:4"
      ],
      "requirement": {
        "stat": "str",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "늙은 늑대가 남긴 이빨."
    },
    {
      "id": "nck4_pond_coin",
      "name": "연못 동전 목걸이",
      "slot": "necklace",
      "zone": 4,
      "grade": "common",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "exploreBonus:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 29
      },
      "unique": false,
      "starter": false,
      "price": 65,
      "description": "하늘 연못에서 건진 동전을 꿴 목걸이."
    },
    {
      "id": "nck4_seal_shard",
      "name": "봉인석 목걸이",
      "slot": "necklace",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>shield:10:2"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "제자리에 박지 못한 봉인석 조각."
    },
    {
      "id": "nck4_moth_wing",
      "name": "나방 날개 목걸이",
      "slot": "necklace",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 2
      },
      "effects": [
        "evade:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "별빛 나방 여왕의 날개 조각."
    },
    {
      "id": "nck4_silent_bell",
      "name": "울리지 않는 종",
      "slot": "necklace",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "immune:poison",
        "immune:bleed"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "필요한 자에게만 울리는 작은 종."
    },
    {
      "id": "nck4_warden_bundle",
      "name": "숲지기의 이끼 꾸러미",
      "slot": "necklace",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "immune:stun",
        "immune:weaken"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "숲지기들이 파수꾼에게 바치던 이끼 꾸러미."
    },
    {
      "id": "nck4_crystal_feather",
      "name": "수정 깃털",
      "slot": "necklace",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "crit:1",
        "onCrit>bleed:4"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "수정으로 굳은 까마귀 깃털. 까마귀 손의 잔당이 남겼다."
    },
    {
      "id": "wpn4_tide_hammer",
      "name": "해일 망치",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 8
      },
      "effects": [
        "onHurt@50>momentum:1",
        "crit:1"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "맞을수록 해일처럼 불어나는 힘."
    },
    {
      "id": "nck4_war_horn",
      "name": "태고의 뿔 나팔",
      "slot": "necklace",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "onBattleStart>momentum:2",
        "fullMomentum>damageReduction:3"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "늑대 우두머리의 뿔로 만든 나팔."
    },
    {
      "id": "arm4_bastion_megalith",
      "name": "거석 성채 갑주",
      "slot": "armor",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 5,
      "maxHp": 20,
      "statBonus": {},
      "effects": [
        "whileShield>reflect:6",
        "onShieldBreak>damage:14"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "거석 원의 돌판을 덧댄 갑주."
    },
    {
      "id": "rng4_bulwark_ring",
      "name": "방벽의 문지기 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 12
      },
      "effects": [
        "whileShield>basicAttackBonus:6"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "문지기를 잠재우던 숲지기의 반지."
    },
    {
      "id": "wpn4_last_stand_blade",
      "name": "최후의 대검",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "str",
      "damage": 8,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 7
      },
      "effects": [
        "lowHp>skillDamageBonus:8"
      ],
      "requirement": {
        "stat": "str",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "굳은 결투의 숲지기가 쥐고 있던 대검."
    },
    {
      "id": "nck4_survivor_oath",
      "name": "살아남은 자의 맹세",
      "slot": "necklace",
      "zone": 4,
      "grade": "rare",
      "stat": "str",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "str": 3
      },
      "effects": [
        "lowHp>damageReduction:4",
        "onKill>heal:18"
      ],
      "requirement": {
        "stat": "str",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "돌아간 쌍둥이가 남긴 맹세."
    },
    {
      "id": "wpn4_rending_claw",
      "name": "찢는 발톱",
      "slot": "weapon",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": 7,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 7
      },
      "effects": [
        "onHit@40>bleed:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "태고의 늑대 발톱을 박은 장갑 칼."
    },
    {
      "id": "rng4_bloodmoon_ring",
      "name": "핏빛 달 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 14
      },
      "effects": [
        "ifBleeding>skillDamageBonus:8",
        "ifBleeding>basicAttackBonus:4"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "출혈을 보면 붉게 빛나는 반지."
    },
    {
      "id": "nck4_first_strike_mark",
      "name": "첫 칼의 표식",
      "slot": "necklace",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 3
      },
      "effects": [
        "crit:1",
        "onFirstStrike>critBoost:4:2"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "원정대 척후가 달던 표식."
    },
    {
      "id": "arm4_scout_leather",
      "name": "척후의 경갑",
      "slot": "armor",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 15,
      "statBonus": {},
      "effects": [
        "onCrit>heal:8"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "원정대 척후가 입던 가벼운 갑옷."
    },
    {
      "id": "wpn4_moth_crossbow",
      "name": "나방 가루 석궁",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "agi",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 8
      },
      "effects": [
        "onHit@40>poison:8:2",
        "onCrit>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "agi",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "여왕의 가루를 화살촉에 바른 석궁."
    },
    {
      "id": "rng4_dust_ring",
      "name": "가루 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "agi",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "agi": 12
      },
      "effects": [
        "poisonBonus:3"
      ],
      "requirement": {
        "stat": "agi",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "반지 홈에 나방 가루가 가득하다."
    },
    {
      "id": "nck4_star_chant",
      "name": "별의 영창 목걸이",
      "slot": "necklace",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "chantBonus:0.25"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "꺼진 별의 조각을 꿴 목걸이. 영창에 별빛이 실린다."
    },
    {
      "id": "rng4_tongues_echo",
      "name": "메아리 언어 반지",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 12
      },
      "effects": [
        "onChant>empower:5:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "수정 미로의 메아리를 가둔 반지."
    },
    {
      "id": "wpn4_binding_star",
      "name": "별을 묶는 홀",
      "slot": "weapon",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": 9,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 8
      },
      "effects": [
        "onSkill@30>weaken:0.7:1",
        "ifDebuffed>skillDamageBonus:6"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "봉인 해제 주문을 거꾸로 새긴 홀."
    },
    {
      "id": "nck4_hex_locket",
      "name": "원정대 마도사의 로켓",
      "slot": "necklace",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "debuffDuration:1",
        "onSkill@30>vulnerable:1.3:1"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "원정대 마도사가 품고 있던 로켓."
    },
    {
      "id": "arm4_seal_robe",
      "name": "봉인의 로브",
      "slot": "armor",
      "zone": 4,
      "grade": "rare",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 20,
      "statBonus": {
        "wis": 3
      },
      "effects": [
        "chantShieldBonus:6",
        "whileShield>skillDamageBonus:4"
      ],
      "requirement": {
        "stat": "wis",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "봉인석 문양을 수놓은 로브."
    },
    {
      "id": "rng4_crystal_ward",
      "name": "수정 결계 고리",
      "slot": "ring",
      "zone": 4,
      "grade": "uncommon",
      "stat": "wis",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {
        "wis": 12
      },
      "effects": [
        "onBattleStart>shield:14:2"
      ],
      "requirement": {
        "stat": "wis",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "수정 동굴의 결정으로 만든 고리."
    },
    {
      "id": "arm4_healer_mantle",
      "name": "숲지기 치유사의 망토",
      "slot": "armor",
      "zone": 4,
      "grade": "rare",
      "stat": "main",
      "damage": null,
      "damageReduction": 3,
      "maxHp": 25,
      "statBonus": {},
      "effects": [
        "healBonus:35",
        "onHeal>empower:4:1"
      ],
      "requirement": {
        "stat": "main",
        "value": 35
      },
      "unique": false,
      "starter": false,
      "price": 95,
      "description": "숲지기들이 지친 자를 덮어 주던 망토."
    },
    {
      "id": "nck4_supply_charm",
      "name": "원정대 보급 부적",
      "slot": "necklace",
      "zone": 4,
      "grade": "uncommon",
      "stat": "main",
      "damage": null,
      "damageReduction": 0,
      "maxHp": 0,
      "statBonus": {},
      "effects": [
        "freeItemUse:1",
        "consumableBoost:25"
      ],
      "requirement": {
        "stat": "main",
        "value": 32
      },
      "unique": false,
      "starter": false,
      "price": 80,
      "description": "원정대 보급관이 차고 있던 부적."
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
    },
    {
      "id": "con_essence_str",
      "name": "정수(힘)",
      "effect": "statUp:str",
      "amount": 1,
      "maxStack": 3,
      "price": null,
      "description": "쓰러뜨린 적에게서 얻은 힘의 결정. 마시면 힘이 영구히 1 오른다. 화면 이름은 \"<적 이름>의 <essence>\"로 바뀐다.",
      "starter": false
    },
    {
      "id": "con_essence_agi",
      "name": "정수(민첩)",
      "effect": "statUp:agi",
      "amount": 1,
      "maxStack": 3,
      "price": null,
      "description": "쓰러뜨린 적에게서 얻은 힘의 결정. 마시면 민첩이 영구히 1 오른다. 화면 이름은 \"<적 이름>의 <essence>\"로 바뀐다.",
      "starter": false
    },
    {
      "id": "con_essence_wis",
      "name": "정수(지혜)",
      "effect": "statUp:wis",
      "amount": 1,
      "maxStack": 3,
      "price": null,
      "description": "쓰러뜨린 적에게서 얻은 힘의 결정. 마시면 지혜가 영구히 1 오른다. 화면 이름은 \"<적 이름>의 <essence>\"로 바뀐다.",
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
