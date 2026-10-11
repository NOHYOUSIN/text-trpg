import { renderScene } from "./SceneUI.js?v=20261012-030821";
import { isTextEffectEnabled } from "./TextEffect.js?v=20261012-030821";

// 중간보스 이상 등장 화면: 등급 색 이름, 등장 메시지, 화면이 잠깐 어두워졌다 밝아지는 연출
export function renderBossIntro(root, { eyebrow, enemy, text, onFight }) {
  const scene = renderScene(root, {
    eyebrow,
    title: enemy.name,
    paragraphs: [text],
    notes: ["전투 전에 소지품을 정리할 수 있다."],
    buttons: [{ label: "맞선다", primary: true, onClick: onFight }],
  });

  scene.classList.add("boss-intro");
  scene.querySelector(".scene-title")?.classList.add(...rankNameClasses(enemy.rank));

  if (isTextEffectEnabled()) {
    const dim = document.createElement("div");
    dim.className = "boss-intro-dim";
    dim.setAttribute("aria-hidden", "true");
    dim.addEventListener("animationend", () => dim.remove());
    document.body.append(dim);
  }
}

// 적 이름 색: 정예 연한 회색, 엘리트 노란색, 중간보스 주황색, 구역 보스 빨간색, 최종 보스 검붉은색(굵게)
export function rankNameClasses(rank) {
  return rank && rank !== "normal" ? ["rank-name", `rank-${rank}`] : ["rank-name"];
}
