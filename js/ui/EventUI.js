import { checkCondition, getSkillBonus, VERB_TAGS } from "../systems/EventSystem.js?v=20261012-012115";
import { renderScene } from "./SceneUI.js?v=20261012-012115";

// 사건 선택지. 조건을 채우지 못한 선택지는 흐리게 보여 주고 필요한 조건을 적는다.
// 행동 동사가 있으면 [힘]처럼 방식을 붙인다. 난이도는 표시하지 않는다.
export function renderEvent(root, { place, event, choices, adventurer, onChoose }) {
  renderScene(root, {
    eyebrow: place?.name ?? "",
    title: event.title,
    paragraphs: [event.description],
    buttons: choices.map((choice) => {
      const condition = checkCondition(choice, adventurer);
      const tag = VERB_TAGS[choice.verb];
      const bonus = condition.ok ? getSkillBonus(choice, adventurer) : null;
      let sub = "";

      if (!condition.ok) {
        sub = `[${condition.reason}]`;
      } else if (bonus?.names.length) {
        sub = `스킬 보정: ${bonus.names.join(", ")}`;
      }

      return {
        label: tag ? `${choice.text} [${tag}]` : choice.text,
        sub,
        disabled: !condition.ok,
        onClick: () => onChoose(choice),
      };
    }),
  });
}
