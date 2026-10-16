import { renderScene } from "./SceneUI.js?v=20261016-205734";

// 정비 라운드: 갈림길 대신 고정 선택지 두 개 (2026-10-13)
// skillFloor: 성장의 바닥 보장(장착 스킬이 모자랄 때) — 탐색 결과가 스킬 후보 skillFloor개 중 선택으로 확정된다. 0이면 평소대로.
// specialOptions: 플래그로 열리는 특별 선택지(다가오는 보스전에만 효과). 휴식·탐색 대신 고른다. (2026-10-14)
export function renderCamp(root, { eyebrow, restPercent, skillFloor = 0, specialOptions = [], onSpecial, onRest, onExplore }) {
  renderScene(root, {
    eyebrow,
    title: "정비",
    paragraphs: ["걸음을 멈추고 숨을 돌릴 만한 곳을 찾았다. 앞길이 심상치 않다."],
    notes: skillFloor ? [`익힌 기술이 적다. 이번에 주변을 탐색하면 기술 ${skillFloor}가지 중 하나를 고를 수 있다.`] : [],
    buttons: [
      { label: "휴식을 취한다", sub: `최대 HP의 ${restPercent}% 회복`, onClick: onRest },
      {
        label: "주변을 탐색한다",
        sub: skillFloor ? `스킬 후보 ${skillFloor}개 중 하나를 고른다(확정)` : "장비 · 소모품 · 스킬 중 하나를 찾는다",
        onClick: onExplore,
      },
      ...specialOptions.map((option) => ({
        label: option.text,
        sub: "다가오는 보스전에 도움이 된다",
        primary: true,
        onClick: () => onSpecial(option),
      })),
    ],
  });
}
