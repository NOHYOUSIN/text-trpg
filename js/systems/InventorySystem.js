import { catalog, getItem, isEquipment } from "../data/catalog.js";
import { GRADES, INVENTORY } from "../data/rules.js";
import { parseToken } from "./EffectParser.js";
import { formatNumber as fmt, roundValue } from "./NumberRules.js";
import { getMaxHp } from "./TraitSystem.js";

export function maxStackOf(id) {
  return isEquipment(id) ? INVENTORY.equipmentStack : catalog.consumables.get(id)?.maxStack ?? INVENTORY.defaultMaxStack;
}

export function entryName(kind, id) {
  const entry = kind === "skill" ? catalog.skills.get(id) : getItem(id);

  if (!entry) {
    return id;
  }

  return entry.grade ? `[${GRADES[entry.grade].label}] ${entry.name}` : entry.name;
}

// 자리가 있으면 바로 넣는다. 스킬은 빈 슬롯이 있으면 바로 장착한다.
// 결정이 필요하면 { pending: true }를 돌려준다.
export function tryAutoAcquire(adventurer, acquisition) {
  if (acquisition.kind === "skill") {
    const empty = adventurer.skills.indexOf(null);

    if (empty === -1) {
      return { pending: true };
    }

    adventurer.skills[empty] = acquisition.id;
    return { pending: false, line: `스킬 획득: ${entryName("skill", acquisition.id)} (슬롯 ${empty + 1})` };
  }

  // 장비: 해당 슬롯이 비어 있으면 바로 장착, 아니면 장착 여부를 묻는다.
  const equipment = catalog.equipment.get(acquisition.id);

  if (equipment) {
    if (adventurer.equipment[equipment.slot]) {
      return { pending: true };
    }

    adventurer.equipment[equipment.slot] = equipment.id;
    return { pending: false, line: `장착: ${entryName("item", equipment.id)}` };
  }

  const maxStack = maxStackOf(acquisition.id);

  if (adventurer.inventory.spaceFor(acquisition.id, maxStack) <= 0) {
    return { pending: true };
  }

  adventurer.inventory.add(acquisition.id, 1, maxStack);
  return { pending: false, line: `획득: ${entryName("item", acquisition.id)}` };
}

export function addItem(adventurer, id) {
  return adventurer.inventory.add(id, 1, maxStackOf(id)) === 0;
}

// 전투 밖에서 쓸 수 있는 소모품인지
export function canUseOutsideCombat(itemId) {
  const item = catalog.consumables.get(itemId);
  return Boolean(item) && parseToken(item.effect).key === "heal";
}

// 전투 밖 소모품 사용(회복만 의미가 있다)
export function useConsumableOutsideCombat(adventurer, itemId, { fromInventory = true } = {}) {
  const item = catalog.consumables.get(itemId);

  if (!canUseOutsideCombat(itemId)) {
    return null;
  }

  if (fromInventory) {
    adventurer.inventory.remove(itemId, 1);
  }

  const maxHp = getMaxHp(adventurer);
  const before = adventurer.hp;
  adventurer.hp = Math.min(maxHp, roundValue(before + item.amount));
  return `${item.name} 사용: HP ${fmt(roundValue(adventurer.hp - before))} 회복 (HP ${fmt(adventurer.hp)})`;
}

// 인벤토리 칸의 장비를 장착한다. 기존 장비는 그 칸으로 들어간다.
export function equipFromSlot(adventurer, slotIndex) {
  const slot = adventurer.inventory.slots[slotIndex];
  const item = slot ? catalog.equipment.get(slot.id) : null;

  if (!item) {
    return null;
  }

  adventurer.inventory.removeSlot(slotIndex);
  const previous = adventurer.equipment[item.slot];
  adventurer.equipment[item.slot] = item.id;

  if (previous) {
    adventurer.inventory.slots.splice(slotIndex, 0, { id: previous, count: 1 });
  }

  clampHp(adventurer);
  return `${item.name} 장착${previous ? ` (${catalog.equipment.get(previous).name} 보관)` : ""}`;
}

// 새로 얻은 장비를 바로 장착한다. 기존 장비는 가방으로, 가방이 가득 차면 버린다.
export function equipNew(adventurer, itemId) {
  const item = catalog.equipment.get(itemId);
  const previous = adventurer.equipment[item.slot];
  adventurer.equipment[item.slot] = item.id;
  let note = "";

  if (previous) {
    note = addItem(adventurer, previous)
      ? ` (${catalog.equipment.get(previous).name} 가방으로)`
      : ` (${catalog.equipment.get(previous).name} 버림)`;
  }

  clampHp(adventurer);
  return `장착: ${entryName("item", item.id)}${note}`;
}

export function unequip(adventurer, slotName) {
  const id = adventurer.equipment[slotName];

  if (!id || adventurer.inventory.isFull()) {
    return null;
  }

  adventurer.equipment[slotName] = null;
  adventurer.inventory.add(id, 1, 1);
  clampHp(adventurer);
  return `${catalog.equipment.get(id).name} 해제`;
}

export function discardSlot(adventurer, slotIndex) {
  const removed = adventurer.inventory.removeSlot(slotIndex);
  return removed ? `${getItem(removed.id)?.name ?? removed.id}${removed.count > 1 ? ` ×${removed.count}` : ""} 버림` : null;
}

function clampHp(adventurer) {
  const maxHp = getMaxHp(adventurer);

  if (adventurer.hp > maxHp) {
    adventurer.hp = maxHp;
  }
}
