import { ABILITY } from "../data/rules.js?v=20261016-055455";

// 시트 표기("poison:0.3:3" 등)를 해석한다.

export function parseToken(token) {
  const [key, ...args] = token.split(":");
  return { key, args };
}

export function parseEffects(tokens = []) {
  return tokens.map(parseToken);
}

// 상태이상·지속 효과 표기를 상태 명세로 바꾼다. 해당하지 않으면 null.
export function toStatusSpec({ key, args }) {
  switch (key) {
    case "poison":
      return { type: "poison", amount: Number(args[0]), duration: Number(args[1]) };
    case "stun":
      return { type: "stun", duration: Number(args[0]) };
    case "bleed":
      return { type: "bleed", amount: Number(args[0]), duration: ABILITY.bleedDuration };
    case "weaken":
      return { type: "weaken", multiplier: Number(args[0]), duration: Number(args[1]) };
    case "vulnerable":
      return { type: "vulnerable", multiplier: Number(args[0]), duration: Number(args[1]) };
    case "guard":
      return { type: "guard", duration: Number(args[0]) };
    case "shield":
      return { type: "shield", duration: Number(args[0]) };
    case "empower":
      return { type: "empower", duration: Number(args[0]) };
    // 스킬의 정해진 턴 동안 효과(2026-10-16): reflect:N:턴, critBoost:N:턴
    case "reflect":
      return args.length > 1 ? { type: "reflect", amount: Number(args[0]), duration: Number(args[1]) } : null;
    case "critBoost":
      return { type: "critBoost", amount: Number(args[0]), duration: Number(args[1]) };
    default:
      return null;
  }
}

export const STATUS_LABELS = Object.freeze({
  poison: "독",
  bleed: "출혈",
  stun: "기절",
  weaken: "약화",
  vulnerable: "취약",
  guard: "방어",
  shield: "보호막",
  empower: "강화",
  reflect: "반사",
  critBoost: "치명타 범위",
  regen: "재생",
});
