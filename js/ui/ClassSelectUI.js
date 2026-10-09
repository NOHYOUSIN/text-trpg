import { catalog, getItem } from "../data/catalog.js";
import { formatNumber as fmt } from "../systems/NumberRules.js";
import { renderScene } from "./SceneUI.js";

const STAT_LABELS = { str: "힘", agi: "민첩", wis: "지혜" };

export function renderClassSelect(root, { dungeon, onSelect }) {
  renderScene(root, {
    eyebrow: dungeon.name,
    title: "모험가를 고른다",
    paragraphs: [dungeon.description, "이번 탐험에 나설 모험가의 직업을 고른다. 스킬 슬롯은 비어 있는 채로 시작한다."],
    details: [
      "갈림길에서 장소를 고르며 12라운드를 나아간다. 6라운드에 중간보스, 12라운드에 구역 보스가 나온다.",
      "스킬과 장비는 사건·보물·상점·보스 보상에서 얻는다. 어떤 직업이든 쓸 수 있다.",
      "능력치(힘·민첩·지혜)는 연결된 무기·스킬의 효과량에 더해진다. 민첩이 높으면 먼저 행동한다.",
      "모든 판정은 1d20이다. 능력치는 주사위에 더해지지 않고, 장비·패시브 효과만 보정을 준다.",
    ],
    buttonLayout: "cards",
    buttons: [...catalog.classes.values()].map((classData) => ({
      label: `${classData.name} — ${STAT_LABELS[classData.mainStat]}`,
      sub: [
        `HP ${fmt(classData.maxHp)} · 힘 ${fmt(classData.stats.str)} · 민첩 ${fmt(classData.stats.agi)} · 지혜 ${fmt(classData.stats.wis)}`,
        `시작 장비: ${[classData.startWeapon, classData.startArmor]
          .filter(Boolean)
          .map((id) => catalog.equipment.get(id).name)
          .join(", ")}`,
        `시작 소지품: ${classData.startItems.map((item) => `${getItem(item.id).name} ×${item.count}`).join(", ") || "없음"} · 골드 ${classData.startGold}`,
        `특성 「${classData.traitName}」 ${classData.traitDesc}`,
      ].join("\n"),
      onClick: () => onSelect(classData.id),
    })),
  });
}
