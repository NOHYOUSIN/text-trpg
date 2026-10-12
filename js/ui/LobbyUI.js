import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261013-032945";
import { renderScene } from "./SceneUI.js?v=20261013-032945";

const GAME_TITLE = "Text TRPG";

// 로비: 게임 제목, 새로하기, 이어하기(진행 중인 탐험이 있을 때만), 설정
export function renderLobby(root, { saveSummary, onNew, onContinue, onSettings }) {
  const scene = renderScene(root, {
    eyebrow: "TEXT TRPG ADVENTURE",
    title: GAME_TITLE,
    paragraphs: ["매번 새로운 모험가로 던전에 들어선다. 갈림길을 고르고, 주사위에 운을 맡기고, 탐험 중에 얻은 스킬과 장비로 살아남는다."],
    buttons: [
      { label: "새로하기", sub: "던전을 골라 새 탐험을 시작한다.", primary: true, onClick: onNew },
      {
        label: "이어하기",
        sub: saveSummary ?? "진행 중인 탐험이 없다.",
        disabled: !saveSummary,
        onClick: onContinue,
      },
      { label: "설정", onClick: onSettings },
    ],
  });
  scene.classList.add("lobby");
}

// 저장된 탐험 한 줄 요약
export function describeSave(saved, dungeon, zone) {
  const savedAt = new Date(saved.savedAt).toLocaleString("ko-KR");
  // 버튼 보조 문구는 줄바꿈을 그대로 보여 준다: 1줄 위치, 2줄 모험가 상태
  return [
    `${dungeon?.name ?? "?"} · ${zone?.name ?? "?"} ${saved.run.round} / ${zone?.rounds ?? "?"} 라운드`,
    `${saved.adventurer.name} · HP ${fmt(saved.adventurer.hp)} · 골드 ${saved.adventurer.gold} · ${savedAt}`,
  ].join("\n");
}

// 던전 선택: 데이터에 있는 던전만 위에서 아래로 보여 주고, 맨 아래에 로비로 버튼을 둔다.
export function renderDungeonSelect(root, { dungeons, onPick, onBack }) {
  renderScene(root, {
    eyebrow: "새로하기",
    title: "던전을 고른다",
    buttons: [
      ...dungeons.map((dungeon) => ({
        label: dungeon.name,
        sub: `구역 ${dungeon.zones.length}개`,
        onClick: () => onPick(dungeon),
      })),
      { label: "로비로", onClick: onBack },
    ],
  });
}

// 던전 카드: 대략적인 설명을 보고 출발한다.
export function renderDungeonCard(root, { dungeon, onDepart, onBack }) {
  renderScene(root, {
    eyebrow: "던전",
    title: dungeon.name,
    paragraphs: [dungeon.description],
    details: [
      `구역 ${dungeon.zones.length}개: ${dungeon.zones.map((zone) => zone.name).join(" → ")}`,
      "구역마다 갈림길을 지나며 라운드를 나아가고, 정해진 라운드에 중간보스와 구역 보스가 나온다.",
    ],
    buttons: [
      { label: "이 던전으로 출발", primary: true, onClick: onDepart },
      { label: "던전 목록으로", onClick: onBack },
    ],
  });
}

// 진행 중인 탐험이 있을 때 새로 시작하기 전 확인
export function renderOverwriteConfirm(root, { saveSummary, onConfirm, onCancel }) {
  renderScene(root, {
    eyebrow: "새로하기",
    title: "진행 중인 탐험이 사라진다",
    paragraphs: ["새로 시작하면 지금 진행 중인 탐험 기록은 지워진다."],
    details: [saveSummary],
    buttons: [
      { label: "기록을 지우고 새로 시작", primary: true, onClick: onConfirm },
      { label: "취소", onClick: onCancel },
    ],
  });
}
