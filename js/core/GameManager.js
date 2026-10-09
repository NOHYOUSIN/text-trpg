import { catalog } from "../data/catalog.js";
import { EARLY_SKILL, RECOVERY, ROUTE } from "../data/rules.js";
import { Adventurer } from "../models/Adventurer.js";
import { RunState } from "../models/RunState.js";
import { SaveManager } from "../save/SaveManager.js";
import { Combat } from "../systems/CombatSystem.js";
import { DiceSystem } from "../systems/DiceSystem.js";
import { OUTCOME_LABELS, resolveChoice } from "../systems/EventSystem.js";
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
} from "../systems/InventorySystem.js";
import { josa } from "../systems/Josa.js";
import {
  createBossRewardCandidates,
  markUniqueSeen,
  resolveAcquisition,
  rollCombatLoot,
  rollTreasure,
} from "../systems/LootSystem.js";
import { formatNumber as fmt, roundValue } from "../systems/NumberRules.js";
import { applyOutcome } from "../systems/OutcomeSystem.js";
import {
  CONTENT_LABELS,
  createRouteCandidates,
  getBossForRound,
  getZone,
  pickEnemy,
  pickEvent,
  rollPlaceContent,
} from "../systems/RouteSystem.js";
import { createShopStock } from "../systems/ShopSystem.js";
import { getMaxHp, getProfile } from "../systems/TraitSystem.js";
import { renderBossReward, renderEquipChoice, renderInventoryFull, renderSkillChoice } from "../ui/AcquireUI.js";
import { renderClassSelect } from "../ui/ClassSelectUI.js";
import { CombatUI } from "../ui/CombatUI.js";
import { renderEvent } from "../ui/EventUI.js";
import { InventoryUI } from "../ui/InventoryUI.js";
import { LogUI } from "../ui/LogUI.js";
import { renderRoute } from "../ui/RouteUI.js";
import { renderScene } from "../ui/SceneUI.js";
import { renderShop } from "../ui/ShopUI.js";
import { renderStatus } from "../ui/StatusUI.js";
import { renderSummary } from "../ui/SummaryUI.js";

const DUNGEON_ID = "forest";

// 탐험 전체 흐름: 직업 선택 → 라운드(갈림길 → 장소 내용) → 보스 → 요약
export class GameManager {
  constructor({ sceneRoot, statusRoot, logRoot, overlayRoot }) {
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
    this.saveManager = new SaveManager();
    this.dice = new DiceSystem();
    this.dungeon = catalog.dungeons.get(DUNGEON_ID);
    this.adventurer = null;
    this.run = null;
    this.inCombat = false;
    // 소지품 창을 닫은 뒤 현재 장면을 다시 그린다(조건·인벤토리 변화 반영).
    this.refreshScene = null;
  }

  start() {
    const saved = this.saveManager.load();

    if (saved) {
      this.showResume(saved);
    } else {
      this.showClassSelect();
    }
  }

  // ---------- 장면 표시 ----------

  show(render) {
    this.refreshScene = render;
    this.renderStatus();
    render();
  }

  // ---------- 탐험 시작·구역 ----------

  // ---------- 저장·이어하기 ----------

  showResume(saved) {
    const zone = getZone(this.dungeon, saved.run.zone);
    const savedAt = new Date(saved.savedAt).toLocaleString("ko-KR");

    this.show(() => renderScene(this.sceneRoot, {
      eyebrow: this.dungeon.name,
      title: "진행 중인 탐험",
      paragraphs: ["이어서 진행할 탐험이 있다."],
      details: [
        `직업: ${saved.adventurer.name}`,
        `위치: ${zone?.name ?? "?"} ${saved.run.round} / ${zone?.rounds ?? "?"} 라운드 시작`,
        `HP: ${fmt(saved.adventurer.hp)} · 골드: ${saved.adventurer.gold}`,
        `저장: ${savedAt}`,
      ],
      buttons: [
        { label: "이어하기", primary: true, onClick: () => this.resume(saved) },
        {
          label: "기록을 버리고 새 탐험 시작",
          sub: "진행 중인 탐험은 사라진다.",
          onClick: () => {
            this.saveManager.clear();
            this.showClassSelect();
          },
        },
      ],
    }));
  }

  resume(saved) {
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
    const boss = getBossForRound(this.zone, this.run.round);

    if (boss) {
      const enemy = this.dungeon.enemiesById.get(boss.enemyId);
      this.logUI.add(`${this.run.round}라운드: ${enemy.name} 등장`, "boss");
      this.show(() => renderScene(this.sceneRoot, {
        eyebrow: this.roundLabel,
        title: boss.rank === "boss" ? "구역 보스" : "중간보스",
        paragraphs: [enemy.description],
        notes: ["전투 전에 소지품을 정리할 수 있다."],
        buttons: [{ label: "맞선다", primary: true, onClick: () => this.startCombat(enemy, null) }],
      }));
      return;
    }

    const candidates = createRouteCandidates(this.dungeon, this.run, this.dice);
    this.show(() => renderRoute(this.sceneRoot, {
      zone: this.zone,
      round: this.run.round,
      candidates,
      onChoose: (place) => this.enterPlace(place),
    }));
  }

  enterPlace(place) {
    this.run.rememberPlace(place.id, ROUTE.recentPlaceExclusion);
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
        const enemy = pickEnemy(this.dungeon, place, this.run, this.dice);
        const surprise = this.dice.chance(place.surpriseChance) ? "enemy" : null;
        this.startCombat(enemy, surprise);
        break;
      }
      case "event":
        this.run.seenEvents.add(event.id);
        this.show(() => renderEvent(this.sceneRoot, {
          place,
          event,
          adventurer: this.adventurer,
          onChoose: (choice) => this.resolveEventChoice(event, choice),
        }));
        break;
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

  rest() {
    const maxHp = getMaxHp(this.adventurer);
    const before = this.adventurer.hp;
    this.adventurer.hp = Math.min(maxHp, roundValue(before + maxHp * RECOVERY.restRatio));
    const healed = roundValue(this.adventurer.hp - before);
    this.logUI.add(`휴식: HP ${fmt(healed)} 회복`, "heal");
    this.showNotice({
      title: "휴식",
      paragraphs: ["잠시 숨을 고른다. 몸이 한결 가벼워졌다."],
      details: [`HP ${fmt(healed)} 회복 (HP ${fmt(this.adventurer.hp)} / ${fmt(maxHp)})`],
    });
  }

  openTreasure(place) {
    const granted = this.grant([rollTreasure({ dice: this.dice })]);
    this.showNotice({
      title: "보물",
      paragraphs: [`${place.name}에서 무언가를 발견했다.`],
      details: granted.lines,
      next: () => this.resolvePending(granted.pending, () => this.finishRound()),
    });
  }

  resolveEventChoice(event, choice) {
    const profile = getProfile(this.adventurer);
    const result = resolveChoice(choice, { dice: this.dice, modifier: profile.modifiers.exploreBonus });
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

      const outcome = tryAutoAcquire(this.adventurer, resolved);

      if (outcome.pending) {
        const reason = resolved.kind === "skill"
          ? "스킬 슬롯 가득 참"
          : catalog.equipment.has(resolved.id) ? "장착 여부 선택" : "인벤토리 가득 참";
        lines.push(`획득 대기: ${entryName(resolved.kind, resolved.id)} (${reason})`);
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

  replaceSkill(slot, skillId) {
    const previous = this.adventurer.skills[slot];
    this.adventurer.skills[slot] = skillId;
    this.logUI.add(`스킬 교체: ${entryName("skill", previous)} → ${entryName("skill", skillId)}`, "success");
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
      onLeave: () => this.finishRound(),
    }));
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

    if (entry.kind === "skill") {
      const outcome = tryAutoAcquire(this.adventurer, { kind: "skill", id: entry.id });

      if (!outcome.pending) {
        pay();
        this.logUI.add(`구매: ${outcome.line}`, "success");
        this.showShop(place, stock, `${josa(entryName("skill", entry.id), "을/를")} 익혔다.`);
        return;
      }

      // 슬롯이 가득 차면 교체할 슬롯을 고른 뒤 값을 치른다.
      this.show(() => renderSkillChoice(this.sceneRoot, {
        adventurer: this.adventurer,
        skillId: entry.id,
        giveUpLabel: "구매를 취소한다",
        onReplace: (slot) => {
          pay();
          this.replaceSkill(slot, entry.id);
          this.showShop(place, stock, "스킬을 교체했다.");
        },
        onGiveUp: () => this.showShop(place, stock, "구매를 취소했다."),
      }));
      return;
    }

    // 장비 슬롯이 비어 있으면 바로 장착, 아니면 가방으로
    const equipment = catalog.equipment.get(entry.id);
    const equipNow = equipment && !this.adventurer.equipment[equipment.slot];

    if (equipNow) {
      this.adventurer.equipment[equipment.slot] = equipment.id;
    } else if (!addItem(this.adventurer, entry.id)) {
      this.showShop(place, stock, "인벤토리에 자리가 없다.");
      return;
    }

    pay();
    this.logUI.add(`구매: ${entryName("item", entry.id)} (-${entry.price} 골드)${equipNow ? " 장착" : ""}`, "success");
    this.showShop(place, stock, `${entryName("item", entry.id)} 구매${equipNow ? " · 바로 장착" : ""}`);
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

  startCombat(enemyData, surprise) {
    this.inCombat = true;
    this.refreshScene = null;
    const combat = new Combat({
      adventurer: this.adventurer,
      enemyData,
      dungeon: this.dungeon,
      dice: this.dice,
      surprise,
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

    if (result === "defeat") {
      this.logUI.add(`${enemy.name}에게 쓰러졌다.`, "danger");
      this.endRun("defeat");
      return;
    }

    this.run.enemiesDefeated += 1;
    const gold = this.dice.int(enemy.goldMin, enemy.goldMax);
    this.adventurer.gold += gold;
    this.logUI.add(`${josa(enemy.name, "을/를")} 쓰러뜨렸다. 골드 +${gold}`, "success");

    const isBoss = enemy.rank !== "normal";
    const granted = isBoss ? { lines: [], pending: [] } : this.grant(rollCombatLoot({ run: this.run, dice: this.dice }));
    const isFinalBoss = enemy.rank === "boss" && !getZone(this.dungeon, this.run.zone + 1)?.bossId;
    let afterVictory = () => this.resolvePending(granted.pending, () => this.finishRound());

    if (isBoss) {
      this.run.defeatedBosses.push(enemy.name);
      const proceed = enemy.rank === "boss" ? () => this.clearZone() : () => this.finishRound();
      // 최종 보스(또는 다음 구역이 없는 경우)는 보상 없이 끝난다.
      afterVictory = isFinalBoss ? proceed : () => this.chooseBossReward(enemy, proceed);
    }

    this.show(() => renderScene(this.sceneRoot, {
      eyebrow: this.zone.name,
      title: "승리",
      paragraphs: [`${josa(enemy.name, "을/를")} 쓰러뜨렸다.`],
      details: [`골드 +${gold}`, ...granted.lines],
      buttons: [{ label: isBoss && !isFinalBoss ? "보상을 고른다" : "계속", primary: true, onClick: afterVictory }],
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
    if (!nextZone.bossId) {
      this.endRun("prototypeEnd");
      return;
    }

    const maxHp = getMaxHp(this.adventurer);
    const before = this.adventurer.hp;
    this.adventurer.hp = Math.min(maxHp, roundValue(before + maxHp * RECOVERY.zoneTransitionRatio));
    this.logUI.add(`구역 이동: HP ${fmt(roundValue(this.adventurer.hp - before))} 회복`, "heal");
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
    renderStatus(this.statusRoot, {
      dungeon: this.dungeon,
      zone: this.run ? this.zone : null,
      run: this.run,
      adventurer: this.adventurer,
      onOpenInventory: () => this.openInventory(),
      inventoryLocked: this.inCombat,
    });
  }
}
