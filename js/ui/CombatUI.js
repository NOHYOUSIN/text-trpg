import { GRADES } from "../data/rules.js";
import { formatNumber as fmt } from "../systems/NumberRules.js";
import { describeStatuses } from "../systems/StatusSystem.js";
import { describeConsumable, describeSkill, STAT_LABELS } from "./ItemText.js";

const SKILL_TYPE_LABELS = {
  attack: "공격",
  heal: "회복",
  defense: "방어",
  buff: "강화",
  debuff: "약화",
  passive: "패시브",
};

// 전투 화면. 상태 표시, 행동 버튼, 전투 로그를 그린다.
export class CombatUI {
  constructor(root, { onAction, onFinish } = {}) {
    this.root = root;
    this.onAction = onAction;
    this.onFinish = onFinish;
    this.root.innerHTML = `
      <div class="combat">
        <div class="combat-sides">
          <section class="combat-side" data-side="enemy"></section>
          <section class="combat-side" data-side="player"></section>
        </div>
        <div class="combat-actions"></div>
        <ol class="combat-log"></ol>
      </div>`;
    this.enemyEl = this.root.querySelector('[data-side="enemy"]');
    this.playerEl = this.root.querySelector('[data-side="player"]');
    this.actionsEl = this.root.querySelector(".combat-actions");
    this.logEl = this.root.querySelector(".combat-log");
  }

  render(combat) {
    this.renderSide(this.enemyEl, {
      title: combat.enemy.name,
      subtitle: rankLabel(combat.enemy.ref.rank),
      hp: combat.enemy.ref.hp,
      maxHp: combat.enemy.ref.maxHp,
      lines: [
        `피해 ${fmt(combat.enemy.ref.damage)} · 민첩 ${fmt(combat.enemy.ref.agi)} · 피해 감소 ${fmt(combat.enemy.ref.damageReduction)}`,
        describeEnemySkills(combat),
      ],
      statuses: describeStatuses(combat.enemy),
    });

    const { stats, maxHp, damageReduction } = combat.player.profile;
    this.renderSide(this.playerEl, {
      title: combat.player.name,
      subtitle: "",
      hp: combat.player.ref.hp,
      maxHp,
      lines: [`힘 ${fmt(stats.str)} · 민첩 ${fmt(stats.agi)} · 지혜 ${fmt(stats.wis)} · 피해 감소 ${fmt(damageReduction)}`],
      statuses: describeStatuses(combat.player),
    });

    this.renderActions(combat);
  }

  renderSide(element, { title, subtitle, hp, maxHp, lines, statuses }) {
    const ratio = Math.max(0, Math.min(1, hp / maxHp));
    element.innerHTML = `
      <header class="combat-side-head">
        <h3>${escapeHtml(title)}</h3>
        <span class="combat-side-sub">${escapeHtml(subtitle)}</span>
      </header>
      <div class="hp-bar" role="img" aria-label="HP ${hp} / ${maxHp}">
        <div class="hp-bar-fill"></div>
        <span class="hp-bar-text">HP ${fmt(hp)} / ${fmt(maxHp)}</span>
      </div>
      ${lines.map((line) => `<p class="combat-side-line">${escapeHtml(line)}</p>`).join("")}
      <p class="combat-statuses">${statuses.length ? statuses.map(escapeHtml).join(" · ") : "상태이상 없음"}</p>`;
    // 콘텐츠 보안 정책(인라인 스타일 금지) 때문에 너비는 스크립트로 지정한다.
    element.querySelector(".hp-bar-fill").style.width = `${ratio * 100}%`;
  }

  renderActions(combat) {
    this.actionsEl.innerHTML = "";

    if (combat.result) {
      const button = createButton(
        combat.result === "victory" ? "승리 — 계속" : "패배 — 계속",
        () => this.onFinish?.(combat.result),
      );
      button.classList.add("is-primary");
      this.actionsEl.append(button);
      return;
    }

    const { skills, items } = combat.getActionOptions();
    const disabled = !combat.awaitingInput;

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

  appendEvents(events) {
    for (const event of events) {
      const item = document.createElement("li");
      item.className = `combat-log-item kind-${event.kind}`;

      if (event.text) {
        const text = document.createElement("p");
        text.textContent = event.text;
        item.append(text);
      }

      if (event.detail) {
        const detail = document.createElement("p");
        detail.className = "combat-log-detail";
        detail.textContent = event.detail;
        item.append(detail);
      }

      this.logEl.append(item);
    }

    this.logEl.scrollTop = this.logEl.scrollHeight;
  }

  clearLog() {
    this.logEl.innerHTML = "";
  }
}

function appendSub(button, text) {
  const sub = document.createElement("span");
  sub.className = "combat-button-sub";
  sub.textContent = text;
  button.append(sub);
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

function rankLabel(rank) {
  return { normal: "일반", midboss: "중간보스", boss: "구역 보스" }[rank] ?? "";
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
