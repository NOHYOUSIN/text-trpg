import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261016-055455";
import { isScreenFxEnabled } from "./Settings.js?v=20261016-055455";

// 전투 연출: 판정 결과에 따라 정보 칸을 흔들고, 피해·회복 숫자와 상태 이름을 띄운다.
// 화면 연출 설정을 끄면 아무것도 하지 않는다. 흔들림은 CSS에서 동작 줄이기 설정을 따른다.
const HIT_CLASSES = ["fx-miss", "fx-low", "fx-normal", "fx-high", "fx-critical", "fx-heal"];

export function playCombatFx(sideEl, fx) {
  if (!fx || !sideEl || !isScreenFxEnabled()) {
    return;
  }

  if (fx.type === "damage") {
    restartAnimation(sideEl, `fx-${fx.tier === "none" ? "low" : fx.tier}`);
    floatText(sideEl, `-${fmt(fx.amount)}`, `fx-float-damage fx-size-${fx.tier}`);

    if (fx.tier === "critical") {
      floatText(sideEl, "치명타!", "fx-float-critical-label");
      flashScreen();
    }
  } else if (fx.type === "miss") {
    restartAnimation(sideEl, "fx-miss");
    floatText(sideEl, "빗나감", "fx-float-miss");
  } else if (fx.type === "heal" && fx.amount > 0) {
    restartAnimation(sideEl, "fx-heal");
    floatText(sideEl, `+${fmt(fx.amount)}`, "fx-float-heal");
  } else if (fx.type === "status") {
    floatText(sideEl, fx.label, "fx-float-status");
  }
}

// 같은 연출을 연달아 보여 줄 수 있도록 클래스를 지우고 한 프레임 뒤에 다시 붙인다.
function restartAnimation(element, className) {
  element.classList.remove(...HIT_CLASSES);
  window.requestAnimationFrame(() => element.classList.add(className));
}

function floatText(sideEl, text, className) {
  const element = document.createElement("span");
  element.className = `fx-float ${className}`;
  element.textContent = text;
  element.setAttribute("aria-hidden", "true");
  element.addEventListener("animationend", () => element.remove());
  sideEl.append(element);
}

function flashScreen() {
  const flash = document.createElement("div");
  flash.className = "fx-screen-flash";
  flash.setAttribute("aria-hidden", "true");
  flash.addEventListener("animationend", () => flash.remove());
  document.body.append(flash);
}
