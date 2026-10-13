// 자동 생성 파일. 직접 수정하지 않는다.
export const dungeonForestData = {
  "id": "forest",
  "name": "속삭이는 숲",
  "description": "스치는 잎새들이 사방에서 옥죄어 오고, 귓가를 맴도는 속삭임이 감각을 무디게 하는 오래된 숲입니다.\n심장부에 다가갈수록 속삭임은 거친 메아리가 되어 숲을 뒤흔들며 침입자를 밀어냅니다.\n결코 환영받지 못할 걸음이라는 것을 알면서도, 한번 발을 들인 자에게는 돌아설 길이 보이지 않습니다.\n밀어내는 목소리의 근원을 향해, 낡은 무기를 쥐고 가장 깊은 곳으로 나아가십시오.",
  "zones": [
    {
      "zone": 1,
      "name": "숲 초입",
      "rounds": 22,
      "midBosses": [
        {
          "round": 11,
          "enemyIds": [
            "ene_tusk",
            "ene_bandit_chief"
          ]
        }
      ],
      "bossRound": 22,
      "bossIds": [
        "ene_whisper_warden",
        "ene_silver_mane"
      ],
      "campRounds": [
        10,
        21
      ],
      "entryText": "햇빛이 잎 사이로 드문드문 내려온다. 어디선가 낮은 속삭임이 바람에 섞여 들린다."
    },
    {
      "zone": 2,
      "name": "깊은 숲",
      "rounds": 22,
      "midBosses": [
        {
          "round": 11,
          "enemyIds": [
            "ene_rusted_warden",
            "ene_thorncrown"
          ]
        }
      ],
      "bossRound": 22,
      "bossIds": [
        "ene_moss_shaman",
        "ene_old_stump_bear"
      ],
      "campRounds": [
        10,
        21
      ],
      "entryText": "나무가 하늘을 덮어 낮에도 어둑하다. 이끼 낀 돌길이 숲 안쪽으로 이어지고, 속삭임은 이제 사람의 말소리처럼 또렷하다."
    },
    {
      "zone": 3,
      "name": "뿌리에 잠긴 폐허",
      "rounds": 22,
      "midBosses": [],
      "bossRound": 22,
      "bossIds": [],
      "campRounds": [
        10,
        21
      ],
      "entryText": "(3구역 콘텐츠는 이후 작성)"
    },
    {
      "zone": 4,
      "name": "태고의 성역",
      "rounds": 22,
      "midBosses": [],
      "bossRound": 22,
      "bossIds": [],
      "campRounds": [
        10,
        21
      ],
      "entryText": "(4구역 콘텐츠는 이후 작성)"
    }
  ],
  "places": [
    {
      "id": "plc_mossy_path",
      "zone": 1,
      "name": "이끼 낀 오솔길",
      "descriptions": [
        "발밑이 푹신하다. 길 양옆으로 낮은 덤불이 이어진다.",
        "이끼가 발소리를 삼킨다. 길이 어디로 이어지는지 알 수 없다.",
        "오솔길 위로 나뭇가지가 낮게 드리워 터널처럼 어둡다."
      ],
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
      "descriptions": [
        "바람도 없는데 덤불이 흔들린다.",
        "덤불 속에서 낮게 그르렁거리는 소리가 들린다.",
        "가지 몇 개가 부러져 있다. 무언가 방금 이곳을 지나갔다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 40,
        "rest": 0,
        "treasure": 0,
        "shop": 0
      },
      "surpriseChance": 40,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_starving_wolf",
        "ene_venom_spider",
        "ene_young_boar"
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
      "descriptions": [
        "지붕이 반쯤 내려앉은 오두막에서 희미한 연기가 오른다.",
        "덩굴이 무너진 벽을 타고 올라 창문을 막았다.",
        "문짝이 떨어져 나간 오두막 안에서 삐걱거리는 소리가 난다."
      ],
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
        "ene_forest_bandit",
        "ene_creeping_vine"
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
      "descriptions": [
        "물소리가 들린다. 바닥이 훤히 비치는 샘이다.",
        "샘가의 젖은 흙에 크고 작은 발자국이 겹쳐 있다.",
        "햇빛이 수면에 부서진다. 잠시 쉬어 가도 좋을 것 같다."
      ],
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
        "ene_moss_goblin",
        "ene_young_boar"
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
      "descriptions": [
        "이끼에 뒤덮인 돌 제단에 오래된 문양이 남아 있다.",
        "제단 앞에 시든 꽃다발이 놓여 있다. 누군가 아직 이곳을 찾는다.",
        "제단 돌 틈에서 서늘한 바람이 새어 나온다."
      ],
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
      "descriptions": [
        "거대한 고목의 밑동이 동굴처럼 뚫려 있다.",
        "고목 구멍 안쪽이 거미줄로 하얗게 덮여 있다.",
        "텅 빈 고목에 대고 숨을 쉬면 낮은 울림이 되돌아온다."
      ],
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
        "ene_venom_spider",
        "ene_creeping_vine"
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
      "descriptions": [
        "누군가 막 떠난 듯한 모닥불 옆에 짐 보따리가 놓여 있다.",
        "잿더미에 아직 온기가 남아 있다. 근처에 발자국이 어지럽다.",
        "모닥불 위 꼬챙이에 반쯤 탄 고기가 걸려 있다."
      ],
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
        "ene_forest_bandit",
        "ene_moss_goblin"
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
      "descriptions": [
        "비릿한 냄새가 풍긴다. 바닥에 짐승의 발자국이 어지럽다.",
        "굴 입구에 뼛조각이 흩어져 있다.",
        "굴 안쪽 어둠에서 두 개의 눈이 번뜩였다가 사라진다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 40,
        "rest": 0,
        "treasure": 0,
        "shop": 0
      },
      "surpriseChance": 30,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_starving_wolf",
        "ene_young_boar"
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
      "descriptions": [
        "기울어진 돌탑 위로 까마귀가 맴돈다.",
        "무너진 돌계단이 탑 꼭대기까지 이어질 듯 말 듯하다.",
        "탑 벽에 오래된 화살 자국이 박혀 있다."
      ],
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
      "descriptions": [
        "발을 디딜 때마다 질척한 소리가 난다.",
        "늪 위로 거품이 올라와 툭툭 터진다.",
        "안개 너머로 무언가 첨벙거리는 소리가 들린다."
      ],
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
      "descriptions": [
        "맑은 물소리 사이로 미끄러운 돌이 이어진다.",
        "징검돌 몇 개가 물에 잠겨 보일 듯 말 듯하다.",
        "개울 건너편 진흙에 짐승이 물을 마신 자국이 있다."
      ],
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
        "ene_starving_wolf",
        "ene_young_boar"
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
      "descriptions": [
        "바위에 서툰 그림과 핏자국이 칠해져 있다.",
        "바위 아래 뼈와 깨진 냄비 조각이 쌓여 있다.",
        "바위의 그림이 아직 마르지 않았다. 표식을 남긴 지 오래되지 않았다."
      ],
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
        "ene_moss_goblin",
        "ene_forest_bandit"
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
      "descriptions": [
        "천장에 매달린 버섯이 푸르스름한 빛을 흘린다.",
        "동굴 바닥의 버섯을 밟을 때마다 빛 가루가 피어오른다.",
        "동굴 깊은 곳에서 물방울 떨어지는 소리가 규칙적으로 울린다."
      ],
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
        "ene_venom_spider",
        "ene_creeping_vine"
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
      "descriptions": [
        "녹슨 덫과 마른 가죽이 벽에 걸린 오두막이다.",
        "오두막 문에 '들어오지 마시오'라고 긁어 쓴 글씨가 있다.",
        "오두막 뒤편에 손질하다 만 가죽이 널려 있다."
      ],
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
      "descriptions": [
        "언덕 너머에서 길게 늘어지는 울음소리가 들린다.",
        "언덕 위 바위에 짐승 털이 잔뜩 걸려 있다.",
        "울음소리가 그친 뒤의 정적이 더 불길하다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 35,
        "rest": 0,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 45,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_starving_wolf",
        "ene_young_boar"
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
      "descriptions": [
        "나무줄기가 사람 얼굴처럼 비틀려 자라 있다.",
        "나뭇가지가 바람 없이 삐걱이며 방향을 바꾼다.",
        "뒤틀린 줄기 사이에서 누군가 속삭이는 소리가 들린다."
      ],
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
        "ene_venom_spider",
        "ene_creeping_vine"
      ],
      "eventPool": [
        "evt_fallen_tree",
        "evt_poison_mist",
        "evt_whispering_voice",
        "evt_strange_shrine",
        "evt_whisper_answer",
        "evt_shrine_trial"
      ]
    },
    {
      "id": "plc_sunlit_glade",
      "zone": 1,
      "name": "햇살 드는 공터",
      "descriptions": [
        "나무 사이로 햇살이 쏟아지는 둥근 공터다. 새소리가 들린다.",
        "부드러운 풀밭 위에 누군가 앉았다 간 자국이 남아 있다.",
        "숲에서 드물게 밝은 곳이다. 이상하리만치 조용하다."
      ],
      "contentWeights": {
        "combat": 15,
        "event": 35,
        "rest": 45,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 0,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_young_boar",
        "ene_starving_wolf"
      ],
      "eventPool": [
        "evt_sunlit_nap",
        "evt_lost_child",
        "evt_wandering_merchant",
        "evt_forest_ascetic",
        "evt_storm_shelter",
        "evt_mushroom_ring"
      ]
    },
    {
      "id": "plc_lumber_camp",
      "zone": 1,
      "name": "나무꾼의 벌목장",
      "descriptions": [
        "베어 낸 그루터기가 줄지어 있고 장작더미가 높이 쌓여 있다.",
        "멀리서 도끼질 소리가 규칙적으로 울린다.",
        "작업 천막 옆에 손질된 도구들이 가지런히 걸려 있다."
      ],
      "contentWeights": {
        "combat": 25,
        "event": 45,
        "rest": 10,
        "treasure": 0,
        "shop": 20
      },
      "surpriseChance": 10,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_forest_bandit",
        "ene_young_boar"
      ],
      "eventPool": [
        "evt_lumberjack_request",
        "evt_glowing_stump",
        "evt_grateful_parent",
        "evt_wandering_swordsman",
        "evt_abandoned_cart",
        "evt_merchant_quarrel",
        "evt_fallen_tree"
      ]
    },
    {
      "id": "plc_mossy_graves",
      "zone": 1,
      "name": "이끼 낀 무덤가",
      "descriptions": [
        "이름이 지워진 비석들이 이끼 속에 비스듬히 박혀 있다.",
        "무덤 하나가 파헤쳐져 있다. 흙이 아직 축축하다.",
        "녹슨 투구가 비석 위에 얹혀 있다. 누군가 남긴 표시 같다."
      ],
      "contentWeights": {
        "combat": 25,
        "event": 50,
        "rest": 0,
        "treasure": 25,
        "shop": 0
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_creeping_vine",
        "ene_venom_spider"
      ],
      "eventPool": [
        "evt_open_grave",
        "evt_fallen_knight",
        "evt_knight_spirit",
        "evt_crow_flock",
        "evt_whispering_voice",
        "evt_carved_stones"
      ]
    },
    {
      "id": "plc_vine_tunnel",
      "zone": 1,
      "name": "덩굴 터널",
      "descriptions": [
        "덩굴이 머리 위로 엉켜 길게 이어지는 터널을 이루었다.",
        "터널 안쪽에서 덩굴이 천천히 오므라드는 소리가 난다.",
        "덩굴 사이로 들어오는 빛이 붉게 물들어 있다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 35,
        "rest": 0,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 35,
      "eliteBonus": 5,
      "enemyPool": [
        "ene_creeping_vine",
        "ene_venom_spider"
      ],
      "eventPool": [
        "evt_vine_snared",
        "evt_spider_nest",
        "evt_poison_flowers",
        "evt_hollow_log",
        "evt_glowing_moss",
        "evt_snare_trap"
      ]
    },
    {
      "id": "plc_old_stone_road",
      "zone": 2,
      "name": "이끼 덮인 옛 돌길",
      "descriptions": [
        "이끼 사이로 반듯하게 깎은 돌이 드문드문 보인다. 오래전 누군가 낸 길이다.",
        "돌길 위에 마른 화살 한 대가 박혀 있다.",
        "돌길이 숲 안쪽으로 곧게 뻗어 있다. 끝이 보이지 않는다."
      ],
      "contentWeights": {
        "combat": 40,
        "event": 45,
        "rest": 10,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 10,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_bewitched_hunter",
        "ene_thornhorn_stag"
      ],
      "eventPool": [
        "evt_woodcutter_party",
        "evt_woken_hunter",
        "evt_milestone",
        "evt_singing_stranger",
        "evt_fallen_scout",
        "evt_wrecked_cart"
      ]
    },
    {
      "id": "plc_warden_outpost",
      "zone": 2,
      "name": "무너진 숲지기 초소",
      "descriptions": [
        "지붕이 내려앉은 돌 초소에 숲지기의 문장이 희미하게 남아 있다.",
        "초소 문 앞에 이끼 낀 돌 파수꾼이 멈춰 서 있다.",
        "무너진 망대 아래 녹슨 창들이 가지런히 세워져 있다."
      ],
      "contentWeights": {
        "combat": 30,
        "event": 40,
        "rest": 0,
        "treasure": 25,
        "shop": 5
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_moss_sentinel",
        "ene_warden_shade"
      ],
      "eventPool": [
        "evt_outpost_armory",
        "evt_shade_salute",
        "evt_outpost_logbook",
        "evt_sentinel_question",
        "evt_rusted_bell"
      ]
    },
    {
      "id": "plc_hunter_village",
      "zone": 2,
      "name": "버려진 사냥꾼 마을",
      "descriptions": [
        "빈 오두막들 사이로 바람이 지나간다. 문마다 같은 표식이 긁혀 있다.",
        "마을 한가운데 꺼진 화덕 위에 솥이 그대로 걸려 있다.",
        "빨랫줄에 걸린 가죽이 바람에 흔들린다. 사람만 없다."
      ],
      "contentWeights": {
        "combat": 15,
        "event": 45,
        "rest": 30,
        "treasure": 0,
        "shop": 10
      },
      "surpriseChance": 5,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_bewitched_hunter",
        "ene_warden_shade"
      ],
      "eventPool": [
        "evt_hunter_comrade",
        "evt_cold_pot",
        "evt_village_vault",
        "evt_rusty_snares",
        "evt_hunter_dog",
        "evt_vine_cradle"
      ]
    },
    {
      "id": "plc_dry_well_square",
      "zone": 2,
      "name": "마른 우물 광장",
      "descriptions": [
        "돌을 깐 작은 광장 한가운데 바닥이 드러난 우물이 있다.",
        "우물 둘레에 누군가 동전을 늘어놓아 두었다.",
        "우물 안에서 속삭임이 메아리친다."
      ],
      "contentWeights": {
        "combat": 25,
        "event": 60,
        "rest": 5,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 10,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_warden_shade",
        "ene_shadow_bat"
      ],
      "eventPool": [
        "evt_well_coins",
        "evt_dry_spring",
        "evt_well_bucket",
        "evt_sleeper_statue",
        "evt_moss_effigy"
      ]
    },
    {
      "id": "plc_canopy_grove",
      "zone": 2,
      "name": "하늘을 가린 거목 숲",
      "descriptions": [
        "나무가 너무 커서 하늘이 보이지 않는다. 한낮인데도 어둑하다.",
        "굵은 덩굴이 거목 사이를 다리처럼 잇고 있다.",
        "어디선가 가지가 삐걱이며 움직인다. 바람은 없다."
      ],
      "contentWeights": {
        "combat": 55,
        "event": 35,
        "rest": 0,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 30,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_strangler_vine",
        "ene_thornhorn_stag"
      ],
      "eventPool": [
        "evt_wolf_pack_guide",
        "evt_woken_hunter",
        "evt_vine_bridge",
        "evt_mushroom_lanterns",
        "evt_moss_cocoon"
      ]
    },
    {
      "id": "plc_stag_grounds",
      "zone": 2,
      "name": "가시뿔 사슴 사냥터",
      "descriptions": [
        "사냥꾼들이 쓰던 덫과 은신처가 곳곳에 남아 있다.",
        "나무 껍질마다 뿔에 긁힌 자국이 깊게 패어 있다.",
        "가시덩굴이 엉킨 뿔 조각이 땅에 떨어져 있다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 35,
        "rest": 0,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 25,
      "eliteBonus": 5,
      "enemyPool": [
        "ene_thornhorn_stag",
        "ene_bewitched_hunter"
      ],
      "eventPool": [
        "evt_wolf_pack_guide",
        "evt_trapped_stag",
        "evt_shed_antler",
        "evt_rusty_snares",
        "evt_bear_hunter_end"
      ]
    },
    {
      "id": "plc_warden_graves",
      "zone": 2,
      "name": "숲지기의 무덤",
      "descriptions": [
        "같은 문장이 새겨진 비석들이 줄지어 서 있다.",
        "무덤 하나에 녹슨 칼이 꽂혀 있다. 1구역에서 본 기사의 칼과 닮았다.",
        "비석 사이로 푸른 빛이 떠다닌다."
      ],
      "contentWeights": {
        "combat": 25,
        "event": 50,
        "rest": 0,
        "treasure": 25,
        "shop": 0
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_warden_shade",
        "ene_moss_sentinel"
      ],
      "eventPool": [
        "evt_knight_tomb",
        "evt_shade_salute",
        "evt_mourning_shade",
        "evt_bridge_keeper",
        "evt_warden_supply"
      ]
    },
    {
      "id": "plc_bewitched_camp",
      "zone": 2,
      "name": "홀린 자들의 야영지",
      "descriptions": [
        "꺼지지 않은 모닥불 둘레에 사람들이 등을 돌리고 앉아 있다.",
        "천막마다 같은 말이 수없이 긁혀 있다. 읽을 수 없는 글자다.",
        "누군가 낮게 노래를 부른다. 가사가 속삭임과 같다."
      ],
      "contentWeights": {
        "combat": 50,
        "event": 40,
        "rest": 5,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 20,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_bewitched_hunter",
        "ene_warden_shade"
      ],
      "eventPool": [
        "evt_turned_backs",
        "evt_singing_stranger",
        "evt_chant_leader",
        "evt_dance_circle",
        "evt_moss_effigy"
      ]
    },
    {
      "id": "plc_statue_garden",
      "zone": 2,
      "name": "이끼 석상 정원",
      "descriptions": [
        "사람 크기의 돌 석상들이 정원처럼 늘어서 있다.",
        "석상 하나가 아까와 다른 쪽을 보고 있는 것 같다.",
        "이끼가 석상 틈마다 꽉 들어차 있다."
      ],
      "contentWeights": {
        "combat": 55,
        "event": 30,
        "rest": 0,
        "treasure": 15,
        "shop": 0
      },
      "surpriseChance": 15,
      "eliteBonus": 5,
      "enemyPool": [
        "ene_moss_sentinel",
        "ene_strangler_vine"
      ],
      "eventPool": [
        "evt_moved_statue",
        "evt_sentinel_question",
        "evt_weeping_statue",
        "evt_sleeper_statue",
        "evt_warden_supply"
      ]
    },
    {
      "id": "plc_dry_creek",
      "zone": 2,
      "name": "마른 개울 바닥",
      "descriptions": [
        "물이 끊긴 개울 바닥에 둥근 돌이 깔려 있다.",
        "말라붙은 진흙에 사슴 발자국이 어지럽다.",
        "개울가 바위 틈에 누군가 짐을 숨겨 둔 것 같다."
      ],
      "contentWeights": {
        "combat": 35,
        "event": 50,
        "rest": 5,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_thornhorn_stag",
        "ene_shadow_bat"
      ],
      "eventPool": [
        "evt_herbalist_anger",
        "evt_creek_cache",
        "evt_shed_antler",
        "evt_dry_spring",
        "evt_wild_herbs",
        "evt_cave_spring"
      ]
    },
    {
      "id": "plc_bat_cave",
      "zone": 2,
      "name": "박쥐 동굴",
      "descriptions": [
        "동굴 입구에서 비릿한 바람이 불어 나온다.",
        "천장이 꿈틀거린다. 자세히 보니 박쥐 떼다.",
        "동굴 바닥에 오래된 뼈와 반짝이는 것들이 흩어져 있다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 30,
        "rest": 0,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 35,
      "eliteBonus": 5,
      "enemyPool": [
        "ene_shadow_bat",
        "ene_strangler_vine"
      ],
      "eventPool": [
        "evt_bat_hoard",
        "evt_bat_migration",
        "evt_glowworm_cave",
        "evt_cave_spring"
      ]
    },
    {
      "id": "plc_swallowed_hut",
      "zone": 2,
      "name": "덩굴에 삼켜진 오두막",
      "descriptions": [
        "덩굴이 오두막을 통째로 감싸 하나의 덤불처럼 보인다.",
        "덩굴 사이로 창문 하나가 겨우 보인다. 안에서 무언가 움직인다.",
        "문고리에 감긴 덩굴이 천천히 조여든다."
      ],
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
        "ene_strangler_vine",
        "ene_bewitched_hunter"
      ],
      "eventPool": [
        "evt_hut_voice",
        "evt_moss_cocoon",
        "evt_vine_cradle",
        "evt_warning_carving",
        "evt_quiet_glade"
      ]
    },
    {
      "id": "plc_whisper_oak",
      "zone": 2,
      "name": "속삭이는 고목 아래",
      "descriptions": [
        "거대한 고목 밑동이 갈라져 있고, 그 틈에서 속삭임이 흘러나온다.",
        "고목 아래 사람들이 앉아 있던 자국이 둥글게 남아 있다.",
        "속삭임이 이름을 부른다. 이번에는 또렷하다."
      ],
      "contentWeights": {
        "combat": 20,
        "event": 65,
        "rest": 10,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 10,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_warden_shade",
        "ene_strangler_vine"
      ],
      "eventPool": [
        "evt_oak_calls_name",
        "evt_whisper_fog",
        "evt_chant_leader",
        "evt_ribbon_oak",
        "evt_warning_carving",
        "evt_quiet_glade"
      ]
    },
    {
      "id": "plc_hidden_garden",
      "zone": 2,
      "name": "약초꾼의 숨은 정원",
      "descriptions": [
        "덤불 뒤에 잘 가꾼 약초밭이 숨어 있다.",
        "약초 향이 진하다. 누군가 최근까지 돌본 것 같다.",
        "정원 한쪽에 작은 오두막과 맑은 물통이 있다."
      ],
      "contentWeights": {
        "combat": 10,
        "event": 35,
        "rest": 45,
        "treasure": 5,
        "shop": 5
      },
      "surpriseChance": 0,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_thornhorn_stag",
        "ene_shadow_bat"
      ],
      "eventPool": [
        "evt_herbalist_note",
        "evt_herbalist_anger",
        "evt_wild_herbs"
      ]
    },
    {
      "id": "plc_broken_bridge",
      "zone": 2,
      "name": "부서진 다리 협곡",
      "descriptions": [
        "협곡 위 돌다리가 가운데서 끊겨 있다.",
        "협곡 바닥에서 물소리가 아득하게 올라온다.",
        "끊긴 다리 끝에 밧줄 하나가 바람에 흔들린다."
      ],
      "contentWeights": {
        "combat": 30,
        "event": 55,
        "rest": 5,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_shadow_bat",
        "ene_bewitched_hunter"
      ],
      "eventPool": [
        "evt_bridge_rope",
        "evt_canyon_echo",
        "evt_well_bucket",
        "evt_bridge_keeper",
        "evt_warning_carving",
        "evt_quiet_glade"
      ]
    },
    {
      "id": "plc_old_rite_site",
      "zone": 2,
      "name": "옛 제사터",
      "descriptions": [
        "둥글게 놓인 돌 제단 위에 마른 꽃이 쌓여 있다.",
        "제단 돌마다 손바닥 모양의 홈이 파여 있다.",
        "제사터 가운데 서면 속삭임이 잦아든다."
      ],
      "contentWeights": {
        "combat": 25,
        "event": 50,
        "rest": 0,
        "treasure": 25,
        "shop": 0
      },
      "surpriseChance": 15,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_warden_shade",
        "ene_moss_sentinel"
      ],
      "eventPool": [
        "evt_palm_altar",
        "evt_rusted_bell",
        "evt_weeping_statue",
        "evt_ribbon_oak",
        "evt_dance_circle"
      ]
    },
    {
      "id": "plc_lightless_vale",
      "zone": 2,
      "name": "빛이 들지 않는 골짜기",
      "descriptions": [
        "골짜기 안으로 들어갈수록 빛이 사라진다.",
        "어둠 속에서 날갯짓 소리와 낮은 중얼거림이 섞여 들린다.",
        "발밑이 보이지 않는다. 무언가 발목을 스친다."
      ],
      "contentWeights": {
        "combat": 60,
        "event": 30,
        "rest": 0,
        "treasure": 10,
        "shop": 0
      },
      "surpriseChance": 40,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_shadow_bat",
        "ene_warden_shade",
        "ene_strangler_vine"
      ],
      "eventPool": [
        "evt_dying_lantern",
        "evt_bat_migration",
        "evt_whisper_fog",
        "evt_mushroom_lanterns",
        "evt_glowworm_cave"
      ]
    },
    {
      "id": "plc_merchant_rest",
      "zone": 2,
      "name": "떠돌이 상인의 수레 쉼터",
      "descriptions": [
        "큰 나무 아래 수레 한 대가 서 있고, 등불이 켜져 있다.",
        "수레에 걸린 방울이 딸랑인다. \"어서 오게, 이 깊은 곳까지.\"",
        "수레 옆 모닥불이 아늑하게 타오른다."
      ],
      "contentWeights": {
        "combat": 10,
        "event": 30,
        "rest": 20,
        "treasure": 0,
        "shop": 40
      },
      "surpriseChance": 0,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_bewitched_hunter",
        "ene_thornhorn_stag"
      ],
      "eventPool": [
        "evt_woodcutter_party",
        "evt_deep_peddler",
        "evt_wrecked_cart"
      ]
    },
    {
      "id": "plc_bear_hill",
      "zone": 2,
      "name": "곰 발자국 언덕",
      "descriptions": [
        "사람 머리만 한 곰 발자국이 언덕 위로 이어진다.",
        "나무 줄기마다 발톱 자국이 높이 패어 있다.",
        "언덕 위에서 낮은 숨소리가 바람처럼 내려온다."
      ],
      "contentWeights": {
        "combat": 55,
        "event": 35,
        "rest": 5,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 25,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_thornhorn_stag",
        "ene_moss_sentinel"
      ],
      "eventPool": [
        "evt_wolf_pack_guide",
        "evt_bear_path",
        "evt_bear_honey",
        "evt_hunter_dog",
        "evt_bear_hunter_end"
      ]
    },
    {
      "id": "plc_watch_tree",
      "zone": 2,
      "name": "숲지기의 망루 나무",
      "descriptions": [
        "거목 위에 나무판자로 엮은 망루가 걸려 있다.",
        "줄사다리가 망루까지 이어져 있다. 아직 튼튼해 보인다.",
        "망루에서 내려다보면 숲이 끝없이 이어진다."
      ],
      "contentWeights": {
        "combat": 15,
        "event": 45,
        "rest": 35,
        "treasure": 5,
        "shop": 0
      },
      "surpriseChance": 5,
      "eliteBonus": 0,
      "enemyPool": [
        "ene_shadow_bat",
        "ene_bewitched_hunter"
      ],
      "eventPool": [
        "evt_watch_view",
        "evt_fallen_scout",
        "evt_wild_herbs",
        "evt_warden_supply"
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
      "group": "chest",
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
          "id": "pry_chest",
          "order": 3,
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
          "order": 4,
          "text": "바늘 장치를 피해 손끝으로 걸쇠만 푼다",
          "verb": "stealth",
          "condition": [
            "agi:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
        },
        {
          "id": "leave_chest",
          "order": 5,
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
      "group": "wounded_person",
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
          "id": "splint_traveler",
          "order": 3,
          "text": "능숙하게 부목을 대 준다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
          "order": 4,
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
        },
        {
          "id": "search_belongings",
          "order": 5,
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
          "id": "pass_traveler",
          "order": 6,
          "text": "갈 길이 바빠 지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"…조심하시오.\" 등 뒤로 힘없는 목소리가 들린다.",
              "result": []
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
      "group": "whisper",
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
          "id": "answer_voice",
          "order": 3,
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
        },
        {
          "id": "coin_voice",
          "order": 4,
          "text": "샘물에 동전을 던지고 목소리의 이름을 묻는다 (골드 3)",
          "verb": "",
          "condition": [
            "gold:3"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "동전이 가라앉고 목소리가 뚝 끊겼다.",
              "result": [
                "gold:-3"
              ]
            },
            "partial": {
              "text": "물 위로 따뜻한 김이 오른다.",
              "result": [
                "gold:-3",
                "hp:8"
              ]
            },
            "success": {
              "text": "목소리가 이름 하나를 속삭인다. 어디선가 다시 들을 것 같은 이름이다.",
              "result": [
                "gold:-3",
                "flag:heardStoneWhisper"
              ]
            }
          }
        },
        {
          "id": "reach_spring",
          "order": 5,
          "text": "목소리가 나는 샘 바닥에 손을 깊이 넣는다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "얼음장 같은 물에 손이 곱았다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "바닥에서 동전 몇 닢을 건졌다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "바닥의 돌 틈에 걸린 꾸러미를 건져 올렸다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "cover_ears",
          "order": 6,
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
      "group": "bandit",
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
          "id": "give_potion_toll",
          "order": 2,
          "text": "통행료 대신 회복약을 건넨다",
          "verb": "use",
          "condition": [
            "item:con_potion"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "도적이 병을 흔들어 보더니 씩 웃으며 길을 비킨다.",
              "result": [
                "item:-con_potion"
              ]
            }
          }
        },
        {
          "id": "fight_bandit",
          "order": 3,
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
          "order": 4,
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
          "order": 5,
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
          "id": "slam_blade",
          "order": 6,
          "text": "칼을 바위에 내리꽂으며 으름장을 놓는다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "도적이 코웃음을 치며 칼을 뽑는다.",
              "result": [
                "fight:ene_forest_bandit"
              ]
            },
            "partial": {
              "text": "도적이 슬금슬금 물러난다.",
              "result": []
            },
            "success": {
              "text": "도적이 질린 얼굴로 동전 주머니까지 던지고 달아난다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "outrun_bandit",
          "order": 7,
          "text": "샛길로 재빨리 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
      "group": "shrine",
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
          "id": "lift_altar",
          "order": 4,
          "text": "제단석을 들어 아래를 살핀다",
          "verb": "force",
          "condition": [
            "str:8"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
        },
        {
          "id": "reach_gap",
          "order": 5,
          "text": "제단 뒤 틈에 손을 넣어 더듬는다",
          "verb": "stealth",
          "condition": [
            "agi:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "무언가에 손가락을 물렸다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "동전 몇 닢이 손에 잡혔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "틈 깊숙이 숨겨 둔 공물을 꺼냈다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_altar",
          "order": 6,
          "text": "제단을 그대로 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "녹슨 동전이 제단 위에서 희미하게 빛난다.",
              "result": []
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
      "group": "hunter",
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
        },
        {
          "id": "call_help",
          "order": 5,
          "text": "소리쳐 도움을 청한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "대답 대신 도적이 다가왔다!",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "아무도 오지 않아 결국 혼자 풀었다.",
              "result": [
                "hp:-2"
              ]
            },
            "success": {
              "text": "지나가던 사냥꾼이 올가미를 풀어 주고 붕대까지 건넨다.",
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
      "group": "hunter",
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
          "id": "check_traps",
          "order": 2,
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
          "order": 3,
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
        },
        {
          "id": "read_note",
          "order": 4,
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
          "id": "leave_thanks",
          "order": 5,
          "text": "꾸러미는 두고 쪽지 아래 고맙다는 말을 남긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "쪽지 아래 서툰 글씨로 인사를 남겼다. 누군가 이 길을 다시 지날 것 같다.",
              "result": [
                "flag:readHunterNote",
                "flag:hunterFriend"
              ]
            }
          }
        },
        {
          "id": "leave_cache",
          "order": 6,
          "text": "남의 물건이니 그냥 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "꾸러미를 그대로 두고 길을 떠났다.",
              "result": []
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
      "group": "wounded_person",
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
          "id": "carry_knight",
          "order": 3,
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
        },
        {
          "id": "read_crest",
          "order": 4,
          "text": "갑옷의 문장을 살핀다",
          "verb": "insight",
          "condition": [
            "wis:2"
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
          "id": "rest_shield",
          "order": 5,
          "text": "기사의 방패를 깔고 잠시 쉬어 간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "기사 곁에서 숨을 돌렸다. 이상하게 든든하다.",
              "result": [
                "hp:6"
              ]
            }
          }
        },
        {
          "id": "leave_knight",
          "order": 6,
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
      "group": "wolf",
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
          "id": "gentle_free",
          "order": 2,
          "text": "새끼가 놀라지 않게 조심스럽게 푼다",
          "verb": "stealth",
          "condition": [
            "agi:8"
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
          "order": 3,
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
        },
        {
          "id": "bandage_cub",
          "order": 4,
          "text": "붕대로 다친 다리를 감싸 준다",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "새끼가 붕대 감긴 다리로 껑충껑충 어미에게 달려간다. 어미가 오래 이쪽을 바라본다.",
              "result": [
                "item:-con_bandage",
                "flag:savedWolfCub",
                "hp:4"
              ]
            }
          }
        },
        {
          "id": "take_snare",
          "order": 5,
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
          "order": 6,
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
      "group": "glow",
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
              "text": "온몸에 생기가 돌고 힘이 솟는다.",
              "result": [
                "hp:10",
                "item:random:elixir"
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
          "id": "identify_mushroom",
          "order": 3,
          "text": "약이 되는 버섯을 골라낸다",
          "verb": "insight",
          "condition": [
            "wis:8"
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
        },
        {
          "id": "pick_brightest",
          "order": 4,
          "text": "원 안의 가장 밝은 버섯만 조심스럽게 딴다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "포자가 터져 기침이 멎지 않는다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "쓸 만한 버섯 몇 개를 챙겼다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "약효가 뛰어난 버섯을 고스란히 땄다.",
              "result": [
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "nap_ring",
          "order": 5,
          "text": "원 안에 들어가 잠시 눕는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "알록달록한 환각에 시달렸다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "이상한 꿈을 꾸다 깼다.",
              "result": []
            },
            "success": {
              "text": "깨어나니 몸이 깃털처럼 가볍다.",
              "result": [
                "hp:15"
              ]
            }
          }
        },
        {
          "id": "avoid_ring",
          "order": 6,
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
          "id": "bargain",
          "order": 3,
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
                "gold:-5",
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
          "order": 4,
          "text": "짐 속 물건을 감정해 준다",
          "verb": "insight",
          "condition": [
            "wis:2"
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
        },
        {
          "id": "ask_way",
          "order": 5,
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
      "group": "whisper",
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
          "id": "climb_well",
          "order": 3,
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
              "text": "바닥에 가라앉은 물건들 사이에서 봉인된 약병을 건졌다.",
              "result": [
                "gold:6",
                "item:random:elixir"
              ]
            }
          }
        },
        {
          "id": "haul_bucket",
          "order": 4,
          "text": "두레박을 끝까지 끌어올린다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "줄이 끊어져 손바닥이 쓸렸다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "두레박에 동전 몇 닢이 걸려 올라왔다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "두레박 안에 오래된 꾸러미가 들어 있었다.",
              "result": [
                "gold:3",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_echo",
          "order": 5,
          "text": "메아리에 대고 질문을 던진다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
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
        },
        {
          "id": "leave_well",
          "order": 6,
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
          "id": "rip_web",
          "order": 3,
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
          "order": 4,
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
        },
        {
          "id": "wriggle_web",
          "order": 5,
          "text": "거미줄 틈으로 몸을 비틀어 들어간다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "거미줄에 걸려 버둥거리는 사이 거미가 달려들었다!",
              "result": [
                "fight:ene_venom_spider:ambushed"
              ]
            },
            "partial": {
              "text": "반짝이던 것은 동전이었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "거미줄을 하나도 건드리지 않고 둥지 깊은 곳의 장비를 꺼냈다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "avoid_nest",
          "order": 6,
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
          "id": "comfort_child",
          "order": 3,
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
          "order": 4,
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
        },
        {
          "id": "shoulder_ride",
          "order": 5,
          "text": "아이를 목말 태우고 숲 어귀까지 달린다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌부리에 걸려 함께 넘어졌다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "아이가 내려 달라며 웃는다.",
              "result": [
                "flag:guidedLostChild"
              ]
            },
            "success": {
              "text": "아이가 깔깔 웃는다. 숲 어귀에서 손을 흔들며 달려간다.",
              "result": [
                "hp:4",
                "flag:guidedLostChild"
              ]
            }
          }
        },
        {
          "id": "ignore_child",
          "order": 6,
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
      "group": "goblin",
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
          "verb": "threaten",
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
          "id": "hurl_goblin",
          "order": 4,
          "text": "가장 큰 놈을 번쩍 들어 던져 버린다",
          "verb": "force",
          "condition": [
            "str:8"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "고블린이 팔을 물어뜯고 나머지가 덤벼든다!",
              "result": [
                "fight:ene_moss_goblin:ambushed"
              ]
            },
            "partial": {
              "text": "고블린들이 비명을 지르며 흩어졌다.",
              "result": []
            },
            "success": {
              "text": "고블린들이 흩어지며 떨군 주머니를 챙겼다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "trick_goblins",
          "order": 5,
          "text": "반짝이는 돌을 던져 시선을 돌린다",
          "verb": "",
          "condition": [],
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
          "order": 6,
          "text": "고블린들 사이를 재빨리 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:2"
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
        },
        {
          "id": "detour_goblins",
          "order": 7,
          "text": "다른 길로 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "고블린들의 킥킥거림을 뒤로하고 먼 길을 돌았다.",
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
      "group": "tracks",
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
          "id": "read_marks_tracks",
          "order": 2,
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
          "order": 3,
          "text": "발소리를 죽이고 빠르게 뒤쫓는다",
          "verb": "stealth",
          "condition": [
            "agi:8"
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
                "gold:5",
                "flag:foundTrailClue"
              ]
            }
          }
        },
        {
          "id": "call_out",
          "order": 4,
          "text": "발자국 주인을 큰 소리로 부른다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "대답 대신 도적이 덤불에서 튀어나왔다!",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "메아리만 돌아온다. 발밑에 떨어진 동전을 주웠다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "길 잃은 나무꾼이 대답하며 다가와 표식의 뜻을 알려 준다.",
              "result": [
                "gold:3",
                "flag:foundTrailClue"
              ]
            }
          }
        },
        {
          "id": "ignore_tracks",
          "order": 5,
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
          "id": "dig_deep",
          "order": 2,
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
          "order": 3,
          "text": "표식의 남은 뜻을 해독한다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
        },
        {
          "id": "erase_marker",
          "order": 4,
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
          "id": "remember_marker",
          "order": 5,
          "text": "표식만 기억해 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "나무 밑동의 표식을 눈에 새기고 걸음을 옮긴다.",
              "result": []
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
            "wis:2"
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
        },
        {
          "id": "follow_mud",
          "order": 5,
          "text": "진흙에 새로 난 발자국을 따라간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "진흙탕에 발이 빠져 넘어졌다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "비를 피하던 누군가가 흘린 동전을 주웠다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "비를 피하던 사냥꾼의 은신처를 찾았다. 비어 있다.",
              "result": [
                "item:random:consumable"
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
      "group": "whisper",
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
          "id": "push_stone",
          "order": 3,
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
          "order": 4,
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
        },
        {
          "id": "blood_stone",
          "order": 5,
          "text": "손바닥을 베어 피를 홈에 떨군다 (HP 6 소모)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "피가 홈을 타고 스며들자 속삭임이 또렷한 이름 하나를 남긴다. 바위 틈에서 작은 약병이 굴러 나왔다.",
              "result": [
                "hp:-6",
                "flag:heardStoneWhisper",
                "item:random:elixir"
              ]
            }
          }
        },
        {
          "id": "leave_stone",
          "order": 6,
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
      "group": "bandit",
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
          "id": "dig_firepit",
          "order": 2,
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
        },
        {
          "id": "track_bandits",
          "order": 3,
          "text": "서둘러 떠난 발자국을 따라 떨어진 짐을 줍는다",
          "verb": "stealth",
          "condition": [
            "agi:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "덤불에 긁혔다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "떨어진 동전 몇 닢을 주웠다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "도적들이 흘린 짐 꾸러미를 찾았다.",
              "result": [
                "gold:4",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "ambush_wait",
          "order": 4,
          "text": "돌아오는 도적을 숨어서 기다린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "도적 둘이 함께 돌아와 먼저 이쪽을 발견했다!",
              "result": [
                "fight:ene_forest_bandit:ambushed"
              ]
            },
            "partial": {
              "text": "아무도 오지 않았다. 덕분에 푹 쉬었다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "혼자 돌아온 도적을 덮쳤다.",
              "result": [
                "gold:5",
                "fight:ene_forest_bandit:surprise"
              ]
            }
          }
        },
        {
          "id": "warm_up",
          "order": 5,
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
          "order": 6,
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
          "id": "offer_hand",
          "order": 2,
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
        },
        {
          "id": "follow_mother",
          "order": 3,
          "text": "어미의 뒤를 조용히 따라간다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "길을 잃고 가시덤불을 헤맸다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "어미가 멈춘 곳에서 동전 몇 닢을 주웠다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "어미가 이끈 굴 앞에 오래전 사냥꾼의 유품이 남아 있었다.",
              "result": [
                "gold:3",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "play_cub",
          "order": 4,
          "text": "새끼 늑대와 잠시 놀아 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "새끼가 뒹굴며 장난을 친다. 긴장이 풀리며 몸이 가벼워진다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "pass_quietly",
          "order": 5,
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
        },
        {
          "id": "bow_spirit",
          "order": 5,
          "text": "고개 숙여 인사하고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "빛이 고개를 끄덕이며 천천히 흩어진다.",
              "result": []
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
        },
        {
          "id": "chat_parent",
          "order": 4,
          "text": "숲 이야기를 나눈다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사내가 바쁘다며 자리를 뜬다.",
              "result": []
            },
            "partial": {
              "text": "사내가 지친 얼굴을 보고 빵을 나눠 준다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "\"벌목장 쪽 길이 그나마 안전하오.\" 사내가 붕대와 동전을 쥐여 준다.",
              "result": [
                "gold:3",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "nod_pass",
          "order": 5,
          "text": "고개만 끄덕이고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내가 몇 번이고 고개를 숙인다.",
              "result": []
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
          "id": "whisper_true",
          "order": 2,
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
        },
        {
          "id": "silent_answer",
          "order": 3,
          "text": "이름을 부르지 않고 침묵으로 답한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바람이 한참 머뭇거리다 잦아든다. 이상하게 마음이 편안하다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "walk_wind",
          "order": 4,
          "text": "바람을 거슬러 이름이 들려온 쪽으로 걷는다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "바람에 밀려 넘어지고 나뭇가지에 긁혔다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "바람이 그친 자리에 무언가 떨어져 있다.",
              "result": [
                "item:random:consumable"
              ]
            },
            "success": {
              "text": "바람의 근원에 오래된 공물이 쌓여 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "cover_ears_again",
          "order": 5,
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
            "agi:2"
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
        },
        {
          "id": "part_ways",
          "order": 5,
          "text": "인사만 나누고 헤어진다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"몸조심하게.\" 사냥꾼이 활을 고쳐 메고 숲으로 사라진다.",
              "result": []
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
      "group": "river",
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
            "agi:8"
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
                "gold:4"
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
            "str:2"
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
        },
        {
          "id": "go_upstream",
          "order": 6,
          "text": "다리를 포기하고 상류로 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "한참을 돌아 얕은 여울을 건넜다.",
              "result": []
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
      "group": "glow",
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
              "text": "몸속 깊은 곳까지 생기가 퍼지며 감각이 또렷해진다.",
              "result": [
                "hp:10",
                "item:random:elixir"
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
        },
        {
          "id": "peel_bark",
          "order": 4,
          "text": "이끼를 고목 껍질째 뜯어낸다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "껍질에 손이 긁혔다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "이끼 한 덩이를 챙겼다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "껍질 밑의 약효 좋은 이끼까지 챙겼다.",
              "result": [
                "item:con_bandage",
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "moss_lantern",
          "order": 5,
          "text": "이끼를 등불 삼아 고목 속을 비춘다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "안쪽엔 아무것도 없었다.",
              "result": []
            },
            "partial": {
              "text": "구석에서 동전 몇 닢을 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "고목 속에 숨겨진 꾸러미를 찾았다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_moss",
          "order": 6,
          "text": "이끼를 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "푸른 빛이 등 뒤에서 희미해진다.",
              "result": []
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
          "id": "throw_stone",
          "order": 2,
          "text": "돌을 던져 까마귀를 흩어 놓는다",
          "verb": "stealth",
          "condition": [
            "agi:2"
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
          "id": "shake_tree",
          "order": 3,
          "text": "나무를 흔들어 까마귀를 떨어뜨린다",
          "verb": "force",
          "condition": [
            "str:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "성난 까마귀들이 머리를 쪼아 댔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "떨어진 둥지에서 동전을 주웠다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "둥지째 떨어지며 까마귀가 모은 것들이 쏟아졌다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "mimic_crow",
          "order": 4,
          "text": "까마귀 울음을 흉내 내 무리를 속인다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
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
        },
        {
          "id": "watch_crows",
          "order": 5,
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
      "group": "fallen_tree",
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
          "text": "숨죽여 다가가 안을 들여다본다",
          "verb": "stealth",
          "condition": [
            "agi:2"
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
        },
        {
          "id": "leave_log",
          "order": 5,
          "text": "통나무를 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바스락거리는 소리가 등 뒤에서 멎었다.",
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
      "group": "bandit",
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
          "id": "pick_pocket",
          "order": 2,
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
          "order": 3,
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
        },
        {
          "id": "wake_threaten",
          "order": 4,
          "text": "깨워서 겁을 준다",
          "verb": "threaten",
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
          "id": "drink_bottle",
          "order": 5,
          "text": "굴러다니는 술병의 남은 술을 마셔 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "속이 뒤집혀 한참을 웩웩거렸다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "목이 화끈하고 몸이 데워진다.",
              "result": [
                "hp:4"
              ]
            },
            "success": {
              "text": "독한 술기운에 상처 통증이 싹 가셨다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "leave_drunk",
          "order": 6,
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
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
        },
        {
          "id": "decline_tea",
          "order": 6,
          "text": "정중히 사양하고 길을 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"조심해서 가게나.\" 노파가 문을 닫는다.",
              "result": []
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
      "group": "tracks",
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
          "id": "read_wolf_tracks",
          "order": 2,
          "text": "발자국으로 늑대의 상태를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:2"
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
        },
        {
          "id": "sneak_den",
          "order": 3,
          "text": "발자국을 따라 굴까지 숨어든다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "굴 앞에서 늑대와 눈이 마주쳤다!",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "굴 앞에 흩어진 동전을 주웠다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "늑대가 숨겨 둔 사냥감 사이에서 사냥꾼의 꾸러미를 찾았다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "set_snare",
          "order": 4,
          "text": "발자국 길목에 덫을 놓고 기다린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "한참을 기다렸지만 아무것도 걸리지 않았다.",
              "result": []
            },
            "partial": {
              "text": "토끼 한 마리가 걸렸다. 구워 먹고 기운을 차렸다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "늑대가 덫에 걸려 버둥거린다. 손쉽게 처치하고 가진 것을 챙겼다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "avoid_tracks",
          "order": 5,
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
            "wis:8"
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
        },
        {
          "id": "salvage_cart",
          "order": 5,
          "text": "수레를 부숴 쓸 만한 쇠붙이를 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바퀴 테와 못을 뜯어 챙겼다. 주인이 돌아오면 속상하겠다.",
              "result": [
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "leave_cart",
          "order": 6,
          "text": "수레를 그대로 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "기울어진 수레가 바람에 삐걱거린다.",
              "result": []
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
              "text": "연못 바닥에서 은빛 병 하나가 떠올랐다.",
              "result": [
                "gold:-2",
                "item:random:elixir"
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
        },
        {
          "id": "leave_pond",
          "order": 5,
          "text": "은빛을 뒤로하고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "물결 위의 은빛이 오래 눈에 남는다.",
              "result": []
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
      "group": "hazard",
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
        },
        {
          "id": "trample_flowers",
          "order": 4,
          "text": "꽃밭을 짓밟아 길을 낸다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "꽃가루가 확 피어올랐다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "꽃밭을 지나왔다.",
              "result": []
            },
            "success": {
              "text": "꽃밭 밑에 누군가 떨어뜨린 주머니가 있었다.",
              "result": [
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "avoid_flowers",
          "order": 5,
          "text": "꽃밭을 피해 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "달콤한 향이 한참 따라온다.",
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
      "group": "goblin",
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
          "id": "steal_totem",
          "order": 3,
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
          "order": 4,
          "text": "주문을 거꾸로 읊어 주술을 끊는다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
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
        },
        {
          "id": "mimic_chant",
          "order": 5,
          "text": "주문을 몰래 따라 외워 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "주술이 몸을 파고든다. 온몸이 저릿하다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "머리가 핑 돌 뿐 아무 일도 없었다.",
              "result": []
            },
            "success": {
              "text": "낯선 주문의 힘이 손끝에 남았다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "back_away",
          "order": 6,
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
      "group": "ruins",
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
          "id": "heft_stone",
          "order": 3,
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
        },
        {
          "id": "pull_bottom",
          "order": 4,
          "text": "무너뜨리지 않고 맨 아래 돌만 빼낸다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌무더기가 와르르 무너져 내렸다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "빼낸 돌 밑에 동전이 있었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "맨 아래 돌 밑에 꾸러미가 숨겨져 있었다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_stones",
          "order": 5,
          "text": "돌무더기를 건드리지 않고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "돌무더기의 문양이 자꾸 눈에 밟힌다.",
              "result": []
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
      "group": "wounded_person",
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
          "id": "carry_soldier",
          "order": 3,
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
          "id": "ask_news",
          "order": 5,
          "text": "병사에게 숲 깊은 곳의 소식을 묻는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "병사의 의식이 흐려진다.",
              "result": []
            },
            "partial": {
              "text": "병사가 위험한 길목 몇 군데를 일러 준다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "\"붉은 두건의 도적 두목을 조심하시오.\" 병사가 숨겨 둔 비상금을 털어 준다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "rob_soldier",
          "order": 6,
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
          "id": "pass_soldier",
          "order": 7,
          "text": "못 본 척 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "신음 소리가 숲속에 묻힌다.",
              "result": []
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
      "group": "shrine",
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
          "id": "decipher_face",
          "order": 3,
          "text": "신의 얼굴 아래 글귀를 해독한다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
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
          "order": 4,
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
        },
        {
          "id": "deface_shrine",
          "order": 5,
          "text": "낯선 신의 얼굴을 깎아 낸다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "돌가루가 눈에 들어갔다. 차가운 저주가 몸을 감싼다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "얼굴이 뭉개졌다. 아무 일도 없었다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "깎아 낸 얼굴 뒤에 박혀 있던 보석을 빼냈다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "leave_shrine",
          "order": 6,
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
      "group": "hazard",
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
          "id": "quick_steps",
          "order": 3,
          "text": "발소리를 죽이고 빠르게 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
        },
        {
          "id": "climb_fog",
          "order": 4,
          "text": "나무를 타고 올라 안개 위로 머리를 내민다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "젖은 가지에서 미끄러져 떨어졌다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "방향을 잡고 안개를 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "안개 위로 길이 훤히 보인다. 내려오는 길에 반짝이는 것도 주웠다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "wind_path_fog",
          "order": 5,
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
          "id": "shout_fog",
          "order": 6,
          "text": "큰 소리로 외쳐 메아리로 방향을 잡는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "소리를 듣고 늑대가 다가왔다!",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "메아리로 방향을 잡아 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "근처의 나그네가 대답하며 길을 안내하고 약초를 나눠 준다.",
              "result": [
                "hp:5",
                "item:con_bandage"
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
      "group": "mentor",
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
          "id": "test_strength",
          "order": 3,
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
          "order": 4,
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
        },
        {
          "id": "hear_stories",
          "order": 5,
          "text": "검객의 무용담을 들어 준다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "검객이 시큰둥하게 칼만 닦는다.",
              "result": []
            },
            "partial": {
              "text": "이야기를 듣는 동안 푹 쉬었다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "\"좋은 청중이군.\" 검객이 숫돌을 건넨다.",
              "result": [
                "hp:5",
                "item:con_whetstone"
              ]
            }
          }
        },
        {
          "id": "decline_spar",
          "order": 6,
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
          "id": "decipher_tome",
          "order": 2,
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
        },
        {
          "id": "sell_tome",
          "order": 3,
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
          "id": "check_note",
          "order": 4,
          "text": "책장 사이에 끼워진 쪽지를 살핀다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "빛바랜 낙서뿐이다.",
              "result": []
            },
            "partial": {
              "text": "쪽지에 적힌 곳에서 동전을 찾았다.",
              "result": [
                "gold:2"
              ]
            },
            "success": {
              "text": "쪽지가 가리킨 서가 밑에서 꾸러미를 꺼냈다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_tome",
          "order": 5,
          "text": "책을 덮고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "낯선 기술의 이름이 머릿속에 맴돈다.",
              "result": []
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
      "group": "mentor",
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
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "normal",
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
        },
        {
          "id": "leave_ascetic",
          "order": 5,
          "text": "수련을 방해하지 않고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "수련자의 숨소리가 바람처럼 멀어진다.",
              "result": []
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
      "group": "wolf",
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
          "id": "mimic_beast",
          "order": 2,
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
        },
        {
          "id": "stalk_close",
          "order": 3,
          "text": "바람을 등지고 늑대 바로 곁까지 다가간다",
          "verb": "stealth",
          "condition": [
            "agi:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "늑대가 고개를 홱 돌렸다!",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "가까이서 본 움직임이 몸에 조금 남았다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "숨결이 닿을 거리에서 늑대의 움직임을 고스란히 익혔다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "face_beast",
          "order": 4,
          "text": "덤불을 헤치고 정면으로 맞선다",
          "verb": "force",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥을 방해받은 늑대가 이빨을 드러내며 달려든다.",
              "result": [
                "fight:ene_starving_wolf"
              ]
            }
          }
        },
        {
          "id": "throw_stone",
          "order": 5,
          "text": "돌을 던져 사냥감을 가로챈다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "돌이 빗나가 늑대가 이쪽을 노린다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "늑대가 놀라 달아났지만 사냥감도 도망쳤다.",
              "result": []
            },
            "success": {
              "text": "늑대가 놀라 버리고 간 사냥감 곁에서 쓸 만한 것을 챙겼다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_beast",
          "order": 6,
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
      "group": "shrine",
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
          "id": "endure_trial",
          "order": 2,
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
          "order": 3,
          "text": "글귀의 숨은 뜻을 풀어 시험을 피해 간다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
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
        },
        {
          "id": "blood_trial",
          "order": 4,
          "text": "석판에 피를 바쳐 시험을 대신한다 (HP 10 소모)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "피가 글귀를 따라 번지자 석판이 조용히 기술을 보여 준다.",
              "result": [
                "hp:-10",
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "read_only",
          "order": 5,
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
      "group": "wounded_person",
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
          "id": "read_staff",
          "order": 3,
          "text": "지팡이의 주문을 읽어 마력을 안정시킨다",
          "verb": "insight",
          "condition": [
            "wis:8"
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
          "order": 4,
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
        },
        {
          "id": "take_staff",
          "order": 5,
          "text": "지팡이를 빼앗는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "마법사가 마지막 힘으로 주문을 터뜨렸다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "지팡이 끝의 보석만 떼어 냈다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "마법사의 지팡이를 손에 넣었다. 뒷맛이 쓰다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_mage",
          "order": 6,
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
      "group": "hunter",
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
          "id": "talk_hunter",
          "order": 5,
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
          "id": "help_hunter",
          "order": 6,
          "text": "사냥꾼이 깰 때까지 기다렸다가 장작 패는 일을 거든다 (HP 4 소모)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "땀을 흘리며 장작을 다 팼다. 사냥꾼이 창고 문을 열어 품삯을 쳐 준다.",
              "result": [
                "hp:-4",
                "gold:6",
                "flag:hunterFriend"
              ]
            }
          }
        },
        {
          "id": "sneak_past",
          "order": 7,
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
      "group": "fallen_tree",
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
          "id": "burn_tree",
          "order": 5,
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
          "id": "turn_back",
          "order": 6,
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
      "group": "goblin",
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
          "condition": [],
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
          "verb": "",
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
          "id": "avoid_sentry",
          "order": 7,
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
      "group": "chest",
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
          "id": "burn_vines",
          "order": 4,
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
          "id": "grind_lock",
          "order": 5,
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
          "order": 6,
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
          "id": "read_current",
          "order": 3,
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
          "id": "ask_fisher",
          "order": 4,
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
          "order": 5,
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
          "id": "herb_lore",
          "order": 1,
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
          "order": 2,
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
          "id": "chew_antidote",
          "order": 3,
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
          "id": "endure_mist",
          "order": 4,
          "text": "독기를 버티며 걸어서 건넌다",
          "verb": "",
          "condition": [],
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
          "id": "go_around",
          "order": 5,
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
      "group": "bandit",
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
          "condition": [],
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
          "id": "snatch_goods",
          "order": 4,
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
          "id": "step_in",
          "order": 5,
          "text": "도적 앞을 막아선다",
          "verb": "",
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
          "id": "pay_off",
          "order": 6,
          "text": "도적에게 행상 몫을 대신 내준다 (골드 5)",
          "verb": "",
          "condition": [
            "gold:5"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "도적이 동전을 챙겨 떠나자, 행상이 짐을 풀어 마음에 드는 것을 고르게 해 준다.",
              "result": [
                "gold:-5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_quarrel",
          "order": 7,
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
          "id": "read_old_tongue",
          "order": 3,
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
          "order": 4,
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
          "id": "topple_statue",
          "order": 5,
          "text": "석상을 일부러 쓰러뜨린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "튀어 오른 파편에 맞았다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "받침대가 부서지며 동전이 쏟아졌다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "쓰러진 석상 속 빈 공간에서 무언가 나왔다.",
              "result": [
                "item:random:equipment"
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
      "group": "wolf",
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
          "id": "join_fight",
          "order": 4,
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
          "id": "wait_out",
          "order": 5,
          "text": "늑대들이 서로 지칠 때까지 기다린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "기다리다 들켰다. 두 늑대가 함께 이쪽을 노려본다.",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "지친 늑대 하나가 남아 덤벼든다.",
              "result": [
                "fight:ene_starving_wolf:surprise"
              ]
            },
            "success": {
              "text": "늑대들이 피투성이로 떠났다. 사슴과 화살통이 그대로 남았다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_prey",
          "order": 6,
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
    },
    {
      "id": "evt_sunlit_nap",
      "zone": 1,
      "title": "따스한 햇볕",
      "description": "공터 한가운데 햇볕이 고여 있다. 풀이 폭신하고, 눈꺼풀이 저절로 무거워진다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "nap",
          "order": 1,
          "text": "풀밭에 누워 잠깐 눈을 붙인다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "눈을 떠 보니 늑대가 코앞에 있다!",
              "result": [
                "fight:ene_starving_wolf:ambushed"
              ]
            },
            "partial": {
              "text": "선잠을 잤다. 그래도 몸이 조금 가볍다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "깊이 자고 일어나니 상처가 아물어 있다.",
              "result": [
                "hp:20"
              ]
            }
          }
        },
        {
          "id": "watch_rest",
          "order": 2,
          "text": "나무에 등을 기대고 경계하며 쉰다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "주변 소리에 신경 쓰느라 쉬지 못했다.",
              "result": []
            },
            "partial": {
              "text": "잠깐 숨을 돌렸다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "바람 소리까지 가려 들으며 편히 쉬었다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "gather_herbs",
          "order": 3,
          "text": "햇볕 잘 드는 곳에서 약초를 찾는다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "비슷한 잡초뿐이다.",
              "result": []
            },
            "partial": {
              "text": "약초 몇 줄기를 찾았다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "귀한 약초 군락을 찾았다.",
              "result": [
                "item:con_potion",
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "climb_rest",
          "order": 4,
          "text": "높은 가지 위에 올라 쉰다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "가지가 부러져 떨어졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "가지가 불편해 오래 쉬지 못했다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "나무 위에서 숲을 내려다보며 쉬었다. 멀리 반짝이는 것이 보여 챙겨 왔다.",
              "result": [
                "hp:12",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "warm_meal",
          "order": 5,
          "text": "불을 피우고 따뜻한 식사를 한다 (골드 3)",
          "verb": "",
          "condition": [
            "gold:3"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "가져온 식량을 데워 먹었다. 배 속부터 기운이 돈다.",
              "result": [
                "gold:-3",
                "hp:15"
              ]
            }
          }
        },
        {
          "id": "move_on",
          "order": 6,
          "text": "졸음을 떨치고 길을 재촉한다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "기지개를 한 번 켜고 다시 걷는다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_lumberjack_request",
      "zone": 1,
      "title": "나무꾼의 부탁",
      "description": "땀에 젖은 나무꾼이 도끼를 내려놓는다. \"통나무 나르는 것 좀 거들어 주겠소? 품삯은 쳐 드리리다.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "carry_log",
          "order": 1,
          "text": "통나무를 어깨에 메고 나른다",
          "verb": "force",
          "condition": [
            "str:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "통나무에 발을 찧었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "몇 개 나르고 동전을 받았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "부지런히 날라 품삯을 두둑이 받았다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "carry_two",
          "order": 2,
          "text": "통나무 두 개를 한꺼번에 나른다",
          "verb": "force",
          "condition": [
            "str:8"
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
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "허리가 삐끗했다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "힘자랑에 나무꾼이 웃으며 품삯을 더 쳐 준다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "나무꾼이 혀를 내두르며 아껴 두던 물건을 건넨다.",
              "result": [
                "gold:6",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "split_wood",
          "order": 3,
          "text": "도끼를 빌려 장작을 팬다 (HP 5 소모)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "손바닥이 쓰라리지만 장작더미를 다 팼다.",
              "result": [
                "hp:-5",
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "haggle_wage",
          "order": 4,
          "text": "일을 거들기 전에 품삯부터 흥정한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "나무꾼이 기분이 상해 다른 사람을 찾겠다고 한다.",
              "result": []
            },
            "partial": {
              "text": "조금 올려 받았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "말이 잘 통했다. 일을 끝내자 품삯에 회복약까지 얹어 준다.",
              "result": [
                "gold:5",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "pocket_tools",
          "order": 5,
          "text": "일하는 척하며 쓸 만한 도구를 챙긴다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "나무꾼에게 들켜 주먹이 날아왔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "숫돌 하나를 슬쩍했다.",
              "result": [
                "item:con_whetstone"
              ]
            },
            "success": {
              "text": "아무도 모르게 쓸 만한 물건을 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "decline",
          "order": 6,
          "text": "바쁘다며 사양하고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"그럼 조심히 가시오.\" 나무꾼이 다시 도끼를 든다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_open_grave",
      "zone": 1,
      "title": "파헤쳐진 무덤",
      "description": "무덤 하나가 파헤쳐져 관 뚜껑이 드러나 있다. 젖은 흙 위로 삽 자국과 발자국이 숲 쪽으로 이어진다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "track_robber",
          "order": 1,
          "text": "발자국을 따라 도굴꾼을 쫓는다",
          "verb": "stealth",
          "condition": [
            "agi:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "발자국을 놓쳤다. 덤불을 헤매다 긁혔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "도굴꾼이 흘린 동전 몇 닢만 주웠다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "자루를 멘 도굴꾼을 찾았다. 뒤에서 덮친다!",
              "result": [
                "gold:6",
                "fight:ene_forest_bandit:surprise"
              ]
            }
          }
        },
        {
          "id": "read_epitaph",
          "order": 2,
          "text": "비석의 지워진 글씨를 읽어 낸다",
          "verb": "insight",
          "condition": [
            "wis:5"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "글씨는 끝내 읽히지 않는다.",
              "result": []
            },
            "partial": {
              "text": "숲을 지키던 기사의 무덤이다. 비석 밑에 동전이 놓여 있다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "비석 뒷면에 숨겨 둔 공물 칸을 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "take_goods",
          "order": 3,
          "text": "관 속에 남은 물건을 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "관 속에서 덩굴이 튀어나와 팔을 감는다!",
              "result": [
                "fight:ene_creeping_vine:ambushed"
              ]
            },
            "partial": {
              "text": "녹슨 장신구 몇 개를 챙겼다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "도굴꾼이 놓친 물건이 남아 있었다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "dig_deeper",
          "order": 4,
          "text": "관 아래를 더 깊이 파 본다",
          "verb": "force",
          "condition": [
            "str:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "무너진 흙에 파묻힐 뻔했다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "흙 속에서 동전 주머니를 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "관 아래 묻어 둔 상자가 나왔다.",
              "result": [
                "gold:5",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "rebury",
          "order": 5,
          "text": "흙을 다시 덮고 무덤을 정돈한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "흙을 덮고 나니 서늘한 바람이 한 번 스쳐 간다. 마음이 가벼워졌다.",
              "result": [
                "hp:6"
              ]
            }
          }
        },
        {
          "id": "bow_pass",
          "order": 6,
          "text": "고개를 숙이고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "무덤가를 조용히 벗어났다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_vine_snared",
      "zone": 1,
      "title": "덩굴에 갇힌 사내",
      "description": "덩굴 터널 한쪽에서 신음이 들린다. 행상 차림의 사내가 덩굴에 칭칭 감겨 매달려 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "wounded_person",
      "choices": [
        {
          "id": "tear_vines",
          "order": 1,
          "text": "덩굴을 힘으로 뜯어낸다",
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
              "text": "덩굴이 오히려 내 팔까지 감아 온다!",
              "result": [
                "fight:ene_creeping_vine:ambushed"
              ]
            },
            "partial": {
              "text": "사내를 끌어냈지만 덩굴에 긁혔다. 사내가 고맙다며 동전을 건넨다.",
              "result": [
                "hp:-3",
                "gold:4"
              ]
            },
            "success": {
              "text": "덩굴을 끊고 사내를 구했다. 사내가 짐 속 물건을 내민다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "find_root",
          "order": 2,
          "text": "덩굴 줄기를 따라가 뿌리를 찾는다",
          "verb": "insight",
          "condition": [
            "wis:8"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "줄기가 너무 많아 뿌리를 찾지 못했다.",
              "result": []
            },
            "partial": {
              "text": "뿌리를 찾아 끊자 덩굴이 느슨해졌다. 사내가 동전을 건넨다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "뿌리를 끊자 덩굴이 맥없이 풀린다. 사내가 아끼던 물건을 사례로 준다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "burn_vines",
          "order": 3,
          "text": "불씨로 덩굴을 그슬린다",
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
              "text": "불꽃에 사내가 비명을 지른다. 겨우 꺼냈지만 사례는 없다.",
              "result": []
            },
            "partial": {
              "text": "덩굴이 움츠러들어 사내가 빠져나왔다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "덩굴이 쉭쉭대며 물러난다. 사내가 연신 고개를 숙인다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "cut_strands",
          "order": 4,
          "text": "칼끝으로 덩굴을 한 가닥씩 끊는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "칼이 미끄러져 내 손을 베었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "시간은 걸렸지만 사내를 구했다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "덩굴을 하나도 건드리지 않고 사내를 풀어 주었다. 사내가 회복약을 건넨다.",
              "result": [
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "loot_pack",
          "order": 5,
          "text": "사내는 두고 떨어진 짐만 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내의 원망 섞인 신음을 뒤로하고 짐을 뒤졌다.",
              "result": [
                "gold:7"
              ]
            }
          }
        },
        {
          "id": "back_off",
          "order": 6,
          "text": "덩굴이 내게 뻗기 전에 물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내의 신음이 등 뒤로 멀어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_glowing_stump",
      "zone": 1,
      "title": "빛나는 그루터기",
      "description": "갓 베어 낸 그루터기의 나이테가 희미하게 빛난다. 나이테 사이로 수액이 맺혀 흐른다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "glow",
      "choices": [
        {
          "id": "count_rings",
          "order": 1,
          "text": "나이테를 하나하나 센다",
          "verb": "insight",
          "condition": [
            "wis:2"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "세다가 눈이 아파 그만두었다.",
              "result": []
            },
            "partial": {
              "text": "수백 년 묵은 나무였다. 나이테 틈에 박힌 동전을 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "나이테 하나가 유난히 밝다. 그 자리를 누르자 작은 홈이 열린다.",
              "result": [
                "gold:3",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "touch_rings",
          "order": 2,
          "text": "빛나는 나이테에 손바닥을 얹는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "빛이 손바닥을 태우듯 뜨겁다.",
              "result": [
                "hp:-7"
              ]
            },
            "partial": {
              "text": "머릿속에 낯선 움직임이 스쳤다가 사라진다. 몸이 조금 가볍다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "나무가 기억하던 기술이 손끝으로 흘러든다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "drink_sap",
          "order": 3,
          "text": "맺힌 수액을 받아 마신다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "달큰한 수액이 목을 적신다. 기운이 돈다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "split_stump",
          "order": 4,
          "text": "그루터기를 쪼개 속을 본다",
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
              "text": "도끼가 튕겨 나왔다. 빛이 사그라든다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "속에서 빛나는 나뭇조각을 얻었다. 비싸게 팔릴 것 같다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "그루터기 한가운데 무언가 박혀 있다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "turn_away",
          "order": 5,
          "text": "빛을 등지고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "빛이 등 뒤에서 천천히 사그라든다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_wolf_pack_guide",
      "zone": 2,
      "title": "늑대 무리의 안내",
      "description": "낯익은 늑대 한 마리가 길목에 앉아 있다. 꼬리를 한 번 흔들더니 숲 안쪽으로 걸어간다. 따라오라는 듯하다.",
      "repeatable": false,
      "requiresFlags": [
        "savedWolfCub"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "follow_wolves",
          "order": 1,
          "text": "늑대를 따라간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "늑대들이 덫과 사냥꾼을 피해 아늑한 굴로 이끈다. 몸을 녹이고 쉬었다.",
              "result": [
                "hp:15",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "hunt_together",
          "order": 2,
          "text": "늑대들과 함께 사냥에 나선다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "사슴 뿔에 받혀 나동그라졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "작은 사냥감을 나눠 먹었다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "늑대들이 큰 사냥감의 몫을 남겨 주고, 덤불에서 사냥꾼의 유품도 물어 온다.",
              "result": [
                "hp:8",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "watch_wolves",
          "order": 3,
          "text": "늑대들이 피해 가는 곳을 눈여겨본다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "늑대들이 어디를 피하는지 알 수 없었다.",
              "result": []
            },
            "partial": {
              "text": "위험한 길목 몇 곳을 알아 두었다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "곰 발자국 언덕을 돌아가는 숨은 길과 사냥꾼이 숨긴 동전을 찾았다.",
              "result": [
                "gold:6",
                "flag:knowsBearPath"
              ]
            }
          }
        },
        {
          "id": "pet_cub",
          "order": 4,
          "text": "다 자란 새끼 늑대를 쓰다듬는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "새끼 늑대가 손바닥에 머리를 비빈다. 마음이 놓인다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "wave_off",
          "order": 5,
          "text": "손을 흔들고 제 갈 길을 간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "늑대들이 한동안 멀리서 따라오다 사라진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_hunter_comrade",
      "zone": 2,
      "title": "사냥꾼의 동료",
      "description": "빈 마을의 오두막 하나에 불이 켜져 있다. 1구역에서 쪽지를 남긴 사냥꾼의 이야기를 꺼내자 문이 열린다. \"그 친구가 말하던 사람이군.\"",
      "repeatable": false,
      "requiresFlags": [
        "readHunterNote"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "share_supplies",
          "order": 1,
          "text": "물자를 나눠 받는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥꾼이 선반에서 약과 붕대를 꺼내 준다. \"깊은 숲에선 이게 제일 귀하지.\"",
              "result": [
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "trade_gear",
          "order": 2,
          "text": "쓸 만한 장비를 산다 (골드 10)",
          "verb": "",
          "condition": [
            "gold:10"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥꾼이 벽에 걸린 장비 하나를 내린다.",
              "result": [
                "gold:-10",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "ask_village",
          "order": 3,
          "text": "마을이 빈 이유를 묻는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사냥꾼이 입을 다문다.",
              "result": []
            },
            "partial": {
              "text": "\"모두 속삭임을 따라 골짜기로 갔소.\" 사냥꾼이 차를 내준다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "사냥꾼이 마을 사람들이 떠나기 전 숨겨 둔 금고 위치를 알려 준다.",
              "result": [
                "gold:8",
                "flag:villageSecret"
              ]
            }
          }
        },
        {
          "id": "mend_traps",
          "order": 4,
          "text": "망가진 덫을 함께 고친다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "덫 용수철에 손을 찍혔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "사냥꾼이 품삯을 쳐 준다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "사냥꾼이 품삯에 숫돌까지 얹어 준다.",
              "result": [
                "gold:6",
                "item:con_whetstone"
              ]
            }
          }
        },
        {
          "id": "leave_comrade",
          "order": 5,
          "text": "인사만 나누고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"몸조심하게. 골짜기 쪽은 특히.\" 문이 닫힌다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_knight_tomb",
      "zone": 2,
      "title": "기사의 무덤",
      "description": "비석 하나에 1구역에서 묻어 준 기사의 이름이 새겨져 있다. 그는 숲지기였다. 비석 앞에 빈 칼집이 놓여 있다.",
      "repeatable": false,
      "requiresFlags": [
        "buriedFallenKnight"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "tell_story",
          "order": 1,
          "text": "기사의 마지막을 비석에 전한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "푸른 빛이 손등에 내려앉는다. 따뜻하다.",
              "result": [
                "hp:12",
                "flag:wardenBlessing"
              ]
            }
          }
        },
        {
          "id": "search_tomb",
          "order": 2,
          "text": "무덤 주변을 살핀다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이끼뿐이다.",
              "result": []
            },
            "partial": {
              "text": "비석 밑에서 동전을 찾았다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "숲지기들이 남긴 유품을 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "follow_light",
          "order": 3,
          "text": "무덤 사이를 떠도는 푸른 빛을 쫓는다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "빛을 놓치고 비석에 부딪혔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "빛이 사라진 자리에 동전이 있었다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "빛이 숲지기들의 숨은 보급품으로 이끌었다.",
              "result": [
                "item:con_potion",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "dig_tomb",
          "order": 4,
          "text": "무덤을 파헤친다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "흙 속에서 망령이 일어섰다!",
              "result": [
                "fight:ene_warden_shade:ambushed"
              ]
            },
            "partial": {
              "text": "녹슨 동전 주머니가 나왔다.",
              "result": [
                "gold:8"
              ]
            },
            "success": {
              "text": "숲지기의 장비를 꺼냈다. 등 뒤가 서늘하다.",
              "result": [
                "item:random:equipment",
                "flag:robbedWardenTomb"
              ]
            }
          }
        },
        {
          "id": "silent_prayer",
          "order": 5,
          "text": "묵념하고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바람이 비석 사이를 조용히 지나간다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_oak_calls_name",
      "zone": 2,
      "title": "이름을 부르는 고목",
      "description": "고목의 틈에서 1구역 속삭이는 돌에서 들었던 이름이 흘러나온다. 이번에는 대답을 재촉하듯 거듭 부른다.",
      "repeatable": false,
      "requiresFlags": [
        "heardStoneWhisper"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "answer_name",
          "order": 1,
          "text": "그 이름으로 대답한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "숲 전체가 울리며 머릿속이 하얘진다.",
              "result": [
                "hp:-12"
              ]
            },
            "partial": {
              "text": "기묘한 힘이 손끝에 잠시 머물다 사라진다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "고목이 대답을 받아들인다. 낯선 기술이 몸에 스며든다.",
              "result": [
                "skill:choice",
                "flag:answeredWhisper"
              ]
            }
          }
        },
        {
          "id": "seal_crack",
          "order": 2,
          "text": "틈을 흙과 이끼로 막는다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "틈에서 뿜어 나온 기운에 튕겨 나갔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "속삭임이 잦아들었다. 마음이 가라앉는다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "틈을 막던 중 안쪽에 쌓인 공물을 꺼냈다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "weigh_name",
          "order": 3,
          "text": "이름의 뜻을 헤아린다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "뜻을 헤아리다 머리가 지끈거린다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "이름의 일부를 이해했다. 마음이 맑다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "이름에 담긴 오래된 기술을 깨쳤다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "offer_oak",
          "order": 4,
          "text": "고목 뿌리에 공물을 놓고 이름을 되돌려 보낸다 (골드 5)",
          "verb": "",
          "condition": [
            "gold:5"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "공물을 놓자 이름을 부르던 목소리가 한숨처럼 잦아든다. 마음이 가벼워졌다.",
              "result": [
                "gold:-5",
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "cover_ears_oak",
          "order": 5,
          "text": "귀를 막고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "이름이 등 뒤에서 오래 메아리친다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_woodcutter_party",
      "zone": 2,
      "title": "나무꾼 일행",
      "description": "도끼를 멘 사내들이 쉬고 있다. 한 사내가 반갑게 손을 흔든다. 1구역에서 만난 아이의 아버지다.",
      "repeatable": false,
      "requiresFlags": [
        "guidedLostChild"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "share_meal",
          "order": 1,
          "text": "함께 식사한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "따뜻한 국과 빵을 나눠 먹었다. 기운이 돈다.",
              "result": [
                "hp:15"
              ]
            }
          }
        },
        {
          "id": "hear_news",
          "order": 2,
          "text": "숲 깊은 곳 소식을 듣는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사내들이 피곤한지 말을 아낀다.",
              "result": []
            },
            "partial": {
              "text": "위험한 길목 몇 곳을 들었다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "\"빛이 들지 않는 골짜기는 피하시오. 망령들이 떼로 다닌다오.\" 붕대도 나눠 준다.",
              "result": [
                "gold:5",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "buy_axe",
          "order": 3,
          "text": "여분의 장비를 산다 (골드 12)",
          "verb": "",
          "condition": [
            "gold:12"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사내가 아끼던 장비를 내준다. \"잘 써 주시오.\"",
              "result": [
                "gold:-12",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "help_fell",
          "order": 4,
          "text": "나무 쓰러뜨리는 일을 돕는다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "쓰러지는 가지에 어깨를 맞았다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "사내들이 품삯을 쳐 준다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "사내들이 품삯과 약을 챙겨 준다.",
              "result": [
                "gold:8",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "greet_pass",
          "order": 5,
          "text": "인사하고 길을 재촉한다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"아이가 늘 당신 이야기를 한다오.\" 사내가 손을 흔든다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_cold_pot",
      "zone": 2,
      "title": "꺼진 화덕의 솥",
      "description": "마을 한가운데 화덕 위 솥에 무언가 굳어 있다. 사람들은 밥을 짓다 말고 떠난 것 같다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_village",
      "choices": [
        {
          "id": "eat_stew",
          "order": 1,
          "text": "굳은 국을 데워 먹어 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "상한 국이었다. 속이 뒤집힌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "맛은 없지만 배는 찼다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "사냥꾼 비법의 스튜였다. 기운이 돌고 몸 깊은 곳에서 힘이 솟는다.",
              "result": [
                "hp:10",
                "item:random:elixir"
              ]
            }
          }
        },
        {
          "id": "search_houses",
          "order": 2,
          "text": "빈 집들을 뒤진다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "썩은 마루에 발이 빠졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "서랍에서 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "침대 밑 상자에서 쓸 만한 것들을 챙겼다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_last",
          "order": 3,
          "text": "집마다 남은 마지막 기록을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "글씨가 번져 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "\"속삭임을 따라 골짜기로 간다.\" 같은 문장이 반복된다. 책갈피에 동전이 있었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "기록을 이어 맞추자 마을 금고 위치가 나왔다.",
              "result": [
                "gold:12"
              ]
            }
          }
        },
        {
          "id": "light_hearth",
          "order": 4,
          "text": "솥을 비우고 화덕에 불을 지핀다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "빈 마을에 오랜만에 불이 켜졌다. 불 앞에서 몸을 녹였다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "leave_village",
          "order": 5,
          "text": "빈 마을을 지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "빨랫줄의 가죽이 바람에 흔들린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_outpost_armory",
      "zone": 2,
      "title": "초소의 무기고",
      "description": "무너진 초소 안쪽에 쇠문이 달린 무기고가 있다. 문 앞에 돌 파수꾼이 멈춰 서 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_warden",
      "choices": [
        {
          "id": "smash_door",
          "order": 1,
          "text": "쇠문을 부순다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "굉음에 파수꾼이 깨어났다!",
              "result": [
                "fight:ene_moss_sentinel"
              ]
            },
            "partial": {
              "text": "문이 반쯤 열려 손에 잡히는 것만 챙겼다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "문을 부수고 들어가 녹슬지 않은 장비를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "pry_hinge",
          "order": 2,
          "text": "경첩을 뜯어 틈을 낸다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "경첩에 손을 긁혔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "틈으로 동전 주머니를 끌어냈다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "틈으로 꾸러미와 동전을 끌어냈다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "sneak_sentinel",
          "order": 3,
          "text": "파수꾼 뒤로 숨어들어 자물쇠를 딴다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "파수꾼의 돌 눈이 번쩍 뜨였다!",
              "result": [
                "fight:ene_moss_sentinel:ambushed"
              ]
            },
            "partial": {
              "text": "자물쇠는 열었지만 오래 머물 수 없었다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "소리 없이 들어가 장비와 동전을 챙겼다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_crest_door",
          "order": 4,
          "text": "숲지기 문장으로 문 여는 법을 찾는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "문장을 잘못 눌러 바늘이 튀어나왔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "문 옆 숨은 칸에서 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "문장을 차례로 누르자 문이 스르르 열린다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_armory",
          "order": 5,
          "text": "파수꾼을 깨우지 않게 물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "돌 파수꾼은 끝까지 움직이지 않았다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_turned_backs",
      "zone": 2,
      "title": "등 돌린 사람들",
      "description": "모닥불 둘레에 사람들이 등을 돌리고 앉아 쉬지 않고 중얼거린다. 누구도 이쪽을 보지 않는다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_bewitched",
      "choices": [
        {
          "id": "shake_one",
          "order": 1,
          "text": "한 사람의 어깨를 흔들어 깨운다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "홀린 사람이 비명을 지르며 덤빈다!",
              "result": [
                "fight:ene_bewitched_hunter"
              ]
            },
            "partial": {
              "text": "잠시 정신이 돌아온 사람이 붕대를 쥐여 준다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "정신을 차린 사냥꾼이 울먹이며 자기 장비를 건넨다.",
              "result": [
                "item:random:equipment",
                "flag:wokeBewitched"
              ]
            }
          }
        },
        {
          "id": "steal_packs",
          "order": 2,
          "text": "짐만 슬쩍 챙긴다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "한 사람이 고개를 홱 돌렸다!",
              "result": [
                "fight:ene_bewitched_hunter:ambushed"
              ]
            },
            "partial": {
              "text": "작은 주머니 하나를 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "아무도 눈치채지 못했다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "douse_fire",
          "order": 3,
          "text": "모닥불을 꺼 중얼거림을 끊는다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사람들이 일제히 이쪽을 돌아본다!",
              "result": [
                "fight:ene_bewitched_hunter:ambushed"
              ]
            },
            "partial": {
              "text": "사람들이 멍하니 흩어졌다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "정신이 돌아온 사람들이 가진 것을 나눠 준다.",
              "result": [
                "gold:6",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "join_circle",
          "order": 4,
          "text": "둘레에 앉아 함께 귀를 기울인다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "정신이 아득해진다. 겨우 빠져나왔다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "알아들을 수 없는 말만 맴돈다.",
              "result": []
            },
            "success": {
              "text": "속삭임 속에서 낯선 기술이 떠오른다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "leave_camp2",
          "order": 5,
          "text": "조용히 물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "중얼거림이 등 뒤에서 노래처럼 이어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_moved_statue",
      "zone": 2,
      "title": "움직인 석상",
      "description": "석상 하나가 길 한가운데로 옮겨져 있다. 받침대가 끌린 자국이 아직 새롭다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_stone",
      "choices": [
        {
          "id": "push_statue",
          "order": 1,
          "text": "석상을 밀어 치운다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "석상이 몸을 돌렸다!",
              "result": [
                "fight:ene_moss_sentinel"
              ]
            },
            "partial": {
              "text": "받침대 밑에서 동전이 굴러 나왔다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "받침대 밑에 공물 상자가 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "squeeze_by",
          "order": 2,
          "text": "석상 옆으로 비집고 지나간다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "석상의 팔에 긁혔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "지나왔다.",
              "result": []
            },
            "success": {
              "text": "석상 뒤에 숨겨진 꾸러미를 챙겼다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_runes",
          "order": 3,
          "text": "석상 등의 문양을 해독한다",
          "verb": "insight",
          "condition": [
            "wis:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "문양이 눈을 찌르듯 빛났다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "문양 사이에 끼운 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "석상이 길을 비키며 숲지기의 기술 하나를 보여 준다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "clean_statue",
          "order": 4,
          "text": "이끼를 걷어 석상을 닦아 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "석상이 희미하게 고개를 숙인 것 같다. 발치에 동전 몇 닢이 떨어져 있다.",
              "result": [
                "hp:6",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "leave_statue2",
          "order": 5,
          "text": "석상을 피해 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 돌이 끌리는 소리가 난다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_well_coins",
      "zone": 2,
      "title": "우물가의 동전",
      "description": "우물 둘레에 누군가 동전을 한 줄로 늘어놓았다. 우물 안에서 셈을 세는 듯한 속삭임이 들린다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_village",
      "choices": [
        {
          "id": "take_coins2",
          "order": 1,
          "text": "동전을 모두 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "속삭임이 비명으로 바뀌며 머리를 할퀸다.",
              "result": [
                "gold:8",
                "hp:-10"
              ]
            },
            "partial": {
              "text": "동전을 챙기자 등골이 서늘하다.",
              "result": [
                "gold:8",
                "hp:-3"
              ]
            },
            "success": {
              "text": "아무 일도 없었다. 동전이 묵직하다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "add_coin",
          "order": 2,
          "text": "동전 하나를 보태 줄을 잇는다 (골드 3)",
          "verb": "",
          "condition": [
            "gold:3"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "동전이 우물 안으로 굴러떨어졌다.",
              "result": [
                "gold:-3"
              ]
            },
            "partial": {
              "text": "속삭임이 잦아들며 마음이 편해진다.",
              "result": [
                "gold:-3",
                "hp:8"
              ]
            },
            "success": {
              "text": "줄이 이어지자 우물 벽의 돌 하나가 빠져나오며 봉인된 약병이 드러난다.",
              "result": [
                "gold:-3",
                "item:random:elixir"
              ]
            }
          }
        },
        {
          "id": "count_coins",
          "order": 3,
          "text": "동전의 수와 순서에서 뜻을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "세다가 속삭임에 휘말렸다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "규칙을 찾아 숨은 동전을 더 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "규칙이 가리킨 돌 밑에 숨은 칸이 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "climb_down",
          "order": 4,
          "text": "우물 바닥까지 내려간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "미끄러져 바닥에 떨어졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "바닥에서 동전을 긁어모았다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "바닥에 가라앉은 꾸러미까지 건졌다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_well2",
          "order": 5,
          "text": "동전에 손대지 않고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "셈을 세는 속삭임이 한참 따라온다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bat_hoard",
      "zone": 2,
      "title": "박쥐가 모은 것",
      "description": "동굴 벽 틈에 박쥐들이 물어 온 반짝이는 것들이 수북하다. 천장에서 박쥐들이 잠들어 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_cave",
      "choices": [
        {
          "id": "grab_quick",
          "order": 1,
          "text": "한 움큼 쥐고 달아난다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "박쥐들이 깨어나 덮쳐 온다!",
              "result": [
                "fight:ene_shadow_bat:ambushed"
              ]
            },
            "partial": {
              "text": "달아나며 동전 몇 닢을 건졌다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "한 움큼 가득 쥐고 빠져나왔다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "pick_careful",
          "order": 2,
          "text": "소리 없이 하나씩 골라낸다",
          "verb": "stealth",
          "condition": [
            "agi:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발밑의 뼈가 바스러졌다!",
              "result": [
                "fight:ene_shadow_bat:ambushed"
              ]
            },
            "partial": {
              "text": "쓸 만한 것 몇 개를 골랐다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "반짝이는 것들 사이에서 진짜 보물을 골라냈다.",
              "result": [
                "gold:6",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "smoke_out",
          "order": 3,
          "text": "붕대를 태워 연기로 박쥐를 쫓는다",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "연기에 박쥐들이 우르르 빠져나간다. 천천히 챙겼다.",
              "result": [
                "item:-con_bandage",
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "shout_bats",
          "order": 4,
          "text": "크게 소리쳐 박쥐 떼를 흩어 놓는다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "박쥐 떼가 한꺼번에 얼굴로 달려들었다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "박쥐가 흩어지는 틈에 조금 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "박쥐가 모두 날아간 뒤 여유 있게 골랐다.",
              "result": [
                "gold:8",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_cave",
          "order": 5,
          "text": "박쥐를 깨우지 않게 물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "천장의 박쥐들이 꿈틀거린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bridge_rope",
      "zone": 2,
      "title": "끊긴 다리의 밧줄",
      "description": "끊긴 돌다리 끝에 밧줄 하나가 건너편까지 이어져 있다. 건너편 바위에 짐 꾸러미가 걸려 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_crossing",
      "choices": [
        {
          "id": "swing_rope",
          "order": 1,
          "text": "밧줄을 타고 미끄러지듯 건너간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "손이 미끄러져 떨어질 뻔했다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "겨우 건너 꾸러미 일부를 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "가볍게 건너 꾸러미를 통째로 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "hand_over",
          "order": 2,
          "text": "손을 번갈아 매달려 건너간다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "팔에 힘이 빠져 협곡 벽에 부딪혔다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "건너편에서 동전 주머니를 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "건너가 꾸러미를 통째로 짊어지고 돌아왔다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "test_rope",
          "order": 3,
          "text": "밧줄의 상태부터 살핀다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "어디가 약한지 알 수 없었다.",
              "result": []
            },
            "partial": {
              "text": "약한 매듭을 다시 묶어 두었다. 다리 밑에 동전이 있었다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "밧줄을 도르래처럼 걸어 꾸러미를 당겨 올렸다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "yank_pack",
          "order": 4,
          "text": "밧줄을 당겨 꾸러미째 끌어온다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "밧줄이 끊어지며 꾸러미가 협곡 아래로 떨어졌다.",
              "result": []
            },
            "partial": {
              "text": "꾸러미 일부가 끌려왔다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "꾸러미가 통째로 끌려왔다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_bridge",
          "order": 5,
          "text": "협곡을 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "한참을 돌아 협곡을 건넜다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_herbalist_note",
      "zone": 2,
      "title": "약초꾼의 쪽지",
      "description": "약초밭 울타리에 쪽지가 걸려 있다. \"필요한 만큼만 가져가시오. 대신 물을 주고 가시오.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_garden",
      "choices": [
        {
          "id": "water_garden",
          "order": 1,
          "text": "물을 길어 와 밭에 주고 약초를 조금 가져간다 (HP 4 소모)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "물동이를 몇 번이나 날랐다. 약초꾼의 말대로 필요한 만큼만 챙겼다.",
              "result": [
                "hp:-4",
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "pick_right",
          "order": 2,
          "text": "약효 좋은 것만 골라 딴다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "비슷한 풀뿐이라 고르지 못했다.",
              "result": []
            },
            "partial": {
              "text": "붕대에 쌀 약초를 골랐다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "약효가 뛰어난 것만 골라 약을 만들었다.",
              "result": [
                "item:con_potion",
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "fix_fence",
          "order": 3,
          "text": "쓰러진 울타리를 고쳐 주고 간다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "울타리 말뚝에 손을 찧었다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "울타리 옆에 감사의 약초 한 줌이 놓여 있었다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "울타리 아래 약초꾼이 남긴 꾸러미가 있었다.",
              "result": [
                "item:con_bandage",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "take_all",
          "order": 4,
          "text": "쪽지를 무시하고 약초를 잔뜩 뽑는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "숨겨 둔 덫에 발목이 물렸다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "한 아름 뽑았다.",
              "result": [
                "item:con_bandage",
                "item:con_antidote"
              ]
            },
            "success": {
              "text": "밭을 통째로 털었다. 뒷맛이 쓰다.",
              "result": [
                "item:con_potion",
                "item:con_bandage",
                "item:con_antidote",
                "flag:robbedHerbGarden"
              ]
            }
          }
        },
        {
          "id": "rest_garden",
          "order": 5,
          "text": "정원 오두막에서 잠시 쉰다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "약초 향 속에서 깜빡 잠들었다. 개운하다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "leave_garden",
          "order": 6,
          "text": "정원을 그대로 두고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "쪽지가 바람에 팔랑인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_deep_peddler",
      "zone": 2,
      "title": "깊은 숲의 행상",
      "description": "등불을 단 수레 옆에 털모자를 쓴 상인이 앉아 있다. \"이 깊이까지 온 손님은 오랜만이군.\"",
      "repeatable": true,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_merchant",
      "choices": [
        {
          "id": "buy_potion2",
          "order": 1,
          "text": "회복약을 산다 (골드 12)",
          "verb": "",
          "condition": [
            "gold:12"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"깊은 숲 값이라네.\" 상인이 병을 건넨다.",
              "result": [
                "gold:-12",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "buy_bandage2",
          "order": 2,
          "text": "붕대를 산다 (골드 6)",
          "verb": "",
          "condition": [
            "gold:6"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "상인이 깨끗한 붕대를 말아 준다.",
              "result": [
                "gold:-6",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "haggle2",
          "order": 3,
          "text": "값을 깎아 회복약을 산다 (골드 8)",
          "verb": "persuade",
          "condition": [
            "gold:8"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "\"그 값엔 못 주지.\" 상인이 고개를 젓는다.",
              "result": []
            },
            "partial": {
              "text": "붕대로 대신 주겠다고 한다.",
              "result": [
                "gold:-8",
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "\"말솜씨가 좋군.\" 회복약을 내준다.",
              "result": [
                "gold:-8",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "sell_tale",
          "order": 4,
          "text": "숲 초입 이야기를 들려주고 값을 받는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "상인이 하품을 한다.",
              "result": []
            },
            "partial": {
              "text": "상인이 재미있다며 동전을 던져 준다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "상인이 무릎을 치며 웃는다. \"이야기값일세.\"",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "leave_peddler",
          "order": 5,
          "text": "구경만 하고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"살아서 또 보세.\" 상인이 등불을 흔든다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_watch_view",
      "zone": 2,
      "title": "망루에서 본 숲",
      "description": "줄사다리를 타고 망루에 오르자 숲이 발아래 펼쳐진다. 멀리 빛이 들지 않는 골짜기와 곰 발자국 언덕이 보인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_watch",
      "choices": [
        {
          "id": "rest_watch",
          "order": 1,
          "text": "망루에서 한숨 돌린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바람이 시원하다. 오랜만에 깊이 숨을 쉬었다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "scan_paths",
          "order": 2,
          "text": "다음 길을 살핀다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "나무가 빽빽해 길이 보이지 않는다.",
              "result": []
            },
            "partial": {
              "text": "위험한 곳 몇 군데를 눈에 담았다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "숲지기들이 숨겨 둔 보급 지점이 보인다. 내려가 챙겼다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "open_crate",
          "order": 3,
          "text": "망루의 낡은 보급 상자를 연다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "썩은 판자가 부서지며 손을 다쳤다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "상자에 동전이 남아 있었다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "숲지기의 장비 하나가 기름종이에 싸여 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "climb_top",
          "order": 4,
          "text": "망루 위 가지 끝까지 오른다",
          "verb": "stealth",
          "condition": [
            "agi:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가지가 휘며 떨어질 뻔했다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "둥지에서 동전을 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "둥지 속에 새가 모은 반짝이는 것들이 있었다.",
              "result": [
                "gold:6",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "climb_down2",
          "order": 5,
          "text": "내려가 길을 재촉한다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "줄사다리가 바람에 흔들린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_village_vault",
      "zone": 2,
      "title": "마을의 금고",
      "description": "사냥꾼에게 들은 대로 마을 우물 옆 돌판을 들추자 쇠로 된 금고 뚜껑이 드러난다.",
      "repeatable": false,
      "requiresFlags": [
        "villageSecret"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "open_vault",
          "order": 1,
          "text": "금고를 연다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "마을 사람들이 남긴 돈과 약이 고스란히 들어 있다.",
              "result": [
                "gold:12",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "take_half",
          "order": 2,
          "text": "절반만 챙기고 돌아올 사람을 위해 남겨 둔다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "금고를 다시 덮었다. 마음이 가볍다.",
              "result": [
                "gold:6",
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "force_inner",
          "order": 3,
          "text": "안쪽 잠긴 칸까지 억지로 연다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "칸이 튕겨 손가락을 찧었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "안쪽 칸에도 동전뿐이었다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "안쪽 칸에 마을의 보물이 들어 있었다.",
              "result": [
                "gold:4",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_ledger",
          "order": 4,
          "text": "금고 속 장부를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "숫자뿐이다.",
              "result": []
            },
            "partial": {
              "text": "장부 사이에 끼운 동전을 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "장부 마지막 장에 마을 사람들이 향한 곳이 적혀 있다: 빛이 들지 않는 골짜기.",
              "result": [
                "gold:4",
                "flag:knowsVillageFate"
              ]
            }
          }
        },
        {
          "id": "leave_vault",
          "order": 5,
          "text": "손대지 않고 덮어 둔다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "돌판을 제자리에 내려놓았다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bear_path",
      "zone": 2,
      "title": "곰의 숨은 길",
      "description": "늑대들이 피해 가던 길을 따라가자 언덕 뒤편으로 곰이 다니는 좁은 길이 나온다. 길 끝에 곰 굴이 보인다.",
      "repeatable": false,
      "requiresFlags": [
        "knowsBearPath"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "peek_den",
          "order": 1,
          "text": "굴 안을 몰래 들여다본다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "발밑 돌이 굴러 떨어졌다. 굴 안에서 숨소리가 멎는다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "굴 입구에 흩어진 동전을 주웠다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "곰이 잠든 사이 굴 안쪽의 사냥꾼 유품을 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_tracks2",
          "order": 2,
          "text": "발자국으로 곰의 버릇을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발자국이 너무 많아 헷갈린다.",
              "result": []
            },
            "partial": {
              "text": "곰이 어느 쪽 앞발을 아끼는지 알아냈다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "곰이 오래된 상처로 왼쪽을 아낀다는 것을 알아냈다.",
              "result": [
                "flag:knowsBearWound"
              ]
            }
          }
        },
        {
          "id": "block_den",
          "order": 3,
          "text": "굴 입구에 바위를 굴려 둔다",
          "verb": "force",
          "condition": [
            "str:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "바위가 미끄러져 다리를 찧었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "바위가 입구를 반쯤 막았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "입구를 막고 나니 언덕 위로 안전한 길이 열렸다. 길가에 보급품이 있었다.",
              "result": [
                "item:random:consumable",
                "hp:6"
              ]
            }
          }
        },
        {
          "id": "rest_hidden",
          "order": 4,
          "text": "숨은 길 그늘에서 쉬어 간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "곰도 사람도 오지 않는 그늘이다. 한숨 돌렸다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "turn_back_bear",
          "order": 5,
          "text": "곰을 깨우기 전에 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 낮은 숨소리가 들린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_woken_hunter",
      "zone": 2,
      "title": "정신 차린 사냥꾼",
      "description": "야영지에서 깨운 사냥꾼이 길목에서 기다리고 있다. \"덕분에 내 이름을 기억해 냈소. 빚을 갚고 싶소.\"",
      "repeatable": false,
      "requiresFlags": [
        "wokeBewitched"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "accept_arrows",
          "order": 1,
          "text": "사냥꾼의 화살과 약을 받는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥꾼이 아끼던 약을 내준다.",
              "result": [
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "hunt_guide",
          "order": 2,
          "text": "사냥꾼에게 길 안내를 부탁한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사냥꾼이 아직 머리가 어지러운지 길을 헷갈린다.",
              "result": []
            },
            "partial": {
              "text": "지름길로 안내받아 숨을 돌렸다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "사냥꾼이 홀린 자들이 숨겨 둔 물건이 있는 곳으로 안내한다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "train_aim",
          "order": 3,
          "text": "활 쏘는 법을 배운다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "시위에 손가락을 베였다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "조금 감을 잡았다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "사냥꾼이 몸놀림을 바로잡아 준다. 새 기술이 손에 붙는다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "ask_whisper",
          "order": 4,
          "text": "속삭임에 홀렸을 때의 기억을 묻는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사냥꾼이 몸서리치며 입을 다문다.",
              "result": []
            },
            "partial": {
              "text": "\"이끼 옷을 입은 여인이 노래를 불렀소.\" 사냥꾼이 동전을 건넨다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "\"무녀는 이름을 부르게 만드오. 대답하지 마시오.\" 사냥꾼이 부적을 쥐여 준다.",
              "result": [
                "gold:5",
                "flag:warnedOfShaman"
              ]
            }
          }
        },
        {
          "id": "wave_hunter",
          "order": 5,
          "text": "빚은 없다며 손을 흔든다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사냥꾼이 깊이 고개를 숙인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_herbalist_anger",
      "zone": 2,
      "title": "약초꾼의 분노",
      "description": "약초꾼 노인이 지팡이를 짚고 길을 막아선다. \"내 밭을 턴 게 당신이로군.\"",
      "repeatable": false,
      "requiresFlags": [
        "robbedHerbGarden"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "apologize",
          "order": 1,
          "text": "사과하고 약초값을 치른다 (골드 10)",
          "verb": "",
          "condition": [
            "gold:10"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "노인이 한숨을 쉬고 지팡이를 내린다. \"다음엔 물을 주고 가게.\"",
              "result": [
                "gold:-10",
                "hp:5"
              ]
            }
          }
        },
        {
          "id": "talk_down",
          "order": 2,
          "text": "사정을 설명하며 노인을 달랜다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "노인이 독 가루를 뿌리고 사라졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "노인이 혀를 차며 돌아선다.",
              "result": []
            },
            "success": {
              "text": "노인이 마지못해 웃는다. \"살아남으려면 그럴 수도 있지.\" 약을 하나 건넨다.",
              "result": [
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "return_herbs",
          "order": 3,
          "text": "챙긴 약초를 돌려준다 (해독초)",
          "verb": "use",
          "condition": [
            "item:con_antidote"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "노인이 약초를 받아 들고 고개를 끄덕인다. 대신 다른 약을 내준다.",
              "result": [
                "item:-con_antidote",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "push_past",
          "order": 4,
          "text": "노인을 밀치고 지나간다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "노인의 지팡이에 정강이를 세게 맞았다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "노인이 비틀거리며 물러섰다.",
              "result": []
            },
            "success": {
              "text": "노인이 떨어뜨린 약초 주머니를 챙겼다. 뒷맛이 쓰다.",
              "result": [
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "flee_herbalist",
          "order": 5,
          "text": "대꾸하지 않고 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 노인의 저주가 들린다.",
              "result": [
                "hp:-2"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_shade_salute",
      "zone": 2,
      "title": "숲지기의 경례",
      "description": "숲지기의 망령들이 길 양옆에 줄지어 선다. 기사의 축복을 알아본 듯 하나둘 칼을 들어 경례한다.",
      "repeatable": false,
      "requiresFlags": [
        "wardenBlessing"
      ],
      "forbiddenFlags": [],
      "group": "",
      "choices": [
        {
          "id": "return_salute",
          "order": 1,
          "text": "경례로 답한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "망령들이 고개를 숙이고 흩어진다. 초소 문이 저절로 열린다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "ask_captain",
          "order": 2,
          "text": "대장이 어디 있는지 묻는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "망령들이 대답 없이 사라진다.",
              "result": []
            },
            "partial": {
              "text": "망령 하나가 초소 쪽을 가리킨다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "\"대장은 아직 초소를 지킨다. 그를 쉬게 해 다오.\" 망령이 녹슨 열쇠를 건넨다.",
              "result": [
                "gold:6",
                "flag:wardenRequest"
              ]
            }
          }
        },
        {
          "id": "march_with",
          "order": 3,
          "text": "망령들과 발맞춰 행진한다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "발이 꼬여 대열에서 넘어졌다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "행진을 마치자 몸에 기운이 돈다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "행진 끝에 망령들이 숲지기의 훈련법을 보여 준다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "read_banner",
          "order": 4,
          "text": "낡은 깃발의 글귀를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글씨가 바래 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "\"숲을 지키는 자, 숲에 남는다.\" 마음이 차분해진다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "깃발 뒤에 숲지기들의 비상 보급품이 묶여 있었다.",
              "result": [
                "item:con_potion",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "pass_shades",
          "order": 5,
          "text": "조용히 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "망령들이 길을 비켜 준다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_vine_bridge",
      "zone": 2,
      "title": "덩굴 다리",
      "description": "거목 사이를 굵은 덩굴이 다리처럼 잇고 있다. 건너편 나무 구멍 속에서 무언가 반짝인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_canopy",
      "choices": [
        {
          "id": "walk_vine",
          "order": 1,
          "text": "덩굴 위를 균형 잡으며 걷는다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "발이 미끄러져 아래로 떨어졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "중간까지 가서 동전 몇 닢을 건졌다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "건너편 구멍 속 꾸러미를 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "hang_vine",
          "order": 2,
          "text": "덩굴에 매달려 손으로 건넌다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "팔에 힘이 빠져 떨어졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "겨우 건너 동전을 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "건너가 구멍 속 꾸러미를 꺼냈다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "test_vine",
          "order": 3,
          "text": "덩굴이 살아 있는지 살핀다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "살아 있는 덩굴이었다! 덩굴이 감겨 온다.",
              "result": [
                "fight:ene_strangler_vine:ambushed"
              ]
            },
            "partial": {
              "text": "죽은 덩굴이다. 안심하고 건넜다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "죽은 덩굴만 골라 건너고, 구멍 속 꾸러미를 챙겼다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "cut_vine",
          "order": 4,
          "text": "덩굴을 끊어 반짝이는 것을 떨어뜨린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "덩굴이 꿈틀하며 휘감겨 왔다!",
              "result": [
                "fight:ene_strangler_vine:ambushed"
              ]
            },
            "partial": {
              "text": "떨어진 것은 깨진 유리였다.",
              "result": []
            },
            "success": {
              "text": "떨어진 꾸러미를 받아 냈다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_canopy",
          "order": 5,
          "text": "아래로 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "머리 위에서 덩굴이 삐걱인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_trapped_stag",
      "zone": 2,
      "title": "덫에 걸린 가시뿔 사슴",
      "description": "사냥꾼의 덫에 가시뿔 사슴이 걸려 몸부림친다. 뿔의 가시가 덫 줄을 조금씩 끊고 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_beast",
      "choices": [
        {
          "id": "free_stag",
          "order": 1,
          "text": "덫을 풀어 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "풀려난 사슴이 뿔로 들이받고 달아났다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "사슴이 달아났다.",
              "result": []
            },
            "success": {
              "text": "사슴이 달아나며 떨어뜨린 뿔 조각이 값나가 보인다.",
              "result": [
                "gold:8",
                "flag:freedStag"
              ]
            }
          }
        },
        {
          "id": "finish_stag",
          "order": 2,
          "text": "사슴이 풀려나기 전에 덤빈다",
          "verb": "force",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사슴이 덫을 끊고 돌아선다!",
              "result": [
                "fight:ene_thornhorn_stag:surprise"
              ]
            }
          }
        },
        {
          "id": "harvest_thorns",
          "order": 3,
          "text": "몸부림치는 사이 뿔의 가시를 벤다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "가시에 손이 찢겼다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "가시 몇 개를 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "약재가 되는 가시를 잔뜩 챙겼다.",
              "result": [
                "gold:6",
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "calm_stag",
          "order": 4,
          "text": "사슴을 진정시킨다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "사슴이 더 날뛴다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "사슴이 잠시 잠잠해졌다. 그 틈에 덫을 풀었다.",
              "result": [
                "flag:freedStag"
              ]
            },
            "success": {
              "text": "사슴이 고개를 숙이고 떠났다. 덫 옆에 사냥꾼의 꾸러미가 남아 있다.",
              "result": [
                "item:random:consumable",
                "flag:freedStag"
              ]
            }
          }
        },
        {
          "id": "leave_stag",
          "order": 5,
          "text": "멀찍이 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "사슴의 울음이 사냥터에 울린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_creek_cache",
      "zone": 2,
      "title": "개울 바닥의 묻힌 짐",
      "description": "마른 개울 바닥에 둥근 돌로 덮은 자리가 있다. 누군가 짐을 묻고 표시해 둔 것 같다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_cache",
      "choices": [
        {
          "id": "dig_cache",
          "order": 1,
          "text": "돌을 치우고 판다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌 밑에서 독뱀이 튀어나왔다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "동전 주머니가 나왔다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "기름종이에 싼 꾸러미가 나왔다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_marks2",
          "order": 2,
          "text": "돌 배치에 담긴 표식을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "엉뚱한 곳을 팠다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "표식대로 파서 동전을 찾았다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "표식이 가리킨 두 번째 구덩이에서 장비가 나왔다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "wait_owner",
          "order": 3,
          "text": "짐 주인이 오는지 숨어서 기다린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "홀린 사냥꾼이 다가왔다!",
              "result": [
                "fight:ene_bewitched_hunter:surprise"
              ]
            },
            "partial": {
              "text": "아무도 오지 않았다. 덕분에 쉬었다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "나그네가 와서 짐을 꺼내다 놀란다. 지켜 줘서 고맙다며 나눠 준다.",
              "result": [
                "gold:6",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "mark_cache",
          "order": 4,
          "text": "표시를 남겨 두고 그냥 간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "누군가의 짐을 그대로 두었다.",
              "result": []
            }
          }
        },
        {
          "id": "dig_quiet",
          "order": 5,
          "text": "소리 없이 살짝 파낸다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌이 무너져 손을 찧었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 꺼냈다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "꾸러미를 꺼내고 돌을 원래대로 덮었다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_hut_voice",
      "zone": 2,
      "title": "오두막 안의 목소리",
      "description": "덩굴에 삼켜진 오두막 안에서 누군가 도와 달라고 부른다. 목소리가 이상하게 메아리친다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_vine",
      "choices": [
        {
          "id": "cut_in",
          "order": 1,
          "text": "덩굴을 베고 들어간다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "덩굴이 살아 움직였다!",
              "result": [
                "fight:ene_strangler_vine:ambushed"
              ]
            },
            "partial": {
              "text": "안은 비어 있었다. 탁자 위 동전만 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "안에 갇혀 있던 약초꾼 제자를 구했다. 제자가 약을 건넨다.",
              "result": [
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "listen_echo",
          "order": 2,
          "text": "목소리의 메아리를 가만히 듣는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "목소리가 머릿속을 파고든다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "속삭임이 흉내 낸 목소리다. 들어가지 않기로 했다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "속삭임의 흉내임을 알아챘다. 오두막 뒤 진짜 입구에서 숨은 꾸러미를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "window_in",
          "order": 3,
          "text": "창문 틈으로 숨어든다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "덩굴에 다리가 감겼다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "안을 둘러보고 동전을 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "아무것도 깨우지 않고 안쪽 상자를 열었다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "call_back",
          "order": 4,
          "text": "밖에서 대답해 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "목소리가 기괴하게 웃는다. 정신이 아득하다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "목소리가 뚝 끊겼다.",
              "result": []
            },
            "success": {
              "text": "목소리가 속삭임으로 바뀌며 낯선 기술을 흘린다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "leave_hut",
          "order": 5,
          "text": "목소리를 무시하고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "부르는 소리가 등 뒤에서 오래 이어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_palm_altar",
      "zone": 2,
      "title": "손바닥 홈의 제단",
      "description": "제사터의 돌 제단마다 손바닥 모양의 홈이 있다. 가운데 제단의 홈만 핏자국으로 검게 물들어 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_rite",
      "choices": [
        {
          "id": "press_palm",
          "order": 1,
          "text": "가운데 홈에 손바닥을 얹는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "제단이 피를 빨아들인다.",
              "result": [
                "hp:-12"
              ]
            },
            "partial": {
              "text": "손바닥이 저릿하다. 아무 일도 없었다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "제단이 빛나며 오래된 힘을 나눠 준다.",
              "result": [
                "skill:choice"
              ]
            }
          }
        },
        {
          "id": "blood_offer",
          "order": 2,
          "text": "피를 바쳐 제단을 깨운다 (HP 8 소모)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "제단 아래 숨은 칸이 열린다.",
              "result": [
                "hp:-8",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_rite",
          "order": 3,
          "text": "제단 둘레의 의식 문구를 해독한다",
          "verb": "insight",
          "condition": [
            "wis:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "문구가 눈을 찌르듯 빛난다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "의식 문구를 읽자 마음이 맑아진다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "문구대로 홈을 차례로 누르자 공물 칸이 열린다.",
              "result": [
                "item:random:equipment",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "topple_altar",
          "order": 4,
          "text": "제단석을 밀어 쓰러뜨린다",
          "verb": "force",
          "condition": [
            "str:17"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "돌이 미끄러져 발을 찧었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "제단석 밑에서 동전이 나왔다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "제단석 밑에 오래된 공물이 묻혀 있었다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_rite",
          "order": 5,
          "text": "제사터를 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "속삭임이 잦아든 고요가 뒤따른다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_dying_lantern",
      "zone": 2,
      "title": "꺼져 가는 등불",
      "description": "골짜기 어둠 속에 등불 하나가 깜빡인다. 등불 옆에 누군가 웅크리고 앉아 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_dark",
      "choices": [
        {
          "id": "approach_light",
          "order": 1,
          "text": "등불 쪽으로 다가간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "웅크린 것은 망령이었다!",
              "result": [
                "fight:ene_warden_shade:ambushed"
              ]
            },
            "partial": {
              "text": "등불만 남아 있었다. 기름을 챙겼다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "지친 숲지기 후손이 고맙다며 등불과 약을 나눠 준다.",
              "result": [
                "item:con_potion",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "refill_lamp",
          "order": 2,
          "text": "등불에 기름을 채워 준다 (골드 4)",
          "verb": "",
          "condition": [
            "gold:4"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등불이 환해지자 어둠 속 길이 드러난다. 웅크린 사람이 고맙다며 일어선다.",
              "result": [
                "gold:-4",
                "hp:8",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "sneak_past_dark",
          "order": 3,
          "text": "어둠을 틈타 지나간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "무언가에 발목을 잡혔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "조용히 지나왔다.",
              "result": []
            },
            "success": {
              "text": "지나는 길에 어둠 속에 떨어진 짐을 주웠다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "call_light",
          "order": 4,
          "text": "누구냐고 크게 묻는다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "어둠 속에서 박쥐 떼가 쏟아져 나왔다.",
              "result": [
                "fight:ene_shadow_bat:ambushed"
              ]
            },
            "partial": {
              "text": "대답이 없다. 등불이 꺼졌다.",
              "result": []
            },
            "success": {
              "text": "웅크린 사람이 화들짝 놀라 짐을 두고 달아났다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "avoid_light",
          "order": 5,
          "text": "등불을 피해 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "깜빡이는 빛이 한참 따라오는 것 같다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bear_honey",
      "zone": 2,
      "title": "곰이 숨긴 벌집",
      "description": "언덕 바위틈에 커다란 벌집이 숨겨져 있다. 주변 흙에 곰 발자국이 가득하다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_beast",
      "choices": [
        {
          "id": "grab_honey",
          "order": 1,
          "text": "벌집째 꺼내 달아난다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "벌 떼에게 쏘였다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "꿀 한 덩이를 떼어 먹었다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "벌집을 통째로 챙겼다. 달콤한 꿀이 기운을 북돋는다.",
              "result": [
                "hp:15",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "smoke_honey",
          "order": 2,
          "text": "연기를 피워 벌을 쫓는다 (붕대)",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "벌들이 잠잠해진 틈에 꿀을 넉넉히 챙겼다.",
              "result": [
                "item:-con_bandage",
                "hp:12",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "pry_rock",
          "order": 3,
          "text": "바위를 들어 벌집 뒤쪽을 연다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "바위가 미끄러져 벌집이 깨졌다. 벌 떼가 달려든다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "꿀을 조금 챙겼다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "벌집 뒤에 곰이 끌어다 둔 사냥꾼의 짐이 있었다.",
              "result": [
                "hp:6",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_honey",
          "order": 4,
          "text": "곰이 돌아오기 전에 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "언덕 위에서 낮은 울음소리가 들린다.",
              "result": []
            }
          }
        },
        {
          "id": "wait_bear",
          "order": 5,
          "text": "곰이 오는지 숨어서 지켜본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "곰 대신 가시뿔 사슴이 들이받았다!",
              "result": [
                "fight:ene_thornhorn_stag:ambushed"
              ]
            },
            "partial": {
              "text": "아무것도 오지 않았다.",
              "result": []
            },
            "success": {
              "text": "멀리서 늙은 곰의 모습을 보았다. 왼쪽 앞발을 절고 있다.",
              "result": [
                "flag:knowsBearWound",
                "gold:3"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_milestone",
      "zone": 2,
      "title": "이정표 돌",
      "description": "옛 돌길 옆에 이정표 돌이 서 있다. 글씨가 이끼에 덮였고, 돌 밑에 동전이 몇 개 놓여 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_road",
      "choices": [
        {
          "id": "scrape_moss2",
          "order": 1,
          "text": "이끼를 긁어 글씨를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글씨가 깨져 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "\"초소까지 반나절.\" 길을 가늠했다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "이정표 뒷면에 숲지기들의 보급 지점 위치가 새겨져 있다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "take_coins3",
          "order": 2,
          "text": "돌 밑의 동전을 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "동전을 집자 이정표가 기울어 발을 찧었다.",
              "result": [
                "hp:-5",
                "gold:4"
              ]
            },
            "partial": {
              "text": "동전을 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "동전 밑에 접힌 지도 조각이 있었다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_coin",
          "order": 3,
          "text": "동전 하나를 보태고 무사를 빈다 (골드 2)",
          "verb": "",
          "condition": [
            "gold:2"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "돌 위에 동전을 얹자 이상하게 마음이 놓인다.",
              "result": [
                "gold:-2",
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "lift_stone",
          "order": 4,
          "text": "이정표를 들어 밑을 판다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "돌이 무거워 허리를 삐끗했다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "동전 주머니가 나왔다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "이정표 밑에 묻힌 상자가 나왔다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "pass_milestone",
          "order": 5,
          "text": "그냥 지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "이정표의 그림자가 길게 늘어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_mourning_shade",
      "zone": 2,
      "title": "울고 있는 망령",
      "description": "무덤 사이에서 작은 망령이 무릎을 안고 울고 있다. 손에 낡은 숲지기 휘장을 쥐고 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_warden",
      "choices": [
        {
          "id": "comfort_shade",
          "order": 1,
          "text": "망령을 달랜다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "망령이 비명을 지르며 덤빈다!",
              "result": [
                "fight:ene_warden_shade"
              ]
            },
            "partial": {
              "text": "망령이 울음을 멈추고 희미해진다.",
              "result": [
                "hp:4"
              ]
            },
            "success": {
              "text": "망령이 휘장을 건네고 웃으며 사라진다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "find_name",
          "order": 2,
          "text": "휘장의 이름을 찾아 비석을 찾아 준다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "비석이 너무 많아 찾지 못했다.",
              "result": []
            },
            "partial": {
              "text": "비슷한 이름의 비석을 찾았다. 망령이 그 앞에 앉는다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "제 비석을 찾은 망령이 편히 잠든다. 비석 밑에 공물이 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "take_badge",
          "order": 3,
          "text": "휘장을 빼앗는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "망령이 차가운 손으로 목을 움켜쥔다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "휘장을 빼앗았다. 등골이 서늘하다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "휘장을 챙겼다. 값나가는 은장식이다.",
              "result": [
                "gold:10"
              ]
            }
          }
        },
        {
          "id": "dig_small",
          "order": 4,
          "text": "작은 무덤 하나를 정돈해 준다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "흙이 무너져 손을 다쳤다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "무덤을 정돈했다. 마음이 편하다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "정돈을 마치자 망령이 고개를 숙이고 사라진다. 흙 속에서 동전이 나왔다.",
              "result": [
                "hp:5",
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "leave_mourning",
          "order": 5,
          "text": "울음소리를 뒤로하고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "작은 울음소리가 바람에 섞인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_outpost_logbook",
      "zone": 2,
      "title": "초소의 근무 일지",
      "description": "무너진 초소 탁자 위에 근무 일지가 펼쳐져 있다. 마지막 장이 거칠게 찢겨 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_warden",
      "choices": [
        {
          "id": "read_log",
          "order": 1,
          "text": "일지를 처음부터 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "글씨가 번져 알아볼 수 없다.",
              "result": []
            },
            "partial": {
              "text": "숲지기들이 속삭임을 막으려 애쓴 기록이다. 책갈피에 동전이 있었다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "일지 속 숨은 보급고 위치를 찾았다.",
              "result": [
                "item:con_potion",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "find_page",
          "order": 2,
          "text": "찢긴 마지막 장을 찾는다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "무너진 들보에 머리를 부딪혔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "구석에서 찢긴 종잇조각 몇 개를 찾았다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "마지막 장: \"대장은 끝까지 초소에 남겠다고 했다.\" 종이 밑에 대장의 인장이 있었다.",
              "result": [
                "gold:6",
                "flag:readWardenLog"
              ]
            }
          }
        },
        {
          "id": "take_logbook",
          "order": 3,
          "text": "일지를 챙겨 상인에게 팔 생각을 한다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "두툼한 일지가 꽤 값나가 보인다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "search_desk",
          "order": 4,
          "text": "탁자 서랍을 부수고 뒤진다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "서랍이 튀어나와 손을 찧었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "서랍에서 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "서랍 안쪽 비밀 칸에서 장비를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_log",
          "order": 5,
          "text": "일지를 덮고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바람에 일지가 펄럭인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_singing_stranger",
      "zone": 2,
      "title": "노래하는 나그네",
      "description": "길가 바위에 앉은 나그네가 같은 노래를 끝없이 부른다. 가사가 속삭임과 똑같다. 눈동자가 이끼처럼 푸르다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_bewitched",
      "choices": [
        {
          "id": "sing_along",
          "order": 1,
          "text": "노래를 따라 불러 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "정신이 아득해지며 노래에 끌려간다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "노래가 끝나자 나그네가 고개를 갸웃한다.",
              "result": []
            },
            "success": {
              "text": "노래 속에서 낯선 기술이 떠오른다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "break_song",
          "order": 2,
          "text": "나그네의 어깨를 잡고 이름을 묻는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "나그네가 비명을 지르며 덤빈다!",
              "result": [
                "fight:ene_bewitched_hunter"
              ]
            },
            "partial": {
              "text": "나그네가 노래를 멈추고 멍하니 앉아 있다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "나그네가 제 이름을 기억해 내고 울음을 터뜨린다. 품에서 약을 꺼내 준다.",
              "result": [
                "item:con_potion",
                "flag:wokeBewitched"
              ]
            }
          }
        },
        {
          "id": "cover_mouth",
          "order": 3,
          "text": "천으로 입을 막아 노래를 멈춘다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "나그네가 손을 깨물었다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "노래가 멎었다. 나그네가 잠든다.",
              "result": []
            },
            "success": {
              "text": "노래가 멎자 나그네가 정신을 차리고 감사의 표시로 동전을 건넨다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "steal_pack2",
          "order": 4,
          "text": "노래에 빠진 틈에 짐을 뒤진다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "나그네가 노래를 멈추고 이쪽을 본다.",
              "result": [
                "fight:ene_bewitched_hunter:ambushed"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "짐 속의 쓸 만한 것을 챙겼다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "pass_singer",
          "order": 5,
          "text": "귀를 막고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "노랫소리가 한참 귓가에 남는다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_shed_antler",
      "zone": 2,
      "title": "떨어진 가시뿔",
      "description": "가시가 엉겨 붙은 커다란 사슴뿔이 땅에 떨어져 있다. 가시 끝에 반짝이는 수액이 맺혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_beast",
      "choices": [
        {
          "id": "lift_antler",
          "order": 1,
          "text": "뿔째 들어 챙긴다",
          "verb": "force",
          "condition": [
            "str:14"
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
              "text": "작은 뿔 조각만 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "값나가는 뿔을 통째로 챙겼다.",
              "result": [
                "gold:10"
              ]
            }
          }
        },
        {
          "id": "collect_sap",
          "order": 2,
          "text": "가시 끝의 수액을 조심스럽게 모은다",
          "verb": "stealth",
          "condition": [
            "agi:14"
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
              "text": "수액 몇 방울을 모았다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "수액으로 해독제를 만들었다.",
              "result": [
                "item:con_antidote",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "study_sap",
          "order": 3,
          "text": "수액의 쓰임새를 살핀다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "쓰임새를 알 수 없다.",
              "result": []
            },
            "partial": {
              "text": "상처에 바르면 피가 멎는다는 것을 알았다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "수액이 출혈을 멎게 하는 약이 된다. 넉넉히 만들었다.",
              "result": [
                "item:con_bandage",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "wait_stag2",
          "order": 4,
          "text": "뿔 주인이 돌아오는지 지켜본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "뿔 주인이 성이 나 들이받았다!",
              "result": [
                "fight:ene_thornhorn_stag:ambushed"
              ]
            },
            "partial": {
              "text": "아무도 오지 않았다.",
              "result": []
            },
            "success": {
              "text": "지나가던 사슴 떼가 길을 열어 주었다. 지름길로 빠져나왔다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "leave_antler",
          "order": 5,
          "text": "뿔을 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "가시가 햇빛에 번뜩인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bat_migration",
      "zone": 2,
      "title": "박쥐 떼의 이동",
      "description": "날갯짓 소리가 점점 커진다. 박쥐 떼가 강물처럼 머리 위를 지나가기 시작한다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_cave",
      "choices": [
        {
          "id": "lie_flat",
          "order": 1,
          "text": "바닥에 바짝 엎드린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "박쥐 몇 마리가 등을 할퀴고 지나갔다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "떼가 지나갔다.",
              "result": []
            },
            "success": {
              "text": "떼가 지나간 자리에 박쥐들이 떨어뜨린 반짝이는 것들이 있다.",
              "result": [
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "run_through",
          "order": 2,
          "text": "떼를 뚫고 달려 나간다",
          "verb": "stealth",
          "condition": [
            "agi:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "박쥐에 휩싸여 넘어졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "떼를 뚫고 나가며 박쥐 군주의 둥지까지 봐 두었다. 둥지 밑에서 꾸러미를 주웠다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "swing_torch",
          "order": 3,
          "text": "횃불을 휘둘러 길을 연다 (붕대)",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "붕대로 만든 횃불에 박쥐들이 길을 비킨다.",
              "result": [
                "item:-con_bandage",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "count_wings",
          "order": 4,
          "text": "떼의 흐름을 읽어 빈틈으로 걷는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "흐름을 잘못 읽어 한가운데로 들어갔다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "빈틈을 따라 무사히 지나갔다.",
              "result": []
            },
            "success": {
              "text": "흐름의 끝에서 박쥐들이 버린 보물 더미를 찾았다.",
              "result": [
                "gold:6",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "back_off_bats",
          "order": 5,
          "text": "왔던 길로 물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "날갯짓 소리가 한참 뒤에야 멎는다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_sentinel_question",
      "zone": 2,
      "title": "파수석의 물음",
      "description": "이끼 파수석 하나가 길을 막고 서서 돌 목소리로 묻는다. \"암호를 대라.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_stone",
      "choices": [
        {
          "id": "guess_word",
          "order": 1,
          "text": "그럴듯한 암호를 댄다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "\"틀렸다.\" 파수석이 주먹을 치켜든다!",
              "result": [
                "fight:ene_moss_sentinel"
              ]
            },
            "partial": {
              "text": "파수석이 한참 고민하다 길을 비킨다.",
              "result": []
            },
            "success": {
              "text": "\"통과.\" 파수석이 비켜서며 발치의 보급함을 연다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "find_word",
          "order": 2,
          "text": "주변 비석과 문장에서 암호를 찾는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "엉뚱한 단어를 댔다. 파수석이 밀쳐 낸다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "반쯤 맞혔다. 파수석이 길만 비킨다.",
              "result": []
            },
            "success": {
              "text": "정확한 암호를 댔다. 파수석이 경례하며 숲지기의 장비를 내준다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "slip_around",
          "order": 3,
          "text": "파수석이 묻는 사이 뒤로 돌아간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "파수석이 돌아섰다!",
              "result": [
                "fight:ene_moss_sentinel:ambushed"
              ]
            },
            "partial": {
              "text": "빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "뒤쪽 받침대에 숨겨진 공물을 챙겨 빠져나왔다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "topple_sentinel",
          "order": 4,
          "text": "파수석을 밀어 넘어뜨린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "파수석이 버티며 반격한다!",
              "result": [
                "fight:ene_moss_sentinel"
              ]
            },
            "partial": {
              "text": "파수석이 기우뚱하며 길이 열렸다.",
              "result": []
            },
            "success": {
              "text": "파수석이 쓰러지며 몸속 빈 공간이 드러났다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_sentinel",
          "order": 5,
          "text": "대답하지 않고 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"암호를 대라.\" 목소리가 등 뒤에서 되풀이된다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_whisper_fog",
      "zone": 2,
      "title": "속삭이는 안개",
      "description": "하얀 안개가 발목까지 차오른다. 안개 속에서 이름을 부르는 소리가 사방에서 들린다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_whisper",
      "choices": [
        {
          "id": "follow_voice",
          "order": 1,
          "text": "목소리를 따라간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "안개 속을 헤매다 가시덤불에 빠졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "목소리가 사라지고 길만 잃었다.",
              "result": [
                "hp:-3"
              ]
            },
            "success": {
              "text": "목소리의 끝에 홀린 자들이 남긴 공물이 쌓여 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "hold_breath_fog",
          "order": 2,
          "text": "숨을 참고 빠르게 빠져나간다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "숨이 차 안개를 들이마셨다. 머리가 어지럽다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "빠져나오며 안개 속에 떨어진 짐을 주웠다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "shout_back",
          "order": 3,
          "text": "이름 대신 큰 소리로 노래를 불러 덮는다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "안개가 웃는 소리를 낸다. 정신이 흔들린다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "목소리들이 잦아들었다.",
              "result": []
            },
            "success": {
              "text": "목소리들이 흩어지고 안개가 걷혔다. 마음이 개운하다.",
              "result": [
                "hp:8"
              ]
            }
          }
        },
        {
          "id": "read_fog",
          "order": 4,
          "text": "안개의 흐름을 읽어 바람 쪽으로 걷는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "흐름을 놓쳤다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "바람 쪽으로 빠져나왔다.",
              "result": []
            },
            "success": {
              "text": "바람 끝에서 숲지기의 표식과 보급품을 찾았다.",
              "result": [
                "gold:4",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "wait_fog2",
          "order": 5,
          "text": "자리에 앉아 안개가 걷히기를 기다린다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "한참 뒤 안개가 걷혔다. 목소리도 사라졌다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_rusty_snares",
      "zone": 2,
      "title": "녹슨 덫 줄",
      "description": "사냥꾼들이 쳐 둔 덫 줄이 녹슨 채 숲길을 가로지른다. 줄 끝마다 작은 방울이 달려 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_village",
      "choices": [
        {
          "id": "step_over",
          "order": 1,
          "text": "방울이 울리지 않게 넘어간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "방울이 울렸다. 덤불 속에서 무언가 다가온다!",
              "result": [
                "fight:ene_thornhorn_stag:ambushed"
              ]
            },
            "partial": {
              "text": "조심스럽게 넘어갔다.",
              "result": []
            },
            "success": {
              "text": "넘어가며 덫에 걸려 있던 사냥감 꾸러미를 챙겼다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "cut_snares",
          "order": 2,
          "text": "덫 줄을 모두 끊는다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "녹슨 줄에 손이 베였다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "줄을 끊었다. 쓸 만한 쇠붙이를 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "줄을 끊다 덫에 매달린 오래된 짐을 발견했다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "reset_snares",
          "order": 3,
          "text": "덫을 다시 손봐 사냥감을 기다린다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "덫이 튀어 손을 물었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "작은 사냥감이 걸렸다. 구워 먹었다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "큰 사냥감이 걸렸다. 넉넉히 먹고 가죽도 챙겼다.",
              "result": [
                "hp:12",
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "ring_bells",
          "order": 4,
          "text": "일부러 방울을 울려 무엇이 오는지 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "홀린 사냥꾼들이 방울 소리를 듣고 몰려왔다!",
              "result": [
                "fight:ene_bewitched_hunter:ambushed"
              ]
            },
            "partial": {
              "text": "아무것도 오지 않았다.",
              "result": []
            },
            "success": {
              "text": "방울 소리에 사냥개 한 마리가 달려와 꼬리를 흔든다. 목줄에 쪽지와 동전이 묶여 있다.",
              "result": [
                "gold:6",
                "flag:metHunterDog"
              ]
            }
          }
        },
        {
          "id": "detour_snares",
          "order": 5,
          "text": "덫이 없는 쪽으로 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "방울이 바람에 희미하게 울린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_fallen_scout",
      "zone": 2,
      "title": "떨어진 정찰병",
      "description": "망루 아래 숲지기 차림의 젊은 정찰병이 다리를 다친 채 쓰러져 있다. 아직 숨이 붙어 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_person",
      "choices": [
        {
          "id": "give_potion_scout",
          "order": 1,
          "text": "회복약을 건넨다",
          "verb": "use",
          "condition": [
            "item:con_potion"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "정찰병이 일어나 자기 장비를 건넨다. \"숲지기는 은혜를 잊지 않소.\"",
              "result": [
                "item:-con_potion",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "bandage_scout",
          "order": 2,
          "text": "붕대로 다리를 감아 준다",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "정찰병이 고맙다며 숲지기의 비상 식량을 나눠 준다.",
              "result": [
                "item:-con_bandage",
                "hp:10",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "carry_scout",
          "order": 3,
          "text": "정찰병을 업고 망루 위로 데려간다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "줄사다리에서 미끄러져 함께 떨어졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "망루에 눕혀 주었다. 정찰병이 동전을 건넨다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "망루에 눕히자 정찰병이 숲지기의 비밀 보급함을 열어 준다.",
              "result": [
                "item:random:equipment",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "ask_scout",
          "order": 4,
          "text": "숲 안쪽에서 무엇을 봤는지 묻는다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "정찰병이 정신을 잃었다.",
              "result": []
            },
            "partial": {
              "text": "\"골짜기에서 사람들이 노래하며 걸어가는 걸 봤소.\"",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "\"이끼 옷을 입은 여인이 사람들을 이끌고 있었소.\" 정찰병이 지도 조각과 동전을 건넨다.",
              "result": [
                "gold:6",
                "flag:warnedOfShaman"
              ]
            }
          }
        },
        {
          "id": "rob_scout",
          "order": 5,
          "text": "정찰병의 짐을 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "정찰병이 칼을 휘둘렀다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "동전 주머니를 챙겼다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "정찰병의 장비를 챙겼다. 뒷맛이 쓰다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_scout",
          "order": 6,
          "text": "지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "신음 소리가 등 뒤에 남는다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_mushroom_lanterns",
      "zone": 2,
      "title": "버섯 등불 길",
      "description": "어둠 속에 빛나는 버섯이 일렬로 자라 길을 밝힌다. 누군가 일부러 심어 둔 것 같다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_dark",
      "choices": [
        {
          "id": "follow_lights",
          "order": 1,
          "text": "버섯 길을 따라간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "길 끝에 교살 덩굴이 도사리고 있었다!",
              "result": [
                "fight:ene_strangler_vine:ambushed"
              ]
            },
            "partial": {
              "text": "길 끝은 막다른 곳이었다.",
              "result": []
            },
            "success": {
              "text": "길 끝에 숲지기들이 쓰던 은신처와 보급품이 있었다.",
              "result": [
                "item:con_potion",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "pick_lanterns",
          "order": 2,
          "text": "빛나는 버섯을 따서 챙긴다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "포자가 터져 눈이 따갑다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "버섯 몇 개를 챙겼다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "약효 있는 버섯을 골라 챙겼다.",
              "result": [
                "item:con_antidote",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "read_planting",
          "order": 3,
          "text": "버섯이 심긴 간격에서 길잡이 표식을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "간격이 들쭉날쭉하다.",
              "result": []
            },
            "partial": {
              "text": "표식대로 걸어 안전하게 골짜기를 지났다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "표식이 숨은 갈래길을 가리킨다. 그 끝에 오래된 공물이 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "crush_lights",
          "order": 4,
          "text": "버섯을 밟아 길을 지운다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "포자 구름에 숨이 막혔다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "길을 지웠다. 뒤따르는 기척이 사라졌다.",
              "result": []
            },
            "success": {
              "text": "길을 지우자 뒤따르던 망령이 길을 잃고 흩어졌다. 망령이 떨어뜨린 것을 주웠다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "ignore_lights",
          "order": 5,
          "text": "버섯 길을 피해 어둠 속을 간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "어둠 속에서 발밑을 더듬으며 걸었다.",
              "result": [
                "hp:-2"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "evt_dry_spring",
      "zone": 2,
      "title": "말라 버린 샘",
      "description": "돌로 둘러싼 샘이 바닥까지 말라 있다. 바닥 진흙에 사람들이 마지막으로 떠 간 듯한 자국이 남아 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_water",
      "choices": [
        {
          "id": "dig_spring",
          "order": 1,
          "text": "바닥을 파서 물길을 찾는다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "흙만 파다 지쳤다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "젖은 흙이 나왔다. 목을 축였다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "맑은 물이 솟아오른다. 실컷 마시고 나니 몸이 달라진 것 같다.",
              "result": [
                "hp:8",
                "item:random:elixir"
              ]
            }
          }
        },
        {
          "id": "find_source",
          "order": 2,
          "text": "샘이 마른 원인을 찾는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "원인을 알 수 없다.",
              "result": []
            },
            "partial": {
              "text": "위쪽 수로가 덩굴에 막혀 있었다. 조금 뚫어 물을 마셨다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "막힌 수로를 뚫자 물과 함께 떠밀려 온 꾸러미가 나왔다.",
              "result": [
                "hp:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "search_mud",
          "order": 3,
          "text": "진흙 속에 떨어진 것을 더듬는다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "진흙 속 가시에 찔렸다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "누군가 떨어뜨린 반지 하나를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "pour_water",
          "order": 4,
          "text": "물통의 물을 샘에 부어 준다 (HP 3)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "물을 붓자 샘 바닥에서 동전 몇 닢이 반짝인다. 이상하게 마음이 편하다.",
              "result": [
                "hp:-3",
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "leave_spring",
          "order": 5,
          "text": "마른 샘을 지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "샘 바닥의 자국이 눈에 밟힌다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_canyon_echo",
      "zone": 2,
      "title": "협곡의 메아리",
      "description": "협곡 아래로 외치면 한참 뒤 다른 목소리로 대답이 돌아온다. 건너편 절벽에 동굴이 하나 보인다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_crossing",
      "choices": [
        {
          "id": "shout_canyon",
          "order": 1,
          "text": "협곡 아래로 크게 외친다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "메아리가 비명으로 돌아와 귀가 먹먹하다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "메아리가 이름을 부르다 멎는다.",
              "result": []
            },
            "success": {
              "text": "메아리가 길을 알려 주듯 건너편 동굴 쪽에서 울린다. 따라가 보급품을 찾았다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "climb_canyon",
          "order": 2,
          "text": "절벽을 타고 동굴까지 오른다",
          "verb": "stealth",
          "condition": [
            "agi:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "발을 헛디뎌 미끄러졌다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "동굴 입구에서 동전을 주웠다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "동굴 안쪽에 숲지기들의 무기 보관함이 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "rope_canyon",
          "order": 3,
          "text": "밧줄을 던져 동굴 입구에 건다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "밧줄이 빠져 팔이 꺾였다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "겨우 건너 동전 몇 닢을 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "밧줄을 타고 건너가 보관함을 열었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "listen_echo2",
          "order": 4,
          "text": "메아리의 대답을 받아 적는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "메아리가 뒤엉켜 머리가 아프다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "메아리를 듣는 동안 마음이 가라앉았다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "메아리가 숲지기의 기술을 일러 준다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "leave_canyon",
          "order": 5,
          "text": "협곡을 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 메아리가 이름을 부른다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_hunter_dog",
      "zone": 2,
      "title": "살아남은 사냥개",
      "description": "마른 사냥개 한 마리가 빈 오두막 앞을 지키고 있다. 이쪽을 보더니 꼬리를 살짝 흔든다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_village",
      "choices": [
        {
          "id": "feed_dog",
          "order": 1,
          "text": "먹을 것을 나눠 준다 (HP 3)",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "개가 허겁지겁 먹고는 오두막 마루 밑에서 무언가를 물어 온다.",
              "result": [
                "hp:-3",
                "item:random:consumable",
                "flag:metHunterDog"
              ]
            }
          }
        },
        {
          "id": "follow_dog",
          "order": 2,
          "text": "개를 따라간다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "개를 놓치고 덤불에 긁혔다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "개가 주인의 무덤 앞에서 멈췄다. 무덤 옆 동전을 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "개가 주인이 숨겨 둔 사냥 도구 상자로 이끌었다.",
              "result": [
                "item:random:equipment",
                "flag:metHunterDog"
              ]
            }
          }
        },
        {
          "id": "read_collar",
          "order": 3,
          "text": "목줄에 묶인 쪽지를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글씨가 번져 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "\"이 개를 데려가 주시오.\" 쪽지에 동전이 싸여 있다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "쪽지에 주인이 숨긴 비상금 위치가 적혀 있다.",
              "result": [
                "gold:10"
              ]
            }
          }
        },
        {
          "id": "chase_dog",
          "order": 4,
          "text": "개를 쫓아낸다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "개가 손을 물고 달아났다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "개가 낑낑대며 물러났다.",
              "result": []
            },
            "success": {
              "text": "개가 달아나며 지키던 오두막 문이 열렸다. 안에서 동전을 찾았다.",
              "result": [
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "leave_dog",
          "order": 5,
          "text": "개를 두고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "개가 한참 동안 뒤를 바라본다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_rusted_bell",
      "zone": 2,
      "title": "녹슨 종",
      "description": "제사터 옆 기둥에 녹슨 종이 걸려 있다. 종 아래 돌에 \"울리면 대답한다\"고 새겨져 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_rite",
      "choices": [
        {
          "id": "ring_bell",
          "order": 1,
          "text": "종을 울린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "종소리에 망령들이 몰려왔다!",
              "result": [
                "fight:ene_warden_shade:ambushed"
              ]
            },
            "partial": {
              "text": "종소리가 숲에 퍼지다 사라졌다.",
              "result": []
            },
            "success": {
              "text": "종소리에 대답하듯 땅이 갈라지며 공물 상자가 솟아오른다.",
              "result": [
                "item:random:equipment",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "muffle_bell",
          "order": 2,
          "text": "종을 천으로 감싸 소리 없이 떼어 낸다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "종이 떨어지며 둔한 소리가 났다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "종을 떼어 냈다. 값나가는 청동이다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "종 안쪽에 숨겨진 열쇠와 동전을 찾았다.",
              "result": [
                "gold:8",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "read_bell",
          "order": 3,
          "text": "종에 새겨진 글귀를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글씨가 녹에 덮였다.",
              "result": []
            },
            "partial": {
              "text": "\"숲지기를 부를 때 울려라.\" 마음이 숙연해진다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "글귀에 적힌 대로 기둥 밑을 파자 숲지기의 유품이 나왔다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "topple_post",
          "order": 4,
          "text": "기둥째 넘어뜨린다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "기둥이 쓰러지며 종에 머리를 맞았다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "종이 깨져 청동 조각을 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "기둥 밑에 묻힌 공물이 드러났다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_bell",
          "order": 5,
          "text": "종을 건드리지 않고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바람에 종이 아주 작게 흔들린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_moss_cocoon",
      "zone": 2,
      "title": "이끼 고치",
      "description": "나무 줄기에 사람 크기의 이끼 고치가 매달려 있다. 안에서 희미한 숨소리가 들린다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_vine",
      "choices": [
        {
          "id": "tear_cocoon",
          "order": 1,
          "text": "고치를 찢어 연다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "고치 안에서 교살 덩굴이 튀어나왔다!",
              "result": [
                "fight:ene_strangler_vine:ambushed"
              ]
            },
            "partial": {
              "text": "안은 비어 있었다. 이끼 속에 동전이 있었다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "안에 갇힌 나그네를 구했다. 나그네가 약과 동전을 건넨다.",
              "result": [
                "item:con_potion",
                "gold:5"
              ]
            }
          }
        },
        {
          "id": "cut_careful",
          "order": 2,
          "text": "이끼를 한 겹씩 조심스럽게 걷어 낸다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이끼가 꿈틀하며 손을 감았다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "안의 사람을 꺼냈지만 정신을 차리지 못한다.",
              "result": []
            },
            "success": {
              "text": "안의 사람을 꺼내자 고맙다며 지닌 장비를 내준다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "burn_cocoon",
          "order": 3,
          "text": "붕대에 불을 붙여 고치를 태운다 (붕대)",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "이끼가 타며 오그라든다. 안에서 사람이 기침하며 굴러 나온다.",
              "result": [
                "item:-con_bandage",
                "gold:6",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "listen_cocoon",
          "order": 4,
          "text": "고치 속 숨소리에 귀를 기울인다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "숨소리가 속삭임으로 바뀌어 머리를 할퀸다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "사람의 숨소리다. 고치가 약한 곳을 알아냈다.",
              "result": []
            },
            "success": {
              "text": "고치가 약한 곳을 정확히 갈라 사람을 꺼냈다. 사람이 이끼 무녀 이야기를 들려준다.",
              "result": [
                "gold:5",
                "flag:warnedOfShaman"
              ]
            }
          }
        },
        {
          "id": "leave_cocoon",
          "order": 5,
          "text": "고치를 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "숨소리가 점점 작아진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_wrecked_cart",
      "zone": 2,
      "title": "습격당한 수레",
      "description": "길가에 수레가 엎어져 있다. 짐이 흩어졌고, 수레 주인은 보이지 않는다. 화살이 수레에 박혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_merchant",
      "choices": [
        {
          "id": "gather_goods",
          "order": 1,
          "text": "흩어진 짐을 주워 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "홀린 사냥꾼이 돌아왔다!",
              "result": [
                "fight:ene_bewitched_hunter:ambushed"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 주웠다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "흩어진 짐 속에서 쓸 만한 것들을 챙겼다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "track_raiders",
          "order": 2,
          "text": "화살이 날아온 방향을 쫓는다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "발각되어 화살 세례를 받았다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "빼앗긴 짐 일부를 되찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "숨어 있던 홀린 사냥꾼의 등 뒤를 잡았다.",
              "result": [
                "fight:ene_bewitched_hunter:surprise",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "right_cart",
          "order": 3,
          "text": "수레를 바로 세워 준다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "수레가 다시 넘어지며 발을 찧었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "수레를 세웠다. 바퀴 밑에 동전이 있었다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "수레를 세우자 숨어 있던 상인이 나와 고맙다며 물건을 고르게 해 준다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_arrows",
          "order": 4,
          "text": "화살 깃으로 습격한 자를 알아낸다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "흔한 화살이다.",
              "result": []
            },
            "partial": {
              "text": "홀린 사냥꾼들의 화살이다. 피해 갈 길을 알았다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "화살 깃에 묶인 쪽지에서 그들의 숨은 짐터를 알아냈다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "leave_cart2",
          "order": 5,
          "text": "서둘러 자리를 뜬다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "바람에 수레 바퀴가 천천히 돈다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_wild_herbs",
      "zone": 2,
      "title": "야생 약초 군락",
      "description": "바위 그늘에 약초가 군락을 이루고 있다. 그 사이로 독풀도 섞여 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_garden",
      "choices": [
        {
          "id": "pick_quick2",
          "order": 1,
          "text": "손에 잡히는 대로 뜯는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "독풀에 손이 부었다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "쓸 만한 약초를 조금 챙겼다.",
              "result": [
                "item:con_bandage"
              ]
            },
            "success": {
              "text": "약초를 넉넉히 챙겼다.",
              "result": [
                "item:con_bandage",
                "item:con_antidote"
              ]
            }
          }
        },
        {
          "id": "pick_good",
          "order": 2,
          "text": "약초와 독풀을 구별해 딴다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "구별하지 못했다.",
              "result": []
            },
            "partial": {
              "text": "약초만 골라 챙겼다.",
              "result": [
                "item:con_bandage",
                "item:con_antidote"
              ]
            },
            "success": {
              "text": "약효 좋은 것만 골라 진한 약을 달여 마셨다.",
              "result": [
                "item:con_antidote",
                "item:random:elixir"
              ]
            }
          }
        },
        {
          "id": "dig_roots2",
          "order": 3,
          "text": "뿌리째 캐서 값나가는 뿌리를 챙긴다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "바위가 무너져 손을 찧었다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "뿌리 몇 개를 챙겼다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "귀한 뿌리를 캤다. 상인에게 비싸게 팔 수 있겠다.",
              "result": [
                "gold:10"
              ]
            }
          }
        },
        {
          "id": "chew_herbs",
          "order": 4,
          "text": "그 자리에서 약초를 씹어 먹는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "쓴맛에 얼굴이 찡그려지지만 기운이 돈다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "leave_herbs",
          "order": 5,
          "text": "군락을 그대로 둔다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "약초 향이 바람을 타고 따라온다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_well_bucket",
      "zone": 2,
      "title": "두레박의 쪽지",
      "description": "마른 우물에 걸린 두레박 안에 쪽지가 들어 있다. \"물이 마른 건 숲이 우리를 내보내려는 거다.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_water",
      "choices": [
        {
          "id": "read_note2",
          "order": 1,
          "text": "쪽지를 끝까지 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글씨가 번졌다.",
              "result": []
            },
            "partial": {
              "text": "\"속삭임은 돌아가라고 말한다.\" 쪽지 밑에 동전이 싸여 있었다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "쪽지 뒷면에 마을 사람이 숨긴 보급품 위치가 있다.",
              "result": [
                "item:con_potion",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "haul_bucket2",
          "order": 2,
          "text": "두레박을 끝까지 끌어올린다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "줄이 끊어져 손바닥이 쓸렸다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "두레박 바닥에 동전이 있었다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "두레박에 묶인 꾸러미가 함께 올라왔다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "lower_self",
          "order": 3,
          "text": "두레박 줄을 타고 우물 바닥에 내려간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "줄이 미끄러져 바닥에 떨어졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "바닥에서 동전을 긁어모았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "바닥 벽 틈에 숨겨진 상자를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "drop_coin2",
          "order": 4,
          "text": "쪽지에 답을 적어 두레박에 넣는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"나는 가 보겠다.\" 적어 넣자 이상하게 마음이 단단해진다.",
              "result": [
                "hp:6"
              ]
            }
          }
        },
        {
          "id": "leave_bucket",
          "order": 5,
          "text": "두레박을 두고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "두레박이 바람에 삐걱인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_chant_leader",
      "zone": 2,
      "title": "홀린 자들의 선창자",
      "description": "홀린 사람들 앞에서 한 사내가 노래를 이끈다. 사내의 목에 이끼로 엮은 목걸이가 걸려 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_bewitched",
      "choices": [
        {
          "id": "snatch_necklace",
          "order": 1,
          "text": "선창자의 이끼 목걸이를 낚아챈다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "선창자가 돌아보며 외치자 홀린 자들이 덤빈다!",
              "result": [
                "fight:ene_bewitched_hunter:ambushed"
              ]
            },
            "partial": {
              "text": "목걸이 일부를 끊어 왔다. 노래가 흐트러진다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "목걸이를 빼앗자 사람들이 하나둘 정신을 차린다. 선창자가 무녀의 이름을 중얼거린다.",
              "result": [
                "gold:6",
                "flag:warnedOfShaman"
              ]
            }
          }
        },
        {
          "id": "interrupt_song",
          "order": 2,
          "text": "노래를 끊고 크게 외친다",
          "verb": "threaten",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "선창자가 손짓하자 홀린 사냥꾼이 달려든다.",
              "result": [
                "fight:ene_bewitched_hunter"
              ]
            },
            "partial": {
              "text": "노래가 멈췄다. 사람들이 멍하니 흩어진다.",
              "result": []
            },
            "success": {
              "text": "사람들이 정신을 차리고 고맙다며 가진 것을 내놓는다.",
              "result": [
                "gold:6",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "decode_song",
          "order": 3,
          "text": "노래 가사의 뜻을 헤아린다",
          "verb": "insight",
          "condition": [
            "wis:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "가사가 머릿속을 할퀸다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "\"돌아가라\"는 말이 거꾸로 불리고 있다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "누군가 경고를 거꾸로 부르게 만들었다는 것을 깨달았다. 정신이 맑아진다.",
              "result": [
                "hp:8",
                "flag:warnedOfShaman"
              ]
            }
          }
        },
        {
          "id": "join_line",
          "order": 4,
          "text": "노래하는 줄 끝에 서 본다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "줄에 휩쓸려 한참을 걸었다. 정신을 차리니 온몸이 긁혀 있다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "노래가 끝날 때까지 서 있었다.",
              "result": []
            },
            "success": {
              "text": "노래 속에서 숨겨진 기술 하나를 붙잡았다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "leave_chant",
          "order": 5,
          "text": "물러난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "노랫소리가 바람을 타고 따라온다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_weeping_statue",
      "zone": 2,
      "title": "눈물 흘리는 석상",
      "description": "석상 하나의 눈에서 이끼 물이 흘러내린다. 석상 발치에 작은 웅덩이가 생겼다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_stone",
      "choices": [
        {
          "id": "drink_tears",
          "order": 1,
          "text": "웅덩이의 물을 마신다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "쓴 물이었다. 속이 뒤집힌다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "시원하다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "물이 온몸에 스며들며 상처가 아문다.",
              "result": [
                "hp:15"
              ]
            }
          }
        },
        {
          "id": "wipe_tears",
          "order": 2,
          "text": "석상의 눈을 닦아 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "석상이 희미하게 고개를 끄덕이는 것 같다. 받침대 틈에서 동전이 굴러 나왔다.",
              "result": [
                "gold:4",
                "hp:4"
              ]
            }
          }
        },
        {
          "id": "read_face",
          "order": 3,
          "text": "석상의 얼굴에 새겨진 이름을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이름이 닳아 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "숲지기의 이름이다. 받침대에 같은 이름의 칸이 있다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "이름을 부르자 받침대가 열리며 유품이 나온다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "chip_statue",
          "order": 4,
          "text": "석상의 눈에 박힌 돌을 떼어 낸다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "석상이 몸을 돌렸다!",
              "result": [
                "fight:ene_moss_sentinel"
              ]
            },
            "partial": {
              "text": "작은 보석 조각을 떼어 냈다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "눈에 박힌 보석을 온전히 떼어 냈다.",
              "result": [
                "gold:12"
              ]
            }
          }
        },
        {
          "id": "leave_weeping",
          "order": 5,
          "text": "지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "물방울 떨어지는 소리가 등 뒤에서 들린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_glowworm_cave",
      "zone": 2,
      "title": "동굴 반딧불이",
      "description": "동굴 안쪽 천장에 반딧불이가 별처럼 박혀 있다. 박쥐들도 이곳은 피하는 것 같다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_cave",
      "choices": [
        {
          "id": "rest_glow",
          "order": 1,
          "text": "반딧불이 아래에서 쉰다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "빛 아래 누워 숨을 돌렸다. 박쥐 소리도 들리지 않는다.",
              "result": [
                "hp:14"
              ]
            }
          }
        },
        {
          "id": "catch_glow",
          "order": 2,
          "text": "반딧불이를 병에 담는다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "천장에서 떨어진 돌에 맞았다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "몇 마리를 담았다. 어둠 속 길잡이가 된다.",
              "result": [
                "gold:3"
              ]
            },
            "success": {
              "text": "병 가득 담았다. 상인에게 비싸게 팔 수 있겠다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "follow_glow",
          "order": 3,
          "text": "반딧불이가 모인 쪽으로 따라간다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "물웅덩이에 빠졌다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "막다른 곳이었지만 조용했다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "반딧불이가 숲지기들이 숨겨 둔 보급함 위로 모여 있었다. 안에 봉인된 약병이 있다.",
              "result": [
                "item:random:elixir",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "climb_ceiling",
          "order": 4,
          "text": "천장 틈으로 올라가 본다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "손이 미끄러져 떨어졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "천장 틈에서 동전을 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "천장 틈 위로 숨은 굴이 있었다. 안에서 장비를 찾았다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_glow",
          "order": 5,
          "text": "빛을 뒤로하고 나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "뒤에서 반딧불이가 천천히 깜빡인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_vine_cradle",
      "zone": 2,
      "title": "오두막의 요람",
      "description": "덩굴에 감긴 오두막 안에 빈 요람이 흔들린다. 바람이 없는데도 천천히, 일정하게.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_vine",
      "choices": [
        {
          "id": "stop_cradle",
          "order": 1,
          "text": "요람을 멈춘다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "요람이 튕기며 손을 쳤다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "요람이 멈췄다. 방 안이 고요해진다.",
              "result": []
            },
            "success": {
              "text": "요람 밑에 숨겨진 상자가 드러났다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "look_under",
          "order": 2,
          "text": "요람 밑을 살핀다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "덩굴이 발목을 감았다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "요람 밑에서 작은 은수저를 찾았다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "요람 밑 마룻장 아래 가족의 비상금이 숨겨져 있었다.",
              "result": [
                "gold:10"
              ]
            }
          }
        },
        {
          "id": "hum_lullaby",
          "order": 3,
          "text": "자장가를 흥얼거린다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "흥얼거림이 속삭임과 섞여 정신이 아득해진다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "요람이 천천히 멈춘다.",
              "result": []
            },
            "success": {
              "text": "요람이 멈추며 방 안의 덩굴이 스르르 물러난다. 벽장에서 장비가 드러났다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_carving",
          "order": 4,
          "text": "요람에 새겨진 글귀를 읽는다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글귀가 닳았다.",
              "result": []
            },
            "partial": {
              "text": "\"속삭임이 돌아가라 할 때 떠났어야 했다.\" 마음이 무거워진다.",
              "result": [
                "hp:2"
              ]
            },
            "success": {
              "text": "글귀 아래 가족이 남긴 약 상자가 있었다.",
              "result": [
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "leave_cradle",
          "order": 5,
          "text": "오두막을 나선다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "등 뒤에서 요람이 다시 흔들리기 시작한다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_ribbon_oak",
      "zone": 2,
      "title": "리본이 걸린 고목",
      "description": "고목 가지마다 빛바랜 리본이 수백 개 걸려 있다. 리본마다 이름이 적혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_whisper",
      "choices": [
        {
          "id": "tie_ribbon",
          "order": 1,
          "text": "내 이름을 적어 리본을 건다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "리본을 거는 순간 속삭임이 이름을 따라 부른다. 머리가 지끈거린다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "리본이 바람에 흔들린다.",
              "result": []
            },
            "success": {
              "text": "리본을 걸자 고목 아래 뿌리 틈이 열리며 공물이 드러난다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "read_names",
          "order": 2,
          "text": "리본의 이름들을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이름이 너무 많다.",
              "result": []
            },
            "partial": {
              "text": "마을 사람들의 이름이다. 리본 사이에 동전이 끼어 있다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "리본 하나에 \"돌아가라는 말을 들었어야 했다\"고 적혀 있다. 매듭 안에 약이 싸여 있었다.",
              "result": [
                "item:con_potion",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "climb_oak",
          "order": 3,
          "text": "가장 높은 가지의 리본을 가지러 오른다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "가지가 부러져 떨어졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "리본 몇 개를 챙겼다. 동전이 묶여 있었다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "가장 높은 리본에 묶인 은장신구를 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "burn_ribbons",
          "order": 4,
          "text": "리본을 모두 태워 이름들을 놓아준다",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "붕대 불씨로 리본을 태우자 속삭임이 한숨처럼 잦아든다. 몸이 가볍다.",
              "result": [
                "item:-con_bandage",
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "leave_ribbons",
          "order": 5,
          "text": "리본을 건드리지 않고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "수백 개의 리본이 한꺼번에 흔들린다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bridge_keeper",
      "zone": 2,
      "title": "다리를 지키는 망령",
      "description": "끊긴 다리 앞에 숲지기 망령이 서서 길을 막는다. \"건너려는 자는 이유를 대라.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_crossing",
      "choices": [
        {
          "id": "give_reason",
          "order": 1,
          "text": "숲 깊은 곳으로 가야 하는 이유를 말한다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "\"이유가 부족하다.\" 망령이 칼을 뽑는다!",
              "result": [
                "fight:ene_warden_shade"
              ]
            },
            "partial": {
              "text": "망령이 한참 바라보다 길을 비킨다.",
              "result": []
            },
            "success": {
              "text": "망령이 고개를 끄덕이며 건너편으로 가는 숨은 다리를 알려 준다. 다리 아래 보급품이 있었다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "show_badge",
          "order": 2,
          "text": "숲지기와 연이 있음을 보여 준다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "망령이 고개를 젓는다.",
              "result": []
            },
            "partial": {
              "text": "망령이 경례하며 길을 비킨다.",
              "result": [
                "hp:5"
              ]
            },
            "success": {
              "text": "망령이 경례하고 숲지기의 유품을 맡긴다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "dash_past",
          "order": 3,
          "text": "망령 옆을 재빨리 지나 다리 끝까지 달린다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "망령의 칼이 등을 스쳤다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "지나쳤다.",
              "result": []
            },
            "success": {
              "text": "지나치며 다리 끝에 걸린 꾸러미를 낚아챘다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "push_shade",
          "order": 4,
          "text": "망령을 밀치고 지나간다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "망령의 손에 닿은 곳이 얼어붙는다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "망령이 흩어졌다가 다시 모인다. 그 사이 지나왔다.",
              "result": []
            },
            "success": {
              "text": "망령이 흩어지며 떨어뜨린 휘장을 챙겼다.",
              "result": [
                "gold:8"
              ]
            }
          }
        },
        {
          "id": "turn_from_bridge",
          "order": 5,
          "text": "돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "망령이 끝까지 다리 앞에 서 있다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_dance_circle",
      "zone": 2,
      "title": "돌 원 안의 춤 자국",
      "description": "제사터 돌 원 안에 맨발 자국이 둥글게 패어 있다. 수많은 사람이 오래 춤을 춘 흔적이다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_rite",
      "choices": [
        {
          "id": "dance_circle",
          "order": 1,
          "text": "자국을 따라 원을 돈다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "어지러워 쓰러졌다. 머릿속에서 노래가 멈추지 않는다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "어지럽기만 했다.",
              "result": []
            },
            "success": {
              "text": "원을 다 돌자 원 가운데 돌이 내려앉으며 공물이 드러난다.",
              "result": [
                "item:random:equipment",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "read_steps",
          "order": 2,
          "text": "발자국 순서에서 의식의 규칙을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:17"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "규칙을 찾지 못했다.",
              "result": []
            },
            "partial": {
              "text": "의식이 \"부름에 답하는 춤\"이라는 것을 알았다.",
              "result": [
                "hp:3",
                "flag:warnedOfShaman"
              ]
            },
            "success": {
              "text": "규칙대로 가운데 돌을 누르자 숨은 칸이 열린다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "break_circle",
          "order": 3,
          "text": "원을 이루는 돌 하나를 뽑아낸다",
          "verb": "force",
          "condition": [
            "str:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "돌이 튕겨 발을 찧었다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "원이 끊겼다. 뽑은 돌 밑에서 동전이 나왔다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "원이 끊기자 둘레의 속삭임이 잦아든다. 돌 밑에 공물이 있었다.",
              "result": [
                "gold:5",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "sweep_steps",
          "order": 4,
          "text": "발자국을 지워 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "발자국을 쓸어 지우자 원이 평범한 빈터가 되었다. 마음이 개운하다.",
              "result": [
                "hp:6"
              ]
            }
          }
        },
        {
          "id": "leave_circle",
          "order": 5,
          "text": "원 밖으로 돌아간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "원 안에서 맨발 소리가 들리는 것 같다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_cave_spring",
      "zone": 2,
      "title": "동굴 속 지하수",
      "description": "동굴 바닥 틈으로 맑은 지하수가 흐른다. 물소리에 박쥐들이 잠잠하다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_water",
      "choices": [
        {
          "id": "drink_spring2",
          "order": 1,
          "text": "물을 실컷 마신다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "차갑고 맑은 물이 온몸에 스며든다.",
              "result": [
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "follow_stream",
          "order": 2,
          "text": "물길을 따라 들어간다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "미끄러져 물에 빠졌다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "물길 끝에서 동전을 건졌다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "물길 끝 바위틈에 떠밀려 온 장비가 걸려 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "dam_stream",
          "order": 3,
          "text": "돌을 쌓아 물길을 막고 바닥을 본다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "돌이 무너져 손을 찧었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "바닥에서 동전을 주웠다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "바닥에 가라앉은 꾸러미를 건졌다.",
              "result": [
                "item:random:consumable",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "trace_source",
          "order": 4,
          "text": "물이 어디서 오는지 헤아린다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "알 수 없다.",
              "result": []
            },
            "partial": {
              "text": "이 물이 마른 샘으로 가던 물길이다. 목을 축였다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "막힌 곳을 찾아 뚫자 위쪽 마을 우물 쪽으로 물이 흘러간다. 마음이 뿌듯하다.",
              "result": [
                "hp:8",
                "flag:restoredWater"
              ]
            }
          }
        },
        {
          "id": "leave_spring2",
          "order": 5,
          "text": "물을 두고 나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "물소리가 한참 따라온다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_sleeper_statue",
      "zone": 2,
      "title": "석상 사이의 잠든 사람",
      "description": "석상들 사이에 한 사람이 이끼를 덮고 잠들어 있다. 몸 절반이 이미 이끼로 덮였다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_person",
      "choices": [
        {
          "id": "wake_sleeper",
          "order": 1,
          "text": "흔들어 깨운다",
          "verb": "persuade",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "깨어난 사람이 겁에 질려 비명을 지른다. 석상이 움직인다!",
              "result": [
                "fight:ene_moss_sentinel:ambushed"
              ]
            },
            "partial": {
              "text": "깨어난 사람이 멍하니 걸어간다.",
              "result": []
            },
            "success": {
              "text": "깨어난 사람이 고맙다며 품속 물건을 건넨다. \"이끼가 나를 부르고 있었소.\"",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "peel_moss",
          "order": 2,
          "text": "이끼를 벗겨 낸다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "이끼가 손에 들러붙어 따끔거린다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "이끼를 벗겨 냈다. 사람은 깊이 잠들어 있다.",
              "result": []
            },
            "success": {
              "text": "이끼를 벗기자 사람이 깨어나 약을 나눠 준다.",
              "result": [
                "item:con_potion",
                "gold:3"
              ]
            }
          }
        },
        {
          "id": "check_breath",
          "order": 3,
          "text": "숨과 맥을 살핀다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "숨이 너무 약하다. 할 수 있는 게 없다.",
              "result": []
            },
            "partial": {
              "text": "잠든 게 아니라 홀린 상태다. 이마의 이끼만 떼어 냈다.",
              "result": [
                "hp:3"
              ]
            },
            "success": {
              "text": "홀림을 푸는 법을 알아내 깨웠다. 그가 무녀에 대해 경고한다.",
              "result": [
                "gold:5",
                "flag:warnedOfShaman"
              ]
            }
          }
        },
        {
          "id": "take_pack3",
          "order": 4,
          "text": "곁에 놓인 짐을 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "잠든 사람이 손목을 붙잡았다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "동전을 챙겼다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "짐 속 장비를 챙겼다. 뒷맛이 쓰다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "leave_sleeper",
          "order": 5,
          "text": "깨우지 않고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "잠든 사람 위로 이끼가 조금 더 자란다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_warning_carving",
      "zone": 2,
      "title": "경고의 새김글",
      "description": "바위에 여러 사람이 새긴 글귀가 빼곡하다. 모두 같은 말이다. \"돌아가라.\"",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_whisper",
      "choices": [
        {
          "id": "read_all",
          "order": 1,
          "text": "글귀를 하나하나 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "글귀가 겹쳐 어지럽다.",
              "result": []
            },
            "partial": {
              "text": "\"속삭임은 위협이 아니라 경고였다.\" 한 줄이 눈에 들어온다.",
              "result": [
                "hp:3",
                "flag:understoodWarning"
              ]
            },
            "success": {
              "text": "맨 아래 글귀가 숨은 보급품 위치를 가리킨다. \"돌아갈 자를 위해.\"",
              "result": [
                "item:con_potion",
                "flag:understoodWarning"
              ]
            }
          }
        },
        {
          "id": "carve_own",
          "order": 2,
          "text": "나도 한 줄 새긴다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "칼이 미끄러져 손을 베었다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "\"나는 간다.\" 새기고 나니 마음이 단단해진다.",
              "result": [
                "hp:4"
              ]
            },
            "success": {
              "text": "바위를 깎다 바위 뒤 틈에서 꾸러미가 나왔다.",
              "result": [
                "item:random:consumable",
                "hp:4"
              ]
            }
          }
        },
        {
          "id": "listen_rock",
          "order": 3,
          "text": "바위에 귀를 대고 속삭임을 듣는다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "hard",
          "outcomes": {
            "fail": {
              "text": "\"돌아가라!\" 외침이 머릿속에서 터진다.",
              "result": [
                "hp:-10"
              ]
            },
            "partial": {
              "text": "\"…돌아가라…\" 속삭임이 멀리서 들린다.",
              "result": []
            },
            "success": {
              "text": "속삭임 속에서 오래된 목소리의 기술 하나가 흘러든다.",
              "result": [
                "skill:random",
                "flag:understoodWarning"
              ]
            }
          }
        },
        {
          "id": "search_base",
          "order": 4,
          "text": "바위 밑을 뒤진다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "바위 밑의 뱀에게 물렸다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 찾았다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "바위 밑에 경고를 새긴 사람들이 남긴 짐이 있었다.",
              "result": [
                "gold:4",
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "ignore_warning",
          "order": 5,
          "text": "경고를 무시하고 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"돌아가라.\" 바람이 한 번 더 속삭인다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_moss_effigy",
      "zone": 2,
      "title": "이끼 인형",
      "description": "나뭇가지와 이끼로 만든 사람 모양 인형이 길가에 서 있다. 가슴에 누군가의 이름이 적힌 천이 꽂혀 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_bewitched",
      "choices": [
        {
          "id": "pull_name",
          "order": 1,
          "text": "가슴의 이름 천을 뽑아낸다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "인형이 무너지며 이끼 포자가 터진다.",
              "result": [
                "hp:-6"
              ]
            },
            "partial": {
              "text": "천을 뽑았다. 인형이 힘없이 쓰러진다.",
              "result": []
            },
            "success": {
              "text": "천을 뽑자 멀리서 누군가 정신을 차린 듯한 외침이 들린다. 인형 속에서 공물이 나왔다.",
              "result": [
                "item:random:consumable",
                "flag:wokeBewitched"
              ]
            }
          }
        },
        {
          "id": "burn_effigy",
          "order": 2,
          "text": "붕대로 불을 붙여 인형을 태운다",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "인형이 타며 속삭임이 끊긴다. 재 속에서 동전이 반짝인다.",
              "result": [
                "item:-con_bandage",
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "study_effigy",
          "order": 3,
          "text": "인형을 만든 방식을 살핀다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "평범한 인형이다.",
              "result": []
            },
            "partial": {
              "text": "무녀가 사람을 부를 때 쓰는 인형이다.",
              "result": [
                "flag:warnedOfShaman"
              ]
            },
            "success": {
              "text": "인형의 매듭에서 무녀의 주술을 막는 법을 알아냈다.",
              "result": [
                "flag:warnedOfShaman",
                "hp:6"
              ]
            }
          }
        },
        {
          "id": "kick_effigy",
          "order": 4,
          "text": "인형을 걷어차 쓰러뜨린다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "인형이 넘어지며 포자를 뿜었다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "인형이 쓰러졌다.",
              "result": []
            },
            "success": {
              "text": "인형 속에 숨겨진 공물을 찾았다.",
              "result": [
                "gold:6"
              ]
            }
          }
        },
        {
          "id": "leave_effigy",
          "order": 5,
          "text": "인형을 피해 지나간다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "인형의 텅 빈 얼굴이 뒤를 따라 돌아가는 것 같다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_warden_supply",
      "zone": 2,
      "title": "숲지기의 비상 보급고",
      "description": "나무뿌리 아래 숨은 문이 있다. 문에 숲지기 문장과 \"지친 이에게\"라는 글이 새겨져 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_warden",
      "choices": [
        {
          "id": "take_needed",
          "order": 1,
          "text": "필요한 만큼만 챙긴다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "약과 붕대를 챙겼다. 남은 것은 다음 사람을 위해 두었다.",
              "result": [
                "item:con_potion",
                "item:con_bandage"
              ]
            }
          }
        },
        {
          "id": "take_everything",
          "order": 2,
          "text": "보급고를 통째로 비운다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "문 안쪽 함정이 튀었다.",
              "result": [
                "hp:-8",
                "item:con_bandage"
              ]
            },
            "partial": {
              "text": "넉넉히 챙겼다.",
              "result": [
                "item:con_potion",
                "item:con_bandage",
                "gold:4"
              ]
            },
            "success": {
              "text": "보급고를 비웠다. 숲지기 장비도 있었다.",
              "result": [
                "item:con_potion",
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "open_lock2",
          "order": 3,
          "text": "잠긴 안쪽 칸의 자물쇠를 연다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "자물쇠 바늘에 찔렸다.",
              "result": [
                "hp:-5"
              ]
            },
            "partial": {
              "text": "안쪽 칸에 동전이 있었다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "안쪽 칸에 숲지기의 장비가 보관돼 있었다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "restock",
          "order": 4,
          "text": "가진 것을 하나 두고 간다 (붕대)",
          "verb": "use",
          "condition": [
            "item:con_bandage"
          ],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "붕대를 두고 문을 닫자 문장이 희미하게 빛난다. 몸이 가벼워진다.",
              "result": [
                "item:-con_bandage",
                "hp:12"
              ]
            }
          }
        },
        {
          "id": "leave_supply",
          "order": 5,
          "text": "문을 닫고 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "\"지친 이에게.\" 글귀가 등 뒤에 남는다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_quiet_glade",
      "zone": 2,
      "title": "조용한 빈터",
      "description": "속삭임이 들리지 않는 작은 빈터가 있다. 이끼가 푹신하고 햇빛 한 줄기가 내려온다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_rest",
      "choices": [
        {
          "id": "sleep_glade",
          "order": 1,
          "text": "이끼 위에 누워 잠을 잔다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "잠결에 박쥐가 할퀴고 지나갔다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "짧게 잤다.",
              "result": [
                "hp:8"
              ]
            },
            "success": {
              "text": "깊이 자고 일어나니 몸이 가볍다.",
              "result": [
                "hp:18"
              ]
            }
          }
        },
        {
          "id": "meditate",
          "order": 2,
          "text": "속삭임이 없는 이유를 생각하며 명상한다",
          "verb": "insight",
          "condition": [
            "wis:14"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "잡념만 떠오른다.",
              "result": [
                "hp:3"
              ]
            },
            "partial": {
              "text": "마음이 차분해졌다.",
              "result": [
                "hp:10"
              ]
            },
            "success": {
              "text": "빈터의 고요 속에서 오래된 기술 하나를 깨쳤다.",
              "result": [
                "skill:random"
              ]
            }
          }
        },
        {
          "id": "train_glade",
          "order": 3,
          "text": "빈터에서 몸을 풀며 단련한다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "무리하다 근육이 놀랐다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "몸이 풀렸다.",
              "result": [
                "hp:6"
              ]
            },
            "success": {
              "text": "땀을 흘리고 나니 몸이 한결 가볍다.",
              "result": [
                "hp:10"
              ]
            }
          }
        },
        {
          "id": "search_glade",
          "order": 4,
          "text": "빈터 가장자리를 둘러본다",
          "verb": "stealth",
          "condition": [
            "agi:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "덤불에 긁혔다.",
              "result": [
                "hp:-3"
              ]
            },
            "partial": {
              "text": "동전 몇 닢을 주웠다.",
              "result": [
                "gold:4"
              ]
            },
            "success": {
              "text": "누군가 숨겨 둔 꾸러미를 찾았다.",
              "result": [
                "item:random:consumable"
              ]
            }
          }
        },
        {
          "id": "leave_glade",
          "order": 5,
          "text": "서둘러 길을 떠난다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "고요한 빈터가 뒤로 멀어진다.",
              "result": []
            }
          }
        }
      ]
    },
    {
      "id": "evt_bear_hunter_end",
      "zone": 2,
      "title": "곰 사냥꾼의 최후",
      "description": "언덕 아래 부러진 창과 함께 곰 사냥꾼의 유해가 있다. 창끝에 곰의 털이 엉겨 있다.",
      "repeatable": false,
      "requiresFlags": [],
      "forbiddenFlags": [],
      "group": "z2_beast",
      "choices": [
        {
          "id": "read_journal",
          "order": 1,
          "text": "사냥꾼의 수첩을 읽는다",
          "verb": "insight",
          "condition": [
            "wis:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "수첩이 젖어 읽을 수 없다.",
              "result": []
            },
            "partial": {
              "text": "\"놈은 왼쪽 앞발을 아낀다.\" 마지막 장에 적혀 있다.",
              "result": [
                "flag:knowsBearWound"
              ]
            },
            "success": {
              "text": "곰의 약점과 함께 사냥꾼이 숨겨 둔 보급품 위치가 적혀 있다.",
              "result": [
                "flag:knowsBearWound",
                "item:con_potion"
              ]
            }
          }
        },
        {
          "id": "take_spear",
          "order": 2,
          "text": "부러진 창의 날을 챙긴다",
          "verb": "force",
          "condition": [
            "str:11"
          ],
          "skillBonus": [],
          "difficulty": "easy",
          "outcomes": {
            "fail": {
              "text": "창날에 손을 베였다.",
              "result": [
                "hp:-4"
              ]
            },
            "partial": {
              "text": "창날을 팔면 돈이 되겠다.",
              "result": [
                "gold:5"
              ]
            },
            "success": {
              "text": "창날과 함께 사냥꾼의 장비 하나를 챙겼다.",
              "result": [
                "item:random:equipment"
              ]
            }
          }
        },
        {
          "id": "bury_hunter",
          "order": 3,
          "text": "유해를 묻어 준다",
          "verb": "",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "흙을 덮어 주었다. 무덤 위에 부러진 창을 꽂았다.",
              "result": [
                "hp:5"
              ]
            }
          }
        },
        {
          "id": "search_area",
          "order": 4,
          "text": "싸움이 있던 자리를 살핀다",
          "verb": "stealth",
          "condition": [
            "agi:14"
          ],
          "skillBonus": [],
          "difficulty": "normal",
          "outcomes": {
            "fail": {
              "text": "곰이 남긴 덫 같은 구덩이에 빠졌다.",
              "result": [
                "hp:-8"
              ]
            },
            "partial": {
              "text": "사냥꾼이 떨어뜨린 주머니를 찾았다.",
              "result": [
                "gold:6"
              ]
            },
            "success": {
              "text": "곰 털이 엉긴 바위 뒤에서 사냥꾼의 비상 가방을 찾았다.",
              "result": [
                "item:random:consumable",
                "gold:4"
              ]
            }
          }
        },
        {
          "id": "leave_hunter_end",
          "order": 5,
          "text": "지나친다",
          "verb": "pass",
          "condition": [],
          "skillBonus": [],
          "difficulty": "none",
          "outcomes": {
            "success": {
              "text": "언덕 위에서 낮은 울음이 들린다.",
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
      "damage": 6,
      "agi": 6,
      "damageReduction": 0,
      "skills": [],
      "pattern": "default",
      "goldMin": 3,
      "goldMax": 5,
      "description": "갈비뼈가 드러난 늑대가 이빨을 드러낸다.",
      "essence": "내단",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_venom_spider",
      "zone": 1,
      "name": "독거미",
      "rank": "normal",
      "hp": 38,
      "damage": 3,
      "agi": 4,
      "damageReduction": 0,
      "skills": [
        "eskl_venom_bite"
      ],
      "pattern": "default",
      "goldMin": 3,
      "goldMax": 5,
      "description": "손바닥만 한 거미가 나뭇가지에서 실을 타고 내려온다.",
      "essence": "정수",
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
      "damage": 4,
      "agi": 3,
      "damageReduction": 0,
      "skills": [
        "eskl_sling_stone"
      ],
      "pattern": "default",
      "goldMin": 4,
      "goldMax": 6,
      "description": "온몸에 이끼를 두른 고블린이 돌팔매를 빙빙 돌린다.",
      "essence": "비약",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_creeping_vine",
      "zone": 1,
      "name": "휘감는 덩굴",
      "rank": "normal",
      "hp": 42,
      "damage": 3,
      "agi": 1,
      "damageReduction": 0,
      "skills": [
        "eskl_entangle"
      ],
      "pattern": "default",
      "goldMin": 3,
      "goldMax": 5,
      "description": "땅을 기던 덩굴이 뱀처럼 고개를 든다.",
      "essence": "정수",
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
      "essence": "비약",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_young_boar",
      "zone": 1,
      "name": "어린 멧돼지",
      "rank": "normal",
      "hp": 50,
      "damage": 4,
      "agi": 2,
      "damageReduction": 1,
      "skills": [
        "eskl_boar_charge"
      ],
      "pattern": "default",
      "goldMin": 4,
      "goldMax": 6,
      "description": "털이 덜 자란 멧돼지가 앞발로 흙을 파며 콧김을 뿜는다.",
      "essence": "내단",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_one_eyed_wolf",
      "zone": 1,
      "name": "외눈 늑대",
      "rank": "elite",
      "hp": 70,
      "damage": 5,
      "agi": 8,
      "damageReduction": 0,
      "skills": [
        "eskl_elite_charge"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 11,
      "description": "한쪽 눈을 잃은 늑대가 낮게 몸을 웅크린다.",
      "essence": "",
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
      "hp": 70,
      "damage": 5,
      "agi": 4,
      "damageReduction": 0,
      "skills": [
        "eskl_sling_stone"
      ],
      "pattern": "default",
      "goldMin": 9,
      "goldMax": 12,
      "description": "돌주머니를 주렁주렁 단 고블린이 킥킥댄다.",
      "essence": "",
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
      "hp": 70,
      "damage": 5,
      "agi": 5,
      "damageReduction": 0,
      "skills": [
        "eskl_venom_bite"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 11,
      "description": "등에 부풀어 오른 독주머니를 단 거미가 다리를 비빈다.",
      "essence": "",
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
      "damage": 5,
      "agi": 5,
      "damageReduction": 1,
      "skills": [
        "eskl_roar"
      ],
      "pattern": "default",
      "goldMin": 10,
      "goldMax": 13,
      "description": "칼날마다 피가 굳어 붙은 도적이 비릿하게 웃는다.",
      "essence": "",
      "base": "ene_forest_bandit",
      "effects": [
        "lifesteal:20"
      ],
      "intros": [
        "\"운이 나쁘군.\" 양손에 칼을 든 도적이 칼날을 맞부딪치며 다가온다.",
        "숲 도적들 사이에서 이름난 칼잡이다. 칼날마다 피가 굳어 붙어 있다.",
        "도적이 혀로 칼날을 핥는다. 상처를 낼수록 기운이 오르는 자다."
      ]
    },
    {
      "id": "ene_raging_boar",
      "zone": 1,
      "name": "성난 멧돼지",
      "rank": "elite",
      "hp": 70,
      "damage": 5,
      "agi": 3,
      "damageReduction": 1,
      "skills": [
        "eskl_elite_charge"
      ],
      "pattern": "default",
      "goldMin": 9,
      "goldMax": 12,
      "description": "등에 부러진 화살이 박힌 멧돼지가 눈이 벌게져 있다.",
      "essence": "",
      "base": "ene_young_boar",
      "effects": [
        "crit:1"
      ],
      "intros": [
        "덤불이 통째로 뒤집힌다. 등에 화살이 박힌 멧돼지가 씩씩거리며 튀어나온다.",
        "사냥꾼의 화살을 맞고도 살아남은 멧돼지다. 상처가 분노를 키웠다.",
        "땅이 울린다. 성난 멧돼지가 고개를 낮추고 곧장 달려든다."
      ]
    },
    {
      "id": "ene_blood_vine",
      "zone": 1,
      "name": "피를 빠는 덩굴",
      "rank": "elite",
      "hp": 70,
      "damage": 5,
      "agi": 1,
      "damageReduction": 0,
      "skills": [
        "eskl_entangle"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 11,
      "description": "붉은 수액이 맺힌 덩굴이 맥박처럼 꿈틀댄다.",
      "essence": "",
      "base": "ene_creeping_vine",
      "effects": [
        "lifesteal:20"
      ],
      "intros": [
        "발목에 차가운 것이 감긴다. 붉은 수액을 머금은 덩굴이 천천히 조여 온다.",
        "덩굴 끝마다 핏빛 꽃봉오리가 달려 있다. 꽃봉오리가 일제히 이쪽을 향한다."
      ]
    },
    {
      "id": "ene_tusk",
      "zone": 1,
      "name": "엄니",
      "rank": "midboss",
      "hp": 100,
      "damage": 5,
      "agi": 2,
      "damageReduction": 0,
      "skills": [
        "eskl_tusk_charge",
        "eskl_roar"
      ],
      "pattern": "default",
      "goldMin": 8,
      "goldMax": 10,
      "description": "부러진 엄니를 단 늙은 멧돼지. 숲 초입의 골칫거리다.",
      "essence": "",
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
      "hp": 170,
      "damage": 5,
      "agi": 0,
      "damageReduction": 1,
      "skills": [
        "eskl_root_bind",
        "eskl_branch_slam",
        "eskl_bark_armor"
      ],
      "pattern": "hpBelowHalfOnce:eskl_bark_armor;hpBelowHalf:eskl_branch_slam",
      "goldMin": 12,
      "goldMax": 15,
      "description": "속삭임의 근원. 뒤틀린 고목이 뿌리를 끌며 일어선다.",
      "essence": "",
      "base": "",
      "effects": [],
      "intros": [
        "숲의 속삭임이 한순간 멎는다. 발밑의 뿌리가 꿈틀거리더니, 뒤틀린 고목이 흙을 털어 내며 천천히 몸을 일으킨다. \"…돌아가라…\"",
        "수많은 목소리가 한꺼번에 이름을 부른다. 가지들이 하늘을 가리며 거대한 고목이 길을 막아선다.",
        "바람이 멈추고 나뭇잎이 떨어지지 않는다. 숲 전체가 숨을 죽인 가운데, 고목의 갈라진 틈에서 빛이 새어 나온다."
      ]
    },
    {
      "id": "ene_bandit_chief",
      "zone": 1,
      "name": "도적 두목",
      "rank": "midboss",
      "hp": 85,
      "damage": 6,
      "agi": 7,
      "damageReduction": 0,
      "skills": [
        "eskl_vital_cut",
        "eskl_smoke_screen"
      ],
      "pattern": "hpBelowHalfOnce:eskl_smoke_screen",
      "goldMin": 8,
      "goldMax": 10,
      "description": "숲길을 주름잡는 도적들의 두목. 몸놀림이 빠르고 칼끝이 교활하다.",
      "essence": "",
      "base": "",
      "effects": [
        "evade:1"
      ],
      "intros": [
        "\"내 부하들이 신세를 많이 졌다지?\" 나무 위에서 가볍게 뛰어내린 사내가 쌍칼을 뽑아 든다.",
        "덤불 사방에서 휘파람 소리가 울린다. 붉은 두건을 쓴 사내가 느긋하게 걸어 나온다. \"통행료는 목숨으로 받지.\"",
        "버려진 야영지의 주인이 돌아왔다. 두목이 칼날을 손가락으로 튕기며 웃는다."
      ]
    },
    {
      "id": "ene_silver_mane",
      "zone": 1,
      "name": "은빛 갈기",
      "rank": "boss",
      "hp": 140,
      "damage": 6,
      "agi": 8,
      "damageReduction": 0,
      "skills": [
        "eskl_lunge_bite",
        "eskl_hamstring_bite",
        "eskl_pack_howl"
      ],
      "pattern": "hpBelowHalfOnce:eskl_pack_howl;hpBelowHalf:eskl_lunge_bite",
      "goldMin": 12,
      "goldMax": 15,
      "description": "숲 초입 늑대 무리의 우두머리. 은빛 갈기가 달빛처럼 번뜩인다.",
      "essence": "",
      "base": "",
      "effects": [
        "crit:1"
      ],
      "intros": [
        "늑대 울음이 사방에서 한꺼번에 그친다. 정적 속에서 은빛 갈기를 세운 거대한 늑대가 바위 위에 모습을 드러낸다.",
        "덫에서 구해 준 새끼들, 사냥감을 두고 다투던 늑대들. 그 모든 무리의 주인이 낮게 으르렁거리며 다가온다.",
        "달도 없는데 은빛이 번뜩인다. 우두머리 늑대가 고개를 젖히고 길게 울부짖는다."
      ]
    },
    {
      "id": "ene_bewitched_hunter",
      "zone": 2,
      "name": "홀린 사냥꾼",
      "rank": "normal",
      "hp": 75,
      "damage": 7,
      "agi": 7,
      "damageReduction": 0,
      "skills": [
        "eskl_barbed_arrow"
      ],
      "pattern": "default",
      "goldMin": 6,
      "goldMax": 9,
      "description": "초점 없는 눈의 사냥꾼이 활시위를 당긴다. 입술이 쉬지 않고 무언가를 중얼거린다.",
      "essence": "혼",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_moss_sentinel",
      "zone": 2,
      "name": "이끼 파수석",
      "rank": "normal",
      "hp": 100,
      "damage": 7,
      "agi": 0,
      "damageReduction": 3,
      "skills": [
        "eskl_stone_fist"
      ],
      "pattern": "default",
      "goldMin": 7,
      "goldMax": 9,
      "description": "이끼에 뒤덮인 돌 파수꾼이 삐걱거리며 몸을 일으킨다. 숲지기들이 남긴 것이다.",
      "essence": "정수",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_thornhorn_stag",
      "zone": 2,
      "name": "가시뿔 사슴",
      "rank": "normal",
      "hp": 80,
      "damage": 6,
      "agi": 7,
      "damageReduction": 0,
      "skills": [
        "eskl_thorn_charge"
      ],
      "pattern": "default",
      "goldMin": 5,
      "goldMax": 8,
      "description": "가시덩굴이 뿔에 엉겨 자란 사슴이 앞발로 땅을 긁는다.",
      "essence": "내단",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_strangler_vine",
      "zone": 2,
      "name": "교살 덩굴",
      "rank": "normal",
      "hp": 85,
      "damage": 5,
      "agi": 2,
      "damageReduction": 1,
      "skills": [
        "eskl_strangle"
      ],
      "pattern": "default",
      "goldMin": 5,
      "goldMax": 8,
      "description": "굵은 덩굴이 나무를 타고 내려와 소리 없이 다가온다.",
      "essence": "정수",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_shadow_bat",
      "zone": 2,
      "name": "그림자 박쥐",
      "rank": "normal",
      "hp": 65,
      "damage": 5,
      "agi": 9,
      "damageReduction": 0,
      "skills": [],
      "pattern": "default",
      "goldMin": 5,
      "goldMax": 7,
      "description": "어둠 속에서 날갯짓 소리만 들린다. 눈을 돌리면 이미 다른 곳에 있다.",
      "essence": "내단",
      "base": "",
      "effects": [
        "evade:1"
      ],
      "intros": []
    },
    {
      "id": "ene_warden_shade",
      "zone": 2,
      "name": "숲지기의 망령",
      "rank": "normal",
      "hp": 70,
      "damage": 6,
      "agi": 4,
      "damageReduction": 0,
      "skills": [
        "eskl_chill_touch"
      ],
      "pattern": "default",
      "goldMin": 6,
      "goldMax": 9,
      "description": "낡은 숲지기 망토를 걸친 희미한 형체가 길을 막아선다. \"…돌아가라…\"",
      "essence": "혼",
      "base": "",
      "effects": [],
      "intros": []
    },
    {
      "id": "ene_hunter_chief",
      "zone": 2,
      "name": "사냥꾼 우두머리",
      "rank": "elite",
      "hp": 140,
      "damage": 7,
      "agi": 7,
      "damageReduction": 0,
      "skills": [
        "eskl_barbed_arrow"
      ],
      "pattern": "default",
      "goldMin": 14,
      "goldMax": 18,
      "description": "홀린 사냥꾼들을 이끌던 자다. 화살 끝이 정확히 급소를 노린다.",
      "essence": "",
      "base": "ene_bewitched_hunter",
      "effects": [
        "crit:1"
      ],
      "intros": [
        "나무 위에서 화살 한 대가 발치에 꽂힌다. 경고다. 우두머리가 두 번째 화살을 메긴다.",
        "\"사냥감이 제 발로 왔군.\" 홀린 눈의 사냥꾼이 웃는다. 목소리가 둘로 겹쳐 들린다."
      ]
    },
    {
      "id": "ene_ancient_sentinel",
      "zone": 2,
      "name": "고대 파수석",
      "rank": "elite",
      "hp": 140,
      "damage": 7,
      "agi": 0,
      "damageReduction": 3,
      "skills": [
        "eskl_stone_fist"
      ],
      "pattern": "default",
      "goldMin": 14,
      "goldMax": 18,
      "description": "숲지기 초소를 지키던 가장 오래된 파수석. 몸에 새겨진 문양이 희미하게 빛난다.",
      "essence": "",
      "base": "ene_moss_sentinel",
      "effects": [
        "reflect:2"
      ],
      "intros": [
        "땅이 울린다. 문양이 빛나는 거대한 파수석이 무너진 초소 문을 막고 선다.",
        "이끼가 갈라지며 돌 몸통이 드러난다. 닿는 것마다 튕겨 낼 듯 단단하다."
      ]
    },
    {
      "id": "ene_crown_stag",
      "zone": 2,
      "name": "왕관뿔 사슴",
      "rank": "elite",
      "hp": 140,
      "damage": 7,
      "agi": 7,
      "damageReduction": 0,
      "skills": [
        "eskl_thorn_charge"
      ],
      "pattern": "default",
      "goldMin": 14,
      "goldMax": 18,
      "description": "가시가 왕관처럼 뿔을 감싼 수사슴. 무리의 우두머리다.",
      "essence": "",
      "base": "ene_thornhorn_stag",
      "effects": [
        "crit:1"
      ],
      "intros": [
        "사슴들이 일제히 길을 연다. 가시 왕관을 쓴 수사슴이 고개를 낮춘다.",
        "뿔 끝마다 마른 피가 엉겨 있다. 수사슴이 콧김을 뿜으며 앞발을 구른다."
      ]
    },
    {
      "id": "ene_great_strangler",
      "zone": 2,
      "name": "거목 교살자",
      "rank": "elite",
      "hp": 140,
      "damage": 7,
      "agi": 2,
      "damageReduction": 1,
      "skills": [
        "eskl_strangle"
      ],
      "pattern": "default",
      "goldMin": 14,
      "goldMax": 18,
      "description": "거목 한 그루를 통째로 휘감아 말려 죽인 덩굴. 이제 다른 먹이를 찾는다.",
      "essence": "",
      "base": "ene_strangler_vine",
      "effects": [
        "lifesteal:10"
      ],
      "intros": [
        "말라 죽은 거목이 삐걱거린다. 그 줄기를 감고 있던 덩굴이 천천히 풀려 이쪽을 향한다.",
        "덩굴 마디마다 무언가를 빨아들인 듯 불룩하다. 땅이 꿈틀거린다."
      ]
    },
    {
      "id": "ene_bat_lord",
      "zone": 2,
      "name": "박쥐 무리의 군주",
      "rank": "elite",
      "hp": 140,
      "damage": 7,
      "agi": 9,
      "damageReduction": 0,
      "skills": [
        "eskl_bat_swarm"
      ],
      "pattern": "default",
      "goldMin": 14,
      "goldMax": 18,
      "description": "박쥐 떼를 거느린 커다란 박쥐. 날개를 펴면 사람만 하다.",
      "essence": "",
      "base": "ene_shadow_bat",
      "effects": [
        "evade:2"
      ],
      "intros": [
        "동굴 천장이 통째로 움직이는 것 같다. 수백 마리 박쥐 한가운데 붉은 눈이 열린다.",
        "날갯짓 소리가 사방에서 몰려든다. 군주가 날카롭게 울자 박쥐 떼가 소용돌이친다."
      ]
    },
    {
      "id": "ene_shade_captain",
      "zone": 2,
      "name": "망령 대장",
      "rank": "elite",
      "hp": 140,
      "damage": 7,
      "agi": 4,
      "damageReduction": 0,
      "skills": [
        "eskl_chill_touch",
        "eskl_spectral_ward"
      ],
      "pattern": "default",
      "goldMin": 14,
      "goldMax": 18,
      "description": "숲지기 부대를 이끌던 대장의 망령. 지금도 초소를 지킨다고 믿는다.",
      "essence": "",
      "base": "ene_warden_shade",
      "effects": [],
      "intros": [
        "\"초소를 지켜라!\" 메아리 같은 외침과 함께 망토 입은 망령이 검을 뽑는다.",
        "희미한 형체들이 무릎을 꿇고 사라진다. 그 뒤에서 대장의 망령이 걸어 나온다."
      ]
    },
    {
      "id": "ene_rusted_warden",
      "zone": 2,
      "name": "녹슨 숲지기",
      "rank": "midboss",
      "hp": 190,
      "damage": 7,
      "agi": 2,
      "damageReduction": 2,
      "skills": [
        "eskl_warden_shield",
        "eskl_warden_bash",
        "eskl_retribution"
      ],
      "pattern": "hpBelowHalf:eskl_retribution",
      "goldMin": 14,
      "goldMax": 16,
      "description": "녹슨 갑옷 속에 빛만 남은 숲지기. 아직도 숲을 지키고 있다고 믿는다.",
      "essence": "",
      "base": "",
      "effects": [],
      "intros": [
        "녹슨 갑옷이 삐걱이며 일어선다. 투구 틈으로 푸른빛이 새어 나온다. \"숲은… 아직… 지켜지고 있다.\"",
        "무너진 초소 위에 방패를 든 기사가 서 있다. 1구역에서 본 쓰러진 기사와 같은 문장이 갑옷에 새겨져 있다.",
        "\"침입자.\" 낮은 목소리와 함께 녹슨 방패가 땅을 울린다. 길이 막혔다."
      ]
    },
    {
      "id": "ene_thorncrown",
      "zone": 2,
      "name": "가시왕관",
      "rank": "midboss",
      "hp": 160,
      "damage": 7,
      "agi": 8,
      "damageReduction": 0,
      "skills": [
        "eskl_crown_charge",
        "eskl_trample"
      ],
      "pattern": "hpBelowHalf:eskl_crown_charge",
      "goldMin": 14,
      "goldMax": 16,
      "description": "가시덩굴이 왕관처럼 자라난 거대한 사슴. 숲의 사냥꾼들도 이 짐승만은 피했다.",
      "essence": "",
      "base": "",
      "effects": [
        "crit:1"
      ],
      "intros": [
        "사냥터의 사슴들이 일제히 흩어진다. 나무만 한 가시 왕관을 인 사슴이 안개를 가르고 나타난다.",
        "땅이 흔들린다. 가시뿔에 꿰인 사냥꾼의 활이 덜렁거린다. 거대한 사슴이 고개를 낮춘다.",
        "숲이 숨을 죽인다. 가시왕관이 앞발로 땅을 긁자 마른 가시가 사방으로 튄다."
      ]
    },
    {
      "id": "ene_moss_shaman",
      "zone": 2,
      "name": "이끼 무녀",
      "rank": "boss",
      "hp": 290,
      "damage": 6,
      "agi": 3,
      "damageReduction": 0,
      "skills": [
        "eskl_whisper_curse",
        "eskl_moss_mend",
        "eskl_spore_spit"
      ],
      "pattern": "hpBelowHalfOnce:eskl_moss_mend",
      "goldMin": 20,
      "goldMax": 24,
      "description": "이끼로 짠 옷을 입은 여인. 속삭임에 가장 먼저 귀 기울인 사람이었다.",
      "essence": "",
      "base": "",
      "effects": [],
      "intros": [
        "\"그 이름을 들었구나.\" 이끼에 덮인 여인이 고개를 든다. 그녀의 입에서 수십 개의 목소리가 동시에 흘러나온다.",
        "속삭임이 한곳으로 모여든다. 이끼로 짠 옷자락이 바람 없이 흔들리고, 여인이 천천히 손을 뻗는다.",
        "\"숲이 너를 부른다. 대답하렴.\" 무녀의 눈이 이끼처럼 푸르게 빛난다."
      ]
    },
    {
      "id": "ene_old_stump_bear",
      "zone": 2,
      "name": "늙은 그루터기 곰",
      "rank": "boss",
      "hp": 300,
      "damage": 7,
      "agi": 1,
      "damageReduction": 1,
      "skills": [
        "eskl_rending_claw",
        "eskl_bear_roar",
        "eskl_frenzy"
      ],
      "pattern": "hpBelowHalfOnce:eskl_frenzy;hpBelowHalf:eskl_rending_claw",
      "goldMin": 20,
      "goldMax": 24,
      "description": "등에 이끼와 그루터기가 자란 거대한 곰. 숲보다 오래 살았다는 말이 있다.",
      "essence": "",
      "base": "",
      "effects": [],
      "intros": [
        "언덕 전체가 일어선다. 아니, 언덕이 아니라 등에 그루터기가 자란 곰이다.",
        "곰 발자국이 끝나는 곳에서 낮은 숨소리가 들린다. 이끼 덮인 거구가 몸을 일으키며 포효한다.",
        "나무가 쓰러지는 소리와 함께 늙은 곰이 모습을 드러낸다. 발톱마다 오래된 상처가 엉겨 있다."
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
      "id": "eskl_entangle",
      "name": "휘감기",
      "type": "attack",
      "baseEffect": 4,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:1"
      ],
      "description": "덩굴이 팔을 휘감아 힘을 빼앗는다."
    },
    {
      "id": "eskl_boar_charge",
      "name": "돌진",
      "type": "attack",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [],
      "description": "몸을 낮추고 들이받는다."
    },
    {
      "id": "eskl_elite_charge",
      "name": "돌진",
      "type": "attack",
      "baseEffect": 13,
      "cooldown": 4,
      "effects": [],
      "description": "온몸을 실어 들이받는다."
    },
    {
      "id": "eskl_tusk_charge",
      "name": "돌진",
      "type": "attack",
      "baseEffect": 11,
      "cooldown": 3,
      "effects": [],
      "description": "부러진 엄니를 앞세워 돌진한다."
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
      "baseEffect": 12,
      "cooldown": 3,
      "effects": [],
      "description": "굵은 가지가 머리 위로 떨어진다."
    },
    {
      "id": "eskl_bark_armor",
      "name": "나무껍질 갑주",
      "type": "defense",
      "baseEffect": 10,
      "cooldown": 6,
      "effects": [
        "shield:2"
      ],
      "description": "갈라진 껍질이 겹겹이 굳으며 몸을 감싼다."
    },
    {
      "id": "eskl_vital_cut",
      "name": "급소 베기",
      "type": "attack",
      "baseEffect": 10,
      "cooldown": 3,
      "effects": [
        "vulnerable:1.3:2"
      ],
      "description": "칼끝이 갑옷 틈을 정확히 파고든다."
    },
    {
      "id": "eskl_smoke_screen",
      "name": "연막탄",
      "type": "debuff",
      "baseEffect": 0,
      "cooldown": 4,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "연기가 터지며 눈앞이 뿌옇게 흐려진다."
    },
    {
      "id": "eskl_lunge_bite",
      "name": "달려들어 물기",
      "type": "attack",
      "baseEffect": 11,
      "cooldown": 3,
      "effects": [],
      "description": "순식간에 거리를 좁혀 목덜미를 노린다."
    },
    {
      "id": "eskl_hamstring_bite",
      "name": "다리 물기",
      "type": "attack",
      "baseEffect": 5,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:1"
      ],
      "description": "다리를 물어 뜯어 발을 무겁게 한다."
    },
    {
      "id": "eskl_pack_howl",
      "name": "무리의 울부짖음",
      "type": "buff",
      "baseEffect": 3,
      "cooldown": 6,
      "effects": [
        "empower:2"
      ],
      "description": "울부짖음에 숲 곳곳의 늑대들이 화답한다. 우두머리의 눈빛이 사나워진다."
    },
    {
      "id": "eskl_barbed_arrow",
      "name": "가시 화살",
      "type": "attack",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [
        "bleed:1"
      ],
      "description": "미늘 달린 화살이 살을 파고든다."
    },
    {
      "id": "eskl_stone_fist",
      "name": "돌주먹",
      "type": "attack",
      "baseEffect": 13,
      "cooldown": 4,
      "effects": [],
      "description": "이끼 낀 돌주먹이 무겁게 내려온다."
    },
    {
      "id": "eskl_thorn_charge",
      "name": "가시뿔 돌진",
      "type": "attack",
      "baseEffect": 9,
      "cooldown": 3,
      "effects": [
        "bleed:1"
      ],
      "description": "가시 돋친 뿔을 앞세워 들이받는다."
    },
    {
      "id": "eskl_strangle",
      "name": "조르기",
      "type": "attack",
      "baseEffect": 6,
      "cooldown": 4,
      "effects": [
        "stun:1"
      ],
      "description": "덩굴이 목을 감아 조인다."
    },
    {
      "id": "eskl_chill_touch",
      "name": "서늘한 손길",
      "type": "attack",
      "baseEffect": 5,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "차가운 손이 스치자 팔에 힘이 빠진다."
    },
    {
      "id": "eskl_bat_swarm",
      "name": "박쥐 떼",
      "type": "attack",
      "baseEffect": 8,
      "cooldown": 3,
      "effects": [
        "weaken:0.7:1"
      ],
      "description": "박쥐 떼가 얼굴로 몰려든다."
    },
    {
      "id": "eskl_spectral_ward",
      "name": "혼령 장막",
      "type": "defense",
      "baseEffect": 15,
      "cooldown": 5,
      "effects": [
        "shield:2"
      ],
      "description": "희미한 장막이 망령을 감싼다."
    },
    {
      "id": "eskl_warden_shield",
      "name": "방패 세우기",
      "type": "defense",
      "baseEffect": 18,
      "cooldown": 4,
      "effects": [
        "shield:2"
      ],
      "description": "녹슨 방패를 세우자 푸른빛이 방패를 감싼다."
    },
    {
      "id": "eskl_warden_bash",
      "name": "방패 밀치기",
      "type": "attack",
      "baseEffect": 6,
      "cooldown": 4,
      "effects": [
        "stun:1"
      ],
      "description": "방패로 몸을 밀쳐 균형을 무너뜨린다."
    },
    {
      "id": "eskl_retribution",
      "name": "응징의 일격",
      "type": "attack",
      "baseEffect": 16,
      "cooldown": 3,
      "effects": [],
      "description": "방패 뒤에서 무거운 검이 내리꽂힌다."
    },
    {
      "id": "eskl_crown_charge",
      "name": "가시왕관 돌진",
      "type": "attack",
      "baseEffect": 13,
      "cooldown": 3,
      "effects": [
        "bleed:2"
      ],
      "description": "왕관 같은 가시뿔이 몸을 꿰뚫을 듯 달려든다."
    },
    {
      "id": "eskl_trample",
      "name": "짓밟기",
      "type": "attack",
      "baseEffect": 8,
      "cooldown": 4,
      "effects": [
        "vulnerable:1.3:1"
      ],
      "description": "앞발로 짓밟아 자세를 무너뜨린다."
    },
    {
      "id": "eskl_whisper_curse",
      "name": "속삭임의 저주",
      "type": "debuff",
      "baseEffect": 0,
      "cooldown": 4,
      "effects": [
        "weaken:0.7:2",
        "vulnerable:1.3:2"
      ],
      "description": "수십 개의 목소리가 귓가를 파고든다."
    },
    {
      "id": "eskl_moss_mend",
      "name": "이끼 치유",
      "type": "heal",
      "baseEffect": 45,
      "cooldown": 6,
      "effects": [],
      "description": "상처 위로 이끼가 빠르게 자라나 메운다."
    },
    {
      "id": "eskl_spore_spit",
      "name": "포자 뿜기",
      "type": "attack",
      "baseEffect": 5,
      "cooldown": 3,
      "effects": [
        "poison:3:3"
      ],
      "description": "독 포자가 구름처럼 퍼진다."
    },
    {
      "id": "eskl_rending_claw",
      "name": "찢는 발톱",
      "type": "attack",
      "baseEffect": 12,
      "cooldown": 3,
      "effects": [
        "bleed:2"
      ],
      "description": "거대한 발톱이 살을 찢는다."
    },
    {
      "id": "eskl_bear_roar",
      "name": "곰의 포효",
      "type": "debuff",
      "baseEffect": 0,
      "cooldown": 5,
      "effects": [
        "weaken:0.7:2"
      ],
      "description": "숲을 뒤흔드는 포효에 다리가 굳는다."
    },
    {
      "id": "eskl_frenzy",
      "name": "광폭화",
      "type": "buff",
      "baseEffect": 4,
      "cooldown": 99,
      "effects": [
        "empower:99"
      ],
      "description": "곰의 눈이 붉게 뒤집힌다."
    }
  ],
  "campOptions": [
    {
      "id": "camp_warden_rest",
      "zone": 2,
      "round": 10,
      "text": "숲지기 대장을 쉬게 할 준비를 한다",
      "requiresFlags": [
        "wardenRequest"
      ],
      "bossId": "ene_rusted_warden",
      "effects": [
        "onBattleStart>empower:3:99"
      ],
      "surprise": false,
      "resultText": "망령이 맡긴 녹슨 열쇠를 쥐자 마음이 단단해진다. 대장을 쉬게 해 주겠다."
    },
    {
      "id": "camp_warden_light",
      "zone": 2,
      "round": 10,
      "text": "기사의 축복을 두르고 초소로 향한다",
      "requiresFlags": [
        "wardenBlessing"
      ],
      "bossId": "ene_rusted_warden",
      "effects": [
        "onBattleStart>shield:10:2"
      ],
      "surprise": false,
      "resultText": "손등의 푸른 빛이 온몸으로 번진다."
    },
    {
      "id": "camp_stag_trail",
      "zone": 2,
      "round": 10,
      "text": "풀어 준 사슴이 남긴 길로 가시왕관의 뒤를 잡는다",
      "requiresFlags": [
        "freedStag"
      ],
      "bossId": "ene_thorncrown",
      "effects": [
        "immune:bleed"
      ],
      "surprise": true,
      "resultText": "사슴이 남긴 발자국이 가시왕관이 쉬는 곳까지 이어진다."
    },
    {
      "id": "camp_bear_weakness",
      "zone": 2,
      "round": 21,
      "text": "곰의 왼쪽 앞발을 노릴 준비를 한다",
      "requiresFlags": [
        "knowsBearWound"
      ],
      "bossId": "ene_old_stump_bear",
      "effects": [
        "onBattleStart>empower:3:99",
        "crit:1"
      ],
      "surprise": false,
      "resultText": "약점을 알면 두려움도 줄어든다."
    },
    {
      "id": "camp_shaman_ward",
      "zone": 2,
      "round": 21,
      "text": "무녀의 노래에 대비해 귀를 막고 마음을 다잡는다",
      "requiresFlags": [
        "warnedOfShaman"
      ],
      "bossId": "ene_moss_shaman",
      "effects": [
        "immune:weaken",
        "immune:vulnerable"
      ],
      "surprise": false,
      "resultText": "여러 사람의 경고가 귓가에 남아 있다. 무녀의 저주에 흔들리지 않을 것이다."
    },
    {
      "id": "camp_shaman_name",
      "zone": 2,
      "round": 21,
      "text": "대답했던 이름을 되뇌며 무녀의 부름에 맞설 준비를 한다",
      "requiresFlags": [
        "answeredWhisper"
      ],
      "bossId": "ene_moss_shaman",
      "effects": [
        "onBattleStart>empower:4:99"
      ],
      "surprise": false,
      "resultText": "그 이름이 이제는 내 편이다."
    }
  ]
};
