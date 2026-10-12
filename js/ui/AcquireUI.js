import { catalog, getItem } from "../data/catalog.js?v=20261013-042652";
import { GRADES } from "../data/rules.js?v=20261013-042652";
import { canUseOutsideCombat, entryName } from "../systems/InventorySystem.js?v=20261013-042652";
import { describeFull, describeStats, describeWeaponChange } from "./ItemText.js?v=20261013-042652";
import { renderScene } from "./SceneUI.js?v=20261013-042652";

function entryOf(kind, id) {
  return kind === "skill" ? catalog.skills.get(id) : getItem(id);
}

// 새 장비를 얻었는데 같은 슬롯에 장비가 있을 때: 바로 장착 / 가방에 넣기 / 포기
export function renderEquipChoice(root, { adventurer, itemId, onEquip, onStore, onGiveUp, giveUpLabel = "새 장비를 포기한다" }) {
  const item = catalog.equipment.get(itemId);
  const currentId = adventurer.equipment[item.slot];
  const bagFull = adventurer.inventory.isFull();
  let equipSub = "빈 칸에 장착한다.";

  if (currentId) {
    equipSub = bagFull
      ? `가방이 가득 차 지금 장비를 버린다: ${entryName("item", currentId)}`
      : `지금 장비는 가방에 넣는다: ${entryName("item", currentId)}`;
  }

  renderScene(root, {
    eyebrow: "새 장비",
    title: entryName("item", itemId),
    paragraphs: [item.description],
    details: [
      `새 장비: ${entryName("item", itemId)}\n${describeStats("item", itemId, adventurer)}`,
      currentId ? `현재 장착: ${entryName("item", currentId)}\n${describeStats("item", currentId, adventurer)}` : "현재 장착: 없음",
      describeWeaponChange(adventurer, itemId),
    ],
    buttons: [
      { label: "장착한다", sub: equipSub, primary: true, onClick: onEquip },
      {
        label: "가방에 넣는다",
        sub: bagFull ? "가방이 가득 찼다. 칸을 비울지 고른다." : "",
        onClick: onStore,
      },
      { label: giveUpLabel, onClick: onGiveUp },
    ],
  });
}

// 인벤토리가 가득 찼을 때: 칸 하나 버리기 / 새 아이템 포기 / (소모품) 바로 사용
export function renderInventoryFull(root, { adventurer, itemId, onDiscard, onGiveUp, onUseNow }) {
  const isConsumable = catalog.consumables.has(itemId);
  const buttons = adventurer.inventory.slots.map((slot, index) => ({
    label: `버리기: ${entryName("item", slot.id)}${slot.count > 1 ? ` ×${slot.count}` : ""}`,
    sub: describeStats("item", slot.id, adventurer),
    onClick: () => onDiscard(index),
  }));

  if (isConsumable) {
    buttons.push({
      label: "바로 사용한다",
      sub: canUseOutsideCombat(itemId) ? describeStats("item", itemId, adventurer) : "전투 밖에서는 효과가 없다.",
      disabled: !canUseOutsideCombat(itemId),
      onClick: onUseNow,
    });
  }

  buttons.push({ label: "새 아이템을 포기한다", onClick: onGiveUp });

  renderScene(root, {
    eyebrow: "인벤토리가 가득 찼다",
    title: entryName("item", itemId),
    paragraphs: [entryOf("item", itemId)?.description ?? ""],
    details: [describeStats("item", itemId, adventurer)],
    buttons,
  });
}

// 스킬 슬롯이 가득 찼을 때: 교체 또는 포기
// 새 스킬: 빈 슬롯에 장착하거나 기존 스킬과 교체하거나 포기한다. 빈 슬롯이 있어도 묻는다.
export function renderSkillChoice(root, { adventurer, skillId, onReplace, onGiveUp, giveUpLabel = "새 스킬을 포기한다" }) {
  const skill = catalog.skills.get(skillId);
  const hasEmpty = adventurer.skills.includes(null);

  renderScene(root, {
    eyebrow: "새 스킬",
    title: entryName("skill", skillId),
    paragraphs: [
      skill.description,
      hasEmpty ? "빈 슬롯에 장착하거나 기존 스킬과 교체할 수 있다. 교체한 스킬은 사라진다." : "스킬 슬롯이 가득 찼다. 교체한 스킬은 사라진다.",
    ],
    details: [describeStats("skill", skillId, adventurer)],
    buttons: [
      ...adventurer.skills.map((id, slot) => (id
        ? { label: `교체: 슬롯 ${slot + 1} ${entryName("skill", id)}`, sub: describeStats("skill", id, adventurer), onClick: () => onReplace(slot) }
        : { label: `장착: 슬롯 ${slot + 1} (비어 있음)`, primary: true, onClick: () => onReplace(slot) })),
      { label: giveUpLabel, onClick: onGiveUp },
    ],
  });
}

// 사건의 스킬 선택: 후보 중 하나를 배운다(또는 배우지 않는다).
export function renderSkillOffer(root, { options, adventurer = null, onChoose, onSkip }) {
  renderScene(root, {
    eyebrow: "새 기술",
    title: "배울 기술을 하나 고른다",
    buttonLayout: "cards",
    buttons: [
      ...options.map((id) => {
        const skill = catalog.skills.get(id);
        return {
          label: `스킬 · ${entryName("skill", id)}`,
          sub: describeFull("skill", id, adventurer),
          onClick: () => onChoose(id),
          color: GRADES[skill.grade]?.color,
        };
      }),
      { label: "배우지 않는다", onClick: onSkip },
    ],
  });
}

// 보스 보상: 후보 중 하나를 고른다.
export function renderBossReward(root, { enemyName, candidates, adventurer = null, onChoose }) {
  renderScene(root, {
    eyebrow: `${enemyName} 처치 보상`,
    title: "보상을 하나 고른다",
    buttonLayout: "cards",
    buttons: candidates.map((candidate) => {
      const entry = entryOf(candidate.kind, candidate.id);
      const kindLabel = candidate.kind === "skill" ? "스킬" : catalog.consumables.has(candidate.id) ? "소모품" : "장비";
      return {
        label: `${kindLabel} · ${entryName(candidate.kind, candidate.id)}`,
        sub: describeFull(candidate.kind, candidate.id, adventurer),
        onClick: () => onChoose(candidate),
        color: GRADES[entry.grade]?.color,
      };
    }),
  });
}
