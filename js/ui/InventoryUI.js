import { catalog, getItem } from "../data/catalog.js?v=20261009-203002";
import { GRADES, INVENTORY } from "../data/rules.js?v=20261009-203002";
import { canUseOutsideCombat } from "../systems/InventorySystem.js?v=20261009-203002";
import { describeStats } from "./ItemText.js?v=20261009-203002";

const SLOT_LABELS = { weapon: "무기", armor: "방어구", ring: "반지", necklace: "목걸이" };

// 소지품 관리 창(전투 밖): 장비 장착·해제, 소모품 사용, 버리기
export class InventoryUI {
  constructor(root, { onEquip, onUnequip, onUse, onDiscard, onClose }) {
    this.root = root;
    this.handlers = { onEquip, onUnequip, onUse, onDiscard, onClose };
  }

  open(adventurer, message = "") {
    this.root.hidden = false;
    this.render(adventurer, message);
  }

  close() {
    this.root.hidden = true;
    this.root.replaceChildren();
  }

  render(adventurer, message = "") {
    const dialog = document.createElement("div");
    dialog.className = "overlay-dialog card";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-label", "소지품");

    const header = document.createElement("header");
    header.className = "overlay-head";
    header.append(text("h2", "", "소지품"));
    header.append(button("닫기", () => this.handlers.onClose()));
    dialog.append(header);

    if (message) {
      dialog.append(text("p", "overlay-message", message));
    }

    dialog.append(text("h3", "status-title", "장착 중"));
    const equipped = document.createElement("ul");
    equipped.className = "overlay-list";

    for (const [slot, id] of Object.entries(adventurer.equipment)) {
      const item = id ? catalog.equipment.get(id) : null;
      const row = listRow(`${SLOT_LABELS[slot]}`, item);

      if (item) {
        row.append(button("해제", () => this.handlers.onUnequip(slot), adventurer.inventory.isFull()));
      }

      equipped.append(row);
    }

    dialog.append(equipped);

    dialog.append(text("h3", "status-title", `인벤토리 ${adventurer.inventory.slots.length} / ${INVENTORY.slots}`));
    const bag = document.createElement("ul");
    bag.className = "overlay-list";

    adventurer.inventory.slots.forEach((slot, index) => {
      const item = getItem(slot.id);
      const row = listRow(slot.count > 1 ? `×${slot.count}` : "", item);

      if (catalog.equipment.has(slot.id)) {
        row.append(button("장착", () => this.handlers.onEquip(index)));
      } else {
        row.append(button("사용", () => this.handlers.onUse(slot.id), !canUseOutsideCombat(slot.id)));
      }

      row.append(button("버리기", () => this.handlers.onDiscard(index)));
      bag.append(row);
    });

    if (!adventurer.inventory.slots.length) {
      bag.append(text("li", "status-line", "비어 있음"));
    }

    dialog.append(bag);
    dialog.append(text("p", "scene-note", "장비 교체는 전투 밖에서만 할 수 있다. 회복 외의 소모품은 전투 중에 쓴다."));
    this.root.replaceChildren(dialog);
  }
}

function listRow(label, item) {
  const row = document.createElement("li");
  row.className = "overlay-row";
  const name = text("span", "overlay-name", item ? `${label ? `${label} ` : ""}${item.name}` : `${label} —`);

  if (item?.grade) {
    name.style.color = GRADES[item.grade].color;
    name.textContent = `${label ? `${label} ` : ""}[${GRADES[item.grade].label}] ${item.name}`;
  }

  row.append(name);

  if (item) {
    const stats = describeStats("item", item.id);
    row.append(text("span", "overlay-desc", [stats, item.description].filter(Boolean).join(" — ")));
  }

  return row;
}

function button(label, onClick, disabled = false) {
  const element = document.createElement("button");
  element.type = "button";
  element.className = "combat-button";
  element.textContent = label;
  element.disabled = disabled;
  element.addEventListener("click", onClick);
  return element;
}

function text(tag, className, content) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = content;
  return element;
}
