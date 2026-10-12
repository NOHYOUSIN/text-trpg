// 생성 데이터를 ID로 찾기 쉽게 정리한다.
import { commonData } from "./generated/common.js?v=20261013-032945";
import { dungeonDataList } from "./generated/dungeons.js?v=20261013-032945";

const byId = (rows) => new Map(rows.map((row) => [row.id, row]));

function prepareDungeon(data) {
  return {
    ...data,
    enemiesById: byId(data.enemies),
    enemySkillsById: byId(data.enemySkills),
    eventsById: byId(data.events),
    placesById: byId(data.places),
  };
}

export const catalog = Object.freeze({
  classes: byId(commonData.classes),
  skills: byId(commonData.skills),
  equipment: byId(commonData.equipment),
  consumables: byId(commonData.consumables),
  // 시트 순서대로 정렬된 던전 목록(로비에 이 순서로 나온다)
  dungeons: new Map(dungeonDataList.map((data) => [data.id, prepareDungeon(data)])),
});

export function getItem(id) {
  return catalog.equipment.get(id) ?? catalog.consumables.get(id) ?? null;
}

export function isEquipment(id) {
  return catalog.equipment.has(id);
}
