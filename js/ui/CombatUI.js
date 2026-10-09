import { GRADES } from "../data/rules.js?v=20261009-232617";
import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261009-232617";
import { statusChip } from "./StatusTooltip.js?v=20261009-232617";
import { describeConsumable, describeSkill, STAT_LABELS } from "./ItemText.js?v=20261009-232617";
import { isTextEffectEnabled } from "./TextEffect.js?v=20261009-232617";

const SKILL_TYPE_LABELS = {
  attack: "공격",
  heal: "회복",
  defense: "방어",
  buff: "강화",
  debuff: "약화",
  passive: "패시브",
};

// 출력 줄 종류별로 다음 줄까지 기다리는 시간(ms). 글자 효과를 끄면 절반으로 줄인다.
const DELAYS = {
  turn: 450,
  player: 650,
  enemy: 650,
  damage: 600,
  heal: 550,
  status: 500,
  system: 550,
  result: 700,
};
const CALC_STORAGE_KEY = "trpg-webgame-show-calc";

// 전투 화면. 전투 엔진이 만든 출력 줄을 한 줄씩 재생해 차례가 넘어가는 흐름을 보여 준다.
export class CombatUI {
  constructor(root, { onAction, onFinish } = {}) {
    this.root = root;
    this.onAction = onAction;
    this.onFinish = onFinish;
    this.queue = [];
    this.timerId = null;
    this.playing = false;
    this.onPlayed = null;
    this.combat = null;
    this.openDetails = { enemy: false, player: false };

    this.root.innerHTML = `
      <div class="combat">
        <div class="combat-sides">
          <section class="combat-side" data-side="enemy"></section>
          <section class="combat-side" data-side="player"></section>
        </div>
        <div class="combat-actions"></div>
        <div class="combat-log-head">
          <span class="combat-log-hint">로그를 누르면 출력을 건너뛴다</span>
          <label class="combat-calc-toggle"><input type="checkbox"> 계산 보기</label>
        </div>
        <ol class="combat-log" aria-live="polite"></ol>
      </div>`;
    this.combatEl = this.root.querySelector(".combat");
    this.enemyEl = this.root.querySelector('[data-side="enemy"]');
    this.playerEl = this.root.querySelector('[data-side="player"]');
    this.actionsEl = this.root.querySelector(".combat-actions");
    this.logEl = this.root.querySelector(".combat-log");

    const calcToggle = this.root.querySelector(".combat-calc-toggle input");
    calcToggle.checked = readCalcSetting();
    this.combatEl.classList.toggle("show-calc", calcToggle.checked);
    calcToggle.addEventListener("change", () => {
      this.combatEl.classList.toggle("show-calc", calcToggle.checked);
      writeCalcSetting(calcToggle.checked);
    });

    this.logEl.addEventListener("click", () => this.skip());
  }

  // 출력 줄을 차례로 재생하고, 끝나면 전투 상태 전체를 다시 그린다.
  play(events, combat, onPlayed) {
    this.combat = combat;
    this.queue.push(...events);
    this.onPlayed = onPlayed ?? this.onPlayed;

    if (!this.playing) {
      this.playing = true;

      // 처음에는 정보 칸을 그리되, 결과가 미리 보이지 않도록 첫 줄 시점의 HP로 맞춘다.
      if (!this.enemyEl.hasChildNodes()) {
        this.renderSides(combat);
        const first = events.find((event) => event.hp);

        if (first) {
          this.updateHp(this.enemyEl, first.hp.enemy, combat.enemy.ref.maxHp);
          this.updateHp(this.playerEl, first.hp.player, combat.player.profile.maxHp);
        }
      }

      this.renderActions(combat, { locked: true });
      this.next();
    }
  }

  next() {
    const event = this.queue.shift();

    if (!event) {
      this.finishPlayback();
      return;
    }

    this.showEvent(event);
    const delay = DELAYS[event.kind] ?? 500;
    this.timerId = window.setTimeout(() => this.next(), isTextEffectEnabled() ? delay : delay / 2);
  }

  skip() {
    if (!this.playing) {
      return;
    }

    window.clearTimeout(this.timerId);

    while (this.queue.length) {
      this.showEvent(this.queue.shift());
    }

    this.finishPlayback();
  }

  finishPlayback() {
    this.playing = false;
    this.timerId = null;
    // 입력을 기다리는 동안은 내 차례임을 강조해 둔다.
    this.setActor(this.combat.awaitingInput ? "player" : null);
    this.render(this.combat);
    const done = this.onPlayed;
    this.onPlayed = null;
    done?.();
  }

  showEvent(event) {
    this.appendLog(event);
    this.setActor(event.actor);

    if (event.hp) {
      this.updateHp(this.enemyEl, event.hp.enemy, this.combat.enemy.ref.maxHp);
      this.updateHp(this.playerEl, event.hp.player, this.combat.player.profile.maxHp);
    }
  }

  setActor(actor) {
    this.enemyEl.classList.toggle("is-acting", actor === "enemy");
    this.playerEl.classList.toggle("is-acting", actor === "player");
  }

  updateHp(sideEl, hp, maxHp) {
    const fill = sideEl.querySelector(".hp-bar-fill");
    const text = sideEl.querySelector(".hp-bar-text");

    if (!fill) {
      return;
    }

    const previous = Number(fill.dataset.hp ?? hp);
    fill.dataset.hp = hp;
    fill.style.width = `${Math.max(0, Math.min(1, hp / maxHp)) * 100}%`;
    text.textContent = `HP ${fmt(hp)} / ${fmt(maxHp)}`;

    if (hp < previous) {
      sideEl.classList.remove("is-hit");
      // 애니메이션을 다시 시작하기 위해 한 프레임 뒤에 붙인다.
      window.requestAnimationFrame(() => sideEl.classList.add("is-hit"));
    }
  }

  render(combat) {
    this.combat = combat;
    this.renderSides(combat);
    this.renderActions(combat, { locked: this.playing });
  }

  renderSides(combat) {
    this.renderSide(this.enemyEl, "enemy", {
      title: combat.enemy.name,
      subtitle: rankLabel(combat.enemy.ref.rank),
      hp: combat.enemy.ref.hp,
      maxHp: combat.enemy.ref.maxHp,
      summary: describeReadySkill(combat),
      details: [
        `기본 피해 ${fmt(combat.enemy.ref.damage)} · 민첩 ${fmt(combat.enemy.ref.agi)} · 피해 감소 ${fmt(combat.enemy.ref.damageReduction)}`,
        describeEnemySkills(combat),
      ],
      statuses: combat.enemy.statuses,
    });

    const { stats, maxHp, damageReduction } = combat.player.profile;
    this.renderSide(this.playerEl, "player", {
      title: combat.player.name,
      subtitle: "",
      hp: combat.player.ref.hp,
      maxHp,
      summary: "",
      details: [`힘 ${fmt(stats.str)} · 민첩 ${fmt(stats.agi)} · 지혜 ${fmt(stats.wis)} · 피해 감소 ${fmt(damageReduction)}`],
      statuses: combat.player.statuses,
    });
  }

  renderSide(element, key, { title, subtitle, hp, maxHp, summary, details, statuses }) {
    element.replaceChildren();

    const head = document.createElement("header");
    head.className = "combat-side-head";
    head.append(textNode("h3", "", title), textNode("span", "combat-side-sub", subtitle));

    const bar = document.createElement("div");
    bar.className = "hp-bar";
    const fill = document.createElement("div");
    fill.className = "hp-bar-fill";
    fill.dataset.hp = hp;
    // 콘텐츠 보안 정책(인라인 스타일 금지) 때문에 너비는 스크립트로 지정한다.
    fill.style.width = `${Math.max(0, Math.min(1, hp / maxHp)) * 100}%`;
    bar.append(fill, textNode("span", "hp-bar-text", `HP ${fmt(hp)} / ${fmt(maxHp)}`));

    element.append(head, bar);
    element.append(renderStatuses(statuses));

    if (summary) {
      element.append(textNode("p", "combat-side-summary", summary));
    }

    const more = document.createElement("details");
    more.className = "combat-side-more";
    more.open = this.openDetails[key];
    more.addEventListener("toggle", () => {
      this.openDetails[key] = more.open;
    });
    more.append(textNode("summary", "", "자세히"));
    details.forEach((line) => more.append(textNode("p", "combat-side-line", line)));
    element.append(more);
  }

  renderActions(combat, { locked = false } = {}) {
    this.actionsEl.replaceChildren();

    if (combat.result && !locked) {
      const button = createButton(
        combat.result === "victory" ? "승리 — 계속" : "패배 — 계속",
        () => this.onFinish?.(combat.result),
      );
      button.classList.add("is-primary");
      this.actionsEl.append(button);
      return;
    }

    const { skills, items } = combat.getActionOptions();
    const disabled = locked || !combat.awaitingInput;

    this.actionsEl.append(createButton("기본공격", () => this.onAction?.({ type: "attack" }), disabled));

    for (const option of skills) {
      if (!option.skill) {
        this.actionsEl.append(createButton("빈 슬롯", null, true));
        continue;
      }

      const { skill } = option;
      const suffix = skill.type === "passive" ? " (패시브)" : option.remaining > 0 ? ` (대기 ${option.remaining})` : "";
      const button = createButton(
        `${skill.name}${suffix}`,
        () => this.onAction?.({ type: "skill", slot: option.slot }),
        disabled || !option.usable,
      );
      button.style.borderColor = GRADES[skill.grade]?.color ?? "";
      button.title = [`[${GRADES[skill.grade]?.label}] ${describeSkill(skill)}`, skill.description].join("\n");
      appendSub(button, `${SKILL_TYPE_LABELS[skill.type]} · ${STAT_LABELS[skill.stat]}${skill.type === "passive" ? "" : ` · 대기 ${skill.cooldown}`}`);
      this.actionsEl.append(button);
    }

    for (const { item, count } of items) {
      const button = createButton(
        `${item.name} ×${count}`,
        () => this.onAction?.({ type: "item", itemId: item.id }),
        disabled,
      );
      button.title = describeConsumable(item);
      appendSub(button, describeConsumable(item).replace("소모품 · ", "").split(" · 한 칸")[0]);
      button.classList.add("is-item");
      this.actionsEl.append(button);
    }
  }

  appendLog(event) {
    const item = document.createElement("li");
    item.className = `combat-log-item kind-${event.kind}`;

    if (event.text) {
      item.append(textNode("p", "", event.text));
    }

    if (event.detail) {
      item.append(textNode("p", "combat-log-detail", event.detail));
    }

    this.logEl.append(item);
    this.logEl.scrollTop = this.logEl.scrollHeight;
  }

  // 새 전투를 같은 화면에서 시작할 때: 재생 중이던 출력과 정보 칸을 비운다.
  clearLog() {
    window.clearTimeout(this.timerId);
    this.queue = [];
    this.playing = false;
    this.onPlayed = null;
    this.logEl.replaceChildren();
    this.enemyEl.replaceChildren();
    this.playerEl.replaceChildren();
  }
}

// 상태이상 목록: 마우스를 올리거나(누르면) 작은 설명이 뜬다.
function renderStatuses(statuses) {
  const line = document.createElement("p");
  line.className = "combat-statuses";

  if (!statuses.length) {
    line.textContent = "상태이상 없음";
    return line;
  }

  statuses.forEach((status, index) => {
    const { text, tip } = statusChip(status);
    const chip = textNode("span", "status-chip", text);
    chip.dataset.tip = tip;
    chip.tabIndex = 0;
    chip.setAttribute("aria-label", `${text}. ${tip}`);

    if (index > 0) {
      line.append(" · ");
    }

    line.append(chip);
  });

  return line;
}

function readCalcSetting() {
  try {
    return localStorage.getItem(CALC_STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}

function writeCalcSetting(value) {
  try {
    localStorage.setItem(CALC_STORAGE_KEY, value ? "on" : "off");
  } catch {
    // 저장소를 쓸 수 없으면 이번 화면에서만 적용한다.
  }
}

function appendSub(button, text) {
  button.append(textNode("span", "combat-button-sub", text));
}

// 적이 바로 쓸 수 있는 스킬(다음 행동 예고)
function describeReadySkill(combat) {
  const ready = combat.enemy.ref.skills
    .filter((id) => (combat.enemy.cooldowns.get(id) ?? 0) === 0)
    .map((id) => combat.dungeon.enemySkillsById.get(id).name);

  if (!combat.enemy.ref.skills.length) {
    return "";
  }

  return ready.length ? `준비된 스킬: ${ready.join(", ")}` : "준비된 스킬 없음";
}

// 적의 보유 스킬과 남은 대기시간
function describeEnemySkills(combat) {
  const ids = combat.enemy.ref.skills;

  if (!ids.length) {
    return "스킬 없음";
  }

  const parts = ids.map((id) => {
    const skill = combat.dungeon.enemySkillsById.get(id);
    const remaining = combat.enemy.cooldowns.get(id) ?? 0;
    return `${skill.name} (${remaining > 0 ? `대기 ${remaining}` : "준비"})`;
  });
  return `스킬: ${parts.join(" · ")}`;
}

function createButton(label, onClick, disabled = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "combat-button";
  button.textContent = label;
  button.disabled = disabled;

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
}

function textNode(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  element.textContent = text;
  return element;
}

function rankLabel(rank) {
  return { normal: "일반", midboss: "중간보스", boss: "구역 보스" }[rank] ?? "";
}
