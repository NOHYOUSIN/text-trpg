// 한국어 조사를 앞 단어의 받침에 맞춘다. 예: josa("늑대", "이/가") → "늑대가"
const PAIRS = {
  "이/가": ["이", "가"],
  "을/를": ["을", "를"],
  "은/는": ["은", "는"],
  "과/와": ["과", "와"],
  "으로/로": ["으로", "로"],
};

// 숫자로 끝나면 읽는 소리의 받침: 영(ㅇ) 일(ㄹ) 이 삼(ㅁ) 사 오 육(ㄱ) 칠(ㄹ) 팔(ㄹ) 구
const DIGIT_FINALS = [21, 8, 0, 16, 0, 0, 1, 8, 8, 0];

function finalConsonant(word) {
  const code = word.charCodeAt(word.length - 1);

  if (code >= 48 && code <= 57) {
    return DIGIT_FINALS[code - 48];
  }

  if (code < 0xac00 || code > 0xd7a3) {
    return null;
  }

  return (code - 0xac00) % 28;
}

export function josa(word, pair) {
  const [withBatchim, withoutBatchim] = PAIRS[pair];
  const last = finalConsonant(word);

  if (last === null) {
    return `${word}${withBatchim === "으로" ? "(으)로" : `${withBatchim}(${withoutBatchim})`}`;
  }

  // "으로/로"는 받침이 ㄹ(8)이면 "로"
  if (pair === "으로/로" && last === 8) {
    return `${word}로`;
  }

  return `${word}${last === 0 ? withoutBatchim : withBatchim}`;
}
