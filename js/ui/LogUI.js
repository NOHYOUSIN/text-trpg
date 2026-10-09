// 여정 기록: 라운드마다 무슨 일이 있었는지 쌓아 보여 준다.
const MAX_ENTRIES = 300;

export class LogUI {
  constructor(root) {
    this.root = root;
    this.root.innerHTML = '<h3 class="status-title">여정 기록</h3><ol class="journey-log"></ol>';
    this.list = this.root.querySelector(".journey-log");
  }

  add(text, kind = "info") {
    const item = document.createElement("li");
    item.className = `journey-log-item kind-${kind}`;
    item.textContent = text;
    this.list.append(item);

    while (this.list.children.length > MAX_ENTRIES) {
      this.list.firstChild.remove();
    }

    this.list.scrollTop = this.list.scrollHeight;
  }

  clear() {
    this.list.replaceChildren();
  }
}
