import { catalog, getItem } from "../data/catalog.js?v=20261013-032945";
import { SHOP } from "../data/rules.js?v=20261013-032945";
import { entryName } from "./InventorySystem.js?v=20261013-032945";
import { pickConsumable, pickEquipment, pickSkill } from "./LootSystem.js?v=20261013-032945";

// 판매 가격(0이면 팔 수 없다). 인벤토리의 장비·소모품만 판다(장착 중 장비·스킬은 팔지 않는다).
export function sellPriceOf(id) {
  return Math.floor((getItem(id)?.price ?? 0) * SHOP.sellRatio);
}

// 인벤토리 칸의 물건 1개를 판다. 판매 문구를 돌려주고, 팔 수 없으면 null.
export function sellFromSlot(adventurer, slotIndex) {
  const slot = adventurer.inventory.slots[slotIndex];
  const price = slot ? sellPriceOf(slot.id) : 0;

  if (price <= 0) {
    return null;
  }

  const name = entryName("item", slot.id);
  adventurer.inventory.remove(slot.id, 1);
  adventurer.gold += price;
  return `판매: ${name} (+${price} 골드)`;
}

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
