import { HELP_SECTIONS } from "../data/helpText.js?v=20261014-041746";

const SEEN_KEY = "trpg-webgame-help-seen";

// 도움말 창: 게임 방법을 항목별 제목과 함께 한 창에 보여 준다(스크롤).
export class HelpUI {
  constructor(root, { onClose = () => {} } = {}) {
    this.root = root;
    this.onClose = onClose;
  }

  open() {
    markSeen();
    this.root.hidden = false;
    this.render();
  }

  close() {
    this.root.hidden = true;
    this.root.replaceChildren();
    this.onClose();
  }

  // 처음 접속했으면 한 번 연다. 저장소를 쓸 수 없으면 이번 화면에서만 한 번.
  openIfFirstVisit() {
    if (!hasSeen()) {
      this.open();
    }
  }

  render() {
    const dialog = document.createElement("div");
    dialog.className = "overlay-dialog card help-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-label", "도움말");

    const header = document.createElement("header");
    header.className = "overlay-head";
    header.append(text("h2", "", "도움말"));
    header.append(button("닫기", () => this.close()));
    dialog.append(header);

    for (const section of HELP_SECTIONS) {
      dialog.append(text("h3", "status-title", section.title), text("p", "help-text", section.body));
    }

    dialog.append(button("시작하기", () => this.close(), "help-close"));
    this.root.replaceChildren(dialog);
  }
}

let seenThisPage = false;

function hasSeen() {
  try {
    return Boolean(localStorage.getItem(SEEN_KEY)) || seenThisPage;
  } catch {
    return seenThisPage;
  }
}

function markSeen() {
  seenThisPage = true;

  try {
    localStorage.setItem(SEEN_KEY, "seen");
  } catch {
    // 저장소를 쓸 수 없으면 이번 화면에서만 기억한다.
  }
}

function text(tag, className, value) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = value;
  return element;
}

function button(label, onClick, extraClass = "") {
  const element = document.createElement("button");
  element.type = "button";
  element.className = `combat-button${extraClass ? ` ${extraClass}` : ""}`;
  element.textContent = label;
  element.addEventListener("click", onClick);
  return element;
}
