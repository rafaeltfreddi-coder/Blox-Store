/**
 * Nexus Fruits — Script principal
 * Catálogo + filtros + busca + ordenação + WhatsApp + animações
 */

const FRUITS = [
  // COMUM
  { id: 1, nome: "Rocket", categoria: "Comum", precoLoja: 3.00, emoji: "🚀" },
  { id: 2, nome: "Spin", categoria: "Comum", precoLoja: 4.00, emoji: "🌀" },
  { id: 3, nome: "Blade", categoria: "Comum", precoLoja: 5.00, emoji: "🗡️" },
  { id: 4, nome: "Spring", categoria: "Comum", precoLoja: 7.00, emoji: "🪢" },
  { id: 5, nome: "Bomb", categoria: "Comum", precoLoja: 9.00, emoji: "💣" },
  { id: 6, nome: "Smoke", categoria: "Comum", precoLoja: 10.00, emoji: "💨" },
  { id: 7, nome: "Spike", categoria: "Comum", precoLoja: 15.00, emoji: "🌵" },

  // INCOMUM
  { id: 8, nome: "Flame", categoria: "Incomum", precoLoja: 22.00, emoji: "🔥" },
  { id: 9, nome: "Ice", categoria: "Incomum", precoLoja: 30.00, emoji: "❄️" },
  { id: 10, nome: "Sand", categoria: "Incomum", precoLoja: 34.00, emoji: "🏜️" },
  { id: 11, nome: "Dark", categoria: "Incomum", precoLoja: 38.00, emoji: "🌑" },
  { id: 12, nome: "Diamond", categoria: "Incomum", precoLoja: 39.00, emoji: "💎" },

  // RARA
  { id: 13, nome: "Light", categoria: "Rara", precoLoja: 44.00, emoji: "💡" },
  { id: 14, nome: "Rubber", categoria: "Rara", precoLoja: 47.00, emoji: "🎈" },
  { id: 15, nome: "Ghost", categoria: "Rara", precoLoja: 51.00, emoji: "👻" },
  { id: 16, nome: "Magma", categoria: "Rara", precoLoja: 56.00, emoji: "🌋" },

  // LENDÁRIA
  { id: 17, nome: "Quake", categoria: "Lendária", precoLoja: 62.00, emoji: "🌊" },
  { id: 18, nome: "Buddha", categoria: "Lendária", precoLoja: 75.00, emoji: "🧘" },
  { id: 19, nome: "Love", categoria: "Lendária", precoLoja: 78.00, emoji: "💗" },
  { id: 20, nome: "Creation", categoria: "Lendária", precoLoja: 80.00, emoji: "🛠️" },
  { id: 21, nome: "Spider", categoria: "Lendária", precoLoja: 84.00, emoji: "🕷️" },
  { id: 22, nome: "Sound", categoria: "Lendária", precoLoja: 88.00, emoji: "🔊" },
  { id: 23, nome: "Phoenix", categoria: "Lendária", precoLoja: 92.00, emoji: "🐦" },
  { id: 24, nome: "Portal", categoria: "Lendária", precoLoja: 92.00, emoji: "🌀" },
  { id: 25, nome: "Lightning", categoria: "Lendária", precoLoja: 97.00, emoji: "⚡" },
  { id: 26, nome: "Pain", categoria: "Lendária", precoLoja: 102.00, emoji: "💥" },
  { id: 27, nome: "Blizzard", categoria: "Lendária", precoLoja: 105.00, emoji: "🌨️" },

  // MÍTICA
  { id: 28, nome: "Gravity", categoria: "Mítica", precoLoja: 110.00, emoji: "🌌" },
  { id: 29, nome: "Mammoth", categoria: "Mítica", precoLoja: 113.00, emoji: "🦣" },
  { id: 30, nome: "T-Rex", categoria: "Mítica", precoLoja: 113.00, emoji: "🦖" },
  { id: 31, nome: "Dough", categoria: "Mítica", precoLoja: 116.00, emoji: "🍩" },
  { id: 32, nome: "Shadow", categoria: "Mítica", precoLoja: 118.00, emoji: "👤" },
  { id: 33, nome: "Venom", categoria: "Mítica", precoLoja: 120.00, emoji: "☠️" },
  { id: 34, nome: "Gas", categoria: "Mítica", precoLoja: 125.00, emoji: "☁️" },
  { id: 35, nome: "Spirit", categoria: "Mítica", precoLoja: 128.00, emoji: "✨" },
  { id: 36, nome: "Tiger", categoria: "Mítica", precoLoja: 150.00, emoji: "🐯" },
  { id: 37, nome: "Yeti", categoria: "Mítica", precoLoja: 150.00, emoji: "❄️" },
  { id: 38, nome: "Kitsune", categoria: "Mítica", precoLoja: 192.00, emoji: "🦊" },
  { id: 39, nome: "Control", categoria: "Mítica", precoLoja: 192.00, emoji: "🎮" },
  { id: 40, nome: "Dragon", categoria: "Mítica", precoLoja: 220.00, emoji: "🐉" }
];

/* =========================================================
   ELEMENTOS
========================================================= */

const fruitsGrid = document.getElementById("fruitsGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

/* =========================================================
   PREÇO
========================================================= */

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/* =========================================================
   CLASSE DE RARIDADE
========================================================= */

function rarityClass(categoria) {
  const map = {
    "Comum": "comum",
    "Incomum": "incomum",
    "Rara": "rara",
    "Lendária": "lendaria",
    "Mítica": "mitica"
  };

  return map[categoria] || "comum";
}

/* =========================================================
   CRIAR CARD
========================================================= */

function createFruitCard(fruta) {
  const rarity = rarityClass(fruta.categoria);

  const card = document.createElement("article");

  card.className = `fruit-card rarity-${rarity}`;

  card.setAttribute("role", "listitem");

  card.dataset.id = fruta.id;

  card.innerHTML = `
    <div class="fruit-image-wrap">

      <span class="fruit-emoji" aria-hidden="true">
        ${fruta.emoji}
      </span>

      <span class="fruit-badge">
        ${fruta.categoria}
      </span>

    </div>

    <div class="fruit-body">

      <h3 class="fruit-name">
        ${fruta.nome}
      </h3>

      <div class="fruit-prices">

        <span class="fruit-price">
          R$ ${formatPrice(fruta.precoLoja)}
        </span>

      </div>

      <button
        type="button"
        class="btn btn-buy"
        data-fruit-id="${fruta.id}"
        aria-label="Adquirir fruta ${fruta.nome} por R$ ${formatPrice(fruta.precoLoja)}"
      >
        Adquirir fruta
      </button>

    </div>
  `;

  return card;
}

/* =========================================================
   RENDERIZAR FRUTAS
========================================================= */

function renderFruits(list) {
  fruitsGrid.innerHTML = "";

  if (list.length === 0) {
    emptyState.hidden = false;
    resultsCount.textContent = "0 frutas encontradas";
    return;
  }

  emptyState.hidden = true;

  resultsCount.textContent =
    list.length === 1
      ? "1 fruta encontrada"
      : `${list.length} frutas encontradas`;

  const fragment = document.createDocumentFragment();

  list.forEach((fruta) => {
    fragment.appendChild(createFruitCard(fruta));
  });

  fruitsGrid.appendChild(fragment);

  observeCards();
}

/* =========================================================
   FILTROS
========================================================= */

function getFilteredFruits() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  let result = FRUITS.filter((fruta) => {

    const matchName =
      fruta.nome.toLowerCase().includes(query);

    const matchCategory =
      category === "all" ||
      fruta.categoria === category;

    return matchName && matchCategory;
  });

  switch (sort) {

    case "price-asc":
      result.sort(
        (a, b) => a.precoLoja - b.precoLoja
      );
      break;

    case "price-desc":
      result.sort(
        (a, b) => b.precoLoja - a.precoLoja
      );
      break;

    case "name-asc":
      result.sort(
        (a, b) =>
          a.nome.localeCompare(
            b.nome,
            "pt-BR"
          )
      );
      break;

    case "name-desc":
      result.sort(
        (a, b) =>
          b.nome.localeCompare(
            a.nome,
            "pt-BR"
          )
      );
      break;

    default:
      break;
  }

  return result;
}

/* =========================================================
   APLICAR FILTROS
========================================================= */

function applyFilters() {
  renderFruits(
    getFilteredFruits()
  );
}

/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp(fruta) {

  const mensagem =
    `Olá, quero comprar a fruta "${fruta.nome}" com o valor de R$ ${formatPrice(fruta.precoLoja)}.`;

  const url =
    `https://wa.me/5543984036702?text=${encodeURIComponent(mensagem)}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   ANIMAÇÃO DOS CARDS
========================================================= */

let cardObserver = null;

function observeCards() {

  if (cardObserver) {
    cardObserver.disconnect();
  }

  if (!("IntersectionObserver" in window)) {

    document
      .querySelectorAll(".fruit-card")
      .forEach((card) => {
        card.classList.add("visible");
      });

    return;
  }

  cardObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            cardObserver.unobserve(
              entry.target
            );
          }
        });

      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
    );

  document
    .querySelectorAll(
      ".fruit-card:not(.visible)"
    )
    .forEach((card) => {

      cardObserver.observe(card);

    });
}

/* =========================================================
   PARTÍCULAS DO HERO
========================================================= */

function initParticles() {

  const canvas =
    document.getElementById("particles");

  if (!canvas) return;

  const ctx =
    canvas.getContext("2d");

  if (!ctx) return;

  let particles = [];

  let width = 0;
  let height = 0;

  let animationFrame;

  function resize() {

    const hero =
      canvas.parentElement;

    if (!hero) return;

    const rect =
      hero.getBoundingClientRect();

    width = rect.width;
    height = rect.height;

    const dpr =
      Math.min(window.devicePixelRatio || 1, 2);

    canvas.width =
      width * dpr;

    canvas.height =
      height * dpr;

    canvas.style.width =
      `${width}px`;

    canvas.style.height =
      `${height}px`;

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );
  }

  function createParticles() {

    const count =
      Math.min(
        55,
        Math.max(
          20,
          Math.floor(
            (width * height) / 18000
          )
        )
      );

    particles = [];

    for (
      let i = 0;
      i < count;
      i++
    ) {

      particles.push({

        x: Math.random() * width,

        y: Math.random() * height,

        r:
          Math.random() * 1.8 +
          0.4,

        speedX:
          (Math.random() - 0.5) *
          0.25,

        speedY:
          (Math.random() - 0.5) *
          0.25,

        opacity:
          Math.random() * 0.35 +
          0.08

      });
    }
  }

  function draw() {

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    particles.forEach((p) => {

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) {
        p.x = width;
      }

      if (p.x > width) {
        p.x = 0;
      }

      if (p.y < 0) {
        p.y = height;
      }

      if (p.y > height) {
        p.y = 0;
      }

      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        p.r,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(139, 92, 246, ${p.opacity})`;

      ctx.fill();
    });

    animationFrame =
      requestAnimationFrame(draw);
  }

  resize();

  createParticles();

  draw();

  let resizeTimeout;

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(
        resizeTimeout
      );

      resizeTimeout =
        setTimeout(() => {

          resize();

          createParticles();

        }, 150);

    },
    { passive: true }
  );

  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        document.hidden
      ) {

        cancelAnimationFrame(
          animationFrame
        );

      } else {

        draw();

      }

    }
  );
}

/* =========================================================
   HEADER / MENU
========================================================= */

function initHeader() {

  if (
    !menuToggle ||
    !nav ||
    !header
  ) {
    return;
  }

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.toggle(
          "open"
        );

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Fechar menu"
          : "Abrir menu"
      );
    }
  );

  nav
    .querySelectorAll(".nav-link")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
          );
        }
      );
    });

  window.addEventListener(
    "scroll",
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 40
      );

    },
    { passive: true }
  );
}

/* =========================================================
   EVENTOS
========================================================= */

function initEvents() {

  if (
    searchInput &&
    categoryFilter &&
    sortSelect
  ) {

    searchInput.addEventListener(
      "input",
      applyFilters
    );

    categoryFilter.addEventListener(
      "change",
      applyFilters
    );

    sortSelect.addEventListener(
      "change",
      applyFilters
    );
  }

  if (fruitsGrid) {

    fruitsGrid.addEventListener(
      "click",
      (event) => {

        const button =
          event.target.closest(
            ".btn-buy"
          );

        if (!button) return;

        const id =
          Number(
            button.dataset.fruitId
          );

        const fruta =
          FRUITS.find(
            (fruit) =>
              fruit.id === id
          );

        if (fruta) {
          openWhatsApp(fruta);
        }
      }
    );
  }

  document
    .querySelectorAll(
      "[data-filter]"
    )
    .forEach((link) => {

      link.addEventListener(
        "click",
        (event) => {

          event.preventDefault();

          const category =
            link.dataset.filter;

          if (!categoryFilter) {
            return;
          }

          categoryFilter.value =
            category;

          applyFilters();

          const section =
            document.getElementById(
              "frutas"
            );

          if (section) {

            section.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }
        }
      );
    });
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderFruits(FRUITS);

    initEvents();

    initHeader();

    initParticles();

  }
);
