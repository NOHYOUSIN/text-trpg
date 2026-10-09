import { catalog, getItem } from "../data/catalog.js?v=20261009-203002";
import { parseToken } from "./EffectParser.js?v=20261009-203002";
import { josa } from "./Josa.js?v=20261009-203002";
import { formatNumber as fmt, roundValue } from "./NumberRules.js?v=20261009-203002";
import { getMaxHp } from "./TraitSystem.js?v=20261009-203002";

// 사건 결과 표기(hp:-0.5;gold:3;item:...;fight:...)를 적용한다.
// 아이템·스킬 획득은 인벤토리·획득 화면이 처리하도록 acquisitions로 돌려준다.
export function applyOutcome(tokens, { adventurer, run }) {
  const lines = [];
  const acquisitions = [];
  let fight = null;

  for (const token of tokens) {
    const { key, args } = parseToken(token);

    switch (key) {
      case "hp": {
        const amount = Number(args[0]);
        const maxHp = getMaxHp(adventurer);
        const before = adventurer.hp;
        adventurer.hp = Math.max(0, Math.min(maxHp, roundValue(adventurer.hp + amount)));
        const change = roundValue(adventurer.hp - before);
        lines.push(change >= 0 ? `HP ${fmt(change)} 회복 (HP ${fmt(adventurer.hp)})` : `HP ${fmt(-change)} 감소 (HP ${fmt(adventurer.hp)})`);
        break;
      }
      case "gold": {
        const amount = Number(args[0]);
        const before = adventurer.gold;
        adventurer.gold = Math.max(0, adventurer.gold + amount);
        const change = adventurer.gold - before;
        lines.push(change >= 0 ? `골드 +${change}` : `골드 ${change}`);
        break;
      }
      case "item":
        if (args[0].startsWith("-")) {
          const id = args[0].slice(1);
          adventurer.inventory.remove(id, 1);
          lines.push(`${josa(getItem(id)?.name ?? id, "을/를")} 잃었다.`);
        } else if (args[0] === "random") {
          acquisitions.push({ kind: "item", random: args[1] });
        } else {
          acquisitions.push({ kind: "item", id: args[0] });
        }
        break;
      case "skill":
        acquisitions.push(args[0] === "random" ? { kind: "skill", random: true } : { kind: "skill", id: args[0] });
        break;
      case "flag":
        run.setFlag(args[0]);
        break;
      case "fight":
        fight = { enemyId: args[0], surprise: args[1] === "surprise" ? "player" : args[1] === "ambushed" ? "enemy" : null };
        break;
      default:
        break;
    }
  }

  return { lines, acquisitions, fight };
}

export function describeAcquisition(acquisition) {
  if (acquisition.kind === "skill") {
    return acquisition.random ? "무작위 스킬" : catalog.skills.get(acquisition.id)?.name ?? acquisition.id;
  }

  if (acquisition.random) {
    return acquisition.random === "equipment" ? "무작위 장비" : "무작위 소모품";
  }

  return getItem(acquisition.id)?.name ?? acquisition.id;
}
