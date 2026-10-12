import { parseToken } from "./EffectParser.js?v=20261013-042652";

// 소모품 효과 목록. 여러 효과는 ";"로 잇는다(예: 붕대 "heal;cure:bleed"). (2026-10-13)
export function consumableEffects(item) {
  return item.effect.split(";").map((token) => token.trim()).filter(Boolean).map(parseToken);
}

export function hasConsumableEffect(item, key) {
  return consumableEffects(item).some((effect) => effect.key === key);
}

// 능력치 영약(statUp): 전투 밖에서만 마시고, 일반 소모품 뽑기·상점에는 나오지 않는다.
export function isElixir(item) {
  return Boolean(item) && hasConsumableEffect(item, "statUp");
}
