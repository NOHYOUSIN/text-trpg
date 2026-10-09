// 자동 생성 파일. 직접 수정하지 않는다.
export const dungeonForestData = {
  "id": "forest",
  "name": "속삭이는 숲",
  "description": "낮은 속삭임이 끊이지 않는 오래된 숲. 가장 깊은 곳에 속삭임의 근원이 있다고 한다.",
  "zones": [
    {
      "zone": 1,
      "name": "숲 초입",
      "rounds": 20,
      "midBosses": [
        {
          "round": 10,
          "enemyId": "ene_tusk"
        }
      ],
      "bossRound": 20,
      "bossId": "ene_whisper_warden",
      "entryText": "햇빛이 잎 사이로 드문드문 내려온다. 어디선가 낮은 속삭임이 바람에 섞여 들린다."
    },
    {
      "zone": 2,
      "name": "깊은 숲",
      "rounds": 20,
      "midBosses": [],
      "bossRound": 20,
      "bossId": null,
      "entryText": "(2구역 콘텐츠는 이후 작성)"
    },
    {
      "zone": 3,
      "name": "어두운 숲",
      "rounds": 20,
      "midBosses": [],
      "bossRound": 20,
      "bossId": null,
      "entryText": "(3구역 콘텐츠는 이후 작성)"
    },
    {
      "zone": 4,
      "name": "속삭임의 근원",
      "rounds": 20,
      "midBosses": [],
      "bossRound": 20,
      "bossId": null,
      "entryText": "(4구역 콘텐츠는 이후 작성. 구역 이름은 임시)"
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
      "eventPool": [
        "evt_fallen_knight",
        "evt_mushroom_ring",
        "evt_lost_child",
        "evt_old_tracks",
        "evt_trail_marker",
        "evt_wandering_merchant",
        "evt_carved_stones",
        "evt_abandoned_cart",
        "evt_wounded_soldier",
        "evt_fog_bank",
        "evt_crow_flock",
        "evt_rotten_bridge",
        "evt_knight_spirit",
        "evt_wandering_swordsman",
        "evt_fallen_mage"
      ]
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
        "evt_snare_trap",
        "evt_wounded_wolf",
        "evt_spider_nest",
        "evt_goblin_toll",
        "evt_hollow_log",
        "evt_wolf_tracks",
        "evt_poison_flowers",
        "evt_fog_bank",
        "evt_mother_wolf",
        "evt_beast_movement"
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
        "evt_mossy_chest",
        "evt_hunter_cache",
        "evt_lost_child",
        "evt_storm_shelter",
        "evt_bandit_camp",
        "evt_hermit_hut",
        "evt_wounded_soldier",
        "evt_grateful_parent",
        "evt_hunter_return",
        "evt_ancient_tome",
        "evt_fallen_mage"
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
        "evt_whispering_voice",
        "evt_mushroom_ring",
        "evt_echoing_well",
        "evt_whisper_stone",
        "evt_rotten_bridge",
        "evt_glowing_moss",
        "evt_moonlit_pond",
        "evt_fog_bank",
        "evt_whisper_answer",
        "evt_forest_ascetic",
        "evt_fallen_mage"
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
        "evt_old_altar",
        "evt_fallen_knight",
        "evt_echoing_well",
        "evt_whisper_stone",
        "evt_crow_flock",
        "evt_goblin_shaman",
        "evt_carved_stones",
        "evt_strange_shrine",
        "evt_knight_spirit",
        "evt_whisper_answer",
        "evt_ancient_tome",
        "evt_shrine_trial"
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
        "evt_mossy_chest",
        "evt_hunter_cache",
        "evt_spider_nest",
        "evt_trail_marker",
        "evt_glowing_moss",
        "evt_hollow_log",
        "evt_poison_flowers",
        "evt_forest_ascetic"
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
        "evt_toll_bandits",
        "evt_wandering_merchant",
        "evt_storm_shelter",
        "evt_bandit_camp",
        "evt_drunk_bandit",
        "evt_abandoned_cart",
        "evt_grateful_parent",
        "evt_wandering_swordsman"
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
        "evt_snare_trap",
        "evt_wounded_wolf",
        "evt_goblin_toll",
        "evt_old_tracks",
        "evt_wolf_tracks",
        "evt_goblin_shaman",
        "evt_mother_wolf",
        "evt_hunter_return",
        "evt_beast_movement"
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
                "hp:-8"
              ]
            },
            "partial": {
              "text": "상자는 열렸지만 손등을 긁혔다.",
              "result": [
                "hp:-3",
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
                "hp:-5"
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
                "hp:-8"
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
                "hp:-3"
              ]
            },
            "partial": {
              "text": "시원한 물이 목을 적신다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "맑은 물이 온몸에 스며든다.",
              "result": [
                "hp:15"
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
                "hp:5"
              ]
            },
            "success": {
              "text": "따스한 기운이 상처를 감싼다.",
              "result": [
                "hp:15"
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
                "hp:10"
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
                "hp:-10"
              ]
            },
            "partial": {
              "text": "동전을 챙겼지만 등골이 서늘하다.",
              "result": [
                "gold:4",
                "hp:-3"
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
                "hp:-6"
              ]
            },
            "partial": {
              "text": "한참 버둥거린 끝에 빠져나왔다.",
              "result": [
                "hp:-2"
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
                "hp:-5"
              ]
            },
            "partial": {
              "text": "줄은 끊었지만 발목을 접질렸다.",
              "result": [
                "hp:-2"
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
    },
    {
      "id": "evt_hunter_cache",
      "zone": 1,
      "title": "사냥꾼의 은신처",
      "description": "쓰러진 통나무 아래에 누군가 감춰 둔 꾸러미가 보인다. 그 위에 낡은 쪽지가 꽂혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "search_bundle",
          "order": 1,
          "text": "꾸러미를 뒤진다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "꾸러미에 묶인 덫이 튀어 올라 손을 물었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "말린 고기와 동전 몇 닢이 들어 있었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "사냥꾼이 남긴 물건을 챙겼다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_note",
          "order": 2,
          "text": "쪽지만 읽고 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"짐승 굴 근처는 피할 것.\" 서툰 글씨로 적혀 있다.",
              "result": [
                "flag:readHunterNote"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_fallen_knight",
      "zone": 1,
      "title": "쓰러진 기사",
      "description": "이끼에 반쯤 덮인 갑옷 차림의 기사가 나무에 기대 쓰러져 있다. 숨은 이미 끊어진 지 오래다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "strip_armor",
          "order": 1,
          "text": "쓸 만한 장비를 챙긴다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "녹슨 갑옷 조각에 손을 깊이 베었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "부서지지 않은 것은 동전 주머니뿐이다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "아직 쓸 만한 장비 하나를 건졌다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "bury_knight",
          "order": 2,
          "text": "기사를 묻어 준다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "땅이 단단해 한참을 고생했다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "흙을 덮어 주자 마음이 조금 가벼워졌다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "무덤 위에 칼을 꽂자 따스한 바람이 스친다.",
              "result": [
                "hp:10",
                "flag:buriedFallenKnight"
              ]
            }
          }
        },
        {
          "id": "leave_knight",
          "order": 3,
          "text": "그대로 지나친다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "기사의 명복을 빌며 걸음을 옮긴다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_wounded_wolf",
      "zone": 1,
      "title": "덫에 걸린 새끼 늑대",
      "description": "올가미에 다리가 걸린 새끼 늑대가 낑낑거린다. 멀리서 어미의 울음소리가 들린다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "free_cub",
          "order": 1,
          "text": "올가미를 풀어 준다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "놀란 새끼 늑대가 손을 물고 달아났다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "올가미는 풀었지만 새끼가 할퀴고 달아났다.",
              "result": [
                "hp:-2",
                "flag:savedWolfCub"
              ]
            },
            "success": {
              "text": "새끼가 어미 쪽으로 달려간다. 어미 늑대가 잠시 이쪽을 바라보다 사라졌다.",
              "result": [
                "flag:savedWolfCub"
              ]
            }
          }
        },
        {
          "id": "take_snare",
          "order": 2,
          "text": "올가미 줄만 챙긴다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "줄을 끊어 챙기자 새끼가 절뚝이며 숲으로 사라졌다.",
              "result": [
                "gold:2"
              ]
            }
          }
        },
        {
          "id": "ignore_cub",
          "order": 3,
          "text": "못 본 척 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤로 어미 늑대의 울음이 오래 이어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_mushroom_ring",
      "zone": 1,
      "title": "버섯 고리",
      "description": "희미하게 빛나는 버섯들이 둥글게 원을 이루고 있다. 달큰한 냄새가 코를 찌른다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "eat_mushroom",
          "order": 1,
          "text": "버섯을 하나 먹어 본다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "속이 뒤틀린다. 한참을 주저앉아 있었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "쌉쌀한 맛이 혀에 남는다. 조금 기운이 난다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "온몸에 생기가 돈다.",
              "result": [
                "hp:15"
              ]
            }
          }
        },
        {
          "id": "pick_mushroom",
          "order": 2,
          "text": "버섯을 따서 챙긴다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "버섯이 손에서 바스러졌다.",
              "result": []
            },
            "partial": {
              "text": "작은 버섯 몇 개를 챙겼다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "약초로 쓸 만한 버섯을 골라 붕대에 싸 두었다.",
              "result": [
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "avoid_ring",
          "order": 3,
          "text": "원 밖으로 돌아간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 발을 들였다가는 무슨 일이 생길지 모른다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_wandering_merchant",
      "zone": 1,
      "title": "떠돌이 행상",
      "description": "등짐을 진 노인이 길가에 앉아 쉬고 있다. \"약이 필요하면 싸게 주지.\"",
      "repeatable": true,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "buy_potion",
          "order": 1,
          "text": "회복약을 산다 (골드 8)",
          "condition": [
            "gold:8"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "노인이 작은 병을 건넨다. \"아껴 쓰게.\"",
              "result": [
                "gold:-8",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "haggle_price",
          "order": 2,
          "text": "값을 깎아 본다 (골드 4)",
          "condition": [
            "gold:4"
          ],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "노인이 고개를 젓고는 짐을 챙겨 떠났다.",
              "result": []
            },
            "partial": {
              "text": "노인이 마지못해 붕대를 내준다.",
              "result": [
                "gold:-4",
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "노인이 웃으며 회복약을 반값에 넘긴다.",
              "result": [
                "gold:-4",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "ask_way",
          "order": 3,
          "text": "길만 묻고 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"이 숲의 속삭임에 너무 귀 기울이지 말게.\"",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_echoing_well",
      "zone": 1,
      "title": "메아리 우물",
      "description": "이끼 낀 돌우물 안으로 말을 걸면 한참 뒤에 다른 목소리로 되돌아온다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "toss_coin",
          "order": 1,
          "text": "동전을 던져 소원을 빈다 (골드 3)",
          "condition": [
            "gold:3"
          ],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "동전이 떨어지는 소리조차 들리지 않았다.",
              "result": [
                "gold:-3"
              ]
            },
            "partial": {
              "text": "물 위로 따뜻한 김이 피어오른다.",
              "result": [
                "gold:-3",
                "hp:8"
              ]
            },
            "success": {
              "text": "우물 바닥에서 무언가가 떠올랐다.",
              "result": [
                "gold:-3",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "peer_well",
          "order": 2,
          "text": "몸을 숙여 들여다본다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "발이 미끄러져 우물 가장자리에 부딪혔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "물 위에 비친 얼굴이 낯설다. 아무 일도 없었다.",
              "result": []
            },
            "success": {
              "text": "벽 틈에 끼워진 동전 주머니를 꺼냈다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "leave_well",
          "order": 3,
          "text": "우물을 지나친다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 누군가 이름을 부르는 것 같다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_spider_nest",
      "zone": 1,
      "title": "거미줄 둥지",
      "description": "나무 사이에 하얀 거미줄이 두껍게 얽혀 있다. 그 안쪽에 무언가 반짝인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "burn_web",
          "order": 1,
          "text": "거미줄을 불로 태운다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "불길이 번져 옷자락을 그슬렸다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "거미줄이 타 버리자 녹슨 동전 몇 개가 떨어졌다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "타 버린 거미줄 사이로 반짝이던 물건이 떨어졌다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "push_inside",
          "order": 2,
          "text": "거미줄을 헤치고 들어간다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "둥지의 주인이 깨어났다.",
              "result": [
                "fight:ene_venom_spider:ambushed"
              ]
            },
            "partial": {
              "text": "끈적한 거미줄에 엉켜 한참을 헤맸다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "둥지 깊은 곳에서 오래된 장비를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "avoid_nest",
          "order": 3,
          "text": "멀찍이 돌아간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "거미줄 너머에서 무언가 움직이는 기척이 느껴진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_lost_child",
      "zone": 1,
      "title": "길 잃은 아이",
      "description": "작은 아이가 바구니를 꼭 쥔 채 울고 있다. \"마을이 어느 쪽이에요?\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "point_way",
          "order": 1,
          "text": "마을 방향을 알려 준다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "길을 잘못 알려 준 것 같다. 마음이 무겁다.",
              "result": []
            },
            "partial": {
              "text": "아이가 고개를 꾸벅 숙이고 달려간다.",
              "result": [
                "flag:guidedLostChild"
              ]
            },
            "success": {
              "text": "아이가 바구니에서 동전을 꺼내 쥐여 준다.",
              "result": [
                "gold:4",
                "flag:guidedLostChild"
              ]
            }
          }
        },
        {
          "id": "escort_child",
          "order": 2,
          "text": "숲 어귀까지 데려다준다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "먼 길을 돌아 지쳤지만, 아이의 어머니가 고맙다며 약을 건넸다.",
              "result": [
                "hp:-3",
                "item:con_potion",
                "flag:guidedLostChild"
              ]
            }
          }
        },
        {
          "id": "ignore_child",
          "order": 3,
          "text": "모른 척 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤로 아이의 울음소리가 점점 멀어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_goblin_toll",
      "zone": 1,
      "title": "고블린 무리",
      "description": "이끼 고블린 셋이 길을 막고 킥킥거린다. 한 놈이 배를 두드리며 손을 내민다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "throw_food",
          "order": 1,
          "text": "회복약을 던져 준다",
          "condition": [
            "item:con_potion"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "고블린들이 병을 두고 다투는 사이 길을 지나갔다.",
              "result": [
                "item:-con_potion"
              ]
            }
          }
        },
        {
          "id": "fight_goblins",
          "order": 2,
          "text": "무기를 뽑는다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "가장 큰 놈이 앞으로 나선다.",
              "result": [
                "fight:ene_moss_goblin"
              ]
            }
          }
        },
        {
          "id": "threaten_goblins",
          "order": 3,
          "text": "크게 소리쳐 위협한다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "고블린들이 비웃더니 한꺼번에 덤벼든다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "고블린들이 머뭇거리는 사이 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "고블린들이 가진 것을 내던지고 달아났다.",
              "result": [
                "gold:6"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_old_tracks",
      "zone": 1,
      "title": "오래된 발자국",
      "description": "젖은 흙 위에 사람의 발자국이 숲 안쪽으로 이어진다. 발자국 옆에 작은 표식이 긁혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [
        "foundTrailClue"
      ],
      "choices": [
        {
          "id": "follow_tracks",
          "order": 1,
          "text": "발자국을 따라간다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "발을 헛디뎌 비탈을 굴렀다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "발자국은 개울에서 끊겼다. 떨어진 동전만 주웠다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "표식의 뜻을 알아냈다. 같은 표식을 다시 보면 따라가 볼 만하다.",
              "result": [
                "gold:3",
                "flag:foundTrailClue"
              ]
            }
          }
        },
        {
          "id": "ignore_tracks",
          "order": 2,
          "text": "발자국을 무시한다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜한 길로 빠지지 않기로 한다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_trail_marker",
      "zone": 1,
      "title": "표식이 새겨진 나무",
      "description": "발자국에서 보았던 것과 같은 표식이 나무 밑동에 새겨져 있다. 뿌리 사이에 무언가 묻혀 있는 듯하다.",
      "repeatable": false,
      "requiresFlags": [
        "foundTrailClue"
      ],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "dig_roots",
          "order": 1,
          "text": "뿌리 사이를 파 본다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "표식의 주인이 숨겨 둔 상자가 나왔다.",
              "result": [
                "gold:5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "erase_marker",
          "order": 2,
          "text": "표식을 지우고 떠난다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "다른 누군가가 이 길을 따라오지 못하게 했다.",
              "result": [
                "gold:2"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_storm_shelter",
      "zone": 1,
      "title": "갑작스러운 소나기",
      "description": "하늘이 어두워지더니 굵은 빗방울이 쏟아지기 시작한다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "wait_shelter",
          "order": 1,
          "text": "나무 아래에서 비를 피한다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "빗소리를 들으며 잠시 눈을 붙였다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "push_through",
          "order": 2,
          "text": "비를 뚫고 나아간다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "진흙에 미끄러져 크게 넘어졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "흠뻑 젖었지만 길을 잃지는 않았다.",
              "result": []
            },
            "success": {
              "text": "빗물에 씻긴 흙 속에서 반짝이는 동전을 주웠다.",
              "result": [
                "gold:5"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_whisper_stone",
      "zone": 1,
      "title": "속삭이는 돌",
      "description": "사람 키만 한 바위에서 낮은 속삭임이 새어 나온다. 표면에 손바닥 모양의 홈이 파여 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "touch_stone",
          "order": 1,
          "text": "홈에 손바닥을 얹는다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "속삭임이 머릿속을 할퀸다. 코피가 흐른다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "손끝이 저릿하다. 아무것도 알아듣지 못했다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "속삭임이 오래된 기술 하나를 몸에 새겨 넣었다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "listen_stone",
          "order": 2,
          "text": "귀를 대고 듣는다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "알아들을 수 없는 웅얼거림뿐이다.",
              "result": []
            },
            "partial": {
              "text": "\"…더 깊이…\" 한 단어가 또렷이 들렸다.",
              "result": []
            },
            "success": {
              "text": "속삭임이 숲 깊은 곳의 이름을 알려 주었다.",
              "result": [
                "flag:heardStoneWhisper"
              ]
            }
          }
        },
        {
          "id": "leave_stone",
          "order": 3,
          "text": "바위에서 떨어진다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임이 아쉬운 듯 길게 늘어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bandit_camp",
      "zone": 1,
      "title": "버려진 야영지",
      "description": "꺼진 모닥불과 찢어진 천막이 남아 있다. 도적들이 서둘러 떠난 흔적이다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "search_camp",
          "order": 1,
          "text": "남은 짐을 뒤진다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "숨어 있던 도적 하나가 칼을 들고 튀어나왔다.",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "찢어진 주머니에서 동전을 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "도적들이 미처 챙기지 못한 물건을 찾았다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "warm_up",
          "order": 2,
          "text": "남은 불씨로 몸을 녹인다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "몸이 데워지자 굳었던 근육이 풀린다.",
              "result": [
                "hp:5"
              ]
            }
          }
        },
        {
          "id": "leave_camp",
          "order": 3,
          "text": "서둘러 자리를 뜬다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "도적들이 돌아오기 전에 떠나는 편이 낫다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_mother_wolf",
      "zone": 1,
      "title": "어미 늑대",
      "description": "커다란 늑대가 길 한가운데 앉아 있다. 곁에는 낯익은 새끼 늑대가 꼬리를 흔든다.",
      "repeatable": false,
      "requiresFlags": [
        "savedWolfCub"
      ],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "bow_head",
          "order": 1,
          "text": "고개를 숙이고 기다린다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "어미 늑대가 물고 온 것을 발치에 내려놓고 사라졌다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "pass_quietly",
          "order": 2,
          "text": "조용히 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "늑대들은 끝까지 길을 비켜 주었다.",
              "result": [
                "hp:5"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_knight_spirit",
      "zone": 1,
      "title": "기사의 영혼",
      "description": "묻어 준 기사의 칼 옆에 희미한 빛이 서 있다. \"은혜를 갚게 해 주게.\"",
      "repeatable": false,
      "requiresFlags": [
        "buriedFallenKnight"
      ],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "receive_blessing",
          "order": 1,
          "text": "축복을 받는다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "따스한 빛이 몸을 감싼다. 상처가 아문다.",
              "result": [
                "hp:15"
              ]
            }
          }
        },
        {
          "id": "ask_teaching",
          "order": 2,
          "text": "가르침을 청한다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "빛이 흔들리더니 말없이 사라졌다.",
              "result": []
            },
            "partial": {
              "text": "기사가 검을 쥐는 법을 짧게 일러 주었다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "기사가 평생 갈고닦은 기술 하나를 전해 주었다.",
              "result": [
                "skill:random"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_grateful_parent",
      "zone": 1,
      "title": "아이의 아버지",
      "description": "나무꾼 차림의 사내가 다가와 모자를 벗는다. \"우리 아이를 도와준 분이시군요.\"",
      "repeatable": false,
      "requiresFlags": [
        "guidedLostChild"
      ],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "accept_reward",
          "order": 1,
          "text": "보답을 받는다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내가 동전 주머니와 약병을 건넸다.",
              "result": [
                "gold:10",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "decline_reward",
          "order": 2,
          "text": "사양한다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내가 고개를 숙이며 숲길의 안전한 쉼터를 알려 주었다.",
              "result": [
                "hp:10"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_whisper_answer",
      "zone": 1,
      "title": "속삭임의 대답",
      "description": "속삭이는 돌에서 들었던 이름이 바람에 실려 다시 들려온다. 이번에는 대답을 기다리는 듯하다.",
      "repeatable": false,
      "requiresFlags": [
        "heardStoneWhisper"
      ],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "call_name",
          "order": 1,
          "text": "그 이름을 부른다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "숲 전체가 비명처럼 울렸다. 귀에서 피가 흐른다.",
              "result": [
                "hp:-12"
              ]
            },
            "partial": {
              "text": "바람이 잦아들며 발치에 무언가를 떨어뜨렸다.",
              "result": [
                "item:random:equipment"
              ]
            },
            "success": {
              "text": "속삭임이 대답하며 오래된 힘을 나누어 주었다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "cover_ears_again",
          "order": 2,
          "text": "귀를 막는다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임이 아쉬운 듯 멀어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_hunter_return",
      "zone": 1,
      "title": "돌아온 사냥꾼",
      "description": "쪽지를 남겼던 사냥꾼이 활을 메고 나타났다. \"짐승 굴 근처는 피했나?\"",
      "repeatable": false,
      "requiresFlags": [
        "readHunterNote"
      ],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "tell_traps",
          "order": 1,
          "text": "덫이 있던 곳을 알려 준다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥꾼이 고맙다며 동전을 건넸다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "join_hunt",
          "order": 2,
          "text": "사냥을 돕는다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "사냥감에게 들이받혀 나동그라졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "작은 사냥감을 잡아 몫을 나눴다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "큰 사냥감을 잡았다. 사냥꾼이 아끼던 장비를 내주었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_rotten_bridge",
      "zone": 1,
      "title": "썩은 다리",
      "description": "개울 위에 걸린 통나무 다리가 군데군데 썩어 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "cross_bridge",
          "order": 1,
          "text": "다리를 건넌다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "통나무가 부러지며 개울에 빠졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "삐걱거렸지만 겨우 건넜다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "가볍게 건너며 다리 틈에 끼인 동전을 주웠다.",
              "result": [
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "wade_stream",
          "order": 2,
          "text": "개울을 걸어서 건넌다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "차가운 물에 발이 얼얼하다.",
              "result": [
                "hp:-2"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_glowing_moss",
      "zone": 1,
      "title": "빛나는 이끼",
      "description": "고목 밑동에 푸르스름하게 빛나는 이끼가 두껍게 자라 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "scrape_moss",
          "order": 1,
          "text": "이끼를 긁어 모은다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이끼가 손에서 바스러졌다.",
              "result": []
            },
            "partial": {
              "text": "조금만 챙겼다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "상처에 바르기 좋은 이끼를 붕대에 싸 두었다.",
              "result": [
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "eat_moss",
          "order": 2,
          "text": "이끼를 먹어 본다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "속이 뒤집혀 한참을 구역질했다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "입안이 얼얼하다. 별일은 없었다.",
              "result": []
            },
            "success": {
              "text": "몸속 깊은 곳까지 생기가 퍼진다.",
              "result": [
                "hp:20"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_crow_flock",
      "zone": 1,
      "title": "까마귀 떼",
      "description": "까마귀 떼가 무언가를 둘러싸고 시끄럽게 울어 댄다. 그 사이로 반짝이는 것이 보인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "scare_crows",
          "order": 1,
          "text": "까마귀를 쫓아낸다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "성난 까마귀들이 얼굴을 쪼아 댔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "까마귀는 쫓았지만 반짝이던 건 깨진 유리였다.",
              "result": []
            },
            "success": {
              "text": "까마귀들이 모아 둔 동전을 챙겼다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "watch_crows",
          "order": 2,
          "text": "멀리서 지켜본다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "까마귀들이 무언가를 물고 날아가 버렸다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_hollow_log",
      "zone": 1,
      "title": "쓰러진 통나무",
      "description": "속이 텅 빈 통나무 안쪽에서 무언가 바스락거린다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "reach_inside",
          "order": 1,
          "text": "통나무 안에 손을 넣는다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "안에 있던 독거미가 손을 타고 올라왔다.",
              "result": [
                "fight:ene_venom_spider:ambushed"
              ]
            },
            "partial": {
              "text": "동전 몇 닢이 손에 잡혔다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "누군가 숨겨 둔 물건을 찾았다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "kick_log",
          "order": 2,
          "text": "통나무를 걷어찬다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "작은 짐승 몇 마리가 달아났다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_drunk_bandit",
      "zone": 1,
      "title": "취한 도적",
      "description": "모닥불 옆에서 도적 하나가 술병을 끌어안고 코를 골고 있다. 허리춤의 지갑이 불룩하다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "steal_purse",
          "order": 1,
          "text": "몰래 지갑을 턴다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "도적이 눈을 번쩍 떴다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "지갑을 반쯤 비웠을 때 도적이 뒤척여 손을 뺐다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "불룩한 지갑을 통째로 챙겼다.",
              "result": [
                "gold:10"
              ]
            }
          }
        },
        {
          "id": "wake_threaten",
          "order": 2,
          "text": "깨워서 겁을 준다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "도적이 비틀거리며 칼을 뽑는다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "도적이 허둥지둥 달아났다.",
              "result": []
            },
            "success": {
              "text": "도적이 지갑을 던지고 달아났다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "leave_drunk",
          "order": 3,
          "text": "그냥 내버려 둔다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 깨워 봐야 좋을 게 없다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_hermit_hut",
      "zone": 1,
      "title": "은둔자의 오두막",
      "description": "약초 냄새가 풍기는 오두막에서 백발의 노파가 손짓한다. \"차 한잔하고 가게.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "drink_tea",
          "order": 1,
          "text": "차를 얻어 마신다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "쌉쌀한 차가 지친 몸을 데운다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "buy_herbs",
          "order": 2,
          "text": "해독초를 산다 (골드 6)",
          "condition": [
            "gold:6"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "노파가 잘 말린 해독초를 건넨다.",
              "result": [
                "gold:-6",
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "hear_tale",
          "order": 3,
          "text": "숲 이야기를 듣는다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "노파가 꾸벅꾸벅 졸기 시작했다.",
              "result": []
            },
            "partial": {
              "text": "숲의 오래된 이야기를 들었다.",
              "result": []
            },
            "success": {
              "text": "노파가 이야기 끝에 손때 묻은 물건을 쥐여 주었다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_wolf_tracks",
      "zone": 1,
      "title": "늑대 발자국",
      "description": "아직 마르지 않은 늑대 발자국이 덤불 안쪽으로 이어진다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "hunt_wolf",
          "order": 1,
          "text": "발자국을 따라가 덮친다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "잠든 늑대를 발견했다.",
              "result": [
                "fight:ene_starving_wolf:surprise"
              ]
            }
          }
        },
        {
          "id": "avoid_tracks",
          "order": 2,
          "text": "발자국을 피해 돌아간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜한 싸움은 피하는 게 낫다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_abandoned_cart",
      "zone": 1,
      "title": "버려진 수레",
      "description": "바퀴가 빠진 수레가 길가에 기울어져 있다. 짐칸에 덮개가 씌워져 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "search_cart",
          "order": 1,
          "text": "짐칸을 뒤진다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "덮개 아래 숨어 있던 가시에 손을 찔렸다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "부서진 상자에서 동전을 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "쓸 만한 장비가 짐칸 구석에 남아 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "fix_wheel",
          "order": 2,
          "text": "바퀴를 끼워 준다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "수레가 무너지며 발등을 찧었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "바퀴를 끼웠지만 주인은 오지 않았다.",
              "result": []
            },
            "success": {
              "text": "때마침 돌아온 주인이 사례금을 건넸다.",
              "result": [
                "gold:8"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_moonlit_pond",
      "zone": 1,
      "title": "달빛 연못",
      "description": "낮인데도 연못 위에 달빛 같은 은빛이 어른거린다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "wash_body",
          "order": 1,
          "text": "몸을 씻는다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "차가운 물이 상처를 씻어 낸다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "toss_coin_pond",
          "order": 2,
          "text": "동전을 던진다 (골드 2)",
          "condition": [
            "gold:2"
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "동전이 물에 닿자마자 빛이 꺼졌다.",
              "result": [
                "gold:-2"
              ]
            },
            "partial": {
              "text": "물결이 잔잔해지며 마음이 편해진다.",
              "result": [
                "gold:-2",
                "hp:8"
              ]
            },
            "success": {
              "text": "연못 바닥에서 무언가가 떠올랐다.",
              "result": [
                "gold:-2",
                "item:random:consumable"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_poison_flowers",
      "zone": 1,
      "title": "독꽃 군락",
      "description": "보랏빛 꽃이 길을 뒤덮었다. 달콤한 향에 머리가 핑 돈다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "pick_flowers",
          "order": 1,
          "text": "꽃을 꺾어 간다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "꽃가루를 들이마셔 숨이 막힌다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "몇 송이 꺾었지만 금세 시들어 버렸다.",
              "result": []
            },
            "success": {
              "text": "꽃의 뿌리가 해독초였다. 잘 챙겨 두었다.",
              "result": [
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "hold_breath",
          "order": 2,
          "text": "숨을 참고 빠르게 지나간다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "결국 숨을 들이켜 어지러웠다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "조금 어지러웠지만 빠져나왔다.",
              "result": [
                "hp:-2"
              ]
            },
            "success": {
              "text": "꽃밭을 무사히 지나왔다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_goblin_shaman",
      "zone": 1,
      "title": "고블린 주술사",
      "description": "이끼 고블린 하나가 뼈를 흔들며 이상한 주문을 외우고 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "disrupt_ritual",
          "order": 1,
          "text": "주술을 방해한다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "주술사가 눈치채고 동료를 불렀다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "주술사가 놀라 도망쳤다.",
              "result": []
            },
            "success": {
              "text": "주술사가 놓고 간 주머니를 챙겼다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "attack_shaman",
          "order": 2,
          "text": "기습한다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "주문에 정신이 팔린 고블린에게 달려든다.",
              "result": [
                "fight:ene_moss_goblin:surprise"
              ]
            }
          }
        },
        {
          "id": "back_away",
          "order": 3,
          "text": "물러난다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "주문 소리가 등 뒤에서 오래 이어졌다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_carved_stones",
      "zone": 1,
      "title": "새겨진 돌무더기",
      "description": "누군가 쌓아 둔 돌무더기마다 같은 문양이 새겨져 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "stack_stone",
          "order": 1,
          "text": "돌을 하나 더 얹는다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌무더기가 와르르 무너졌다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "돌이 조용히 자리를 잡았다.",
              "result": []
            },
            "success": {
              "text": "돌을 얹자 마음이 맑아진다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "topple_stones",
          "order": 2,
          "text": "돌무더기를 무너뜨린다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "무너진 돌에 다리를 맞았다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "돌 아래에는 아무것도 없었다.",
              "result": []
            },
            "success": {
              "text": "돌 아래 묻혀 있던 동전을 찾았다.",
              "result": [
                "gold:6"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_wounded_soldier",
      "zone": 1,
      "title": "다친 병사",
      "description": "낡은 갑옷을 입은 병사가 다리를 감싸 쥐고 신음한다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "give_potion_soldier",
          "order": 1,
          "text": "회복약을 건넨다",
          "condition": [
            "item:con_potion"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "병사가 고맙다며 자신의 장비를 내주었다. \"나는 이제 쓸 일이 없을 것 같소.\"",
              "result": [
                "item:-con_potion",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "bandage_soldier",
          "order": 2,
          "text": "붕대를 감아 준다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "상처가 깊어 할 수 있는 게 없었다.",
              "result": []
            },
            "partial": {
              "text": "병사가 고맙다며 동전 몇 닢을 건넸다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "병사가 고맙다며 품에서 약을 꺼냈다.",
              "result": [
                "gold:3",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "rob_soldier",
          "order": 3,
          "text": "장비를 빼앗는다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "병사가 마지막 힘을 짜내 칼을 휘둘렀다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "동전 주머니만 빼앗았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "병사의 장비를 빼앗았다. 뒷맛이 쓰다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_strange_shrine",
      "zone": 1,
      "title": "낯선 성소",
      "description": "덩굴에 감긴 작은 성소가 있다. 처음 보는 신의 얼굴이 새겨져 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "pray_strange",
          "order": 1,
          "text": "낯선 신에게 기도한다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "차가운 기운이 등줄기를 훑고 지나갔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "아무 일도 일어나지 않았다.",
              "result": []
            },
            "success": {
              "text": "따뜻한 빛이 몸을 감싼다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "offer_coins",
          "order": 2,
          "text": "제물을 바친다 (골드 5)",
          "condition": [
            "gold:5"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "제단 아래 틈에서 무언가가 밀려 나왔다.",
              "result": [
                "gold:-5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_shrine",
          "order": 3,
          "text": "그냥 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "성소의 얼굴이 뒤를 따라 고개를 돌리는 것 같다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_fog_bank",
      "zone": 1,
      "title": "짙은 안개",
      "description": "갑자기 짙은 안개가 밀려와 한 치 앞도 보이지 않는다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "press_on_fog",
          "order": 1,
          "text": "조심스럽게 나아간다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "안개 속에서 늑대가 덮쳐 왔다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "한참을 헤맨 끝에 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "안개 속에서 누군가 떨어뜨린 동전을 주웠다.",
              "result": [
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "wait_fog",
          "order": 2,
          "text": "안개가 걷히기를 기다린다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "자리에 앉아 숨을 고르는 사이 안개가 걷혔다.",
              "result": [
                "hp:5"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_wandering_swordsman",
      "zone": 1,
      "title": "떠돌이 검객",
      "description": "칼집을 등에 멘 검객이 나무 그루터기에 앉아 칼날을 닦고 있다. \"한 수 겨뤄 보겠나?\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "spar_swordsman",
          "order": 1,
          "text": "대련을 청한다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "검객의 칼등에 손목을 세게 맞았다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "몇 합 버티지 못했지만 움직임을 조금 익혔다.",
              "result": [
                "hp:-4"
              ]
            },
            "success": {
              "text": "검객이 웃으며 칼을 거둔다. \"좋은 눈을 가졌군. 하나 가르쳐 주지.\"",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "pay_lesson",
          "order": 2,
          "text": "가르침을 청한다 (골드 15)",
          "condition": [
            "gold:15"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "검객이 동전을 받고 기술 몇 가지를 보여 준다.",
              "result": [
                "gold:-15",
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "decline_spar",
          "order": 3,
          "text": "정중히 사양한다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "검객이 어깨를 으쓱하고 다시 칼을 닦는다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_ancient_tome",
      "zone": 1,
      "title": "낡은 비급서",
      "description": "무너진 서가 아래에 가죽 표지의 책 한 권이 묻혀 있다. 표지에 낯선 기술의 이름이 적혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "study_tome",
          "order": 1,
          "text": "자리에 앉아 읽어 본다",
          "condition": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "글자가 머릿속에서 뒤엉켜 두통이 밀려온다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "몇 장 읽었지만 뜻을 다 알 수 없었다.",
              "result": []
            },
            "success": {
              "text": "책에 적힌 기술 몇 가지가 손에 잡힐 듯 이해된다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "sell_tome",
          "order": 2,
          "text": "책을 챙겨 둔다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "값나가 보이는 표지 장식만 뜯어 챙겼다.",
              "result": [
                "gold:5"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_forest_ascetic",
      "zone": 1,
      "title": "숲의 수련자",
      "description": "맨발의 수련자가 바위 위에서 천천히 몸을 움직이고 있다. 숨소리 하나 흐트러지지 않는다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "train_together",
          "order": 1,
          "text": "함께 수련한다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "따라 하다 다리가 꼬여 넘어졌다.",
              "result": []
            },
            "partial": {
              "text": "호흡을 맞추자 몸이 한결 가벼워졌다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "수련자가 고개를 끄덕이며 자신의 기술을 나누어 준다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "ask_advice",
          "order": 2,
          "text": "조언을 구한다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"싸움은 숨에서 시작된다.\" 수련자가 짧게 말하고 눈을 감는다.",
              "result": [
                "hp:5"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_beast_movement",
      "zone": 1,
      "title": "짐승의 몸놀림",
      "description": "덤불 너머에서 늑대 한 마리가 사냥감을 노리고 있다. 군더더기 없는 움직임이다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "observe_beast",
          "order": 1,
          "text": "숨죽여 관찰한다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "늑대가 냄새를 맡고 이쪽으로 달려들었다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "늑대는 사냥에 실패하고 사라졌다.",
              "result": []
            },
            "success": {
              "text": "늑대의 몸놀림에서 새로운 싸움법을 깨달았다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "leave_beast",
          "order": 2,
          "text": "조용히 물러난다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 늑대의 눈에 띄지 않는 편이 낫다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_shrine_trial",
      "zone": 1,
      "title": "성소의 시험",
      "description": "이끼 낀 석판에 글귀가 새겨져 있다. \"시험을 견딘 자에게 길을 보이리라.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "take_trial",
          "order": 1,
          "text": "시험을 받는다",
          "condition": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "석판에서 뿜어 나온 빛이 몸을 할퀴었다.",
              "result": [
                "hp:-12"
              ]
            },
            "partial": {
              "text": "빛이 몸을 훑고 지나갔다. 견디기는 했다.",
              "result": [
                "hp:-5"
              ]
            },
            "success": {
              "text": "빛이 가라앉으며 머릿속에 여러 기술이 떠오른다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "read_only",
          "order": 2,
          "text": "글귀만 읽고 지나간다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "시험은 다음 기회로 미뤄 둔다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_fallen_mage",
      "zone": 1,
      "title": "쓰러진 마법사",
      "description": "로브를 입은 마법사가 나무에 기대 숨을 몰아쉰다. 손에 쥔 지팡이가 희미하게 빛난다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "choices": [
        {
          "id": "give_potion_mage",
          "order": 1,
          "text": "회복약을 건넨다",
          "condition": [
            "item:con_potion"
          ],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "기운을 차린 마법사가 감사의 뜻으로 기술 하나를 가르쳐 주겠다고 한다.",
              "result": [
                "item:-con_potion",
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "tend_mage",
          "order": 2,
          "text": "상처를 살펴 준다",
          "condition": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "할 수 있는 게 없었다.",
              "result": []
            },
            "partial": {
              "text": "마법사가 고맙다며 동전을 건넸다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "마법사가 숨을 고르며 짧은 주문 하나를 일러 주었다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "leave_mage",
          "order": 3,
          "text": "지나친다",
          "condition": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 지팡이의 빛이 가물거린다.",
              "result": []
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
      "hp": 35,
      "damage": 5,
      "agi": 6,
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
      "hp": 40,
      "damage": 5,
      "agi": 3,
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
      "hp": 40,
      "damage": 5,
      "agi": 4,
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
      "hp": 45,
      "damage": 5,
      "agi": 4,
      "damageReduction": 1,
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
      "hp": 80,
      "damage": 5,
      "agi": 2,
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
      "hp": 120,
      "damage": 6,
      "agi": 0,
      "damageReduction": 1,
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
      "baseEffect": 9,
      "cooldown": 3,
      "effects": [],
      "description": "빙빙 돌던 돌이 날아든다."
    },
    {
      "id": "eskl_venom_bite",
      "name": "독니",
      "type": "attack",
      "baseEffect": 4,
      "cooldown": 3,
      "effects": [
        "poison:2:2"
      ],
      "description": "독니가 살갗을 파고든다."
    },
    {
      "id": "eskl_charge",
      "name": "돌진",
      "type": "attack",
      "baseEffect": 10,
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
      "baseEffect": 6,
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
      "baseEffect": 14,
      "cooldown": 3,
      "effects": [],
      "description": "굵은 가지가 머리 위로 떨어진다."
    }
  ]
};
