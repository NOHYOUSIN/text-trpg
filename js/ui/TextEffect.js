// 장면 본문을 한 글자씩 출력하는 연출. 장면을 클릭하면 바로 끝까지 보여 준다.
// 설정은 이 브라우저에만 저장한다(편의 기능).
const STORAGE_KEY = "trpg-webgame-text-effect";
const TICK_MS = 16;
const CHARS_PER_TICK = 2;

let enabled = readSetting();
let activeToken = 0;

function readSetting() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);

    if (value !== null) {
      return value === "on";
    }
  } catch {
    // 저장소를 쓸 수 없으면 기본값을 쓴다.
  }

  return !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

export function isTextEffectEnabled() {
  return enabled;
}

export function setTextEffectEnabled(value) {
  enabled = value;

  try {
    localStorage.setItem(STORAGE_KEY, value ? "on" : "off");
  } catch {
    // 무시
  }
}

// elements의 textContent를 비우고 차례로 다시 채운다.
export function typeElements(elements, container) {
  activeToken += 1;

  if (!enabled || !elements.length) {
    return;
  }

  const token = activeToken;
  const queue = elements.map((element) => ({ element, text: element.textContent }));
  queue.forEach(({ element }) => {
    element.textContent = "";
  });

  let index = 0;
  let offset = 0;

  const finish = () => {
    for (let i = index; i < queue.length; i += 1) {
      queue[i].element.textContent = queue[i].text;
    }

    index = queue.length;
    container?.removeEventListener("click", finish);
  };

  container?.addEventListener("click", finish);

  const tick = () => {
    if (token !== activeToken || index >= queue.length) {
      container?.removeEventListener("click", finish);
      return;
    }

    const current = queue[index];
    offset += CHARS_PER_TICK;
    current.element.textContent = current.text.slice(0, offset);

    if (offset >= current.text.length) {
      index += 1;
      offset = 0;
    }

    window.setTimeout(tick, TICK_MS);
  };

  tick();
}
