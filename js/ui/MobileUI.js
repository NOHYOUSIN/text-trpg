import { formatNumber as fmt } from "../systems/NumberRules.js?v=20261012-030143";
import { getProfile } from "../systems/TraitSystem.js?v=20261012-030143";

// 폭이 좁은 화면(모바일)에서만 쓰는 상단 요약 바와 하단 버튼.
// 상태·기록 패널은 새로 그리지 않고, 오른쪽 패널을 아래에서 올라오는 시트로 보여 준다.
const MOBILE_QUERY = "(max-width: 900px)";

const PANELS = Object.freeze({
  status: "상태",
  journey: "기록",
});

export class MobileUI {
  constructor({ barRoot, dockRoot, sheet, sheetTitle, sheetClose, sheetTools, backdrop, sceneRoot, toggle, onOpenInventory }) {
    this.barRoot = barRoot;
    this.sheet = sheet;
    this.sheetTitle = sheetTitle;
    this.backdrop = backdrop;
    this.toggle = toggle;
    this.toggleHome = toggle.parentElement;
    this.sheetTools = sheetTools;
    this.media = window.matchMedia(MOBILE_QUERY);
    this.openPanel = null;

    this.buttons = {
      status: dockButton("상태", () => this.togglePanel("status")),
      inventory: dockButton("소지품", () => {
        this.closePanel();
        onOpenInventory();
      }),
      journey: dockButton("기록", () => this.togglePanel("journey")),
    };
    dockRoot.replaceChildren(this.buttons.status, this.buttons.inventory, this.buttons.journey);

    sheetClose.addEventListener("click", () => this.closePanel());
    backdrop.addEventListener("click", () => this.closePanel());
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.closePanel();
      }
    });

    // 장면이 바뀌면 화면 맨 위로 올려 새 본문부터 읽게 한다.
    new MutationObserver(() => {
      if (this.media.matches) {
        window.scrollTo({ top: 0 });
      }
    }).observe(sceneRoot, { childList: true });

    this.media.addEventListener("change", () => this.applyLayout());
    this.applyLayout();
  }

  // 상태 패널을 다시 그릴 때마다 요약 바와 소지품 버튼을 갱신한다.
  update({ run, zone, adventurer, inventoryLocked }) {
    if (!adventurer || !run || !zone) {
      this.barRoot.replaceChildren(barItem("탐험 준비 중"));
      this.buttons.inventory.disabled = true;
      return;
    }

    const maxHp = getProfile(adventurer).maxHp;
    const hp = barItem(`HP ${fmt(adventurer.hp)} / ${fmt(maxHp)}`);
    hp.classList.toggle("is-low", adventurer.hp / maxHp < 0.4);
    this.barRoot.replaceChildren(
      hp,
      barItem(`골드 ${adventurer.gold}`),
      barItem(`${run.round} / ${zone.rounds} 라운드`),
    );
    this.buttons.inventory.disabled = inventoryLocked;
  }

  togglePanel(name) {
    if (this.openPanel === name) {
      this.closePanel();
      return;
    }

    this.openPanel = name;
    document.body.dataset.mobilePanel = name;
    this.sheetTitle.textContent = PANELS[name];
    this.backdrop.hidden = false;
    this.sheet.scrollTop = 0;
    this.syncPressed();
  }

  closePanel() {
    if (!this.openPanel) {
      return;
    }

    this.openPanel = null;
    delete document.body.dataset.mobilePanel;
    this.backdrop.hidden = true;
    this.syncPressed();
  }

  syncPressed() {
    for (const name of Object.keys(PANELS)) {
      this.buttons[name].setAttribute("aria-expanded", String(this.openPanel === name));
    }
  }

  // 모바일에서는 연출 효과 버튼을 상태 시트 안으로 옮기고, 넓은 화면으로 돌아오면 제자리로 돌린다.
  applyLayout() {
    if (this.media.matches) {
      this.sheetTools.append(this.toggle);
    } else {
      this.toggleHome.append(this.toggle);
      this.closePanel();
    }
  }
}

function dockButton(label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "mobile-dock-button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function barItem(text) {
  const element = document.createElement("span");
  element.className = "mobile-bar-item";
  element.textContent = text;
  return element;
}
