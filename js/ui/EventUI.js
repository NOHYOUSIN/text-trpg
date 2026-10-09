import { checkCondition } from "../systems/EventSystem.js?v=20261009-232617";
import { renderScene } from "./SceneUI.js?v=20261009-232617";

// 사건 선택지. 조건을 채우지 못한 선택지는 비활성으로 보여 준다. 난이도는 표시하지 않는다.
export function renderEvent(root, { place, event, adventurer, onChoose }) {
  renderScene(root, {
    eyebrow: place?.name ?? "",
    title: event.title,
    paragraphs: [event.description],
    buttons: event.choices.map((choice) => {
      const condition = checkCondition(choice, adventurer);
      return {
        label: choice.text,
        sub: condition.ok ? "" : condition.reason,
        disabled: !condition.ok,
        onClick: () => onChoose(choice),
      };
    }),
  });
}
