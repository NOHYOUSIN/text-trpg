import { INVENTORY } from "../data/rules.js?v=20261010-022808";

// 인벤토리 6칸. 칸: { id, count }
// 장비는 1칸 1개, 장비 외 아이템은 같은 아이템을 maxStack까지 겹친다. 넘치면 새 칸을 쓴다.
export class Inventory {
  constructor(slots = []) {
    this.capacity = INVENTORY.slots;
    this.slots = slots.map((slot) => ({ ...slot }));
  }

  isFull() {
    return this.slots.length >= this.capacity;
  }

  count(id) {
    return this.slots
      .filter((slot) => slot.id === id)
      .reduce((sum, slot) => sum + slot.count, 0);
  }

  // 더 넣을 수 있는 개수
  spaceFor(id, maxStack) {
    const inStacks = this.slots
      .filter((slot) => slot.id === id)
      .reduce((sum, slot) => sum + (maxStack - slot.count), 0);
    const freeSlots = this.capacity - this.slots.length;
    return inStacks + freeSlots * maxStack;
  }

  // 넣고 남은 개수를 돌려준다.
  add(id, count, maxStack) {
    let remaining = count;

    for (const slot of this.slots) {
      if (remaining <= 0) {
        break;
      }

      if (slot.id === id && slot.count < maxStack) {
        const moved = Math.min(maxStack - slot.count, remaining);
        slot.count += moved;
        remaining -= moved;
      }
    }

    while (remaining > 0 && !this.isFull()) {
      const moved = Math.min(maxStack, remaining);
      this.slots.push({ id, count: moved });
      remaining -= moved;
    }

    return remaining;
  }

  // 뒤쪽(덜 찬) 칸부터 뺀다. 실제로 뺀 개수를 돌려준다.
  remove(id, count = 1) {
    let remaining = count;

    for (let i = this.slots.length - 1; i >= 0 && remaining > 0; i -= 1) {
      const slot = this.slots[i];

      if (slot.id !== id) {
        continue;
      }

      const moved = Math.min(slot.count, remaining);
      slot.count -= moved;
      remaining -= moved;

      if (slot.count === 0) {
        this.slots.splice(i, 1);
      }
    }

    return count - remaining;
  }

  removeSlot(index) {
    return this.slots.splice(index, 1)[0] ?? null;
  }

  toJSON() {
    return this.slots.map((slot) => ({ ...slot }));
  }
}
