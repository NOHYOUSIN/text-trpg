import { GameManager } from "./core/GameManager.js?v=20261010-012341";
import { isTextEffectEnabled, setTextEffectEnabled } from "./ui/TextEffect.js?v=20261010-012341";

const gameManager = new GameManager({
  sceneRoot: document.querySelector("#scene"),
  statusRoot: document.querySelector("#status"),
  logRoot: document.querySelector("#journey"),
  overlayRoot: document.querySelector("#overlay"),
});
gameManager.start();

// 글자 효과 켜기·끄기
const toggle = document.querySelector("#text-effect-toggle");

function renderToggle() {
  const on = isTextEffectEnabled();
  toggle.textContent = on ? "글자 효과 켜짐" : "글자 효과 꺼짐";
  toggle.setAttribute("aria-pressed", String(on));
}

toggle.addEventListener("click", () => {
  setTextEffectEnabled(!isTextEffectEnabled());
  renderToggle();
});
renderToggle();
