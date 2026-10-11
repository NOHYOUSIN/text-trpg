import { GameManager } from "./core/GameManager.js?v=20261012-003937";
import { MobileUI } from "./ui/MobileUI.js?v=20261012-003937";
import { isTextEffectEnabled, setTextEffectEnabled } from "./ui/TextEffect.js?v=20261012-003937";

const sceneRoot = document.querySelector("#scene");
const toggle = document.querySelector("#text-effect-toggle");

// 모바일 상단 요약 바·하단 버튼
const mobileUI = new MobileUI({
  barRoot: document.querySelector("#mobile-bar"),
  dockRoot: document.querySelector("#mobile-dock"),
  sheet: document.querySelector("#side-panel"),
  sheetTitle: document.querySelector("#mobile-sheet-title"),
  sheetClose: document.querySelector("#mobile-sheet-close"),
  sheetTools: document.querySelector("#mobile-sheet-tools"),
  backdrop: document.querySelector("#mobile-backdrop"),
  sceneRoot,
  toggle,
  onOpenInventory: () => gameManager.openInventory(),
});

const gameManager = new GameManager({
  sceneRoot,
  statusRoot: document.querySelector("#status"),
  logRoot: document.querySelector("#journey"),
  overlayRoot: document.querySelector("#overlay"),
  onStatusChange: (state) => mobileUI.update(state),
});
gameManager.start();

// 글자 효과 켜기·끄기

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
