import { catalog } from "../data/catalog.js";
import { GRADES } from "../data/rules.js";
import { renderScene } from "./SceneUI.js";

const SLOT_LABELS = { weapon: "무기", armor: "방어구", ring: "반지", necklace: "목걸이" };

// 탐험 요약. 저장하지 않는다.
export function renderSummary(root, { result, dungeon, zone, run, adventurer, onRestart }) {
  const titles = {
    victory: "탐험 성공",
    prototypeEnd: "1구역 돌파 — 프로토타입 종료",
    defeat: "탐험 실패",
  };

  const equipment = Object.entries(adventurer.equipment).map(([slot, id]) => {
    const item = id ? catalog.equipment.get(id) : null;
    return `${SLOT_LABELS[slot]}: ${item ? `[${GRADES[item.grade].label}] ${item.name}` : "없음"}`;
  });
  const skills = adventurer.skills.map((id, i) => {
    const skill = id ? catalog.skills.get(id) : null;
    return `스킬 ${i + 1}: ${skill ? `[${GRADES[skill.grade].label}] ${skill.name}` : "비어 있음"}`;
  });

  renderScene(root, {
    eyebrow: dungeon.name,
    title: titles[result],
    paragraphs: [
      result === "defeat"
        ? `${zone.name} ${run.round}라운드에서 쓰러졌다.`
        : `${zone.name}의 끝까지 도달했다.`,
    ],
    details: [
      `직업: ${adventurer.name}`,
      `도달: ${zone.name} ${run.round} / ${zone.rounds} 라운드`,
      `처치한 보스: ${run.defeatedBosses.length ? run.defeatedBosses.join(", ") : "없음"}`,
      `처치한 적: ${run.enemiesDefeated}`,
      `골드: ${adventurer.gold}`,
      ...equipment,
      ...skills,
    ],
    notes: ["이 기록은 저장되지 않는다. 다음 탐험은 새로운 모험가로 시작한다."],
    buttons: [{ label: "새 탐험 시작", primary: true, onClick: onRestart }],
  });
}
