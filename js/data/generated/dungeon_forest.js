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
      "eliteBonus": 0,
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
        "evt_fallen_mage",
        "evt_fallen_tree"
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
      "eliteBonus": 0,
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
      "eliteBonus": 0,
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
        "evt_fallen_mage",
        "evt_hunters_storehouse"
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
      "eliteBonus": 0,
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
        "evt_fallen_mage",
        "evt_drifting_pack"
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
      "eliteBonus": 0,
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
        "evt_shrine_trial",
        "evt_leaning_statue"
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
      "eliteBonus": 0,
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
      "eliteBonus": 0,
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
        "evt_wandering_swordsman",
        "evt_hunters_storehouse"
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
      "eliteBonus": 0,
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
        "evt_beast_movement",
        "evt_prey_dispute"
      ]
    },
    {
      "id": "plc_ruined_watchtower",
      "zone": 1,
      "name": "무너진 감시탑",
      "description": "기울어진 돌탑 위로 까마귀가 맴돈다.",
      "contentWeights": {
        "combat": 35,
        "event": 45,
        "rest": 5,
        "treasure": 10,
        "shop": 5
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_forest_bandit",
        "ene_moss_goblin"
      ],
      "eventPool": [
        "evt_leaning_statue",
        "evt_thorn_chest",
        "evt_merchant_quarrel",
        "evt_crow_flock",
        "evt_carved_stones",
        "evt_fallen_knight",
        "evt_ancient_tome"
      ]
    },
    {
      "id": "plc_misty_marsh",
      "zone": 1,
      "name": "안개 낀 늪지",
      "description": "발을 디딜 때마다 질척한 소리가 난다.",
      "contentWeights": {
        "combat": 45,
        "event": 40,
        "rest": 5,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 25,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_venom_spider",
        "ene_moss_goblin"
      ],
      "eventPool": [
        "evt_poison_mist",
        "evt_poison_flowers",
        "evt_fog_bank",
        "evt_glowing_moss",
        "evt_spider_nest"
      ]
    },
    {
      "id": "plc_stepping_stones",
      "zone": 1,
      "name": "개울가 징검다리",
      "description": "맑은 물소리 사이로 미끄러운 돌이 이어진다.",
      "contentWeights": {
        "combat": 30,
        "event": 45,
        "rest": 20,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 10,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_starving_wolf"
      ],
      "eventPool": [
        "evt_drifting_pack",
        "evt_fallen_tree",
        "evt_rotten_bridge",
        "evt_moonlit_pond",
        "evt_storm_shelter",
        "evt_forest_ascetic"
      ]
    },
    {
      "id": "plc_goblin_marker",
      "zone": 1,
      "name": "고블린 표식 바위",
      "description": "바위에 서툰 그림과 핏자국이 칠해져 있다.",
      "contentWeights": {
        "combat": 55,
        "event": 35,
        "rest": 0,
        "treasure": 5,
        "shop": 5
      },
      "surpriseChance": 30,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_moss_goblin"
      ],
      "eventPool": [
        "evt_goblin_sentry",
        "evt_goblin_toll",
        "evt_goblin_shaman",
        "evt_old_tracks"
      ]
    },
    {
      "id": "plc_glowcap_cave",
      "zone": 1,
      "name": "버섯이 빛나는 동굴",
      "description": "천장에 매달린 버섯이 푸르스름한 빛을 흘린다.",
      "contentWeights": {
        "combat": 30,
        "event": 55,
        "rest": 5,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 20,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_venom_spider"
      ],
      "eventPool": [
        "evt_thorn_chest",
        "evt_mushroom_ring",
        "evt_glowing_moss",
        "evt_echoing_well",
        "evt_whisper_stone"
      ]
    },
    {
      "id": "plc_hunting_lodge",
      "zone": 1,
      "name": "버려진 사냥 오두막",
      "description": "녹슨 덫과 마른 가죽이 벽에 걸린 오두막이다.",
      "contentWeights": {
        "combat": 20,
        "event": 40,
        "rest": 25,
        "treasure": 0,
        "shop": 15
      },
      "surpriseChance": 5,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_forest_bandit",
        "ene_starving_wolf"
      ],
      "eventPool": [
        "evt_merchant_quarrel",
        "evt_hunter_cache",
        "evt_hermit_hut",
        "evt_wandering_merchant",
        "evt_snare_trap",
        "evt_hunter_return"
      ]
    },
    {
      "id": "plc_howling_hill",
      "zone": 1,
      "name": "늑대 울음 언덕",
      "description": "언덕 너머에서 길게 늘어지는 울음소리가 들린다.",
      "contentWeights": {
        "combat": 65,
        "event": 30,
        "rest": 0,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 45,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_starving_wolf"
      ],
      "eventPool": [
        "evt_prey_dispute",
        "evt_goblin_sentry",
        "evt_wolf_tracks",
        "evt_wounded_wolf",
        "evt_beast_movement",
        "evt_mother_wolf"
      ]
    },
    {
      "id": "plc_twisted_grove",
      "zone": 1,
      "name": "뒤틀린 고목 숲",
      "description": "나무줄기가 사람 얼굴처럼 비틀려 자라 있다.",
      "contentWeights": {
        "combat": 35,
        "event": 55,
        "rest": 5,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 20,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_moss_goblin",
        "ene_venom_spider"
      ],
      "eventPool": [
        "evt_fallen_tree",
        "evt_poison_mist",
        "evt_whispering_voice",
        "evt_strange_shrine",
        "evt_whisper_answer",
        "evt_shrine_trial"
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
      "group": "",
      "choices": [
        {
          "id": "force_lid",
          "order": 1,
          "text": "뚜껑을 억지로 비틀어 연다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "상자를 두고 길을 재촉한다.",
              "result": []
            }
          }
        },
        {
          "id": "pry_chest",
          "order": 4,
          "text": "뚜껑을 통째로 뜯어낸다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [
            {
              "skillId": "skl_bash",
              "bonus": 2
            }
          ],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "손가락이 끼었다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "뚜껑이 반쯤 열렸다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "뚜껑을 뜯어내고 안을 비웠다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "spot_trap",
          "order": 5,
          "text": "뚜껑 틈의 장치를 읽어 낸다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "장치의 원리를 알 수 없다.",
              "result": []
            },
            "partial": {
              "text": "바늘 장치를 피해 동전만 꺼냈다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "장치를 풀고 안을 모두 챙겼다.",
              "result": [
                "gold:6",
                "item:random:equipment"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "tend_wound",
          "order": 1,
          "text": "상처를 치료해 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "item:con_potion"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "splint_traveler",
          "order": 4,
          "text": "능숙하게 부목을 대 준다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "서툰 손길에 나그네가 신음한다.",
              "result": []
            },
            "partial": {
              "text": "나그네가 고맙다며 동전을 건넨다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "나그네가 쪽지를 건넨다. 숲속 사냥꾼의 은신처를 적어 둔 것이다.",
              "result": [
                "gold:4",
                "flag:readHunterNote"
              ]
            }
          }
        },
        {
          "id": "ask_traveler",
          "order": 5,
          "text": "숲 깊은 곳 이야기를 묻는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "나그네가 입을 다문다.",
              "result": []
            },
            "partial": {
              "text": "위험한 곳 몇 군데를 알려 준다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "나그네가 아끼던 약을 나눠 준다.",
              "result": [
                "item:con_bandage",
                "gold:3"
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
      "group": "",
      "choices": [
        {
          "id": "listen_voice",
          "order": 1,
          "text": "귀를 기울인다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임을 등지고 걸음을 옮긴다.",
              "result": []
            }
          }
        },
        {
          "id": "answer_voice",
          "order": 4,
          "text": "목소리에 차분히 대답한다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "목소리가 비웃듯 흩어진다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "머리가 맑아졌다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "목소리가 기술 몇 가지를 속삭여 준다.",
              "result": [
                "skill:choice"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "pay_toll",
          "order": 1,
          "text": "통행료를 낸다 (골드 5)",
          "verb": "",
          "condition": [
            "gold:5"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "intimidate_bandit",
          "order": 4,
          "text": "도적을 노려보며 위협한다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "도적이 비웃으며 칼을 뽑는다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "도적이 통행료를 반으로 깎는다.",
              "result": [
                "gold:-2"
              ]
            },
            "success": {
              "text": "도적이 슬금슬금 물러난다.",
              "result": []
            }
          }
        },
        {
          "id": "outrun_bandit",
          "order": 5,
          "text": "샛길로 재빨리 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발이 걸려 붙잡혔다.",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "겨우 빠져나왔다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "도적이 쫓아오지 못했다.",
              "result": []
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
      "group": "",
      "choices": [
        {
          "id": "pray_altar",
          "order": 1,
          "text": "무릎 꿇고 기도한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "gold:3"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "decipher_altar",
          "order": 4,
          "text": "제단의 문양을 해독한다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "문양을 잘못 읽어 머리가 지끈거린다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "문양 아래 동전을 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "문양이 가리키는 칸에서 장비를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "lift_altar",
          "order": 5,
          "text": "제단석을 들어 아래를 살핀다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "제단석이 미끄러져 손을 찧었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "틈 사이로 동전 몇 닢을 꺼냈다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "제단석 밑에 숨겨진 공물을 찾았다.",
              "result": [
                "gold:8",
                "item:random:consumable"
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
      "group": "",
      "choices": [
        {
          "id": "wriggle_free",
          "order": 1,
          "text": "몸을 비틀어 빠져나온다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "tear_snare",
          "order": 3,
          "text": "올가미를 힘으로 뜯어낸다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "줄이 살을 파고들었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "겨우 뜯어냈다.",
              "result": []
            },
            "success": {
              "text": "올가미째 뜯어내 줄을 챙겼다.",
              "result": [
                "gold:2"
              ]
            }
          }
        },
        {
          "id": "slip_snare",
          "order": 4,
          "text": "발을 비틀어 미끄러지듯 빼낸다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발목을 삐끗했다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "발을 빼냈다.",
              "result": []
            },
            "success": {
              "text": "발을 빼내며 올가미에 걸려 있던 꾸러미까지 챙겼다.",
              "result": [
                "item:con_bandage"
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
      "group": "",
      "choices": [
        {
          "id": "search_bundle",
          "order": 1,
          "text": "꾸러미를 뒤진다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"짐승 굴 근처는 피할 것.\" 서툰 글씨로 적혀 있다.",
              "result": [
                "flag:readHunterNote"
              ]
            }
          }
        },
        {
          "id": "check_traps",
          "order": 3,
          "text": "꾸러미 주변의 함정부터 살핀다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "함정을 찾지 못하고 손을 댔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "함정을 피해 동전만 꺼냈다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "함정을 피하고 꾸러미를 온전히 챙겼다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "lift_log_cache",
          "order": 4,
          "text": "통나무를 들어 아래를 더 판다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "통나무에 발등을 찧었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "흙 속에서 동전을 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "통나무 밑에 숫돌과 동전이 묻혀 있었다.",
              "result": [
                "gold:6",
                "item:con_whetstone"
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
      "group": "",
      "choices": [
        {
          "id": "strip_armor",
          "order": 1,
          "text": "쓸 만한 장비를 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "기사의 명복을 빌며 걸음을 옮긴다.",
              "result": []
            }
          }
        },
        {
          "id": "read_crest",
          "order": 4,
          "text": "갑옷의 문장을 살핀다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "낯선 문장이다.",
              "result": []
            },
            "partial": {
              "text": "문장 아래 동전 주머니를 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "문장 안쪽에 숨긴 주머니가 있었다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "carry_knight",
          "order": 5,
          "text": "기사를 들어 양지바른 곳에 눕힌다",
          "verb": "force",
          "condition": [
            "str:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "갑옷이 무거워 주저앉았다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "기사를 눕히고 짧게 묵념했다.",
              "result": [
                "hp:5",
                "flag:buriedFallenKnight"
              ]
            },
            "success": {
              "text": "기사를 눕히자 품에서 장비 하나가 떨어졌다.",
              "result": [
                "hp:5",
                "item:random:equipment",
                "flag:buriedFallenKnight"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "free_cub",
          "order": 1,
          "text": "올가미를 풀어 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤로 어미 늑대의 울음이 오래 이어진다.",
              "result": []
            }
          }
        },
        {
          "id": "gentle_free",
          "order": 4,
          "text": "새끼가 놀라지 않게 조심스럽게 푼다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "새끼가 발버둥 치며 할퀴었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "올가미를 풀어 주었다.",
              "result": [
                "flag:savedWolfCub"
              ]
            },
            "success": {
              "text": "새끼가 손을 핥고 어미에게 달려간다.",
              "result": [
                "hp:5",
                "flag:savedWolfCub"
              ]
            }
          }
        },
        {
          "id": "pull_stake",
          "order": 5,
          "text": "올가미 말뚝째 뽑아 버린다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "말뚝이 튕겨 손을 다쳤다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "말뚝을 뽑아 새끼를 풀어 주었다.",
              "result": [
                "flag:savedWolfCub"
              ]
            },
            "success": {
              "text": "말뚝을 뽑고 줄도 챙겼다.",
              "result": [
                "gold:2",
                "flag:savedWolfCub"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "eat_mushroom",
          "order": 1,
          "text": "버섯을 하나 먹어 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 발을 들였다가는 무슨 일이 생길지 모른다.",
              "result": []
            }
          }
        },
        {
          "id": "identify_mushroom",
          "order": 4,
          "text": "약이 되는 버섯을 골라낸다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "구별할 수 없다.",
              "result": []
            },
            "partial": {
              "text": "쓸 만한 버섯 몇 개를 챙겼다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "약효 좋은 버섯을 골라 먹고 일부는 챙겼다.",
              "result": [
                "hp:8",
                "item:con_antidote"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "buy_potion",
          "order": 1,
          "text": "회복약을 산다 (골드 8)",
          "verb": "",
          "condition": [
            "gold:8"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "gold:4"
          ],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"이 숲의 속삭임에 너무 귀 기울이지 말게.\"",
              "result": []
            }
          }
        },
        {
          "id": "bargain",
          "order": 4,
          "text": "말솜씨로 값을 깎는다 (골드 5)",
          "verb": "persuade",
          "condition": [
            "gold:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "노인이 고개를 젓는다.",
              "result": []
            },
            "partial": {
              "text": "조금 깎아 줬다.",
              "result": [
                "gold:-6",
                "item:con_potion"
              ]
            },
            "success": {
              "text": "노인이 웃으며 덤까지 얹어 준다.",
              "result": [
                "gold:-5",
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "appraise_goods",
          "order": 5,
          "text": "짐 속 물건을 감정해 준다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "감정이 틀렸다며 노인이 혀를 찬다.",
              "result": []
            },
            "partial": {
              "text": "노인이 수고비를 준다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "감정 값으로 약을 받았다.",
              "result": [
                "item:con_potion"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "toss_coin",
          "order": 1,
          "text": "동전을 던져 소원을 빈다 (골드 3)",
          "verb": "",
          "condition": [
            "gold:3"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 누군가 이름을 부르는 것 같다.",
              "result": []
            }
          }
        },
        {
          "id": "climb_well",
          "order": 4,
          "text": "두레박 줄을 타고 내려간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "줄이 미끄러져 떨어졌다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "우물 벽에서 동전을 긁어모았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "바닥에 가라앉은 물건들을 건졌다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_echo",
          "order": 5,
          "text": "메아리의 말을 받아 적는다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "메아리가 뒤엉켜 머리가 아프다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "메아리를 듣는 동안 마음이 가라앉았다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "메아리가 낯선 기술을 일러 주었다.",
              "result": [
                "skill:random"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "burn_web",
          "order": 1,
          "text": "거미줄을 불로 태운다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "거미줄 너머에서 무언가 움직이는 기척이 느껴진다.",
              "result": []
            }
          }
        },
        {
          "id": "rip_web",
          "order": 4,
          "text": "거미줄을 한 번에 뜯어낸다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "거미가 달려들었다.",
              "result": [
                "fight:ene_venom_spider:ambushed"
              ]
            },
            "partial": {
              "text": "반짝이는 것은 동전이었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "거미줄째 걷어 내 안쪽 물건을 챙겼다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "ember_web",
          "order": 5,
          "text": "불씨로 거미줄을 태운다",
          "verb": "use",
          "condition": [
            "skill:skl_ember"
          ],
          "skillBonus": [
            {
              "skillId": "skl_ember",
              "bonus": 4
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "불꽃이 튀었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "거미줄이 반쯤 탔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "거미줄이 깨끗이 타고 안쪽 물건이 드러났다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "point_way",
          "order": 1,
          "text": "마을 방향을 알려 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤로 아이의 울음소리가 점점 멀어진다.",
              "result": []
            }
          }
        },
        {
          "id": "comfort_child",
          "order": 4,
          "text": "아이를 달래 함께 길을 찾는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "아이가 더 크게 운다.",
              "result": []
            },
            "partial": {
              "text": "아이가 울음을 그치고 길을 떠났다.",
              "result": [
                "flag:guidedLostChild"
              ]
            },
            "success": {
              "text": "아이가 웃으며 바구니 속 빵을 나눠 준다.",
              "result": [
                "hp:5",
                "flag:guidedLostChild"
              ]
            }
          }
        },
        {
          "id": "track_way",
          "order": 5,
          "text": "발자국으로 마을 길을 찾아 준다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발자국이 뒤섞여 있다.",
              "result": []
            },
            "partial": {
              "text": "마을 쪽 길을 찾아 주었다.",
              "result": [
                "flag:guidedLostChild"
              ]
            },
            "success": {
              "text": "지름길을 찾아 주자 아이가 동전을 내민다.",
              "result": [
                "gold:5",
                "flag:guidedLostChild"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "throw_food",
          "order": 1,
          "text": "회복약을 던져 준다",
          "verb": "",
          "condition": [
            "item:con_potion"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "trick_goblins",
          "order": 4,
          "text": "반짝이는 돌을 던져 시선을 돌린다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "고블린들이 속지 않았다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "고블린들이 돌을 쫓아 흩어졌다.",
              "result": []
            },
            "success": {
              "text": "고블린들이 흘린 주머니까지 챙겼다.",
              "result": [
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "sprint_past",
          "order": 5,
          "text": "고블린들 사이를 재빨리 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "다리가 걸려 넘어졌다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "겨우 빠져나왔다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "고블린들이 멍하니 바라본다.",
              "result": []
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
      "group": "",
      "choices": [
        {
          "id": "follow_tracks",
          "order": 1,
          "text": "발자국을 따라간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜한 길로 빠지지 않기로 한다.",
              "result": []
            }
          }
        },
        {
          "id": "read_marks_tracks",
          "order": 3,
          "text": "긁힌 표식을 자세히 읽는다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "의미를 알 수 없다.",
              "result": []
            },
            "partial": {
              "text": "표식의 뜻을 짐작했다.",
              "result": [
                "flag:foundTrailClue"
              ]
            },
            "success": {
              "text": "표식 아래 묻힌 동전까지 찾았다.",
              "result": [
                "gold:2",
                "flag:foundTrailClue"
              ]
            }
          }
        },
        {
          "id": "follow_fast",
          "order": 4,
          "text": "발소리를 죽이고 빠르게 뒤쫓는다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "덤불에 긁혔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "발자국 끝에서 동전을 주웠다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "발자국 주인이 남긴 표식을 찾았다.",
              "result": [
                "gold:4",
                "flag:foundTrailClue"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "dig_roots",
          "order": 1,
          "text": "뿌리 사이를 파 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "다른 누군가가 이 길을 따라오지 못하게 했다.",
              "result": [
                "gold:2"
              ]
            }
          }
        },
        {
          "id": "dig_deep",
          "order": 3,
          "text": "뿌리째 뽑아 깊이 판다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "뿌리가 튕겨 손을 다쳤다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "동전이 나왔다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "깊은 곳에 묻힌 상자를 꺼냈다.",
              "result": [
                "gold:8",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "decode_marker",
          "order": 4,
          "text": "표식의 남은 뜻을 해독한다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "더 읽을 것이 없다.",
              "result": []
            },
            "partial": {
              "text": "옆 나무에도 동전이 숨겨져 있었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "표식이 가리킨 두 번째 은닉처에서 약을 찾았다.",
              "result": [
                "gold:4",
                "item:con_potion"
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
      "group": "",
      "choices": [
        {
          "id": "wait_shelter",
          "order": 1,
          "text": "나무 아래에서 비를 피한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "build_shelter",
          "order": 3,
          "text": "가지를 꺾어 비 가림막을 만든다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가림막이 무너졌다.",
              "result": [
                "hp:-2"
              ]
            },
            "partial": {
              "text": "비를 피했다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "아늑한 가림막 아래에서 푹 쉬었다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "read_sky",
          "order": 4,
          "text": "구름을 읽고 비가 그칠 때를 가늠한다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "비가 더 거세졌다.",
              "result": []
            },
            "partial": {
              "text": "곧 비가 그쳤다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "비가 그치자마자 떠내려온 지갑을 주웠다.",
              "result": [
                "hp:6",
                "gold:4"
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
      "group": "",
      "choices": [
        {
          "id": "touch_stone",
          "order": 1,
          "text": "홈에 손바닥을 얹는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임이 아쉬운 듯 길게 늘어진다.",
              "result": []
            }
          }
        },
        {
          "id": "push_stone",
          "order": 4,
          "text": "바위를 밀어 뒤쪽을 살핀다",
          "verb": "force",
          "condition": [
            "str:8"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "바위가 꿈쩍도 않는다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "바위 밑에서 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "바위 뒤에 숨겨진 장비가 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "mimic_whisper",
          "order": 5,
          "text": "속삭임을 따라 읊는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "혀가 꼬여 머리가 울린다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "속삭임이 이름 하나를 남긴다.",
              "result": [
                "flag:heardStoneWhisper"
              ]
            },
            "success": {
              "text": "속삭임이 기술 하나와 이름 하나를 남긴다.",
              "result": [
                "skill:random",
                "flag:heardStoneWhisper"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "search_camp",
          "order": 1,
          "text": "남은 짐을 뒤진다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "도적들이 돌아오기 전에 떠나는 편이 낫다.",
              "result": []
            }
          }
        },
        {
          "id": "read_camp",
          "order": 4,
          "text": "남은 흔적으로 도적들의 습관을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "알아낼 것이 없다.",
              "result": []
            },
            "partial": {
              "text": "도적들이 동전을 숨기던 자리를 찾았다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "숨겨 둔 숫돌과 동전을 찾았다.",
              "result": [
                "gold:5",
                "item:con_whetstone"
              ]
            }
          }
        },
        {
          "id": "dig_firepit",
          "order": 5,
          "text": "모닥불 밑 흙을 파헤친다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "아직 뜨거운 재에 손을 데었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "녹은 동전 몇 닢이 나왔다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "도적들이 묻어 둔 돈주머니가 나왔다.",
              "result": [
                "gold:9"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "bow_head",
          "order": 1,
          "text": "고개를 숙이고 기다린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "늑대들은 끝까지 길을 비켜 주었다.",
              "result": [
                "hp:5"
              ]
            }
          }
        },
        {
          "id": "offer_hand",
          "order": 3,
          "text": "손을 내밀어 냄새를 맡게 한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "어미가 낮게 으르렁거린다.",
              "result": []
            },
            "partial": {
              "text": "어미가 꼬리를 흔든다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "어미가 이끄는 곳에 사냥꾼이 남긴 꾸러미가 있었다.",
              "result": [
                "gold:5",
                "item:random:consumable"
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
      "group": "",
      "choices": [
        {
          "id": "receive_blessing",
          "order": 1,
          "text": "축복을 받는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "duel_spirit",
          "order": 3,
          "text": "검을 겨뤄 달라고 청한다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "영혼의 칼등에 크게 맞았다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "몇 합 겨루며 몸이 풀렸다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "영혼이 웃으며 기술을 전해 준다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "ask_lore",
          "order": 4,
          "text": "옛 이야기를 청해 듣는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이야기가 흐릿하게 흩어진다.",
              "result": []
            },
            "partial": {
              "text": "이야기를 듣는 동안 마음이 편해졌다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "이야기 속 기술 하나를 깨쳤다.",
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
      "group": "",
      "choices": [
        {
          "id": "accept_reward",
          "order": 1,
          "text": "보답을 받는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내가 고개를 숙이며 숲길의 안전한 쉼터를 알려 주었다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "help_chop",
          "order": 3,
          "text": "장작 패는 일을 거든다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "도끼에 손을 다칠 뻔했다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "사내가 고맙다며 동전을 건넨다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "사내가 보답으로 약과 동전을 듬뿍 준다.",
              "result": [
                "gold:8",
                "item:con_potion"
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
      "group": "",
      "choices": [
        {
          "id": "call_name",
          "order": 1,
          "text": "그 이름을 부른다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임이 아쉬운 듯 멀어진다.",
              "result": []
            }
          }
        },
        {
          "id": "whisper_true",
          "order": 3,
          "text": "이름의 뜻을 헤아려 조용히 대답한다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "대답이 틀린 듯 바람이 매섭게 분다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "바람이 장비 하나를 발치에 떨군다.",
              "result": [
                "item:random:equipment"
              ]
            },
            "success": {
              "text": "바람이 기술 몇 가지를 들려준다.",
              "result": [
                "skill:choice"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "tell_traps",
          "order": 1,
          "text": "덫이 있던 곳을 알려 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "track_together",
          "order": 3,
          "text": "발소리를 맞춰 함께 짐승을 쫓는다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발소리를 내 사냥감을 놓쳤다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "사냥꾼이 몫을 나눠 준다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "사냥꾼이 쓰던 장비를 건넨다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "trade_tales",
          "order": 4,
          "text": "숲 이야기를 나눈다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사냥꾼이 시큰둥하다.",
              "result": []
            },
            "partial": {
              "text": "사냥꾼이 동전을 건넨다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "사냥꾼이 약과 동전을 나눠 준다.",
              "result": [
                "gold:3",
                "item:con_potion"
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
      "group": "",
      "choices": [
        {
          "id": "cross_bridge",
          "order": 1,
          "text": "다리를 건넌다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "차가운 물에 발이 얼얼하다.",
              "result": [
                "hp:-2"
              ]
            }
          }
        },
        {
          "id": "leap_planks",
          "order": 3,
          "text": "썩은 판자를 피해 성큼성큼 뛰어 건넌다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "판자가 부서져 개울에 빠졌다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "무사히 건넜다.",
              "result": [
                "hp:-2"
              ]
            },
            "success": {
              "text": "다리 끝에서 누가 흘린 동전을 주웠다.",
              "result": [
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "brace_bridge",
          "order": 4,
          "text": "무너지는 판자를 받치며 건넌다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "판자와 함께 주저앉았다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "건너기는 했다.",
              "result": []
            },
            "success": {
              "text": "다리를 버텨 건너고 걸린 주머니도 챙겼다.",
              "result": [
                "gold:2"
              ]
            }
          }
        },
        {
          "id": "freeze_bridge",
          "order": 5,
          "text": "서리 화살로 개울을 얼려 건넌다",
          "verb": "use",
          "condition": [
            "skill:skl_frost_arrow"
          ],
          "skillBonus": [
            {
              "skillId": "skl_frost_arrow",
              "bonus": 5
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "얼음이 깨졌다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "얼음 위를 건넜다.",
              "result": []
            },
            "success": {
              "text": "얼어붙은 개울 바닥에서 동전을 주웠다.",
              "result": [
                "gold:4"
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
      "group": "",
      "choices": [
        {
          "id": "scrape_moss",
          "order": 1,
          "text": "이끼를 긁어 모은다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "study_moss",
          "order": 3,
          "text": "빛나는 이끼의 쓰임새를 살핀다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "쓰임새를 알 수 없다.",
              "result": []
            },
            "partial": {
              "text": "상처에 바르는 법을 알아냈다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "약효 좋은 이끼만 골라 챙겼다.",
              "result": [
                "item:con_antidote",
                "item:con_bandage"
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
      "group": "",
      "choices": [
        {
          "id": "scare_crows",
          "order": 1,
          "text": "까마귀를 쫓아낸다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "까마귀들이 무언가를 물고 날아가 버렸다.",
              "result": []
            }
          }
        },
        {
          "id": "throw_stone",
          "order": 3,
          "text": "돌을 던져 까마귀를 흩어 놓는다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "까마귀 떼가 덤벼들었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "반짝이는 것은 동전 몇 닢이었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "까마귀가 모아 둔 동전을 챙겼다.",
              "result": [
                "gold:7"
              ]
            }
          }
        },
        {
          "id": "mimic_crow",
          "order": 4,
          "text": "까마귀 울음을 흉내 내 무리를 속인다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "까마귀들이 화가 나 쪼아 댔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "까마귀들이 날아갔다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "까마귀들이 반짝이는 것을 두고 떠났다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "reach_inside",
          "order": 1,
          "text": "통나무 안에 손을 넣는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "작은 짐승 몇 마리가 달아났다.",
              "result": []
            }
          }
        },
        {
          "id": "split_log",
          "order": 3,
          "text": "통나무를 쪼개 연다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "안에서 독거미가 튀어나왔다.",
              "result": [
                "fight:ene_venom_spider"
              ]
            },
            "partial": {
              "text": "동전 몇 닢이 나왔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "누군가 숨겨 둔 꾸러미가 나왔다.",
              "result": [
                "gold:3",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "listen_log",
          "order": 4,
          "text": "바스락 소리를 가만히 들어 본다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "소리가 멎었다.",
              "result": []
            },
            "partial": {
              "text": "다람쥐였다.",
              "result": []
            },
            "success": {
              "text": "다람쥐가 모아 둔 열매 사이에 동전이 있었다.",
              "result": [
                "gold:4"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "steal_purse",
          "order": 1,
          "text": "몰래 지갑을 턴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 깨워 봐야 좋을 게 없다.",
              "result": []
            }
          }
        },
        {
          "id": "pick_pocket",
          "order": 4,
          "text": "숨소리에 맞춰 지갑끈을 끊는다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "도적이 눈을 떴다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "지갑 반쪽만 챙겼다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "지갑을 통째로 챙겼다.",
              "result": [
                "gold:12"
              ]
            }
          }
        },
        {
          "id": "tie_bandit",
          "order": 5,
          "text": "자는 틈에 묶어 버린다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "도적이 깨어 몸부림친다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "묶긴 했지만 지갑은 가벼웠다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "도적을 묶고 소지품을 챙겼다.",
              "result": [
                "gold:8",
                "item:con_whetstone"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "drink_tea",
          "order": 1,
          "text": "차를 얻어 마신다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "gold:6"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "help_herbs",
          "order": 4,
          "text": "약초 다듬는 일을 돕는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "약초를 망쳤다.",
              "result": []
            },
            "partial": {
              "text": "노파가 붕대를 나눠 준다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "노파가 해독초와 붕대를 챙겨 준다.",
              "result": [
                "item:con_antidote",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "fix_roof",
          "order": 5,
          "text": "무너진 지붕을 고쳐 준다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "지붕에서 미끄러졌다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "노파가 따뜻한 차를 내준다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "노파가 차와 회복약을 내준다.",
              "result": [
                "hp:8",
                "item:con_potion"
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
      "group": "",
      "choices": [
        {
          "id": "hunt_wolf",
          "order": 1,
          "text": "발자국을 따라가 덮친다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜한 싸움은 피하는 게 낫다.",
              "result": []
            }
          }
        },
        {
          "id": "read_wolf_tracks",
          "order": 3,
          "text": "발자국으로 늑대의 상태를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "알아낸 것이 없다.",
              "result": []
            },
            "partial": {
              "text": "굶주린 늑대다. 피해 가기로 한다.",
              "result": []
            },
            "success": {
              "text": "늑대가 사냥감을 숨겨 둔 곳을 찾았다.",
              "result": [
                "gold:3",
                "item:con_bandage"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "search_cart",
          "order": 1,
          "text": "짐칸을 뒤진다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "lift_cart",
          "order": 3,
          "text": "수레를 들어 바퀴를 끼운다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "수레가 기울어 발을 찧었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "바퀴를 끼웠다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "바퀴를 끼우자 숨은 짐칸이 열렸다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "inspect_cargo",
          "order": 4,
          "text": "짐표를 읽어 값진 짐을 찾는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "짐표가 지워져 있다.",
              "result": []
            },
            "partial": {
              "text": "동전 상자를 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "값진 장비가 든 짐을 찾았다.",
              "result": [
                "item:random:equipment"
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
      "group": "",
      "choices": [
        {
          "id": "wash_body",
          "order": 1,
          "text": "몸을 씻는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "gold:2"
          ],
          "skillBonus": [],
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
        },
        {
          "id": "dive_pond",
          "order": 3,
          "text": "연못 바닥까지 잠수한다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "물이 차가워 숨이 막혔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "바닥에서 동전을 건졌다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "은빛에 감싸인 장비를 건졌다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_reflection",
          "order": 4,
          "text": "물에 비친 달빛의 무늬를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "무늬가 흩어졌다.",
              "result": []
            },
            "partial": {
              "text": "마음이 맑아졌다.",
              "result": [
                "hp:10"
              ]
            },
            "success": {
              "text": "무늬가 낯선 기술을 보여 주었다.",
              "result": [
                "skill:random"
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
      "group": "",
      "choices": [
        {
          "id": "pick_flowers",
          "order": 1,
          "text": "꽃을 꺾어 간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "harvest_flowers",
          "order": 3,
          "text": "향을 피해 뿌리째 캔다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "향을 들이마셨다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "해독초 하나를 만들 만큼 캤다.",
              "result": [
                "item:con_antidote"
              ]
            },
            "success": {
              "text": "해독초를 넉넉히 만들고 남은 꽃은 팔 만하다.",
              "result": [
                "item:con_antidote",
                "gold:4"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "disrupt_ritual",
          "order": 1,
          "text": "주술을 방해한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "주문 소리가 등 뒤에서 오래 이어졌다.",
              "result": []
            }
          }
        },
        {
          "id": "steal_totem",
          "order": 4,
          "text": "주술 도구를 몰래 훔친다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "고블린이 눈치챘다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "작은 뼈 장식 하나를 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "주술 도구와 공물을 챙겼다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "counter_chant",
          "order": 5,
          "text": "주문을 거꾸로 읊어 주술을 끊는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "주술이 되튀었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "고블린이 놀라 달아났다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "고블린이 혼비백산해 공물을 두고 달아났다.",
              "result": [
                "gold:5",
                "item:random:equipment"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "stack_stone",
          "order": 1,
          "text": "돌을 하나 더 얹는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "read_pattern",
          "order": 3,
          "text": "문양의 규칙을 읽어 낸다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "규칙을 찾지 못했다.",
              "result": []
            },
            "partial": {
              "text": "문양을 따라 걸으니 마음이 가라앉는다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "문양이 가리키는 돌 밑에서 꾸러미를 찾았다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "heft_stone",
          "order": 4,
          "text": "가장 큰 돌을 들어 밑을 본다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌이 미끄러져 발을 찧었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "동전 몇 닢이 있었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "돌 밑에 동전 꾸러미가 있었다.",
              "result": [
                "gold:7"
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
      "group": "",
      "choices": [
        {
          "id": "give_potion_soldier",
          "order": 1,
          "text": "회복약을 건넨다",
          "verb": "",
          "condition": [
            "item:con_potion"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
        },
        {
          "id": "splint_leg",
          "order": 4,
          "text": "부목을 대고 다리를 고정한다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "부목이 헐거웠다.",
              "result": []
            },
            "partial": {
              "text": "병사가 고맙다며 동전을 준다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "병사가 보답으로 장비를 건넨다.",
              "result": [
                "gold:3",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "carry_soldier",
          "order": 5,
          "text": "병사를 부축해 길목까지 옮긴다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "함께 넘어졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "병사가 동전을 건넨다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "병사가 회복약과 동전을 건넨다.",
              "result": [
                "gold:6",
                "item:con_potion"
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
      "group": "",
      "choices": [
        {
          "id": "pray_strange",
          "order": 1,
          "text": "낯선 신에게 기도한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "gold:5"
          ],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "성소의 얼굴이 뒤를 따라 고개를 돌리는 것 같다.",
              "result": []
            }
          }
        },
        {
          "id": "decipher_face",
          "order": 4,
          "text": "신의 얼굴 아래 글귀를 해독한다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "글귀를 읽자 눈이 따끔거린다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "글귀를 읽으니 상처가 아문다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "글귀 속 기술 하나를 깨쳤다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "clear_vines",
          "order": 5,
          "text": "성소를 감은 덩굴을 걷어 낸다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가시에 찔렸다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "성소가 드러났다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "덩굴을 걷자 성소에서 따뜻한 빛이 흘렀다.",
              "result": [
                "hp:10",
                "gold:3"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "press_on_fog",
          "order": 1,
          "text": "조심스럽게 나아간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "자리에 앉아 숨을 고르는 사이 안개가 걷혔다.",
              "result": [
                "hp:5"
              ]
            }
          }
        },
        {
          "id": "wind_path_fog",
          "order": 3,
          "text": "바람이 흐르는 쪽을 따라간다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "길을 잃고 늑대와 마주쳤다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "안개를 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "안개를 빠져나오며 떨어진 주머니를 주웠다.",
              "result": [
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "quick_steps",
          "order": 4,
          "text": "발소리를 죽이고 빠르게 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "나무에 부딪혔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "안개를 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "안개 밖에서 동전을 주웠다.",
              "result": [
                "gold:3"
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
      "group": "",
      "choices": [
        {
          "id": "spar_swordsman",
          "order": 1,
          "text": "대련을 청한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [
            "gold:15"
          ],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "검객이 어깨를 으쓱하고 다시 칼을 닦는다.",
              "result": []
            }
          }
        },
        {
          "id": "test_strength",
          "order": 4,
          "text": "힘으로 맞서 칼을 받아 낸다",
          "verb": "force",
          "condition": [
            "str:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "칼에 밀려 넘어졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "검객이 고개를 끄덕인다.",
              "result": [
                "hp:-2"
              ]
            },
            "success": {
              "text": "검객이 감탄하며 기술을 보여 준다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "feint_swordsman",
          "order": 5,
          "text": "빈틈을 노려 검객의 허리띠를 건드린다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "검객의 칼등에 맞았다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "검객이 껄껄 웃는다.",
              "result": [
                "hp:-2"
              ]
            },
            "success": {
              "text": "검객이 재미있다며 기술을 가르쳐 준다.",
              "result": [
                "skill:choice"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "study_tome",
          "order": 1,
          "text": "자리에 앉아 읽어 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "값나가 보이는 표지 장식만 뜯어 챙겼다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "decipher_tome",
          "order": 3,
          "text": "옛 글자를 해독하며 차분히 읽는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글자가 너무 낡았다.",
              "result": []
            },
            "partial": {
              "text": "몇 장을 읽고 책을 챙겼다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "책에 적힌 기술 몇 가지를 이해했다.",
              "result": [
                "skill:choice"
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
      "group": "",
      "choices": [
        {
          "id": "train_together",
          "order": 1,
          "text": "함께 수련한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"싸움은 숨에서 시작된다.\" 수련자가 짧게 말하고 눈을 감는다.",
              "result": [
                "hp:5"
              ]
            }
          }
        },
        {
          "id": "spar_ascetic",
          "order": 3,
          "text": "수련자에게 힘겨루기를 청한다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "수련자에게 가볍게 넘겨졌다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "몸이 풀렸다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "수련자가 기술을 나누어 준다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "copy_breath",
          "order": 4,
          "text": "호흡을 따라 하며 명상한다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "잡념만 늘었다.",
              "result": []
            },
            "partial": {
              "text": "몸이 가벼워졌다.",
              "result": [
                "hp:10"
              ]
            },
            "success": {
              "text": "명상 끝에 기술 하나를 깨쳤다.",
              "result": [
                "skill:random"
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
      "group": "",
      "choices": [
        {
          "id": "observe_beast",
          "order": 1,
          "text": "숨죽여 관찰한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 늑대의 눈에 띄지 않는 편이 낫다.",
              "result": []
            }
          }
        },
        {
          "id": "mimic_beast",
          "order": 3,
          "text": "늑대의 몸놀림을 따라 움직여 본다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "덤불을 건드려 늑대가 달아났다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "몸이 조금 가벼워졌다.",
              "result": []
            },
            "success": {
              "text": "늑대의 움직임을 몸에 익혔다.",
              "result": [
                "skill:choice"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "take_trial",
          "order": 1,
          "text": "시험을 받는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "시험은 다음 기회로 미뤄 둔다.",
              "result": []
            }
          }
        },
        {
          "id": "endure_trial",
          "order": 3,
          "text": "몸으로 빛을 버텨 낸다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "빛이 몸을 할퀴었다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "버티기는 했다.",
              "result": [
                "hp:-4"
              ]
            },
            "success": {
              "text": "빛이 가라앉으며 기술이 떠오른다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "read_trial",
          "order": 4,
          "text": "글귀의 숨은 뜻을 풀어 시험을 피해 간다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "뜻을 잘못 풀어 빛에 맞았다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "시험을 피해 갔다.",
              "result": []
            },
            "success": {
              "text": "글귀의 뜻을 풀자 석판이 기술을 보여 준다.",
              "result": [
                "skill:choice"
              ]
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
      "group": "",
      "choices": [
        {
          "id": "give_potion_mage",
          "order": 1,
          "text": "회복약을 건넨다",
          "verb": "",
          "condition": [
            "item:con_potion"
          ],
          "skillBonus": [],
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
          "verb": "",
          "condition": [],
          "skillBonus": [],
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
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 지팡이의 빛이 가물거린다.",
              "result": []
            }
          }
        },
        {
          "id": "read_staff",
          "order": 4,
          "text": "지팡이의 주문을 읽어 마력을 안정시킨다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "마력이 튀어 손이 저리다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "마법사가 동전을 건넨다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "숨을 돌린 마법사가 기술을 가르쳐 준다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "carry_mage",
          "order": 5,
          "text": "마법사를 업고 샘터까지 데려간다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "함께 넘어졌다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "마법사가 동전을 건넨다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "마법사가 고맙다며 주문 하나를 일러 준다.",
              "result": [
                "skill:random"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_hunters_storehouse",
      "zone": 1,
      "title": "사냥꾼의 창고",
      "description": "통나무로 지은 창고의 문이 굵은 쇠사슬로 잠겨 있다. 문 옆 그루터기에서 늙은 사냥꾼이 활을 무릎에 얹고 졸고 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "locked_storage",
      "choices": [
        {
          "id": "break_chain",
          "order": 1,
          "text": "쇠사슬째 문을 부순다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [
            {
              "skillId": "skl_bash",
              "bonus": 3
            },
            {
              "skillId": "skl_heavy_swing",
              "bonus": 3
            }
          ],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "문은 꿈쩍도 않고 손목만 저린다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "문이 반쯤 부서져 손만 넣어 집었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "문짝이 통째로 넘어간다. 소란에 사냥꾼이 깼지만 이미 늦었다.",
              "result": [
                "item:random:consumable",
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "push_door",
          "order": 2,
          "text": "어깨로 문을 밀어 틈을 낸다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "어깨만 욱신거린다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "틈이 조금 벌어졌지만 손이 닿지 않는다.",
              "result": []
            },
            "success": {
              "text": "벌어진 틈으로 손을 넣어 꾸러미 하나를 끌어냈다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "pick_lock",
          "order": 3,
          "text": "쇠사슬 자물쇠를 딴다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "철컥, 소리에 사냥꾼이 몸을 뒤척인다. 급히 물러났다.",
              "result": []
            },
            "partial": {
              "text": "자물쇠는 열렸지만 문이 삐걱거려 오래 머물 수 없었다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "소리 없이 자물쇠가 풀렸다. 창고 안을 차분히 뒤졌다.",
              "result": [
                "item:random:consumable",
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "roof_gap",
          "order": 4,
          "text": "지붕 틈으로 숨어든다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "썩은 판자가 꺼져 바닥에 떨어졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "안으로 들어갔지만 어두워서 손에 잡히는 것만 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "지붕 틈으로 미끄러져 들어가 필요한 것만 골라 나왔다. 사냥꾼은 끝까지 모른다.",
              "result": [
                "item:random:consumable",
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "read_marks",
          "order": 5,
          "text": "문에 새겨진 사냥꾼 표식을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "아무 뜻 없는 낙서였다.",
              "result": []
            },
            "partial": {
              "text": "근처 나무에 같은 표식이 있다. 뿌리 밑에서 동전 몇 닢을 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "표식이 가리키는 바위 밑에 사냥꾼의 비상 꾸러미가 숨겨져 있었다.",
              "result": [
                "item:con_bandage",
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "burn_chain",
          "order": 6,
          "text": "불씨로 쇠사슬 고리를 달군다",
          "verb": "use",
          "condition": [
            "skill:skl_ember"
          ],
          "skillBonus": [
            {
              "skillId": "skl_ember",
              "bonus": 5
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "불꽃이 튀어 손등을 데었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "고리가 물러졌지만 끊어지지는 않았다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "달궈진 고리가 툭 끊어졌다. 문이 소리 없이 열린다.",
              "result": [
                "item:random:consumable",
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "whetstone_lock",
          "order": 7,
          "text": "숫돌로 자물쇠를 갈아 낸다",
          "verb": "use",
          "condition": [
            "item:con_whetstone"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "숫돌이 닳아 없어질 즈음 자물쇠가 떨어졌다.",
              "result": [
                "item:-con_whetstone",
                "item:random:consumable",
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "talk_hunter",
          "order": 8,
          "text": "사냥꾼을 깨워 사정을 이야기한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "사냥꾼이 귀찮다는 듯 손을 휘저어 쫓아낸다.",
              "result": []
            },
            "partial": {
              "text": "사냥꾼이 하품을 하며 동전 몇 닢을 던져 준다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "사냥꾼이 껄껄 웃으며 창고에서 회복약을 꺼내 건넨다.",
              "result": [
                "item:con_potion",
                "flag:hunterFriend"
              ]
            }
          }
        },
        {
          "id": "threaten_hunter",
          "order": 9,
          "text": "활을 걷어차고 창고를 열라고 한다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "사냥꾼이 순식간에 화살을 쏘고 숲으로 사라졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "사냥꾼이 투덜거리며 동전 주머니만 던지고 달아났다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "사냥꾼이 질린 얼굴로 창고 열쇠를 내밀었다.",
              "result": [
                "gold:10",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "sneak_past",
          "order": 10,
          "text": "깨우지 않고 조용히 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥꾼의 코 고는 소리를 뒤로하고 길을 떠났다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_fallen_tree",
      "zone": 1,
      "title": "쓰러진 나무",
      "description": "아름드리 나무가 쓰러져 길을 막았다. 갈라진 줄기 틈에 무언가 걸려 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "blocked_path",
      "choices": [
        {
          "id": "push_tree",
          "order": 1,
          "text": "어깨로 나무를 밀어낸다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "꿈쩍도 않는다. 어깨만 욱신거린다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "겨우 지나갈 틈만 냈다.",
              "result": []
            },
            "success": {
              "text": "나무가 구르며 줄기에 걸린 꾸러미가 떨어졌다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "lift_tree",
          "order": 2,
          "text": "줄기를 통째로 들어 올린다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [
            {
              "skillId": "skl_bash",
              "bonus": 2
            },
            {
              "skillId": "skl_heavy_swing",
              "bonus": 2
            }
          ],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "허리를 삐끗했다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "줄기를 들썩이자 동전 몇 닢이 굴러 나왔다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "줄기 밑에 깔려 있던 짐짝이 드러났다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "climb_over",
          "order": 3,
          "text": "가지를 딛고 타고 넘는다",
          "verb": "stealth",
          "condition": [
            "agi:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발이 미끄러져 가지에 긁혔다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "넘어가긴 했다.",
              "result": []
            },
            "success": {
              "text": "가볍게 넘으며 틈에 걸린 주머니를 낚아챘다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "run_trunk",
          "order": 4,
          "text": "줄기 위를 달려 꼭대기 둥지까지 오른다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "줄기에서 떨어졌다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "둥지는 비어 있었지만 동전을 주웠다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "까치가 모아 둔 반짝이는 것들을 챙겼다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "find_detour",
          "order": 5,
          "text": "주변을 살펴 돌아가는 길을 찾는다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "빙빙 돌다 시간만 버렸다.",
              "result": [
                "hp:-2"
              ]
            },
            "partial": {
              "text": "돌아가는 길을 찾았다.",
              "result": []
            },
            "success": {
              "text": "우회로에서 약초 군락을 발견했다.",
              "result": [
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "read_rot",
          "order": 6,
          "text": "썩은 부분을 찾아 쉽게 쪼갠다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "엉뚱한 곳을 건드려 가지가 떨어졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "썩은 부분을 찾아 쉽게 지나갔다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "썩은 줄기 속 벌집에서 꿀을 얻었다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "burn_tree",
          "order": 7,
          "text": "불씨로 가지를 태워 길을 낸다",
          "verb": "use",
          "condition": [
            "skill:skl_ember"
          ],
          "skillBonus": [
            {
              "skillId": "skl_ember",
              "bonus": 5
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "연기만 자욱하다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "가지 몇 개가 타 길이 났다.",
              "result": []
            },
            "success": {
              "text": "불길이 줄기를 갈라 숨겨진 구멍이 드러났다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "chop_whetstone",
          "order": 8,
          "text": "숫돌로 날을 세워 가지를 쳐 낸다",
          "verb": "use",
          "condition": [
            "item:con_whetstone"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "가지를 쳐 내자 사이에 걸린 짐이 드러났다.",
              "result": [
                "item:-con_whetstone",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "turn_back",
          "order": 9,
          "text": "다른 길로 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜한 수고는 하지 않기로 한다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_goblin_sentry",
      "zone": 1,
      "title": "고블린 보초",
      "description": "이끼 고블린 하나가 창에 기대 꾸벅꾸벅 졸고 있다. 뒤쪽 바위틈에 고블린들의 보물 자루가 보인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "sentry",
      "choices": [
        {
          "id": "scare_sentry",
          "order": 1,
          "text": "크게 소리쳐 고블린을 겁준다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "고블린이 비명을 질러 동료를 불렀다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "고블린이 창을 버리고 달아났다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "고블린이 보물 자루를 던지고 줄행랑쳤다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "break_spear",
          "order": 2,
          "text": "창을 빼앗아 부러뜨리며 으르렁댄다",
          "verb": "threaten",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "고블린이 창을 놓지 않는다.",
              "result": [
                "fight:ene_moss_goblin"
              ]
            },
            "partial": {
              "text": "고블린이 겁에 질려 도망쳤다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "고블린이 무릎을 꿇고 자루를 바친다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "bribe_sentry",
          "order": 3,
          "text": "동전 몇 닢을 내밀며 달랜다 (골드 3)",
          "verb": "persuade",
          "condition": [
            "gold:3"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "고블린이 동전만 낚아채고 시치미를 뗀다.",
              "result": [
                "gold:-3"
              ]
            },
            "partial": {
              "text": "고블린이 길을 비켜 준다.",
              "result": [
                "gold:-3"
              ]
            },
            "success": {
              "text": "동전을 받은 고블린이 자루 속 물건 하나를 나눠 준다.",
              "result": [
                "gold:-3",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "sneak_sentry",
          "order": 4,
          "text": "졸고 있는 틈에 몰래 지나간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "나뭇가지를 밟았다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "들키지 않고 지나갔다.",
              "result": []
            },
            "success": {
              "text": "지나가는 길에 보물 자루까지 챙겼다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "shadow_sentry",
          "order": 5,
          "text": "그림자처럼 다가가 자루만 빼낸다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "고블린이 눈을 떴다.",
              "result": [
                "fight:ene_moss_goblin"
              ]
            },
            "partial": {
              "text": "자루 끈만 끊어 왔다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "고블린은 끝까지 깨지 않았다.",
              "result": [
                "gold:8",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "pounce_sentry",
          "order": 6,
          "text": "졸던 고블린을 덮친다",
          "verb": "force",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "단숨에 덮쳤다.",
              "result": [
                "fight:ene_moss_goblin:surprise"
              ]
            }
          }
        },
        {
          "id": "distract_sentry",
          "order": 7,
          "text": "멀리 돌을 던져 주의를 돌린다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "돌이 고블린 발치에 떨어졌다.",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "고블린이 소리 쪽으로 가 버렸다.",
              "result": []
            },
            "success": {
              "text": "고블린이 자리를 비운 사이 자루를 뒤졌다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "dart_sentry",
          "order": 8,
          "text": "독침으로 고블린을 잠재운다",
          "verb": "use",
          "condition": [
            "skill:skl_poison_dart"
          ],
          "skillBonus": [
            {
              "skillId": "skl_poison_dart",
              "bonus": 4
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "독침이 빗나갔다.",
              "result": [
                "fight:ene_moss_goblin"
              ]
            },
            "partial": {
              "text": "고블린이 비틀거리며 도망쳤다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "고블린이 그대로 잠들었다.",
              "result": [
                "gold:7",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "avoid_sentry",
          "order": 9,
          "text": "멀찍이 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "고블린 영역을 피해 돌아간다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_thorn_chest",
      "zone": 1,
      "title": "덩굴 궤짝",
      "description": "가시덩굴이 낡은 궤짝을 칭칭 감고 있다. 덩굴 사이로 녹슨 자물쇠가 보인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "locked_storage",
      "choices": [
        {
          "id": "tear_vines",
          "order": 1,
          "text": "덩굴째 자물쇠를 뜯어낸다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "가시에 팔이 찢겼다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "덩굴 일부만 걷어 냈다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "덩굴째 자물쇠가 떨어져 나갔다.",
              "result": [
                "gold:5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "pull_vines",
          "order": 2,
          "text": "덩굴을 한 가닥씩 걷어 낸다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가시에 손을 베였다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "틈이 조금 벌어졌다.",
              "result": []
            },
            "success": {
              "text": "벌어진 틈으로 꾸러미 하나를 꺼냈다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "slip_hand",
          "order": 3,
          "text": "가시 사이로 손을 밀어 넣는다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가시에 찔렸다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "동전 몇 닢만 꺼냈다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "가시를 피해 꾸러미를 꺼냈다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "find_hinge",
          "order": 4,
          "text": "덩굴이 없는 경첩 쪽을 찾는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "경첩도 덩굴에 감겨 있었다.",
              "result": []
            },
            "partial": {
              "text": "경첩 하나를 빼 틈을 냈다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "경첩을 빼 뒤판을 통째로 열었다.",
              "result": [
                "gold:6",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "burn_vines",
          "order": 5,
          "text": "불씨로 덩굴을 태운다",
          "verb": "use",
          "condition": [
            "skill:skl_ember"
          ],
          "skillBonus": [
            {
              "skillId": "skl_ember",
              "bonus": 5
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "불꽃이 튀어 손을 데었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "덩굴이 반쯤 탔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "덩굴이 타 버리고 궤짝이 드러났다.",
              "result": [
                "gold:5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "frost_lock",
          "order": 6,
          "text": "서리 화살로 자물쇠를 얼려 깨뜨린다",
          "verb": "use",
          "condition": [
            "skill:skl_frost_arrow"
          ],
          "skillBonus": [
            {
              "skillId": "skl_frost_arrow",
              "bonus": 5
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "자물쇠가 얼지 않았다.",
              "result": []
            },
            "partial": {
              "text": "자물쇠에 금이 갔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "얼어붙은 자물쇠가 산산이 깨졌다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "grind_lock",
          "order": 7,
          "text": "숫돌로 자물쇠를 갈아 낸다",
          "verb": "use",
          "condition": [
            "item:con_whetstone"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "숫돌이 닳아 없어질 즈음 자물쇠가 떨어졌다.",
              "result": [
                "item:-con_whetstone",
                "gold:5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_thorn_chest",
          "order": 8,
          "text": "가시덩굴을 피해 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "괜히 손을 다칠 필요는 없다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_drifting_pack",
      "zone": 1,
      "title": "떠내려가는 짐",
      "description": "불어난 개울 한가운데 바위에 주인 잃은 짐 꾸러미가 걸려 있다. 물살이 거세다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "river",
      "choices": [
        {
          "id": "wade_pull",
          "order": 1,
          "text": "물에 들어가 꾸러미를 끌어낸다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "물살에 휩쓸려 바위에 부딪혔다.",
              "result": [
                "hp:-7"
              ]
            },
            "partial": {
              "text": "끈만 끊어 왔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "꾸러미를 통째로 끌어냈다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "grab_branch",
          "order": 2,
          "text": "긴 가지로 꾸러미를 끌어당긴다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가지가 부러졌다.",
              "result": [
                "hp:-2"
              ]
            },
            "partial": {
              "text": "꾸러미가 더 멀리 떠내려갔다.",
              "result": []
            },
            "success": {
              "text": "꾸러미 하나를 건져 올렸다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "hop_stones",
          "order": 3,
          "text": "젖은 돌을 딛고 건너간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "미끄러져 물에 빠졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "주머니 하나만 챙겼다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "꾸러미를 들고 무사히 돌아왔다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_current",
          "order": 4,
          "text": "물살을 읽고 떠내려올 곳에서 기다린다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "꾸러미는 다른 쪽으로 흘러갔다.",
              "result": []
            },
            "partial": {
              "text": "작은 주머니가 발치로 떠내려왔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "기다린 자리로 꾸러미가 정확히 떠내려왔다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "freeze_stream",
          "order": 5,
          "text": "서리 화살로 물길을 얼린다",
          "verb": "use",
          "condition": [
            "skill:skl_frost_arrow"
          ],
          "skillBonus": [
            {
              "skillId": "skl_frost_arrow",
              "bonus": 5
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "얼음이 금방 깨졌다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "얼음 위를 건너 주머니를 챙겼다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "얼어붙은 개울을 걸어가 꾸러미를 가져왔다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "ask_fisher",
          "order": 6,
          "text": "근처 낚시꾼에게 도움을 청한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "낚시꾼이 들은 척도 않는다.",
              "result": []
            },
            "partial": {
              "text": "건져 주는 대신 반을 나누자고 한다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "낚시꾼이 꾸러미를 건져 주고 약까지 나눠 준다.",
              "result": [
                "gold:4",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "let_go",
          "order": 7,
          "text": "꾸러미를 포기한다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "거센 물살을 뒤로하고 걸음을 옮긴다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_poison_mist",
      "zone": 1,
      "title": "독안개",
      "description": "늪 위로 보랏빛 안개가 낮게 깔렸다. 건너편 마른 땅에 누군가 떨어뜨린 배낭이 보인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "hazard",
      "choices": [
        {
          "id": "wind_path",
          "order": 1,
          "text": "바람이 흐르는 길을 찾아 건넌다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "안개 속을 헤맸다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "겨우 빠져나왔다.",
              "result": [
                "hp:-2"
              ]
            },
            "success": {
              "text": "바람길을 따라 배낭까지 무사히 닿았다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "herb_lore",
          "order": 2,
          "text": "안개를 막는 풀을 찾아 코에 댄다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "엉뚱한 풀이었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "풀 덕분에 버틸 만했다.",
              "result": [
                "item:con_antidote"
              ]
            },
            "success": {
              "text": "약초를 챙기며 배낭까지 무사히 닿았다.",
              "result": [
                "item:con_antidote",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "dash_mist",
          "order": 3,
          "text": "숨을 참고 단숨에 달려 건넌다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "숨이 차 안개를 들이마셨다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "배낭 끈만 잡아채 왔다.",
              "result": [
                "hp:-3",
                "gold:3"
              ]
            },
            "success": {
              "text": "배낭을 낚아채 단숨에 빠져나왔다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "endure_mist",
          "order": 4,
          "text": "독기를 버티며 걸어서 건넌다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "독기에 무릎이 꺾였다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "버티긴 했지만 머리가 핑 돈다.",
              "result": [
                "hp:-4",
                "gold:3"
              ]
            },
            "success": {
              "text": "끝까지 버텨 배낭을 챙겼다.",
              "result": [
                "hp:-2",
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "chew_antidote",
          "order": 5,
          "text": "해독초를 씹으며 건넌다",
          "verb": "use",
          "condition": [
            "item:con_antidote"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "해독초 덕분에 멀쩡히 배낭을 챙겼다.",
              "result": [
                "item:-con_antidote",
                "gold:5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "go_around",
          "order": 6,
          "text": "늪을 크게 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "안개를 피해 먼 길을 돌았다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_merchant_quarrel",
      "zone": 1,
      "title": "다투는 상인과 도적",
      "description": "행상이 짐을 끌어안고 버티고, 도적 하나가 칼을 들이대며 윽박지른다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "quarrel",
      "choices": [
        {
          "id": "mediate",
          "order": 1,
          "text": "둘 사이에 끼어 중재한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "둘 다 화를 낸다. 도적이 칼끝을 돌린다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "도적이 투덜대며 물러난다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "행상이 고마워하며 약을 건넨다.",
              "result": [
                "gold:3",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "smooth_talk",
          "order": 2,
          "text": "그럴듯한 말로 도적을 구슬린다",
          "verb": "persuade",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "도적이 속지 않았다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "도적이 머리를 긁적이며 떠났다.",
              "result": []
            },
            "success": {
              "text": "도적이 사라지자 행상이 약과 동전을 내민다.",
              "result": [
                "gold:5",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "scare_bandit",
          "order": 3,
          "text": "도적에게 소리쳐 겁을 준다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "도적이 이쪽으로 달려든다.",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "도적이 도망쳤다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "도적이 무기를 버리고 달아났다. 행상이 사례를 한다.",
              "result": [
                "gold:6",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "step_in",
          "order": 4,
          "text": "도적 앞을 막아선다",
          "verb": "force",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "도적이 칼을 고쳐 잡는다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            }
          }
        },
        {
          "id": "snatch_goods",
          "order": 5,
          "text": "다투는 틈에 짐을 슬쩍한다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "둘 다 눈치챘다.",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "작은 주머니 하나를 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "짐 꾸러미를 들고 숲으로 사라졌다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_quarrel",
          "order": 6,
          "text": "남의 일에 끼어들지 않는다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "고함 소리를 뒤로하고 걸음을 옮긴다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_leaning_statue",
      "zone": 1,
      "title": "기울어진 석상",
      "description": "돌 석상이 금방이라도 넘어질 듯 기울어 있다. 받침대 틈에 무언가 끼어 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "ruins",
      "choices": [
        {
          "id": "prop_statue",
          "order": 1,
          "text": "어깨로 석상을 받쳐 바로 세운다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "석상이 미끄러져 발을 찧었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "겨우 받쳐 놓았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "석상을 바로 세우자 받침대가 열렸다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "wedge_statue",
          "order": 2,
          "text": "돌을 괴어 기울기를 막는다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "괸 돌이 튕겨 나갔다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "석상이 더 기울지는 않는다.",
              "result": []
            },
            "success": {
              "text": "받침대 틈이 벌어져 동전이 쏟아졌다.",
              "result": [
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "read_inscription",
          "order": 3,
          "text": "받침대의 글귀를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글자가 닳아 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "글귀를 읽으니 마음이 가라앉는다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "글귀가 가리키는 벽돌 뒤에서 보관함을 찾았다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_old_tongue",
          "order": 4,
          "text": "옛 수비대의 암호를 풀어 본다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "암호를 잘못 읽어 함정이 튀어나왔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "숨겨 둔 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "암호에 적힌 옛 수비대의 기술을 익혔다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "snatch_base",
          "order": 5,
          "text": "받침대 틈의 물건을 재빨리 낚아챈다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "석상이 무너져 내렸다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 건졌다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "석상이 넘어가기 전에 물건을 꺼냈다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_statue",
          "order": 6,
          "text": "무너지기 전에 자리를 피한다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 석상이 쿵 하고 쓰러졌다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_prey_dispute",
      "zone": 1,
      "title": "사냥감 다툼",
      "description": "늑대 두 마리가 쓰러진 사슴을 두고 이빨을 드러낸다. 사슴 목에 사냥꾼의 화살통이 걸려 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "beast",
      "choices": [
        {
          "id": "shout_wolves",
          "order": 1,
          "text": "고함을 질러 늑대를 쫓는다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "두 늑대가 동시에 이쪽을 돌아본다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "한 마리가 물러났다. 화살통만 챙겼다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "늑대들이 꼬리를 말고 달아났다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "snatch_quiver",
          "order": 2,
          "text": "다투는 틈에 화살통을 가로챈다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "늑대 하나가 달려들었다.",
              "result": [
                "fight:ene_starving_wolf"
              ]
            },
            "partial": {
              "text": "화살통 끈만 끊어 왔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "화살통을 챙겨 빠져나왔다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "snatch_swift",
          "order": 3,
          "text": "바람처럼 달려들어 사슴째 끌어낸다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "늑대에게 붙잡혔다.",
              "result": [
                "fight:ene_starving_wolf"
              ]
            },
            "partial": {
              "text": "화살통만 건졌다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "사슴과 화살통을 모두 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "watch_wolves",
          "order": 4,
          "text": "숨어서 늑대들의 싸움을 지켜본다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "늑대가 냄새를 맡았다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "싸움이 끝나고 늑대들이 떠났다.",
              "result": []
            },
            "success": {
              "text": "싸움의 흐름을 지켜보며 새 싸움법을 깨달았다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "dart_wolves",
          "order": 5,
          "text": "독침으로 늑대들을 쫓는다",
          "verb": "use",
          "condition": [
            "skill:skl_poison_dart"
          ],
          "skillBonus": [
            {
              "skillId": "skl_poison_dart",
              "bonus": 4
            }
          ],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "독침이 빗나갔다.",
              "result": [
                "fight:ene_starving_wolf"
              ]
            },
            "partial": {
              "text": "한 마리가 비틀거리며 달아났다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "늑대들이 쓰러진 틈에 화살통을 챙겼다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "join_fight",
          "order": 6,
          "text": "사슴을 차지하려 뛰어든다",
          "verb": "force",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "늑대 한 마리가 이쪽으로 돌아선다.",
              "result": [
                "fight:ene_starving_wolf:surprise"
              ]
            }
          }
        },
        {
          "id": "leave_prey",
          "order": 7,
          "text": "늑대들을 피해 물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "으르렁거리는 소리를 뒤로하고 물러났다.",
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
      "description": "갈비뼈가 드러난 늑대가 이빨을 드러낸다.",
      "base": "",
      "effects": [],
      "intros": []
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
      "description": "온몸에 이끼를 두른 고블린이 돌팔매를 빙빙 돌린다.",
      "base": "",
      "effects": [],
      "intros": []
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
      "description": "손바닥만 한 거미가 나뭇가지에서 실을 타고 내려온다.",
      "base": "",
      "effects": [],
      "intros": []
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
      "description": "가죽 조끼를 걸친 사내가 녹슨 칼을 겨눈다.",
      "base": "",
      "effects": [],
      "intros": []
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
      "description": "부러진 엄니를 단 늙은 멧돼지. 숲 초입의 골칫거리다.",
      "base": "",
      "effects": [],
      "intros": [
        "땅이 낮게 울린다. 덤불이 한꺼번에 쓰러지고, 부러진 엄니를 치켜든 늙은 멧돼지가 콧김을 뿜으며 길을 막아선다.",
        "썩은 나무가 쪼개지는 소리와 함께, 엄니가 흙먼지를 일으키며 돌진해 온다.",
        "거친 숨소리가 가까워진다. 상처투성이 멧돼지가 앞발로 땅을 긁으며 이쪽을 노려본다."
      ]
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
      "description": "속삭임의 근원. 뒤틀린 고목이 뿌리를 끌며 일어선다.",
      "base": "",
      "effects": [],
      "intros": [
        "숲의 속삭임이 한순간 멎는다. 발밑의 뿌리가 꿈틀거리더니, 뒤틀린 고목이 흙을 털어 내며 천천히 몸을 일으킨다. \"…돌아가라…\"",
        "수많은 목소리가 한꺼번에 이름을 부른다. 가지들이 하늘을 가리며 거대한 고목이 길을 막아선다.",
        "바람이 멈추고 나뭇잎이 떨어지지 않는다. 숲 전체가 숨을 죽인 가운데, 고목의 갈라진 틈에서 빛이 새어 나온다."
      ]
    },
    {
      "id": "ene_one_eyed_wolf",
      "zone": 1,
      "name": "외눈 늑대",
      "rank": "elite",
      "hp": 60,
      "damage": 7,
      "agi": 8,
      "damageReduction": 0,
      "skills": [
        "eskl_charge"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 11,
      "description": "한쪽 눈을 잃은 늑대가 낮게 몸을 웅크린다.",
      "base": "ene_starving_wolf",
      "effects": [
        "crit:2"
      ],
      "intros": [
        "풀숲이 갈라지고, 한쪽 눈에 긴 흉터가 난 늑대가 소리 없이 걸어 나온다.",
        "무리를 이끌던 늑대다. 남은 한쪽 눈이 이쪽의 목덜미만 노린다.",
        "낮게 깔린 으르렁거림. 외눈 늑대가 빈틈을 재듯 천천히 원을 그린다."
      ]
    },
    {
      "id": "ene_goblin_slinger",
      "zone": 1,
      "name": "고블린 투척대장",
      "rank": "elite",
      "hp": 65,
      "damage": 6,
      "agi": 4,
      "damageReduction": 0,
      "skills": [
        "eskl_sling_stone"
      ],
      "pattern": "default",
      "goldMin": 9,
      "goldMax": 12,
      "description": "돌주머니를 주렁주렁 단 고블린이 킥킥댄다.",
      "base": "ene_moss_goblin",
      "effects": [
        "evade:1"
      ],
      "intros": [
        "바위 위에서 돌이 날아온다. 돌주머니를 주렁주렁 단 고블린이 이를 드러내며 킥킥댄다.",
        "고블린들이 우러러보는 투척대장이다. 돌팔매가 바람을 가르며 빙빙 돈다."
      ]
    },
    {
      "id": "ene_brood_spider",
      "zone": 1,
      "name": "독주머니 거미",
      "rank": "elite",
      "hp": 60,
      "damage": 6,
      "agi": 5,
      "damageReduction": 0,
      "skills": [
        "eskl_venom_bite"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 11,
      "description": "등에 부풀어 오른 독주머니를 단 거미가 다리를 비빈다.",
      "base": "ene_venom_spider",
      "effects": [
        "reflect:2"
      ],
      "intros": [
        "나뭇가지 전체가 출렁인다. 등에 독주머니를 매단 거미가 실을 타고 천천히 내려온다.",
        "가시털이 곤두선 거미가 독주머니를 부풀린다. 함부로 손대면 다칠 것 같다."
      ]
    },
    {
      "id": "ene_bandit_blade",
      "zone": 1,
      "name": "칼잡이 도적",
      "rank": "elite",
      "hp": 70,
      "damage": 7,
      "agi": 5,
      "damageReduction": 1,
      "skills": [
        "eskl_roar"
      ],
      "pattern": "default",
      "goldMin": 10,
      "goldMax": 13,
      "description": "칼날마다 피가 굳어 붙은 도적이 비릿하게 웃는다.",
      "base": "ene_forest_bandit",
      "effects": [
        "lifesteal:20"
      ],
      "intros": [
        "\"운이 나쁘군.\" 양손에 칼을 든 도적이 칼날을 맞부딪치며 다가온다.",
        "숲 도적들 사이에서 이름난 칼잡이다. 칼날마다 피가 굳어 붙어 있다.",
        "도적이 혀로 칼날을 핥는다. 상처를 낼수록 기운이 오르는 자다."
      ]
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
