import { SKILL_SLOTS, INVENTORY } from "../data/rules.js?v=20261009-201221";
import { Inventory } from "./Inventory.js?v=20261009-201221";

// 모험가 상태. 장비·패시브를 반영한 최종 수치는 TraitSystem이 계산한다.
export class Adventurer {
  constructor({
    classId,
    name,
    baseMaxHp,
    hp,
    baseStats,
    equipment = {},
    skills = [],
    inventory = [],
    gold = 0,
  }) {
    this.classId = classId;
    this.name = name;
    this.baseMaxHp = baseMaxHp;
    this.hp = hp ?? baseMaxHp;
    this.baseStats = { ...baseStats };
    this.equipment = {
      weapon: equipment.weapon ?? null,
      armor: equipment.armor ?? null,
      ring: equipment.ring ?? null,
      necklace: equipment.necklace ?? null,
    };
    this.skills = Array.from({ length: SKILL_SLOTS }, (_, i) => skills[i] ?? null);
    this.inventory = new Inventory(inventory);
    this.gold = gold;
  }

  static fromClass(classData, getMaxStack = () => INVENTORY.defaultMaxStack) {
    const adventurer = new Adventurer({
      classId: classData.id,
      name: classData.name,
      baseMaxHp: classData.maxHp,
      baseStats: classData.stats,
      equipment: {
        weapon: classData.startWeapon,
        armor: classData.startArmor,
      },
      gold: classData.startGold ?? 0,
    });

    for (const item of classData.startItems) {
      adventurer.inventory.add(item.id, item.count, getMaxStack(item.id));
    }

    return adventurer;
  }

  isAlive() {
    return this.hp > 0;
  }

  toJSON() {
    return {
      classId: this.classId,
      name: this.name,
      baseMaxHp: this.baseMaxHp,
      hp: this.hp,
      baseStats: { ...this.baseStats },
      equipment: { ...this.equipment },
      skills: [...this.skills],
      inventory: this.inventory.toJSON(),
      gold: this.gold,
    };
  }
}
