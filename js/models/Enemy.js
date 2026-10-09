// 전투 중인 적의 상태. 적은 능력치 덧셈과 장비가 없다.
export class Enemy {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.rank = data.rank;
    this.maxHp = data.hp;
    this.hp = data.hp;
    this.damage = data.damage;
    this.agi = data.agi;
    this.damageReduction = data.damageReduction;
    this.skills = [...data.skills];
    this.pattern = data.pattern;
    this.goldMin = data.goldMin;
    this.goldMax = data.goldMax;
    this.description = data.description;
  }

  isAlive() {
    return this.hp > 0;
  }
}
