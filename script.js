/**
 * Nexus Fruits — Script premium v2
 * Vanilla JS: catálogo, filtros, imagens locais, animações fluidas
 *
 * Imagens: coloque em /imagens/ com nomes em minúsculo
 * Ex.: imagens/rocket.png, imagens/dragon.png
 * Se a imagem não carregar, o emoji de fallback aparece.
 */

const FRUITS = [
  { id: 1,  nome: "Rocket",   categoria: "Comum",   precoReferencia: 8.00,   precoLoja: 7.00,   emoji: "🚀", imagem: "imagens/rocket.png" },
  { id: 2,  nome: "Spin",     categoria: "Comum",   precoReferencia: 10.00,  precoLoja: 8.50,   emoji: "🌀", imagem: "imagens/spin.png" },
  { id: 3,  nome: "Blade",    categoria: "Comum",   precoReferencia: 15.00,  precoLoja: 13.00,  emoji: "🗡️", imagem: "imagens/blade.png" },
  { id: 4,  nome: "Spring",   categoria: "Comum",   precoReferencia: 18.00,  precoLoja: 15.50,  emoji: "🪢", imagem: "imagens/spring.png" },
  { id: 5,  nome: "Bomb",     categoria: "Comum",   precoReferencia: 20.00,  precoLoja: 17.00,  emoji: "💣", imagem: "imagens/bomb.png" },
  { id: 6,  nome: "Smoke",    categoria: "Comum",   precoReferencia: 22.00,  precoLoja: 19.00,  emoji: "💨", imagem: "imagens/smoke.png" },
  { id: 7,  nome: "Spike",    categoria: "Comum",   precoReferencia: 28.00,  precoLoja: 24.00,  emoji: "🌵", imagem: "imagens/spike.png" },

  { id: 8,  nome: "Flame",    categoria: "Incomum", precoReferencia: 45.00,  precoLoja: 39.00,  emoji: "🔥", imagem: "imagens/flame.png" },
  { id: 9,  nome: "Eagle",    categoria: "Incomum", precoReferencia: 50.00,  precoLoja: 43.00,  emoji: "🦅", imagem: "imagens/eagle.png" },
  { id: 10, nome: "Ice",      categoria: "Incomum", precoReferencia: 55.00,  precoLoja: 48.00,  emoji: "❄️", imagem: "imagens/ice.png" },
  { id: 11, nome: "Sand",     categoria: "Incomum", precoReferencia: 58.00,  precoLoja: 50.00,  emoji: "🏜️", imagem: "imagens/sand.png" },
  { id: 12, nome: "Dark",     categoria: "Incomum", precoReferencia: 65.00,  precoLoja: 56.00,  emoji: "🌑", imagem: "imagens/dark.png" },
  { id: 13, nome: "Diamond",  categoria: "Incomum", precoReferencia: 70.00,  precoLoja: 60.00,  emoji: "💎", imagem: "imagens/diamond.png" },

  { id: 14, nome: "Light",    categoria: "Rara",    precoReferencia: 85.00,  precoLoja: 74.00,  emoji: "💡", imagem: "imagens/light.png" },
  { id: 15, nome: "Rubber",   categoria: "Rara",    precoReferencia: 90.00,  precoLoja: 78.00,  emoji: "🎈", imagem: "imagens/rubber.png" },
  { id: 16, nome: "Ghost",    categoria: "Rara",    precoReferencia: 95.00,  precoLoja: 82.00,  emoji: "👻", imagem: "imagens/ghost.png" },
  { id: 17, nome: "Magma",    categoria: "Rara",    precoReferencia: 110.00, precoLoja: 95.00,  emoji: "🌋", imagem: "imagens/magma.png" },

  { id: 18, nome: "Quake",    categoria: "Lendária", precoReferencia: 140.00, precoLoja: 122.00, emoji: "🌊", imagem: "imagens/quake.png" },
  { id: 19, nome: "Buddha",   categoria: "Lendária", precoReferencia: 160.00, precoLoja: 138.00, emoji: "🧘", imagem: "imagens/buddha.png" },
  { id: 20, nome: "Love",     categoria: "Lendária", precoReferencia: 155.00, precoLoja: 135.00, emoji: "💗", imagem: "imagens/love.png" },
  { id: 21, nome: "Spider",   categoria: "Lendária", precoReferencia: 170.00, precoLoja: 148.00, emoji: "🕷️", imagem: "imagens/spider.png" },
  { id: 22, nome: "Sound",    categoria: "Lendária", precoReferencia: 175.00, precoLoja: 152.00, emoji: "🔊", imagem: "imagens/sound.png" },
  { id: 23, nome: "Phoenix",  categoria: "Lendária", precoReferencia: 190.00, precoLoja: 165.00, emoji: "🐦", imagem: "imagens/phoenix.png" },
  { id: 24, nome: "Portal",   categoria: "Lendária", precoReferencia: 200.00, precoLoja: 175.00, emoji: "🌀", imagem: "imagens/portal.png" },
  { id: 25, nome: "Blizzard", categoria: "Lendária", precoReferencia: 210.00, precoLoja: 182.00, emoji: "🌨️", imagem: "imagens/blizzard.png" },
  { id: 26, nome: "Rumble",   categoria: "Lendária", precoReferencia: 205.00, precoLoja: 178.00, emoji: "⚡", imagem: "imagens/rumble.png" },

  { id: 27, nome: "Gravity",  categoria: "Mítica",  precoReferencia: 280.00, precoLoja: 245.00, emoji: "🌌", imagem: "imagens/gravity.png" },
  { id: 28, nome: "Dough",    categoria: "Mítica",  precoReferencia: 320.00, precoLoja: 278.00, emoji: "🍩", imagem: "imagens/dough.png" },
  { id: 29, nome: "Shadow",   categoria: "Mítica",  precoReferencia: 300.00, precoLoja: 262.00, emoji: "👤", imagem: "imagens/shadow.png" },
  { id: 30, nome: "Venom",    categoria: "Mítica",  precoReferencia: 310.00, precoLoja: 270.00, emoji: "☠️", imagem: "imagens/venom.png" },
  { id: 31, nome: "Control",  categoria: "Mítica",  precoReferencia: 350.00, precoLoja: 305.00, emoji: "🎮", imagem: "imagens/control.png" },
  { id: 32, nome: "Spirit",   categoria: "Mítica",  precoReferencia: 340.00, precoLoja: 295.00, emoji: "✨", imagem: "imagens/spirit.png" },
  { id: 33, nome: "Mammoth",  categoria: "Mítica",  precoReferencia: 330.00, precoLoja: 288.00, emoji: "🦣", imagem: "imagens/mammoth.png" },
  { id: 34, nome: "T-Rex",    categoria: "Mítica",  precoReferencia: 360.00, precoLoja: 315.00, emoji: "🦖", imagem: "imagens/trex.png" },
  { id: 35, nome: "Yeti",     categoria: "Mítica",  precoReferencia: 420.00, precoLoja: 365.00, emoji: "❄️", imagem: "imagens/yeti.png" },
  { id: 36, nome: "Kitsune",  categoria: "Mítica",  precoReferencia: 550.00, precoLoja: 480.00, emoji: "🦊", imagem: "imagens/kitsune.png" },
  { id: 37, nome: "Dragon",   categoria: "Mítica",  precoReferencia: 680.00, precoLoja: 590.00, emoji: "🐉", imagem: "imagens/dragon.png" },
  { id: 38, nome: "Gas",      categoria: "Mítica",  precoReferencia: 380.00, precoLoja: 332.00, emoji: "☁️", imagem: "imagens/gas.png" },
];

const fruitsGrid = document.getElementById("fruitsGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");
const toastEl = document.getElementById("toast");
const clearFiltersBtn = document.getElementById("clearFilters");

function formatPrice(value) {
  return value.toFixed(2).replace(".", ",");
}

function calcDiscount(ref, loja) {
  return Math.round(((ref - loja) / ref) * 100);
}

function rarityClass(categoria) {
  const map = {
    Comum: "comum",
    Incomum: "incomum",
    Rara: "rara",
    Lendária: "lendaria",
    Mítica: "mitica",
  };
  return map[categoria] || "comum";
}

function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.hidden = false;
  requestAnimationFrame(() => toastEl.classList.add("show"));
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toastEl.classList.remove("show");
    setTimeout(() => { toastEl.hidden = true; }, 350);
  }, 2200);
}

function createFruitCard(fruta, index) {
  const discount = calcDiscount(fruta.precoReferencia, fruta.precoLoja);
  const rarity = rarityClass(fruta.categoria);

  const card = document.createElement("article");
  card.className = `fruit-card rarity-${rarity}`;
  card.setAttribute("role", "listitem");
  card.dataset.id = fruta.id;
  card.style.transitionDelay = `${Math.min(index * 40, 400)}ms`;

  card.innerHTML = `
    <div class="fruit-image-wrap">
      <img
        class="fruit-img"
        src="${fruta.imagem}"
        alt="Ícone da fruta ${fruta.nome}"
        loading="lazy"
        width="180"
        height="180"
        data-emoji="${fruta.emoji}"
      >
      <span class="fruit-badge">${fruta.categoria}</span>
    </div>
    <div class="fruit-body">
      <h3 class="fruit-name">${fruta.nome}</h3>
      <div class="fruit-prices">
        <span class="fruit-price">R$ ${formatPrice(fruta.precoLoja)}</span>
        <span class="fruit-price-ref">R$ ${formatPrice(fruta.precoReferencia)}</span>
        <span class="fruit-discount">-${discount}%</span>
      </div>
      <button
        type="button"
        class="btn btn-buy"
        data-fruit-id="${fruta.id}"
        aria-label="Adquirir fruta \( {fruta.nome} por R \) ${formatPrice(fruta.precoLoja)}"
      >
        Adquirir fruta
      </button>
    </div>
  `;

  const img = card.querySelector(".fruit-img");
  img.addEventListener("error", function onImgError() {
    img.removeEventListener("error", onImgError);
    const emoji = document.createElement("span");
    emoji.className = "fruit-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = fruta.emoji;
    img.replaceWith(emoji);
  });

  return card;
}

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
  list.forEach((fruta, i) => {
    fragment.appendChild(createFruitCard(fruta, i));
  });
  fruitsGrid.appendChild(fragment);
  observeCards();
}

function getFilteredFruits() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  let result = FRUITS.filter((f) => {
    const matchName = f.nome.toLowerCase().includes(query);
    const matchCat = category === "all" || f.categoria === category;
    return matchName && matchCat;
  });

  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.precoLoja - b.precoLoja);
      break;
    case "price-desc":
      result.sort((a, b) => b.precoLoja - a.precoLoja);
      break;
    case "name-asc":
      result.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
      break;
    case "name-desc":
      result.sort((a, b) => b.nome.localeCompare(a.nome, "pt-BR"));
      break;
    default:
      break;
  }

  return result;
}

function applyFilters() {
  renderFruits(getFilteredFruits());
}

function openWhatsApp(fruta) {
  const mensagem = `Olá, quero comprar a fruta "\( {fruta.nome}" com o valor de R \) ${formatPrice(fruta.precoLoja)}.`;
  const url = `https://wa.me/5543984036702?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
  showToast(`Abrindo WhatsApp — ${fruta.nome}`);
}

let cardObserver = null;

function observeCards() {
  if (cardObserver) cardObserver.disconnect();

  cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
  );

  document.querySelectorAll(".fruit-card:not(.visible)").forEach((card) => {
    cardObserver.observe(card);
  });
}

function observeReveals() {
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    revealObs.observe(el);
  });
}

function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = 0;
  let height = 0;

  function resize() {
    const hero = canvas.parentElement;
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    const count = Math.min(55, Math.floor((width * height) / 14000));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.3,
        speedX: (Math.random() - 0.5) * 0.28,
        speedY: (Math.random() - 0.5) * 0.28,
        opacity: Math.random() * 0.45 + 0.08,
        hue: Math.random() > 0.7 ? 45 : 265,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle =
        p.hue === 45
          ? `rgba(251, 191, 36, ${p.opacity * 0.7})`
          : `rgba(139, 92, 246, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      createParticles();
    }, 150);
  });
}

function initHeader() {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true }
  );
}

function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initStats() {
  const el = document.querySelector("[data-count]");
  if (!el) return;
  const target = Number(el.dataset.count);
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCount(el, target);
        obs.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  obs.observe(el);
}

function initShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.blur();
    }
  });
}

function initEvents() {
  searchInput.addEventListener("input", applyFilters);
  categoryFilter.addEventListener("change", applyFilters);
  sortSelect.addEventListener("change", applyFilters);

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      searchInput.value = "";
      categoryFilter.value = "all";
      sortSelect.value = "default";
      applyFilters();
      searchInput.focus();
    });
  }

  fruitsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-buy");
    if (!btn) return;
    const id = Number(btn.dataset.fruitId);
    const fruta = FRUITS.find((f) => f.id === id);
    if (fruta) openWhatsApp(fruta);
  });

  document.querySelectorAll("[data-filter]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      categoryFilter.value = link.dataset.filter;
      applyFilters();
      document.getElementById("frutas").scrollIntoView({ behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFruits(FRUITS);
  initEvents();
  initHeader();
  initParticles();
  observeReveals();
  initStats();
  initShortcuts();
});
