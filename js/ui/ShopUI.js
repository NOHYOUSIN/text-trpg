import { catalog } from "../data/catalog.js";
import { entryName, maxStackOf } from "../systems/InventorySystem.js";
import { describeFull } from "./ItemText.js";
import { renderScene } from "./SceneUI.js";

// 상점: 품목마다 1개(회복약만 여러 개). 새로고침·판매 없음.
export function renderShop(root, { place, stock, adventurer, message, onBuy, onLeave }) {
  renderScene(root, {
    eyebrow: place.name,
    title: "상점",
    paragraphs: [`보따리 주인이 물건을 늘어놓는다. 소지 골드: ${adventurer.gold}`],
    notes: message ? [message] : [],
    buttonLayout: "cards",
    buttons: [
      ...stock.map((entry, index) => {
        const equipment = catalog.equipment.get(entry.id);
        const equipsDirectly = equipment && !adventurer.equipment[equipment.slot];
        const noSpace = entry.kind === "item" && !equipsDirectly
          && adventurer.inventory.spaceFor(entry.id, maxStackOf(entry.id)) <= 0;
        let state = `${entry.price} 골드`;

        if (entry.sold) {
          state = "판매 완료";
        } else if (adventurer.gold < entry.price) {
          state += " · 골드 부족";
        } else if (noSpace) {
          state += " · 인벤토리 가득 참";
        }

        return {
          label: `${entry.kind === "skill" ? "스킬" : "물건"} · ${entryName(entry.kind, entry.id)}`,
          sub: `${describeFull(entry.kind, entry.id)}\n${state}`,
          disabled: entry.sold || adventurer.gold < entry.price || noSpace,
          onClick: () => onBuy(index),
        };
      }),
      { label: "상점을 떠난다", primary: true, onClick: onLeave },
    ],
  });
}
