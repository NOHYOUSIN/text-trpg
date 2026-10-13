import { catalog } from "../data/catalog.js?v=20261014-041746";
import { BOSS_RANKS, EARLY_SKILL, EVENT_CHOICES, RECOVERY, SKILL_FLOOR } from "../data/rules.js?v=20261014-041746";
import { Adventurer } from "../models/Adventurer.js?v=20261014-041746";
import { RunState } from "../models/RunState.js?v=20261014-041746";
import { SaveManager } from "../save/SaveManager.js?v=20261014-041746";
import { Combat } from "../systems/CombatSystem.js?v=20261014-041746";
import { DiceSystem } from "../systems/DiceSystem.js?v=20261014-041746";
import { rollEnemyVariant } from "../systems/EnemyVariantSystem.js?v=20261014-041746";
import { getSkillBonus, OUTCOME_LABELS, pickShownChoices, resolveChoice } from "../systems/EventSystem.js?v=20261014-041746";
import {
  addItem,
  discardSlot,
  entryName,
  equipFromSlot,
  equipNew,
  maxStackOf,
  tryAutoAcquire,
  unequip,
  useConsumableOutsideCombat,
} from "../systems/InventorySystem.js?v=20261014-041746";
import { josa } from "../systems/Josa.js?v=20261014-041746";
import {
  createBossRewardCandidates,
  markUniqueSeen,
  resolveAcquisition,
  rollCombatLoot,
  rollTreasure,
} from "../systems/LootSystem.js?v=20261014-041746";
import { formatNumber as fmt, roundValue } from "../systems/NumberRules.js?v=20261014-041746";
import { applyOutcome } from "../systems/OutcomeSystem.js?v=20261014-041746";
import {
  CONTENT_LABELS,
  createRouteCandidates,
  availableCampOptions,
  getBossForRound,
  hasZoneBoss,
  pickZoneBosses,
  getZone,
  isCampRound,
  pickEnemy,
  pickEvent,
  rollPlaceContent,
} from "../systems/RouteSystem.js?v=20261014-041746";
import { createShopStock, sellFromSlot } from "../systems/ShopSystem.js?v=20261014-041746";
import { getMaxHp, getProfile } from "../systems/TraitSystem.js?v=20261014-041746";
import {
  renderBossReward,
  renderEquipChoice,
  renderEquipmentOffer,
  renderInventoryFull,
  renderSkillChoice,
  renderSkillOffer,
} from "../ui/AcquireUI.js?v=20261014-041746";
import { renderClassSelect } from "../ui/ClassSelectUI.js?v=20261014-041746";
import { CombatUI } from "../ui/CombatUI.js?v=20261014-041746";
import { renderBossIntro } from "../ui/BossIntroUI.js?v=20261014-041746";
import { renderCamp } from "../ui/CampUI.js?v=20261014-041746";
import {
  describeSave,
  renderDungeonCard,
  renderDungeonSelect,
  renderLobby,
  renderOverwriteConfirm,
} from "../ui/LobbyUI.js?v=20261014-041746";
import { HelpUI } from "../ui/HelpUI.js?v=20261014-041746";
import { SettingsUI } from "../ui/SettingsUI.js?v=20261014-041746";
import { renderEvent } from "../ui/EventUI.js?v=20261014-041746";
import { InventoryUI } from "../ui/InventoryUI.js?v=20261014-041746";
import { LogUI } from "../ui/LogUI.js?v=20261014-041746";
import { renderRoute } from "../ui/RouteUI.js?v=20261014-041746";
import { renderScene } from "../ui/SceneUI.js?v=20261014-041746";
import { renderShop } from "../ui/ShopUI.js?v=20261014-041746";
import { renderStatus } from "../ui/StatusUI.js?v=20261014-041746";
import { renderSummary } from "../ui/SummaryUI.js?v=20261014-041746";


// 탐험 전체 흐름: 직업 선택 → 라운드(갈림길 → 장소 내용) → 보스 → 요약
export class GameManager {
  constructor({ sceneRoot, statusRoot, logRoot, overlayRoot, onStatusChange = () => {}, onSettingsChange = () => {} }) {
    this.onStatusChange = onStatusChange;
    this.onSettingsChange = onSettingsChange;
    this.sceneRoot = sceneRoot;
    this.statusRoot = statusRoot;
    this.logUI = new LogUI(logRoot);
    this.inventoryUI = new InventoryUI(overlayRoot, {
      onEquip: (index) => this.manageInventory(() => equipFromSlot(this.adventurer, index)),
      onUnequip: (slot) => this.manageInventory(() => unequip(this.adventurer, slot)),
      onUse: (itemId) => this.manageInventory(() => useConsumableOutsideCombat(this.adventurer, itemId)),
      onDiscard: (index) => this.manageInventory(() => discardSlot(this.adventurer, index)),
      onClose: () => this.closeInventory(),
    });
    this.helpUI = new HelpUI(overlayRoot);
    this.settingsUI = new SettingsUI(overlayRoot, { onChange: onSettingsChange, onHelp: () => this.showHelp() });
    this.saveManager = new SaveManager();
    this.dice = new DiceSystem();
    // 로비에서 고른 던전(이어하기는 저장된 던전)
    this.dungeon = null;
    this.adventurer = null;
    this.run = null;
    this.inCombat = false;
    // 소지품 창을 닫은 뒤 현재 장면을 다시 그린다(조건·인벤토리 변화 반영).
    this.refreshScene = null;
  }

  start() {
    this.showLobby();
  }

  // ---------- 장면 표시 ----------

  // menu: 로비·던전 선택·설정처럼 탐험 밖의 메뉴 화면. 상단 머리말과 상태·기록 패널을 숨기고 가운데 한 단으로 보여 준다.
  show(render, { menu = false } = {}) {
    document.body.classList.toggle("menu-mode", menu);
    this.refreshScene = render;
    this.renderStatus();
    render();
  }

  // ---------- 탐험 시작·구역 ----------

  // ---------- 로비·던전 선택·설정 ----------

  showLobby() {
    this.adventurer = null;
    this.run = null;
    this.logUI.clear();
    const saved = this.saveManager.load();

    this.show(() => renderLobby(this.sceneRoot, {
      saveSummary: saved ? this.describeSave(saved) : null,
      onNew: () => this.showDungeonSelect(),
      onContinue: () => this.resume(saved),
      onSettings: () => this.showSettings(),
      onHelp: () => this.showHelp(),
    }), { menu: true });
    // 처음 접속하면 도움말을 한 번 연다.
    this.helpUI.openIfFirstVisit();
  }

  describeSave(saved) {
    const dungeon = catalog.dungeons.get(saved.run.dungeonId);
    return describeSave(saved, dungeon, dungeon ? getZone(dungeon, saved.run.zone) : null);
  }

  showDungeonSelect() {
    this.show(() => renderDungeonSelect(this.sceneRoot, {
      dungeons: [...catalog.dungeons.values()],
      onPick: (dungeon) => this.showDungeonCard(dungeon),
      onBack: () => this.showLobby(),
    }), { menu: true });
  }

  // 던전 설명은 자유롭게 볼 수 있고, 출발할 때 진행 중인 탐험이 있으면 확인한다.
  showDungeonCard(dungeon) {
    const depart = () => {
      this.dungeon = dungeon;
      this.showClassSelect();
    };

    this.show(() => renderDungeonCard(this.sceneRoot, {
      dungeon,
      onBack: () => this.showDungeonSelect(),
      onDepart: () => {
        const saved = this.saveManager.load();

        if (!saved) {
          depart();
          return;
        }

        this.show(() => renderOverwriteConfirm(this.sceneRoot, {
          saveSummary: this.describeSave(saved),
          onConfirm: () => {
            this.saveManager.clear();
            depart();
          },
          onCancel: () => this.showDungeonCard(dungeon),
        }), { menu: true });
      },
    }), { menu: true });
  }

  // 설정은 로비·탐험 중 어디서나 창(오버레이)으로 연다.
  showSettings() {
    this.settingsUI.open();
  }

  // 설정 창과 같은 자리(오버레이)에 연다. 설정 창에서 열면 설정 창을 대신한다.
  showHelp() {
    this.helpUI.open();
  }

  // ---------- 저장·이어하기 ----------

  resume(saved) {
    this.dungeon = catalog.dungeons.get(saved.run.dungeonId) ?? [...catalog.dungeons.values()][0];
    this.adventurer = new Adventurer(saved.adventurer);
    this.run = new RunState(saved.run);
    this.logUI.clear();
    this.logUI.add(`탐험을 이어 간다. (${this.zone.name} ${this.run.round}라운드)`, "system");
    this.startRound({ resume: true });
  }

  // 라운드 시작 시점에 저장한다. 라운드마다 주사위 시드를 새로 정해 함께 저장하므로,
  // 라운드 도중 종료 후 이어하면 같은 갈림길에서 다시 시작하고 같은 선택에는 같은 결과가 나온다.
  beginRoundSave(resume) {
    if (!resume || this.run.roundSeed === null) {
      this.run.roundSeed = Math.floor(Math.random() * 2 ** 32);
    }

    this.dice = new DiceSystem(this.run.roundSeed);
    this.saveManager.save({ adventurer: this.adventurer, run: this.run });
  }

  showClassSelect() {
    this.adventurer = null;
    this.run = null;
    this.logUI.clear();
    this.show(() => renderClassSelect(this.sceneRoot, {
      dungeon: this.dungeon,
      onSelect: (classId) => this.startRun(classId),
    }));
  }

  startRun(classId) {
    this.adventurer = Adventurer.fromClass(catalog.classes.get(classId), maxStackOf);
    // 시작 HP = 최대 HP(직업 기본 HP + 능력치에 따른 체력)
    this.adventurer.hp = getMaxHp(this.adventurer);
    this.run = new RunState({ dungeonId: this.dungeon.id });
    this.logUI.add(`${josa(this.adventurer.name, "이/가")} ${this.dungeon.name}에 들어섰다.`, "system");
    this.enterZone();
  }

  get zone() {
    return getZone(this.dungeon, this.run.zone);
  }

  get roundLabel() {
    return `${this.zone.name} · ${this.run.round} / ${this.zone.rounds} 라운드`;
  }

  enterZone() {
    this.run.round = 1;
    this.run.recentPlaces = [];
    this.run.placeShows = {};
    this.run.bossPicks = pickZoneBosses(this.zone, this.dice);
    this.run.campBoon = null;
    this.run.lastShownPlaces = [];
    this.logUI.add(`── ${this.zone.name} ──`, "system");
    this.show(() => renderScene(this.sceneRoot, {
      eyebrow: this.dungeon.name,
      title: this.zone.name,
      paragraphs: [this.zone.entryText],
      buttons: [{ label: "나아간다", primary: true, onClick: () => this.startRound() }],
    }));
  }

  // ---------- 라운드 ----------

  startRound({ resume = false } = {}) {
    this.beginRoundSave(resume);
    const boss = getBossForRound(this.zone, this.run.round, this.dice, this.run.bossPicks);

    if (boss) {
      const enemy = this.dungeon.enemiesById.get(boss.enemyId);
      const text = enemy.intros.length ? this.dice.pick(enemy.intros) : enemy.description;
      this.logUI.add(`${this.run.round}라운드: ${enemy.name} 등장`, "boss");
      this.show(() => renderBossIntro(this.sceneRoot, {
        eyebrow: this.roundLabel,
        enemy,
        text,
        onFight: () => this.startBossCombat(enemy),
      }));
      return;
    }

    if (isCampRound(this.zone, this.run.round)) {
      this.showCamp();
      return;
    }

    const candidates = createRouteCandidates(this.dungeon, this.run, this.dice);
    // 장소마다 묘사 후보(description1~3) 중 하나를 고른다. 라운드 주사위라 이어하기 때도 같다.
    const descriptions = candidates.map((place) => this.dice.pick(place.descriptions) ?? "");
    this.show(() => renderRoute(this.sceneRoot, {
      zone: this.zone,
      round: this.run.round,
      candidates,
      descriptions,
      onChoose: (place) => this.enterPlace(place),
    }));
  }

  enterPlace(place) {
    this.run.rememberPlace(place.id);
    let content = rollPlaceContent(place, this.dice);
    let event = null;

    if (content === "event") {
      event = pickEvent(this.dungeon, place, this.run, this.dice);

      // 등장 가능한 사건이 없으면 전투로 대신한다.
      if (!event) {
        content = "combat";
      }
    }

    this.logUI.add(`${this.run.round}라운드: ${place.name} — ${CONTENT_LABELS[content]}`);

    switch (content) {
      case "combat": {
        const enemy = rollEnemyVariant(this.dungeon, pickEnemy(this.dungeon, place, this.run, this.dice), {
          place,
          run: this.run,
          dice: this.dice,
        });
        const surprise = this.dice.chance(place.surpriseChance) ? "enemy" : null;
        this.startCombat(enemy, surprise);
        break;
      }
      case "event": {
        this.run.seenEvents.add(event.id);
        this.run.rememberEventGroup(event.group, EVENT_CHOICES.recentGroupExclusion);
        const choices = pickShownChoices(event, this.adventurer, this.dice);
        this.show(() => renderEvent(this.sceneRoot, {
          place,
          event,
          choices,
          adventurer: this.adventurer,
          onChoose: (choice) => this.resolveEventChoice(event, choice),
        }));
        break;
      }
      case "rest":
        this.rest();
        break;
      case "treasure":
        this.openTreasure(place);
        break;
      case "shop":
        this.openShop(place);
        break;
      default:
        this.finishRound();
        break;
    }
  }

  // 최대 HP의 ratio만큼 회복하고 실제 회복량을 돌려준다.
  recover(ratio) {
    const maxHp = getMaxHp(this.adventurer);
    const before = this.adventurer.hp;
    this.adventurer.hp = Math.min(maxHp, roundValue(before + maxHp * ratio));
    return roundValue(this.adventurer.hp - before);
  }

  rest() {
    const healed = this.recover(RECOVERY.restRatio);
    this.logUI.add(`휴식: HP ${fmt(healed)} 회복`, "heal");
    this.showNotice({
      title: "휴식",
      paragraphs: ["잠시 숨을 고른다. 몸이 한결 가벼워졌다."],
      details: [`HP ${fmt(healed)} 회복 (HP ${fmt(this.adventurer.hp)} / ${fmt(getMaxHp(this.adventurer))})`],
    });
  }

  openTreasure(place, paragraph = `${place.name}에서 무언가를 발견했다.`, title = "보물") {
    const granted = this.grant([rollTreasure({ dice: this.dice })]);
    this.showNotice({
      title,
      paragraphs: [paragraph],
      details: granted.lines,
      next: () => this.resolvePending(granted.pending, () => this.finishRound()),
    });
  }

  // 정비 라운드: 휴식(휴식과 같음) 또는 탐색(보물과 같음).
  // 성장의 바닥 보장(2026-10-14): 장착 스킬이 모자라면 탐색 결과를 스킬 후보 3개 중 선택으로 확정한다.
  showCamp() {
    const skillFloor = this.needsSkillFloor();
    this.show(() => renderCamp(this.sceneRoot, {
      eyebrow: this.roundLabel,
      restPercent: Math.round(RECOVERY.restRatio * 100),
      skillFloor: skillFloor ? SKILL_FLOOR.choices : 0,
      specialOptions: availableCampOptions(this.dungeon, this.run),
      onSpecial: (option) => this.chooseCampOption(option),
      onRest: () => {
        this.logUI.add(`${this.run.round}라운드: 정비 — 휴식`);
        this.rest();
      },
      onExplore: () => {
        this.logUI.add(`${this.run.round}라운드: 정비 — 탐색`);

        if (!skillFloor) {
          this.openTreasure(null, "주변을 살피다 쓸 만한 것을 발견했다.", "주변 탐색");
          return;
        }

        const granted = this.grant([{ kind: "skill", choice: true, count: SKILL_FLOOR.choices }]);
        this.showNotice({
          title: "주변 탐색",
          paragraphs: ["주변을 살피다 낡은 기록 몇 장을 발견했다. 익힐 만한 기술이 적혀 있다."],
          details: granted.lines,
          next: () => this.resolvePending(granted.pending, () => this.finishRound()),
        });
      },
    }));
  }

  // 정비 특별 선택지: 휴식·탐색 대신 고르면 다가오는 보스전에만 효과가 붙는다.
  chooseCampOption(option) {
    this.run.campBoon = { bossId: option.bossId, name: option.text, effects: option.effects, surprise: option.surprise };
    this.logUI.add(`${this.run.round}라운드: 정비 — ${option.text}`, "success");
    this.showNotice({ title: "보스전 준비", paragraphs: [option.resultText], details: ["다가오는 보스전에 효과가 적용된다."] });
  }

  // 이 정비 라운드가 구역의 몇 번째 정비인지 보고, 장착 스킬 수가 기준 이하인지
  needsSkillFloor() {
    const index = this.zone.campRounds.indexOf(this.run.round);
    const max = SKILL_FLOOR.maxSkillsByCamp[index];
    return max !== undefined && this.adventurer.skills.filter(Boolean).length <= max;
  }

  resolveEventChoice(event, choice) {
    const profile = getProfile(this.adventurer);
    const modifier = profile.modifiers.exploreBonus + getSkillBonus(choice, this.adventurer).total;
    const result = resolveChoice(choice, { dice: this.dice, modifier });
    const applied = applyOutcome(result.outcome.result, { adventurer: this.adventurer, run: this.run });
    // 선택 결과를 먼저 기록하고, 획득은 grant()가 그 뒤에 한 번씩 기록한다.
    this.logUI.add(`「${choice.text}」 ${result.rolled ? OUTCOME_LABELS[result.outcomeId] : ""} ${applied.lines.join(", ")}`.trim());

    const paragraphs = [result.outcome.text].filter(Boolean);
    const acquisitions = [...applied.acquisitions];

    if (this.rollEarlySkill(result)) {
      paragraphs.push("숲의 속삭임이 기술 하나를 일러 준다.");
      acquisitions.push({ kind: "skill", random: true });
    }

    const granted = this.grant(acquisitions);
    const details = [...applied.lines, ...granted.lines];

    if (this.adventurer.hp <= 0) {
      this.endRun("defeat");
      return;
    }

    const afterPending = applied.fight
      ? () => this.startCombat(this.dungeon.enemiesById.get(applied.fight.enemyId), applied.fight.surprise)
      : () => this.finishRound();

    this.show(() => renderScene(this.sceneRoot, {
      eyebrow: event.title,
      title: choice.text,
      dice: result.rolled
        ? { roll: result.roll, modifier: result.modifier, total: result.total, label: OUTCOME_LABELS[result.outcomeId] }
        : null,
      paragraphs,
      details,
      buttons: [{
        label: applied.fight ? "전투에 들어간다" : "계속",
        primary: true,
        onClick: () => this.resolvePending(granted.pending, afterPending),
      }],
    }));
  }

  // 1구역 앞부분 사건 보너스: 판정이 있는 선택지에서 실패가 아니고 빈 스킬 슬롯이 있으면 확률로 스킬 추가
  rollEarlySkill(result) {
    return this.run.zone === EARLY_SKILL.zone
      && this.run.round <= EARLY_SKILL.maxRound
      && result.rolled
      && result.outcomeId !== "fail"
      && this.adventurer.skills.includes(null)
      && this.dice.chance(EARLY_SKILL.chance);
  }

  // ---------- 획득 ----------

  // 획득 목록을 실제 아이템으로 정하고, 자리가 있으면 바로 넣는다.
  grant(acquisitions) {
    const lines = [];
    const pending = [];

    for (const acquisition of acquisitions) {
      const resolved = resolveAcquisition(acquisition, { run: this.run, adventurer: this.adventurer, dice: this.dice });

      if (!resolved) {
        continue;
      }

      // 스킬·장비 선택은 결과 화면 뒤에 고르는 화면을 띄운다.
      if (resolved.kind === "skillChoice" || resolved.kind === "equipmentChoice") {
        const label = resolved.kind === "skillChoice" ? "스킬" : "장비";
        lines.push(`${label} 선택: 후보 ${resolved.options.length}개 중 하나를 고른다`);
        pending.push(resolved);
        continue;
      }

      const outcome = tryAutoAcquire(this.adventurer, resolved);

      if (outcome.pending) {
        const reason = resolved.kind === "skill" || catalog.equipment.has(resolved.id) ? "장착할지 고른다" : "가방이 가득 찼다";
        lines.push(`발견: ${resolved.label ?? entryName(resolved.kind, resolved.id)} (${reason})`);
        pending.push(resolved);
      } else {
        lines.push(outcome.line);
        this.logUI.add(outcome.line, "success");
      }
    }

    this.renderStatus();
    return { lines, pending };
  }

  // 자리가 없어 결정이 필요한 획득을 하나씩 처리한다.
  resolvePending(pending, done) {
    const [current, ...rest] = pending;

    if (!current) {
      done();
      return;
    }

    const next = () => this.resolvePending(rest, done);

    if (current.kind === "skillChoice") {
      this.show(() => renderSkillOffer(this.sceneRoot, {
        options: current.options,
        adventurer: this.adventurer,
        onChoose: (skillId) => this.resolvePending([{ kind: "skill", id: skillId }, ...rest], done),
        onSkip: () => {
          this.logUI.add("스킬을 배우지 않았다.");
          next();
        },
      }));
      return;
    }

    if (current.kind === "equipmentChoice") {
      this.show(() => renderEquipmentOffer(this.sceneRoot, {
        options: current.options,
        adventurer: this.adventurer,
        onChoose: (itemId) => {
          markUniqueSeen(this.run, itemId);
          this.resolvePending([{ kind: "item", id: itemId }, ...rest], done);
        },
        onSkip: () => {
          this.logUI.add("장비를 고르지 않았다.");
          next();
        },
      }));
      return;
    }

    const retry = tryAutoAcquire(this.adventurer, current);

    if (!retry.pending) {
      this.logUI.add(retry.line, "success");
      next();
      return;
    }

    if (current.kind === "skill") {
      this.show(() => renderSkillChoice(this.sceneRoot, {
        adventurer: this.adventurer,
        skillId: current.id,
        onReplace: (slot) => {
          this.replaceSkill(slot, current.id);
          next();
        },
        onGiveUp: () => {
          this.logUI.add(`${entryName("skill", current.id)} 포기`);
          next();
        },
      }));
      this.refreshScene = () => this.resolvePending(pending, done);
      return;
    }

    if (catalog.equipment.has(current.id) && !current.toBag) {
      this.show(() => renderEquipChoice(this.sceneRoot, {
        adventurer: this.adventurer,
        itemId: current.id,
        onEquip: () => {
          this.logUI.add(equipNew(this.adventurer, current.id), "success");
          next();
        },
        // 가방에 넣기: 자리가 있으면 넣고, 없으면 가득 참 화면으로
        onStore: () => this.resolvePending([{ ...current, toBag: true }, ...rest], done),
        onGiveUp: () => {
          this.logUI.add(`${entryName("item", current.id)} 포기`);
          next();
        },
      }));
      this.refreshScene = () => this.resolvePending(pending, done);
      return;
    }

    if (current.toBag && addItem(this.adventurer, current.id)) {
      this.logUI.add(`획득: ${entryName("item", current.id)} (가방)`, "success");
      next();
      return;
    }

    this.show(() => renderInventoryFull(this.sceneRoot, {
      adventurer: this.adventurer,
      itemId: current.id,
      onDiscard: (index) => {
        this.logUI.add(discardSlot(this.adventurer, index));
        addItem(this.adventurer, current.id);
        this.logUI.add(`획득: ${entryName("item", current.id)}`, "success");
        next();
      },
      onGiveUp: () => {
        this.logUI.add(`${entryName("item", current.id)} 포기`);
        next();
      },
      onUseNow: () => {
        this.logUI.add(useConsumableOutsideCombat(this.adventurer, current.id, { fromInventory: false }), "heal");
        next();
      },
    }));
    // 소지품 창에서 자리를 비웠다면 다시 확인한다.
    this.refreshScene = () => this.resolvePending(pending, done);
  }

  // 빈 슬롯이면 장착, 아니면 교체
  replaceSkill(slot, skillId) {
    const previous = this.adventurer.skills[slot];
    this.adventurer.skills[slot] = skillId;
    this.logUI.add(
      previous
        ? `스킬 교체: ${entryName("skill", previous)} → ${entryName("skill", skillId)}`
        : `스킬 장착: ${entryName("skill", skillId)} (슬롯 ${slot + 1})`,
      "success",
    );
  }

  // ---------- 상점 ----------

  openShop(place) {
    const stock = createShopStock({ run: this.run, adventurer: this.adventurer, dice: this.dice });
    this.showShop(place, stock, "");
  }

  showShop(place, stock, message) {
    this.show(() => renderShop(this.sceneRoot, {
      place,
      stock,
      adventurer: this.adventurer,
      message,
      onBuy: (index) => this.buy(place, stock, index),
      onSell: (slotIndex) => this.sell(place, stock, slotIndex),
      onLeave: () => this.finishRound(),
    }));
  }

  sell(place, stock, slotIndex) {
    const line = sellFromSlot(this.adventurer, slotIndex);

    if (line) {
      this.logUI.add(line, "success");
    }

    this.showShop(place, stock, line ?? "팔 수 없는 물건이다.");
  }

  buy(place, stock, index) {
    const entry = stock[index];

    if (entry.sold || this.adventurer.gold < entry.price) {
      return;
    }

    const pay = () => {
      this.adventurer.gold -= entry.price;
      entry.sold = !entry.repeatable;
      markUniqueSeen(this.run, entry.id);
    };

    // 스킬: 장착할 슬롯을 고른 뒤 값을 치른다(빈 슬롯이 있어도 묻는다).
    if (entry.kind === "skill") {
      this.show(() => renderSkillChoice(this.sceneRoot, {
        adventurer: this.adventurer,
        skillId: entry.id,
        giveUpLabel: "구매를 취소한다",
        onReplace: (slot) => {
          pay();
          this.replaceSkill(slot, entry.id);
          this.showShop(place, stock, `${josa(entryName("skill", entry.id), "을/를")} 익혔다.`);
        },
        onGiveUp: () => this.showShop(place, stock, "구매를 취소했다."),
      }));
      return;
    }

    // 장비: 장착할지 가방에 넣을지 고른 뒤 값을 치른다.
    if (catalog.equipment.has(entry.id)) {
      this.show(() => renderEquipChoice(this.sceneRoot, {
        adventurer: this.adventurer,
        itemId: entry.id,
        giveUpLabel: "구매를 취소한다",
        onEquip: () => {
          pay();
          this.logUI.add(`구매: ${equipNew(this.adventurer, entry.id)} (-${entry.price} 골드)`, "success");
          this.showShop(place, stock, `${entryName("item", entry.id)} 구매 · 장착`);
        },
        onStore: () => {
          if (!addItem(this.adventurer, entry.id)) {
            this.showShop(place, stock, "인벤토리에 자리가 없다.");
            return;
          }

          pay();
          this.logUI.add(`구매: ${entryName("item", entry.id)} (-${entry.price} 골드)`, "success");
          this.showShop(place, stock, `${entryName("item", entry.id)} 구매 · 가방`);
        },
        onGiveUp: () => this.showShop(place, stock, "구매를 취소했다."),
      }));
      return;
    }

    if (!addItem(this.adventurer, entry.id)) {
      this.showShop(place, stock, "인벤토리에 자리가 없다.");
      return;
    }

    pay();
    this.logUI.add(`구매: ${entryName("item", entry.id)} (-${entry.price} 골드)`, "success");
    this.showShop(place, stock, `${entryName("item", entry.id)} 구매`);
  }

  // ---------- 소지품 ----------

  openInventory() {
    if (this.inCombat || !this.adventurer) {
      return;
    }

    this.inventoryUI.open(this.adventurer);
  }

  manageInventory(action) {
    const message = action();

    if (message) {
      this.logUI.add(message);
    }

    this.renderStatus();
    this.inventoryUI.render(this.adventurer, message ?? "할 수 없다.");
  }

  closeInventory() {
    this.inventoryUI.close();
    this.renderStatus();
    this.refreshScene?.();
  }

  // ---------- 전투 ----------

  // 보스전: 정비 특별 선택지로 얻은 효과가 이 보스에 맞으면 붙인다(기습은 surprise).
  startBossCombat(enemy) {
    const boon = this.run.campBoon?.bossId === enemy.id ? this.run.campBoon : null;
    this.startCombat(enemy, boon?.surprise ? "player" : null, boon);
  }

  startCombat(enemyData, surprise, boon = null) {
    this.inCombat = true;
    this.refreshScene = null;
    const combat = new Combat({
      adventurer: this.adventurer,
      enemyData,
      dungeon: this.dungeon,
      dice: this.dice,
      surprise,
      boon,
    });
    // 출력이 모두 재생된 뒤에 상태 패널을 갱신해 결과가 미리 보이지 않게 한다.
    const ui = new CombatUI(this.sceneRoot, {
      onAction: (action) => ui.play(combat.act(action), combat, () => this.renderStatus()),
      onFinish: (result) => this.finishCombat(combat, result),
    });

    ui.play(combat.begin(), combat, () => this.renderStatus());
  }

  finishCombat(combat, result) {
    this.inCombat = false;
    const enemy = combat.enemy.ref;

    // 정비 특별 선택지 효과는 그 보스전 한 번으로 끝난다.
    if (this.run.campBoon?.bossId === enemy.id) {
      this.run.campBoon = null;
    }

    if (result === "defeat") {
      this.logUI.add(`${enemy.name}에게 쓰러졌다.`, "danger");
      this.endRun("defeat");
      return;
    }

    this.run.enemiesDefeated += 1;
    const gold = this.dice.int(enemy.goldMin, enemy.goldMax);
    this.adventurer.gold += gold;
    this.logUI.add(`${josa(enemy.name, "을/를")} 쓰러뜨렸다. 골드 +${gold}`, "success");
    // 승리 회복: 최대 HP의 10%
    const healed = this.recover(RECOVERY.victoryRatio);
    const healLine = `HP ${fmt(healed)} 회복 (HP ${fmt(this.adventurer.hp)} / ${fmt(getMaxHp(this.adventurer))})`;

    if (healed > 0) {
      this.logUI.add(`승리 회복: HP ${fmt(healed)}`, "heal");
    }

    const isBoss = BOSS_RANKS.includes(enemy.rank);
    const isElite = enemy.rank === "elite";
    // 보스와 엘리트는 일반 전리품 대신 보상을 고른다.
    const granted = isBoss || isElite ? { lines: [], pending: [] } : this.grant(rollCombatLoot({ run: this.run, dice: this.dice, enemy }));
    const endsZone = enemy.rank === "boss" || enemy.rank === "final";
    const isFinalBoss = enemy.rank === "final" || (endsZone && !hasZoneBoss(getZone(this.dungeon, this.run.zone + 1)));
    let afterVictory = () => this.resolvePending(granted.pending, () => this.finishRound());

    if (isBoss) {
      this.run.defeatedBosses.push(enemy.name);
      const proceed = endsZone ? () => this.clearZone() : () => this.finishRound();
      // 최종 보스(또는 다음 구역이 없는 경우)는 보상 없이 끝난다.
      afterVictory = isFinalBoss ? proceed : () => this.chooseBossReward(enemy, proceed);
    } else if (isElite) {
      afterVictory = () => this.chooseBossReward(enemy, () => this.finishRound());
    }

    this.show(() => renderScene(this.sceneRoot, {
      eyebrow: this.zone.name,
      title: "승리",
      paragraphs: [`${josa(enemy.name, "을/를")} 쓰러뜨렸다.`],
      details: [`골드 +${gold}`, ...(healed > 0 ? [healLine] : []), ...granted.lines],
      buttons: [{ label: (isBoss && !isFinalBoss) || isElite ? "보상을 고른다" : "계속", primary: true, onClick: afterVictory }],
    }));
  }

  chooseBossReward(enemy, proceed) {
    const candidates = createBossRewardCandidates({
      rank: enemy.rank,
      run: this.run,
      adventurer: this.adventurer,
      dice: this.dice,
    });

    this.show(() => renderBossReward(this.sceneRoot, {
      enemyName: enemy.name,
      candidates,
      adventurer: this.adventurer,
      onChoose: (candidate) => {
        markUniqueSeen(this.run, candidate.id);
        const granted = this.grant([candidate]);
        this.resolvePending(granted.pending, proceed);
      },
    }));
  }

  // ---------- 진행 ----------

  finishRound() {
    this.run.round += 1;
    this.startRound();
  }

  clearZone() {
    const nextZone = getZone(this.dungeon, this.run.zone + 1);

    if (!nextZone) {
      this.endRun("victory");
      return;
    }

    // 다음 구역 콘텐츠가 아직 없으면 프로토타입 종료
    if (!hasZoneBoss(nextZone)) {
      this.endRun("prototypeEnd");
      return;
    }

    this.logUI.add(`구역 이동: HP ${fmt(this.recover(RECOVERY.zoneTransitionRatio))} 회복`, "heal");
    this.run.zone += 1;
    this.enterZone();
  }

  endRun(result) {
    this.inCombat = false;
    this.saveManager.clear();
    this.logUI.add(result === "defeat" ? "탐험 실패" : "탐험 종료", result === "defeat" ? "danger" : "success");
    this.show(() => renderSummary(this.sceneRoot, {
      result,
      dungeon: this.dungeon,
      zone: this.zone,
      run: this.run,
      adventurer: this.adventurer,
      onRestart: () => this.showClassSelect(),
      onLobby: () => this.showLobby(),
    }));
  }

  showNotice({ title, paragraphs = [], details = [], next = () => this.finishRound() }) {
    this.show(() => renderScene(this.sceneRoot, {
      eyebrow: this.roundLabel,
      title,
      paragraphs,
      details,
      buttons: [{ label: "계속", primary: true, onClick: next }],
    }));
  }

  renderStatus() {
    const zone = this.run ? this.zone : null;
    renderStatus(this.statusRoot, {
      dungeon: this.dungeon,
      zone,
      run: this.run,
      adventurer: this.adventurer,
      onOpenInventory: () => this.openInventory(),
      inventoryLocked: this.inCombat,
    });
    this.onStatusChange({ run: this.run, zone, adventurer: this.adventurer, inventoryLocked: this.inCombat });
  }
}
