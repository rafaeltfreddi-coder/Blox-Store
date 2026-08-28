/* =========================================================
   BOLAS STORE
   Catálogo + filtros + WhatsApp + animações
========================================================= */

const PHONE_NUMBER = "5543984036702";

/* =========================================================
   PRODUTOS
========================================================= */

const fruits = [
  { id: 1, name: "Rocket Permanente", rarity: "Comum", price: 3.00, oldPrice: 3.00, emoji: "🚀" },
  { id: 2, name: "Spin Permanente", rarity: "Comum", price: 4.00, oldPrice: 5.00, emoji: "🌀" },
  { id: 3, name: "Blade Permanente", rarity: "Comum", price: 5.00, oldPrice: 6.00, emoji: "⚔️" },
  { id: 4, name: "Spring Permanente", rarity: "Comum", price: 7.00, oldPrice: 11.00, emoji: "🦶" },
  { id: 5, name: "Bomb Permanente", rarity: "Comum", price: 9.00, oldPrice: 14.00, emoji: "💣" },
  { id: 6, name: "Smoke Permanente", rarity: "Comum", price: 10.00, oldPrice: 16.00, emoji: "💨" },
  { id: 7, name: "Spike Permanente", rarity: "Comum", price: 15.00, oldPrice: 24.00, emoji: "🌵" },

  { id: 8, name: "Flame Permanente", rarity: "Incomum", price: 22.00, oldPrice: 34.00, emoji: "🔥" },
  { id: 9, name: "Ice Permanente", rarity: "Incomum", price: 30.00, oldPrice: 47.00, emoji: "🧊" },
  { id: 10, name: "Sand Permanente", rarity: "Incomum", price: 34.00, oldPrice: 53.00, emoji: "⏳" },
  { id: 11, name: "Dark Permanente", rarity: "Incomum", price: 38.00, oldPrice: 59.00, emoji: "🌑" },
  { id: 12, name: "Eagle Permanente", rarity: "Incomum", price: 61.00, oldPrice: 61.00, emoji: "🦅" },

  { id: 13, name: "Diamond Permanente", rarity: "Rara", price: 39.00, oldPrice: 62.00, emoji: "💎" },
  { id: 14, name: "Light Permanente", rarity: "Rara", price: 44.00, oldPrice: 68.00, emoji: "💡" },
  { id: 15, name: "Rubber Permanente", rarity: "Rara", price: 47.00, oldPrice: 75.00, emoji: "🥊" },
  { id: 16, name: "Ghost Permanente", rarity: "Rara", price: 51.00, oldPrice: 79.00, emoji: "👻" },
  { id: 17, name: "Magma Permanente", rarity: "Rara", price: 56.00, oldPrice: 81.00, emoji: "🌋" },

  { id: 18, name: "Quake Permanente", rarity: "Lendária", price: 62.00, oldPrice: 93.00, emoji: "🫨" },
  { id: 19, name: "Buddha Permanente", rarity: "Lendária", price: 75.00, oldPrice: 103.00, emoji: "🪙" },
  { id: 20, name: "Love Permanente", rarity: "Lendária", price: 78.00, oldPrice: 106.00, emoji: "💖" },
  { id: 21, name: "Creation Permanente", rarity: "Lendária", price: 80.00, oldPrice: 109.00, emoji: "🎨" },
  { id: 22, name: "Spider Permanente", rarity: "Lendária", price: 84.00, oldPrice: 112.00, emoji: "🕸️" },
  { id: 23, name: "Sound Permanente", rarity: "Lendária", price: 88.00, oldPrice: 118.00, emoji: "🎵" },
  { id: 24, name: "Phoenix Permanente", rarity: "Lendária", price: 92.00, oldPrice: 125.00, emoji: "🐦‍🔥" },
  { id: 25, name: "Portal Permanente", rarity: "Lendária", price: 92.00, oldPrice: 125.00, emoji: "🌀" },
  { id: 26, name: "Lightning Permanente", rarity: "Lendária", price: 97.00, oldPrice: 131.00, emoji: "⚡" },
  { id: 27, name: "Pain Permanente", rarity: "Lendária", price: 102.00, oldPrice: 137.00, emoji: "🐾" },
  { id: 28, name: "Blizzard Permanente", rarity: "Lendária", price: 105.00, oldPrice: 140.00, emoji: "❄️" },

  { id: 29, name: "Gravity Permanente", rarity: "Mítica", price: 110.00, oldPrice: 143.00, emoji: "⚓" },
  { id: 30, name: "Mammoth Permanente", rarity: "Mítica", price: 113.00, oldPrice: 146.00, emoji: "🦣" },
  { id: 31, name: "T-Rex Permanente", rarity: "Mítica", price: 113.00, oldPrice: 146.00, emoji: "🦖" },
  { id: 32, name: "Dough Permanente", rarity: "Mítica", price: 116.00, oldPrice: 149.00, emoji: "🍩" },
  { id: 33, name: "Shadow Permanente", rarity: "Mítica", price: 118.00, oldPrice: 151.00, emoji: "👤" },
  { id: 34, name: "Venom Permanente", rarity: "Mítica", price: 120.00, oldPrice: 153.00, emoji: "🧪" },
  { id: 35, name: "Gas Permanente", rarity: "Mítica", price: 125.00, oldPrice: 156.00, emoji: "☁️" },
  { id: 36, name: "Spirit Permanente", rarity: "Mítica", price: 128.00, oldPrice: 159.00, emoji: "👻" },
  { id: 37, name: "Tiger Permanente", rarity: "Mítica", price: 150.00, oldPrice: 187.00, emoji: "🐅" },
  { id: 38, name: "Yeti Permanente", rarity: "Mítica", price: 150.00, oldPrice: 187.00, emoji: "☃️" },
  { id: 39, name: "Control Permanente", rarity: "Mítica", price: 192.00, oldPrice: 249.00, emoji: "🕹️" },
  { id: 40, name: "Kitsune Permanente", rarity: "Mítica", price: 192.00, oldPrice: 249.00, emoji: "🦊" },
  { id: 41, name: "Dragon Permanente", rarity: "Mítica", price: 220.00, oldPrice: 311.00, emoji: "🐉" }
];

/* =========================================================
   HELPERS
========================================================= */

function normalizeText(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function getRarityClass(rarity) {
  return `rarity-${normalizeText(rarity).replace(/\s+/g, "-")}`;
}

/* =========================================================
   FRUTAS FLUTUANTES DO FUNDO
========================================================= */

function createFloatingFruits() {
  const container = document.getElementById("floating-fruits");

  if (!container) return;

  const floatingItems = [
    "🍎",
    "🍊",
    "🍋",
    "🍇",
    "🍉",
    "🍍",
    "🥝",
    "🥭",
    "🍓",
    "🍌",
    "🥥",
    "🍒"
  ];

  const count = window.innerWidth < 600 ? 7 : 12;

  for (let i = 0; i < count; i++) {
    const fruit = document.createElement("span");

    fruit.className = "floating-fruit";

    fruit.textContent =
      floatingItems[
        Math.floor(Math.random() * floatingItems.length)
      ];

    fruit.style.left = `${Math.random() * 100}%`;
    fruit.style.top = `${Math.random() * 100}%`;

    fruit.style.setProperty(
      "--size",
      `${1.4 + Math.random() * 2.3}rem`
    );

    fruit.style.setProperty(
      "--duration",
      `${7 + Math.random() * 9}s`
    );

    fruit.style.setProperty(
      "--delay",
      `${Math.random() * -10}s`
    );

    fruit.style.setProperty(
      "--move-x",
      `${-70 + Math.random() * 140}px`
    );

    container.appendChild(fruit);
  }
}

/* =========================================================
   RENDER
========================================================= */

function renderFruits(data) {
  const grid = document.getElementById("fruits-grid");
  const count = document.getElementById("results-count");

  if (!grid) return;

  grid.innerHTML = "";

  if (!data.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>Nenhuma fruta encontrada com esses filtros.</p>
      </div>
    `;

    if (count) {
      count.textContent = "0 frutas encontradas";
    }

    return;
  }

  if (count) {
    count.textContent =
      `Mostrando ${data.length} ${data.length === 1 ? "fruta" : "frutas"}`;
  }

  const fragment = document.createDocumentFragment();

  data.forEach((fruit, index) => {
    const card = document.createElement("article");

    const rarityClass = getRarityClass(fruit.rarity);

    const hasDiscount =
      fruit.oldPrice > fruit.price;

    const discount = hasDiscount
      ? Math.round(
          ((fruit.oldPrice - fruit.price) /
            fruit.oldPrice) *
            100
        )
      : 0;

    card.className =
      `fruit-card ${rarityClass}`;

    card.setAttribute("role", "listitem");

    card.style.animationDelay =
      `${Math.min(index * 0.025, 0.35)}s`;

    card.innerHTML = `
      <div>
        <div class="fruit-image-wrap">

          <span class="fruit-badge">
            ${fruit.rarity}
          </span>

          <span
            class="fruit-emoji"
            aria-hidden="true"
          >
            ${fruit.emoji}
          </span>

        </div>

        <h3 class="fruit-name">
          ${fruit.name}
        </h3>
      </div>

      <div>

        <div class="fruit-prices">

          ${
            hasDiscount
              ? `
                <div class="price-row-ref">
                  <span class="fruit-price-ref">
                    ${formatPrice(fruit.oldPrice)}
                  </span>

                  <span class="fruit-discount">
                    -${discount}%
                  </span>
                </div>
              `
              : ""
          }

          <div class="fruit-price">
            ${formatPrice(fruit.price)}
          </div>

        </div>

        <button
          type="button"
          class="btn-buy"
          data-fruit-id="${fruit.id}"
          aria-label="Comprar ${fruit.name}"
        >
          Comprar agora
        </button>

      </div>
    `;

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

/* =========================================================
   FILTROS
========================================================= */

function filterAndRender() {
  const searchInput =
    document.getElementById("search-input");

  const rarityFilter =
    document.getElementById("rarity-filter");

  const sortFilter =
    document.getElementById("sort-filter");

  const searchTerm =
    normalizeText(searchInput?.value || "");

  const selectedRarity =
    rarityFilter?.value || "all";

  const selectedSort =
    sortFilter?.value || "default";

  let filtered = fruits.filter((fruit) => {
    const matchesSearch =
      normalizeText(fruit.name)
        .includes(searchTerm);

    const matchesRarity =
      selectedRarity === "all" ||
      fruit.rarity === selectedRarity;

    return (
      matchesSearch &&
      matchesRarity
    );
  });

  switch (selectedSort) {
    case "price-asc":
      filtered.sort(
        (a, b) => a.price - b.price
      );
      break;

    case "price-desc":
      filtered.sort(
        (a, b) => b.price - a.price
      );
      break;

    case "name":
      filtered.sort((a, b) =>
        a.name.localeCompare(
          b.name,
          "pt-BR"
        )
      );
      break;

    default:
      break;
  }

  renderFruits(filtered);
}

/* =========================================================
   COMPRA
========================================================= */

function buyFruit(id) {
  const fruit = fruits.find(
    item => item.id === Number(id)
  );

  if (!fruit) return;

  const message =
    `Olá! Vim pelo site da Bolas Store e gostaria de comprar a fruta *${fruit.name}* por *${formatPrice(fruit.price)}*.`;

  const url =
    `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   MENU MOBILE
========================================================= */

function setupMobileMenu() {
  const toggle =
    document.getElementById("menu-toggle");

  const nav =
    document.getElementById("nav-menu");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen =
      nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });

  document.addEventListener("click", event => {
    if (
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      nav.classList.remove("open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });
}

/* =========================================================
   ATALHO CTRL + K
========================================================= */

function setupSearchShortcut() {
  const input =
    document.getElementById("search-input");

  if (!input) return;

  document.addEventListener(
    "keydown",
    event => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        input.focus();
      }

      if (
        event.key === "Escape" &&
        document.activeElement === input
      ) {
        input.blur();
      }
    }
  );
}

/* =========================================================
   EVENTOS DO CATÁLOGO
========================================================= */

function setupCatalogEvents() {
  const searchInput =
    document.getElementById("search-input");

  const rarityFilter =
    document.getElementById("rarity-filter");

  const sortFilter =
    document.getElementById("sort-filter");

  const grid =
    document.getElementById("fruits-grid");

  searchInput?.addEventListener(
    "input",
    filterAndRender
  );

  rarityFilter?.addEventListener(
    "change",
    filterAndRender
  );

  sortFilter?.addEventListener(
    "change",
    filterAndRender
  );

  grid?.addEventListener(
    "click",
    event => {
      const button =
        event.target.closest(
          ".btn-buy"
        );

      if (!button) return;

      buyFruit(
        button.dataset.fruitId
      );
    }
  );
}

/* =========================================================
   INIT
========================================================= */

function init() {
  createFloatingFruits();

  renderFruits(fruits);

  setupCatalogEvents();

  setupMobileMenu();

  setupSearchShortcut();
}

if (
  document.readyState === "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    init
  );
} else {
  init();
}
