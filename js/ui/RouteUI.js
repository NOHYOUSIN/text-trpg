import { renderScene } from "./SceneUI.js?v=20261009-203002";

// 갈림길: 장소 이름과 묘사만 보여 준다(내용 종류·위험도는 숨긴다).
export function renderRoute(root, { zone, round, candidates, onChoose }) {
  renderScene(root, {
    eyebrow: `${zone.name} · ${round} / ${zone.rounds} 라운드`,
    title: "갈림길",
    paragraphs: ["눈앞에 길이 갈라진다. 어디로 향할까."],
    buttonLayout: "cards",
    buttons: candidates.map((place) => ({
      label: place.name,
      sub: place.description,
      onClick: () => onChoose(place),
    })),
  });
}
