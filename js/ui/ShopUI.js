import { catalog } from "../data/catalog.js?v=20261016-055455";
import { entryName, maxStackOf } from "../systems/InventorySystem.js?v=20261016-055455";
import { sellPriceOf } from "../systems/ShopSystem.js?v=20261016-055455";
import { describeFull, describeStats } from "./ItemText.js?v=20261016-055455";
import { renderScene } from "./SceneUI.js?v=20261016-055455";

// 상점: 위는 사기, 아래는 팔기. 한 줄에 한 품목.
// 사기: 품목마다 1개(회복약만 여러 개). 팔기: 인벤토리 물건을 1개씩 구매 가격의 절반에 판다. (2026-10-13)
export function renderShop(root, { place, stock, adventurer, message, onBuy, onSell, onLeave }) {
  renderScene(root, {
    eyebrow: place.name,
    title: "상점",
    paragraphs: [`보따리 주인이 물건을 늘어놓는다. 소지 골드: ${adventurer.gold}`],
    notes: message ? [message] : [],
    sections: [
      { heading: "사기", layout: "rows", buttons: stock.map((entry, index) => buyRow(entry, adventurer, () => onBuy(index))) },
      {
        heading: "팔기",
        layout: "rows",
        empty: "팔 물건이 없다.",
        buttons: adventurer.inventory.slots.map((slot, index) => sellRow(slot, adventurer, () => onSell(index))),
      },
    ],
    buttons: [{ label: "상점을 떠난다", primary: true, onClick: onLeave }],
  });
}

function buyRow(entry, adventurer, onClick) {
  const equipment = catalog.equipment.get(entry.id);
  const equipsDirectly = equipment && !adventurer.equipment[equipment.slot];
  const noSpace = entry.kind === "item" && !equipsDirectly
    && adventurer.inventory.spaceFor(entry.id, maxStackOf(entry.id)) <= 0;
  let aside = `${entry.price} 골드`;

  if (entry.sold) {
    aside = "판매 완료";
  } else if (adventurer.gold < entry.price) {
    aside += "\n골드 부족";
  } else if (noSpace) {
    aside += "\n가방 가득 참";
  }

  return {
    label: `${entry.kind === "skill" ? "스킬" : "물건"} · ${entryName(entry.kind, entry.id)}`,
    sub: describeFull(entry.kind, entry.id, adventurer),
    aside,
    disabled: entry.sold || adventurer.gold < entry.price || noSpace,
    onClick,
  };
}

function sellRow(slot, adventurer, onClick) {
  const price = sellPriceOf(slot.id);

  return {
    label: `${entryName("item", slot.id)}${slot.count > 1 ? ` ×${slot.count}` : ""}`,
    sub: describeStats("item", slot.id, adventurer),
    aside: price > 0 ? `+${price} 골드` : "팔 수 없음",
    disabled: price <= 0,
    onClick,
  };
}
