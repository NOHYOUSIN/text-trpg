import { isTextEffectEnabled, typeElements } from "./TextEffect.js?v=20261014-041746";

const DICE_ROLL_MS = 800;
const DICE_TICK_MS = 60;
const REVEAL_GAP_MS = 350;
let revealToken = 0;

// 장면 하나(제목, 본문, 결과, 버튼)를 그리는 공통 화면.
// view: { eyebrow, title, dice, paragraphs: [], details: [], notes: [], buttons: [{ label, sub, onClick, disabled, primary, color }] }
// dice: { roll, modifier, total, label } — 있으면 주사위 굴림 → 본문 → 변화·버튼 순서로 차례대로 보여 준다.
export function renderScene(root, view) {
  root.replaceChildren();
  revealToken += 1;

  const scene = document.createElement("div");
  scene.className = "scene";

  if (view.eyebrow) {
    scene.append(createText("p", "scene-eyebrow", view.eyebrow));
  }

  if (view.title) {
    scene.append(createText("h2", "scene-title", view.title));
  }

  const dice = view.dice ? createDice() : null;

  if (dice) {
    scene.append(dice.element);
  }

  for (const paragraph of view.paragraphs ?? []) {
    scene.append(createText("p", "scene-text", paragraph));
  }

  if (view.details?.length) {
    const list = document.createElement("ul");
    list.className = "scene-details";

    for (const detail of view.details) {
      list.append(createText("li", "", detail));
    }

    scene.append(list);
  }

  for (const note of view.notes ?? []) {
    scene.append(createText("p", "scene-note", note));
  }

  // sections: 제목이 붙은 버튼 묶음(상점의 사기·팔기 등). 비어 있으면 empty 문구를 보여 준다.
  for (const section of view.sections ?? []) {
    scene.append(createText("h3", "scene-section-title", section.heading));

    if (section.buttons.length) {
      scene.append(createButtonGroup(section.buttons, section.layout));
    } else if (section.empty) {
      scene.append(createText("p", "scene-note", section.empty));
    }
  }

  if (view.buttons?.length) {
    scene.append(createButtonGroup(view.buttons, view.buttonLayout));
  }

  root.append(scene);

  if (dice) {
    revealAfterDice(scene, dice, view.dice);
  } else {
    typeElements([...scene.querySelectorAll(".scene-text")], scene);
  }

  return scene;
}

function createDice() {
  const element = document.createElement("div");
  element.className = "scene-dice";
  const face = createText("span", "scene-dice-face", "?");
  const label = createText("span", "scene-dice-label", "주사위를 굴린다…");
  element.append(face, label);
  return { element, face, label };
}

function showDiceResult(dice, { roll, modifier, total, label }) {
  dice.face.textContent = String(roll);
  const modText = modifier ? ` ${modifier > 0 ? "+" : ""}${modifier} = ${total}` : "";
  dice.label.textContent = `1d20${modText} → ${label}`;
  dice.element.classList.add("is-settled");
}

// 주사위가 멈춘 뒤 본문을 출력하고, 이어서 변화·버튼을 보여 준다. 장면을 누르면 바로 끝낸다.
function revealAfterDice(scene, dice, result) {
  const pending = [...scene.children].filter((child) => child !== dice.element && !child.matches(".scene-eyebrow, .scene-title"));
  const texts = pending.filter((child) => child.matches(".scene-text"));
  const rest = pending.filter((child) => !child.matches(".scene-text"));
  const token = revealToken;
  const timers = [];

  const showAll = () => {
    timers.forEach((id) => window.clearTimeout(id));
    window.clearInterval(rolling);
    showDiceResult(dice, result);
    pending.forEach((child) => child.classList.remove("scene-pending"));
    scene.removeEventListener("click", showAll);
  };

  if (!isTextEffectEnabled()) {
    showDiceResult(dice, result);
    return;
  }

  pending.forEach((child) => child.classList.add("scene-pending"));
  scene.addEventListener("click", showAll);

  const rolling = window.setInterval(() => {
    dice.face.textContent = String(1 + Math.floor(Math.random() * 20));
  }, DICE_TICK_MS);

  timers.push(window.setTimeout(() => {
    if (token !== revealToken) {
      return;
    }

    window.clearInterval(rolling);
    showDiceResult(dice, result);
    texts.forEach((child) => child.classList.remove("scene-pending"));
    typeElements(texts, scene);

    timers.push(window.setTimeout(() => {
      rest.forEach((child) => child.classList.remove("scene-pending"));
      scene.removeEventListener("click", showAll);
    }, REVEAL_GAP_MS));
  }, DICE_ROLL_MS));
}

// layout: "cards"(격자) | "rows"(한 줄에 하나, 오른쪽에 aside) | 그 밖(세로 버튼)
function createButtonGroup(options, layout) {
  const group = document.createElement("div");
  group.className = layout === "cards" ? "scene-cards" : layout === "rows" ? "scene-buttons scene-rows" : "scene-buttons";

  for (const option of options) {
    group.append(createChoiceButton(option));
  }

  return group;
}

// aside: 버튼 오른쪽에 따로 보이는 짧은 문구(가격 등)
// repeatable: 창을 여는 버튼처럼 장면이 바뀌지 않아 여러 번 누를 수 있는 버튼. 그 밖의 버튼은 한 번만 반응한다(두 번 누르기 방지).
function createChoiceButton({ label, sub, aside, onClick, disabled = false, primary = false, color, repeatable = false }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `scene-button${primary ? " is-primary" : ""}`;
  button.disabled = disabled;

  if (color) {
    button.style.borderColor = color;
  }

  button.append(createText("span", "scene-button-label", label));

  if (sub) {
    button.append(createText("span", "scene-button-sub", sub));
  }

  if (aside) {
    button.append(createText("span", "scene-button-aside", aside));
  }

  if (onClick) {
    button.addEventListener("click", onClick, { once: !repeatable });
  }

  return button;
}

function createText(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  element.textContent = text;
  return element;
}
