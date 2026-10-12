import { catalog, getItem } from "../data/catalog.js?v=20261013-042652";
import { GRADES, INVENTORY } from "../data/rules.js?v=20261013-042652";
import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261013-042652";
import { getProfile } from "../systems/TraitSystem.js?v=20261013-042652";
import { attachTapInfo } from "./InfoPopup.js?v=20261013-042652";
import { describeRequirementShort, describeStats } from "./ItemText.js?v=20261013-042652";

const SLOT_LABELS = { weapon: "무기", armor: "방어구", ring: "반지", necklace: "목걸이" };

// 오른쪽 상태 패널: 진행도, HP, 능력치, 장비, 스킬, 인벤토리
export function renderStatus(root, { dungeon, zone, run, adventurer, onOpenInventory, inventoryLocked = false }) {
  root.replaceChildren();

  if (!adventurer) {
    root.append(section("탐험 준비", [line("직업을 고르면 탐험이 시작된다.")]));
    return;
  }

  const profile = getProfile(adventurer);
  const hpRatio = Math.max(0, Math.min(1, adventurer.hp / profile.maxHp));

  const hpBar = document.createElement("div");
  hpBar.className = "hp-bar";
  // 콘텐츠 보안 정책(인라인 스타일 금지) 때문에 너비는 스크립트로 지정한다.
  const fill = document.createElement("div");
  fill.className = "hp-bar-fill is-player";
  fill.style.width = `${hpRatio * 100}%`;
  hpBar.append(fill);
  hpBar.append(textElement("span", "hp-bar-text", `HP ${fmt(adventurer.hp)} / ${fmt(profile.maxHp)}`));

  root.append(
    section(`${dungeon.name} · ${zone.name}`, [
      line(`라운드 ${run.round} / ${zone.rounds}`),
      line(`중간보스 ${zone.midBosses.map((entry) => entry.round).join("·") || "없음"}라운드 · 구역 보스 ${zone.bossRound}라운드`),
      ...(zone.campRounds?.length ? [line(`정비 ${zone.campRounds.join("·")}라운드`)] : []),
    ]),
    section(adventurer.name, [
      hpBar,
      line(`힘 ${fmt(profile.stats.str)} · 민첩 ${fmt(profile.stats.agi)} · 지혜 ${fmt(profile.stats.wis)}`),
      line(`피해 감소 ${fmt(profile.damageReduction)} · 골드 ${adventurer.gold}`),
    ]),
    section(
      "장비",
      Object.entries(adventurer.equipment).map(([slot, id]) => {
        const item = id ? catalog.equipment.get(id) : null;
        const element = gradeLine(SLOT_LABELS[slot], item, adventurer);

        // 요구 능력치를 채우지 못해 부가 효과가 꺼진 장비
        if (item && profile.modifiers.inactiveEquipment.includes(item.id)) {
          element.append(textElement("span", "status-inactive", ` ${describeRequirementShort(item)}`));
        }

        return element;
      }),
    ),
    section(
      "스킬",
      adventurer.skills.map((id, i) => gradeLine(`${i + 1}`, id ? catalog.skills.get(id) : null, adventurer)),
    ),
    section(
      `인벤토리 ${adventurer.inventory.slots.length} / ${INVENTORY.slots}`,
      adventurer.inventory.slots.length
        ? adventurer.inventory.slots.map((slot) => {
          const item = getItem(slot.id);
          const element = gradeLine("", item, adventurer);
          element.lastChild.textContent += slot.count > 1 ? ` ×${slot.count}` : "";
          return element;
        })
        : [line("비어 있음")],
    ),
  );

  if (onOpenInventory) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "combat-button";
    button.textContent = inventoryLocked ? "소지품 관리 (전투 중 불가)" : "소지품 관리";
    button.disabled = inventoryLocked;
    button.addEventListener("click", onOpenInventory);
    root.append(button);
  }
}

function section(title, children) {
  const element = document.createElement("section");
  element.className = "status-section";
  element.append(textElement("h3", "status-title", title), ...children);
  return element;
}

function line(text) {
  return textElement("p", "status-line", text);
}

function gradeLine(label, entry, adventurer = null) {
  const element = document.createElement("p");
  element.className = "status-line";

  if (label) {
    element.append(textElement("span", "status-label", `${label} `));
  }

  const name = textElement("span", "", entry ? entry.name : "—");

  if (entry?.grade) {
    name.style.color = GRADES[entry.grade].color;
    const kind = catalog.skills.has(entry.id) ? "skill" : "item";
    attachTapInfo(name, `[${GRADES[entry.grade].label}] ${entry.name}`, [describeStats(kind, entry.id, adventurer), entry.description].filter(Boolean).join("\n"));
  }

  element.append(name);
  return element;
}

function textElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}
