import { renderScene } from "./SceneUI.js?v=20261013-030554";

// 정비 라운드: 갈림길 대신 고정 선택지 두 개 (2026-10-13)
export function renderCamp(root, { eyebrow, restPercent, onRest, onExplore }) {
  renderScene(root, {
    eyebrow,
    title: "정비",
    paragraphs: ["걸음을 멈추고 숨을 돌릴 만한 곳을 찾았다. 앞길이 심상치 않다."],
    buttons: [
      { label: "휴식을 취한다", sub: `최대 HP의 ${restPercent}% 회복`, onClick: onRest },
      { label: "주변을 탐색한다", sub: "보물과 같은 보상(장비 · 소모품 · 스킬 중 하나)", onClick: onExplore },
    ],
  });
}
