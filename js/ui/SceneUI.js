import { typeElements } from "./TextEffect.js";

// 장면 하나(제목, 본문, 결과, 버튼)를 그리는 공통 화면.
// view: { eyebrow, title, paragraphs: [], details: [], notes: [], buttons: [{ label, sub, onClick, disabled, primary, color }] }
export function renderScene(root, view) {
  root.replaceChildren();

  const scene = document.createElement("div");
  scene.className = "scene";

  if (view.eyebrow) {
    scene.append(createText("p", "scene-eyebrow", view.eyebrow));
  }

  if (view.title) {
    scene.append(createText("h2", "scene-title", view.title));
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

  if (view.buttons?.length) {
    const buttons = document.createElement("div");
    buttons.className = view.buttonLayout === "cards" ? "scene-cards" : "scene-buttons";

    for (const option of view.buttons) {
      buttons.append(createChoiceButton(option));
    }

    scene.append(buttons);
  }

  root.append(scene);
  typeElements([...scene.querySelectorAll(".scene-text")], scene);
  return scene;
}

function createChoiceButton({ label, sub, onClick, disabled = false, primary = false, color }) {
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

  if (onClick) {
    button.addEventListener("click", onClick, { once: true });
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
