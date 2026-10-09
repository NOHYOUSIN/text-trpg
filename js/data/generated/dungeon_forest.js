// 자동 생성 파일. 직접 수정하지 않는다.
export const dungeonForestData = {
  "id": "forest",
  "name": "속삭이는 숲",
  "description": "낮은 속삭임이 끊이지 않는 오래된 숲. 가장 깊은 곳에 속삭임의 근원이 있다고 한다.",
  "zones": [
    {
      "zone": 1,
      "name": "숲 초입",
      "rounds": 12,
      "midBossRound": 6,
      "bossRound": 12,
      "midBossId": "ene_tusk",
      "bossId": "ene_whisper_warden",
      "entryText": "햇빛이 잎 사이로 드문드문 내려온다. 어디선가 낮은 속삭임이 바람에 섞여 들린다."
    },
    {
      "zone": 2,
      "name": "깊은 숲",
      "rounds": 13,
      "midBossRound": 7,
      "bossRound": 13,
      "midBossId": null,
      "bossId": null,
      "entryText": "(2구역 콘텐츠는 이후 작성)"
    },
    {
      "zone": 3,
      "name": "어두운 숲",
      "rounds": 14,
      "midBossRound": 7,
      "bossRound": 14,
      "midBossId": null,
      "bossId": null,
      "entryText": "(3구역 콘텐츠는 이후 작성)"
    }
  ],
  "places": [
    {
      "id": "plc_mossy_path",
      "zone": 1,
      "name": "이끼 낀 오솔길",
      "description": "발밑이 푹신하다. 길 양옆으로 낮은 덤불이 이어진다.",
      "contentWeights": {
        "combat": 40,
        "event": 40,
        "rest": 15,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 10,
      "enemyPool": [],
      "eventPool": []
    },
    {
      "id": "plc_rustling_bush",
      "zone": 1,
      "name": "수상한 덤불",
      "description": "바람도 없는데 덤불이 흔들린다.",
      "contentWeights": {
        "combat": 70,
        "event": 30,
        "rest": 0,
        "treasure": 0,
        "shop": 0
      },
      "surpriseChance": 40,
      "enemyPool": [
        "ene_starving_wolf",
        "ene_venom_spider"
      ],
      "eventPool": [
        "evt_snare_trap"
      ]
    },
    {
      "id": "plc_collapsed_hut",
      "zone": 1,
      "name": "무너진 오두막",
      "description": "지붕이 반쯤 내려앉은 오두막에서 희미한 연기가 오른다.",
      "contentWeights": {
        "combat": 30,
        "event": 60,
        "rest": 10,
        "treasure": 0,
        "shop": 0
      },
      "surpriseChance": 10,
      "enemyPool": [
        "ene_forest_bandit"
      ],
      "eventPool": [
        "evt_injured_traveler",
        "evt_mossy_chest"
      ]
    },
    {
      "id": "plc_clear_spring",
      "zone": 1,
      "name": "맑은 샘터",
      "description": "물소리가 들린다. 바닥이 훤히 비치는 샘이다.",
      "contentWeights": {
        "combat": 10,
        "event": 30,
        "rest": 60,
        "treasure": 0,
        "shop": 0
      },
      "surpriseChance": 0,
      "enemyPool": [
        "ene_moss_goblin"
      ],
      "eventPool": [
        "evt_whispering_voice"
      ]
    },
    {
      "id": "plc_mossy_altar",
      "zone": 1,
      "name": "이끼 덮인 제단",
      "description": "이끼에 뒤덮인 돌 제단에 오래된 문양이 남아 있다.",
      "contentWeights": {
        "combat": 20,
        "event": 60,
        "rest": 0,
        "treasure": 20,
        "shop": 0
      },
      "surpriseChance": 0,
      "enemyPool": [],
      "eventPool": [
        "evt_old_altar"
      ]
    },
    {
      "id": "plc_hollow_oak",
      "zone": 1,
      "name": "속이 빈 고목",
      "description": "거대한 고목의 밑동이 동굴처럼 뚫려 있다.",
      "contentWeights": {
        "combat": 40,
        "event": 40,
        "rest": 0,
        "treasure": 20,
        "shop": 0
      },
      "surpriseChance": 20,
      "enemyPool": [
        "ene_venom_spider"
      ],
      "eventPool": [
        "evt_mossy_chest"
      ]
    },
    {
      "id": "plc_dying_campfire",
      "zone": 1,
      "name": "꺼져 가는 모닥불",
      "description": "누군가 막 떠난 듯한 모닥불 옆에 짐 보따리가 놓여 있다.",
      "contentWeights": {
        "combat": 10,
        "event": 20,
        "rest": 30,
        "treasure": 0,
        "shop": 40
      },
      "surpriseChance": 0,
      "enemyPool": [
        "ene_forest_bandit"
      ],
      "eventPool": [
        "evt_toll_bandits"
      ]
    },
    {
      "id": "plc_beast_den",
      "zone": 1,
      "name": "짐승 굴 입구",
      "description": "비릿한 냄새가 풍긴다. 바닥에 짐승의 발자국이 어지럽다.",
      "contentWeights": {
        "combat": 80,
        "event": 20,
        "rest": 0,
        "treasure": 0,
        "shop": 0
      },
      "surpriseChance": 30,
      "enemyPool": [
        "ene_starving_wolf"
      ],
      "eventPool": [
        "evt_snare_trap"
      ]
    }
  ],
  "events": [
    {
      "id": "evt_mossy_chest",
      "zone": 1,
      "title": "이끼 낀 상자",
      "description": "나무 뿌리 사이에 작은 상자가 반쯤 묻혀 있다. 뚜껑 틈이 수상하게 반짝인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "force_lid",
          "order": 1,
          "text": "뚜껑을 억지로 비틀어 연다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "숨어 있던 가시에 손을 깊이 찔렸다.",
              "result": [
                "hp:-0.8"
              ]
            },
            "partial": {
              "text": "상자는 열렸지만 손등을 긁혔다.",
              "result": [
                "hp:-0.3",
                "gold:3"
              ]
            },
            "success": {
              "text": "뚜껑이 툭 열리고 안의 물건을 챙겼다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "inspect_gap",
          "order": 2,
          "text": "틈을 살펴 장치를 풀어 본다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "장치를 건드려 가시가 튀어나왔다.",
              "result": [
                "hp:-0.5"
              ]
            },
            "partial": {
              "text": "장치는 풀었지만 안은 거의 비어 있다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "숨은 장치를 풀자 바닥 칸이 드러났다.",
              "result": [
                "gold:6",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_chest",
          "order": 3,
          "text": "그냥 지나친다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "상자를 두고 길을 재촉한다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_injured_traveler",
      "zone": 1,
      "title": "다친 나그네",
      "description": "다리를 다친 나그네가 나무에 기대 앉아 있다. \"숲 깊은 곳은 가지 마시오…\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "tend_wound",
          "order": 1,
          "text": "상처를 치료해 준다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "붕대가 꼬여 오히려 시간만 허비했다.",
              "result": []
            },
            "partial": {
              "text": "나그네는 고맙다며 동전 몇 닢을 건넸다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "나그네는 고맙다며 품에서 낡은 부적을 꺼냈다.",
              "result": [
                "gold:3",
                "item:nck_lucky_charm"
              ]
            }
          }
        },
        {
          "id": "give_potion",
          "order": 2,
          "text": "회복약을 나눠 준다",
          "condition": [
            "item:con_potion"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"이 은혜는 잊지 않겠소.\" 나그네가 오래된 기술 하나를 일러 주었다.",
              "result": [
                "item:-con_potion",
                "skill:random",
                "flag:helpedInjuredTraveler"
              ]
            }
          }
        },
        {
          "id": "search_belongings",
          "order": 3,
          "text": "짐을 뒤진다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "나그네가 소리를 지르자 숲에서 도적이 뛰쳐나왔다.",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "동전 몇 닢만 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "나그네가 정신을 잃은 사이 짐을 털었다.",
              "result": [
                "gold:8",
                "flag:robbedInjuredTraveler"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_whispering_voice",
      "zone": 1,
      "title": "속삭이는 목소리",
      "description": "샘물 위로 누군가의 목소리가 속삭인다. 이름을 부르는 것 같기도 하다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "listen_voice",
          "order": 1,
          "text": "귀를 기울인다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "속삭임이 머릿속을 긁는다. 정신이 아득해진다.",
              "result": [
                "hp:-0.8"
              ]
            },
            "partial": {
              "text": "알아들을 수 없는 말이 맴돌다 사라졌다.",
              "result": []
            },
            "success": {
              "text": "속삭임이 오래된 기술 하나를 일러 주었다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "drink_spring",
          "order": 2,
          "text": "샘물을 마신다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "물이 쓰다. 속이 뒤집힌다.",
              "result": [
                "hp:-0.3"
              ]
            },
            "partial": {
              "text": "시원한 물이 목을 적신다.",
              "result": [
                "hp:0.5"
              ]
            },
            "success": {
              "text": "맑은 물이 온몸에 스며든다.",
              "result": [
                "hp:1.5"
              ]
            }
          }
        },
        {
          "id": "cover_ears",
          "order": 3,
          "text": "귀를 막고 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임을 등지고 걸음을 옮긴다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_toll_bandits",
      "zone": 1,
      "title": "길목의 도적",
      "description": "험상궂은 사내가 길을 막아선다. \"지나가려면 통행료를 내야지.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "pay_toll",
          "order": 1,
          "text": "통행료를 낸다 (골드 5)",
          "condition": [
            "gold:5"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "도적은 동전을 세어 보고 길을 비켜 주었다.",
              "result": [
                "gold:-5"
              ]
            }
          }
        },
        {
          "id": "fight_bandit",
          "order": 2,
          "text": "맞서 싸운다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "칼을 뽑아 든다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            }
          }
        },
        {
          "id": "sneak_around",
          "order": 3,
          "text": "덤불 속으로 몰래 돌아간다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "나뭇가지를 밟았다. 도적이 먼저 덮쳐 온다.",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "들키지 않고 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "도적의 등 뒤로 돌아가는 데 성공했다.",
              "result": [
                "fight:ene_forest_bandit:surprise"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_old_altar",
      "zone": 1,
      "title": "오래된 제단",
      "description": "제단 위 움푹 팬 자리에 녹슨 동전 몇 개가 놓여 있다. 무언가를 바치던 곳 같다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "pray_altar",
          "order": 1,
          "text": "무릎 꿇고 기도한다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "아무 일도 일어나지 않았다.",
              "result": []
            },
            "partial": {
              "text": "마음이 조금 가라앉는다.",
              "result": [
                "hp:0.5"
              ]
            },
            "success": {
              "text": "따스한 기운이 상처를 감싼다.",
              "result": [
                "hp:1.5"
              ]
            }
          }
        },
        {
          "id": "offer_gold",
          "order": 2,
          "text": "동전을 바친다 (골드 3)",
          "condition": [
            "gold:3"
          ],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "동전이 바닥으로 굴러떨어졌다. 아무 반응이 없다.",
              "result": [
                "gold:-3"
              ]
            },
            "partial": {
              "text": "제단이 희미하게 빛났다.",
              "result": [
                "gold:-3",
                "hp:1.0"
              ]
            },
            "success": {
              "text": "제단 아래 숨은 칸이 열렸다.",
              "result": [
                "gold:-3",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "take_coins",
          "order": 3,
          "text": "동전을 챙긴다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "손을 대는 순간 저주받은 듯 몸이 무거워졌다.",
              "result": [
                "gold:4",
                "hp:-1.0"
              ]
            },
            "partial": {
              "text": "동전을 챙겼지만 등골이 서늘하다.",
              "result": [
                "gold:4",
                "hp:-0.3"
              ]
            },
            "success": {
              "text": "녹슨 동전을 주머니에 넣었다.",
              "result": [
                "gold:4"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_snare_trap",
      "zone": 1,
      "title": "올가미 덫",
      "description": "발목에 무언가가 걸리는 순간 몸이 기우뚱한다. 사냥꾼의 올가미다.",
      "repeatable": true,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "wriggle_free",
          "order": 1,
          "text": "몸을 비틀어 빠져나온다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "줄이 더 조여 발목이 쓸렸다.",
              "result": [
                "hp:-0.6"
              ]
            },
            "partial": {
              "text": "한참 버둥거린 끝에 빠져나왔다.",
              "result": [
                "hp:-0.2"
              ]
            },
            "success": {
              "text": "재빨리 매듭을 풀고 빠져나왔다.",
              "result": []
            }
          }
        },
        {
          "id": "cut_rope",
          "order": 2,
          "text": "칼로 줄을 끊는다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "칼끝이 미끄러져 다리를 베었다.",
              "result": [
                "hp:-0.5"
              ]
            },
            "partial": {
              "text": "줄은 끊었지만 발목을 접질렸다.",
              "result": [
                "hp:-0.2"
              ]
            },
            "success": {
              "text": "줄을 끊고 올가미를 챙겼다.",
              "result": [
                "gold:2"
              ]
            }
          }
        }
      ]
    }
  ],
  "enemies": [
    {
      "id": "ene_starving_wolf",
      "zone": 1,
      "name": "굶주린 늑대",
      "rank": "normal",
      "hp": 3.5,
      "damage": 0.5,
      "agi": 0.6,
      "damageReduction": 0,
      "skills": [],
      "pattern": "default",
      "goldMin": 3,
      "goldMax": 5,
      "description": "갈비뼈가 드러난 늑대가 이빨을 드러낸다."
    },
    {
      "id": "ene_moss_goblin",
      "zone": 1,
      "name": "이끼 고블린",
      "rank": "normal",
      "hp": 4.0,
      "damage": 0.5,
      "agi": 0.3,
      "damageReduction": 0,
      "skills": [
        "eskl_sling_stone"
      ],
      "pattern": "default",
      "goldMin": 4,
      "goldMax": 6,
      "description": "온몸에 이끼를 두른 고블린이 돌팔매를 빙빙 돌린다."
    },
    {
      "id": "ene_venom_spider",
      "zone": 1,
      "name": "독거미",
      "rank": "normal",
      "hp": 4.0,
      "damage": 0.5,
      "agi": 0.4,
      "damageReduction": 0,
      "skills": [
        "eskl_venom_bite"
      ],
      "pattern": "default",
      "goldMin": 3,
      "goldMax": 5,
      "description": "손바닥만 한 거미가 나뭇가지에서 실을 타고 내려온다."
    },
    {
      "id": "ene_forest_bandit",
      "zone": 1,
      "name": "숲 도적",
      "rank": "normal",
      "hp": 4.5,
      "damage": 0.5,
      "agi": 0.4,
      "damageReduction": 0.1,
      "skills": [],
      "pattern": "default",
      "goldMin": 5,
      "goldMax": 6,
      "description": "가죽 조끼를 걸친 사내가 녹슨 칼을 겨눈다."
    },
    {
      "id": "ene_tusk",
      "zone": 1,
      "name": "엄니",
      "rank": "midboss",
      "hp": 8,
      "damage": 0.5,
      "agi": 0.2,
      "damageReduction": 0,
      "skills": [
        "eskl_charge",
        "eskl_roar"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 10,
      "description": "부러진 엄니를 단 늙은 멧돼지. 숲 초입의 골칫거리다."
    },
    {
      "id": "ene_whisper_warden",
      "zone": 1,
      "name": "속삭이는 수호목",
      "rank": "boss",
      "hp": 12,
      "damage": 0.6,
      "agi": 0,
      "damageReduction": 0.1,
      "skills": [
        "eskl_root_bind",
        "eskl_branch_slam"
      ],
      "pattern": "hpBelowHalf:eskl_branch_slam",
      "goldMin": 12,
      "goldMax": 15,
      "description": "속삭임의 근원. 뒤틀린 고목이 뿌리를 끌며 일어선다."
    }
  ],
  "enemySkills": [
    {
      "id": "eskl_sling_stone",
      "name": "돌팔매",
      "type": "attack",
      "baseEffect": 0.9,
      "cooldown": 3,
      "effects": [],
      "description": "빙빙 돌던 돌이 날아든다."
    },
    {
      "id": "eskl_venom_bite",
      "name": "독니",
      "type": "attack",
      "baseEffect": 0.4,
      "cooldown": 3,
      "effects": [
        "poison:0.2:2"
      ],
      "description": "독니가 살갗을 파고든다."
    },
    {
      "id": "eskl_charge",
      "name": "돌진",
      "type": "attack",
      "baseEffect": 1.0,
      "cooldown": 3,
      "effects": [],
      "description": "몸을 낮추고 들이받는다."
    },
    {
      "id": "eskl_roar",
      "name": "포효",
      "type": "debuff",
      "baseEffect": 0,
      "cooldown": 4,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "울부짖음에 몸이 움츠러든다."
    },
    {
      "id": "eskl_root_bind",
      "name": "뿌리 휘감기",
      "type": "attack",
      "baseEffect": 0.6,
      "cooldown": 4,
      "effects": [
        "stun:1"
      ],
      "description": "뿌리가 다리를 휘감는다."
    },
    {
      "id": "eskl_branch_slam",
      "name": "가지 내려치기",
      "type": "attack",
      "baseEffect": 1.4,
      "cooldown": 3,
      "effects": [],
      "description": "굵은 가지가 머리 위로 떨어진다."
    }
  ]
};
