import { readSetting, writeSetting } from "./Settings.js?v=20261016-205734";
import { isTextEffectEnabled, setTextEffectEnabled } from "./TextEffect.js?v=20261016-205734";

// 설정 창(로비·탐험 중 어디서나 연다). 각 설정을 따로 켜고 끈다.
const ITEMS = [
  {
    label: "글자 출력 효과",
    desc: "장면 글이 한 글자씩 나온다.",
    get: () => isTextEffectEnabled(),
    set: (value) => setTextEffectEnabled(value),
  },
  {
    label: "화면 연출",
    desc: "전투의 흔들림·떠오르는 숫자·번쩍임, 보스 등장 연출",
    get: () => readSetting("screenFx"),
    set: (value) => writeSetting("screenFx", value),
  },
  {
    label: "전투 로그 순서대로 재생",
    desc: "끄면 한 턴의 결과가 기다림 없이 바로 나온다.",
    get: () => readSetting("logPlayback"),
    set: (value) => writeSetting("logPlayback", value),
  },
  {
    label: "계산 보기",
    desc: "전투 로그에 피해 계산 과정을 함께 보여 준다.",
    get: () => readSetting("showCalc"),
    set: (value) => writeSetting("showCalc", value),
  },
];

export class SettingsUI {
  // onHelp: 맨 아래 [도움말 보기] (탐험 중에도 도움말을 볼 수 있게)
  constructor(root, { onChange = () => {}, onClose = () => {}, onHelp = null } = {}) {
    this.root = root;
    this.onChange = onChange;
    this.onClose = onClose;
    this.onHelp = onHelp;
  }

  open() {
    this.root.hidden = false;
    this.render();
  }

  close() {
    this.root.hidden = true;
    this.root.replaceChildren();
    this.onClose();
  }

  render() {
    const dialog = document.createElement("div");
    dialog.className = "overlay-dialog card settings-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-label", "설정");

    const header = document.createElement("header");
    header.className = "overlay-head";
    header.append(text("h2", "", "설정"));
    header.append(button("닫기", () => this.close()));
    dialog.append(header, text("p", "overlay-message", "이 브라우저에만 저장된다."));

    const list = document.createElement("ul");
    list.className = "overlay-list";

    for (const item of ITEMS) {
      const on = item.get();
      const row = document.createElement("li");
      row.className = "overlay-row settings-row";
      const label = document.createElement("div");
      label.append(text("span", "overlay-name", item.label), text("span", "overlay-desc", item.desc));
      const toggle = button(on ? "켜짐" : "꺼짐", () => {
        item.set(!on);
        this.onChange();
        this.render();
      });
      toggle.classList.add("settings-toggle");
      toggle.setAttribute("aria-pressed", String(on));
      row.append(label, toggle);
      list.append(row);
    }

    dialog.append(list);

    if (this.onHelp) {
      const help = button("도움말 보기", () => this.onHelp());
      help.classList.add("settings-help");
      dialog.append(help);
    }

    this.root.replaceChildren(dialog);
  }
}

function text(tag, className, value) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = value;
  return element;
}

function button(label, onClick) {
  const element = document.createElement("button");
  element.type = "button";
  element.className = "combat-button";
  element.textContent = label;
  element.addEventListener("click", onClick);
  return element;
}
