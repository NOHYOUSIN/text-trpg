import { catalog, getItem } from "../data/catalog.js?v=20261010-000920";
import { GRADES } from "../data/rules.js?v=20261010-000920";
import { canUseOutsideCombat, entryName } from "../systems/InventorySystem.js?v=20261010-000920";
import { josa } from "../systems/Josa.js?v=20261010-000920";
import { describeFull, describeStats } from "./ItemText.js?v=20261010-000920";
import { renderScene } from "./SceneUI.js?v=20261010-000920";

function entryOf(kind, id) {
  return kind === "skill" ? catalog.skills.get(id) : getItem(id);
}

// 새 장비를 얻었는데 같은 슬롯에 장비가 있을 때: 바로 장착 / 가방에 넣기 / 포기
export function renderEquipChoice(root, { adventurer, itemId, onEquip, onStore, onGiveUp }) {
  const item = catalog.equipment.get(itemId);
  const currentId = adventurer.equipment[item.slot];
  const bagFull = adventurer.inventory.isFull();

  renderScene(root, {
    eyebrow: "새 장비",
    title: entryName("item", itemId),
    paragraphs: [item.description],
    details: [
      `새 장비: ${describeStats("item", itemId)}`,
      `현재 장착: ${entryName("item", currentId)} — ${describeStats("item", currentId)}`,
    ],
    buttons: [
      {
        label: "바로 장착한다",
        sub: bagFull
          ? `가방이 가득 차 ${josa(entryName("item", currentId), "은/는")} 버린다.`
          : `${josa(entryName("item", currentId), "은/는")} 가방에 넣는다.`,
        primary: true,
        onClick: onEquip,
      },
      {
        label: "가방에 넣는다",
        sub: bagFull ? "가방이 가득 찼다. 칸을 비울지 고른다." : "",
        onClick: onStore,
      },
      { label: "새 장비를 포기한다", onClick: onGiveUp },
    ],
  });
}

// 인벤토리가 가득 찼을 때: 칸 하나 버리기 / 새 아이템 포기 / (소모품) 바로 사용
export function renderInventoryFull(root, { adventurer, itemId, onDiscard, onGiveUp, onUseNow }) {
  const isConsumable = catalog.consumables.has(itemId);
  const buttons = adventurer.inventory.slots.map((slot, index) => ({
    label: `버리기: ${entryName("item", slot.id)}${slot.count > 1 ? ` ×${slot.count}` : ""}`,
    sub: describeStats("item", slot.id),
    onClick: () => onDiscard(index),
  }));

  if (isConsumable) {
    buttons.push({
      label: "바로 사용한다",
      sub: canUseOutsideCombat(itemId) ? describeStats("item", itemId) : "전투 밖에서는 효과가 없다.",
      disabled: !canUseOutsideCombat(itemId),
      onClick: onUseNow,
    });
  }

  buttons.push({ label: "새 아이템을 포기한다", onClick: onGiveUp });

  renderScene(root, {
    eyebrow: "인벤토리가 가득 찼다",
    title: entryName("item", itemId),
    paragraphs: [entryOf("item", itemId)?.description ?? ""],
    details: [describeStats("item", itemId)],
    buttons,
  });
}

// 스킬 슬롯이 가득 찼을 때: 교체 또는 포기
export function renderSkillChoice(root, { adventurer, skillId, onReplace, onGiveUp, giveUpLabel = "새 스킬을 포기한다" }) {
  const skill = catalog.skills.get(skillId);

  renderScene(root, {
    eyebrow: "새 스킬",
    title: entryName("skill", skillId),
    paragraphs: [skill.description, "스킬 슬롯이 가득 찼다. 교체한 스킬은 사라진다."],
    details: [describeStats("skill", skillId)],
    buttons: [
      ...adventurer.skills.map((id, slot) => ({
        label: `교체: 슬롯 ${slot + 1} ${entryName("skill", id)}`,
        sub: describeStats("skill", id),
        onClick: () => onReplace(slot),
      })),
      { label: giveUpLabel, onClick: onGiveUp },
    ],
  });
}

// 보스 보상: 후보 중 하나를 고른다.
export function renderBossReward(root, { enemyName, candidates, onChoose }) {
  renderScene(root, {
    eyebrow: `${enemyName} 처치 보상`,
    title: "보상을 하나 고른다",
    buttonLayout: "cards",
    buttons: candidates.map((candidate) => {
      const entry = entryOf(candidate.kind, candidate.id);
      const kindLabel = candidate.kind === "skill" ? "스킬" : "장비";
      return {
        label: `${kindLabel} · ${entryName(candidate.kind, candidate.id)}`,
        sub: describeFull(candidate.kind, candidate.id),
        onClick: () => onChoose(candidate),
        color: GRADES[entry.grade]?.color,
      };
    }),
  });
}
