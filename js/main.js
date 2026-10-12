import { GameManager } from "./core/GameManager.js?v=20261013-030554";
import { MobileUI } from "./ui/MobileUI.js?v=20261013-030554";

const sceneRoot = document.querySelector("#scene");
const settingsButton = document.querySelector("#settings-button");

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
  toggle: settingsButton,
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

// 상단 설정 버튼: 탐험 중에도 설정 창을 연다.
settingsButton.addEventListener("click", () => gameManager.showSettings());
