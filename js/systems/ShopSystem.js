import { catalog } from "../data/catalog.js?v=20261009-232617";
import { SHOP } from "../data/rules.js?v=20261009-232617";
import { pickConsumable, pickEquipment, pickSkill } from "./LootSystem.js?v=20261009-232617";

// 상점 품목 4개: 회복약(여러 개 구매 가능) + 무작위 소모품 1 + 장비 1 + 스킬 1
export function createShopStock({ run, adventurer, dice }) {
  const stock = [];
  const potion = catalog.consumables.get(SHOP.guaranteedItem);

  if (potion) {
    stock.push({ kind: "item", id: potion.id, price: potion.price, repeatable: true, sold: false });
  }

  for (let i = 0; i < SHOP.randomConsumables; i += 1) {
    const item = pickConsumable({ dice, excludeIds: stock.map((entry) => entry.id) });

    if (item) {
      stock.push({ kind: "item", id: item.id, price: item.price, repeatable: false, sold: false });
    }
  }

  for (let i = 0; i < SHOP.equipment; i += 1) {
    const item = pickEquipment({ run, dice });

    if (item) {
      stock.push({ kind: "item", id: item.id, price: item.price, repeatable: false, sold: false });
    }
  }

  for (let i = 0; i < SHOP.skills; i += 1) {
    const skill = pickSkill({ run, adventurer, dice });

    if (skill) {
      stock.push({ kind: "skill", id: skill.id, price: SHOP.skillPrice[skill.grade] ?? 50, repeatable: false, sold: false });
    }
  }

  return stock;
}
