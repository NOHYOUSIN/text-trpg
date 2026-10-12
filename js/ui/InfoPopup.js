// 설명 창: PC의 마우스 툴팁(title)을 볼 수 없는 모바일을 위해 누르기·길게 누르기로 같은 설명을 띄운다. (2026-10-13)
// PC에서는 title 툴팁도 그대로 보인다.

const LONG_PRESS_MS = 500;
const MOVE_TOLERANCE = 10;
const HINT_KEY = "trpg-webgame-long-press-hint";

let popup = null;

// 설명 창을 띄운다. 아무 곳이나 누르면 닫힌다.
export function showInfo(title, text) {
  closeInfo();
  popup = document.createElement("div");
  popup.className = "info-popup";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-label", title);

  const dialog = document.createElement("div");
  dialog.className = "info-popup-dialog card";
  dialog.append(textElement("h3", "info-popup-title", title));
  dialog.append(textElement("p", "info-popup-text", text));
  dialog.append(textElement("p", "info-popup-close", "눌러서 닫기"));
  popup.append(dialog);
  popup.addEventListener("click", closeInfo);
  document.body.append(popup);
}

export function closeInfo() {
  popup?.remove();
  popup = null;
}

// 눌러서 설명을 보는 요소(상태 패널의 장비·스킬 이름 등)
export function attachTapInfo(element, title, text) {
  element.title = `${title}\n${text}`;
  element.classList.add("has-info");
  element.addEventListener("click", () => showInfo(title, text));
}

// 길게 눌러서 설명을 보는 버튼(전투의 스킬·소모품). 길게 누르면 버튼의 원래 동작은 하지 않는다.
export function attachLongPressInfo(button, title, text) {
  button.title = `${title}\n${text}`;
  button.classList.add("has-long-press");
  let timer = null;
  let start = null;
  let fired = false;

  const cancel = () => {
    window.clearTimeout(timer);
    timer = null;
  };

  button.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") {
      return;
    }

    fired = false;
    start = { x: event.clientX, y: event.clientY };
    cancel();
    timer = window.setTimeout(() => {
      fired = true;
      showInfo(title, text);
    }, LONG_PRESS_MS);
  });

  button.addEventListener("pointermove", (event) => {
    if (timer && start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > MOVE_TOLERANCE) {
      cancel();
    }
  });

  ["pointerup", "pointercancel", "pointerleave"].forEach((type) => button.addEventListener(type, cancel));
  // 길게 누른 뒤 손을 떼면 생기는 click은 버튼 동작보다 먼저 막는다.
  button.addEventListener("click", (event) => {
    if (fired) {
      fired = false;
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, { capture: true });
  button.addEventListener("contextmenu", (event) => event.preventDefault());
}

// 터치 기기에서 처음 전투에 들어가면 한 번만 길게 누르기를 알려 준다.
export function showLongPressHintOnce() {
  if (!window.matchMedia?.("(hover: none)").matches) {
    return;
  }

  try {
    if (localStorage.getItem(HINT_KEY)) {
      return;
    }

    localStorage.setItem(HINT_KEY, "shown");
  } catch {
    // 저장소를 쓸 수 없으면 매 전투 알려 주지 않도록 이번 화면에서만 한 번
    if (showLongPressHintOnce.shown) {
      return;
    }

    showLongPressHintOnce.shown = true;
  }

  showInfo("도움말", "스킬·소모품 버튼을 길게 누르면 설명을 볼 수 있다.\n상태 패널의 장비·스킬 이름은 누르면 설명이 나온다.");
}

function textElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}
