/**
 * Bolas Store — Script Oficial
 * Sistema Dinâmico, Animação Tech Canvas de Conexão de Partículas e Filtros Inteligentes
 */

const FRUITS = [
  // COMUM
  { id: 1, nome: "Rocket", categoria: "Comum", precoLoja: 3.00, precoBlox: 3.00, emoji: "🚀" },
  { id: 2, nome: "Spin", categoria: "Comum", precoLoja: 4.00, precoBlox: 5.00, emoji: "🌀" },
  { id: 3, nome: "Blade", categoria: "Comum", precoLoja: 5.00, precoBlox: 6.00, emoji: "🗡️" },
  { id: 4, nome: "Spring", categoria: "Comum", precoLoja: 7.00, precoBlox: 11.00, emoji: "🪢" },
  { id: 5, nome: "Bomb", categoria: "Comum", precoLoja: 9.00, precoBlox: 14.00, emoji: "💣" },
  { id: 6, nome: "Smoke", categoria: "Comum", precoLoja: 10.00, precoBlox: 16.00, emoji: "💨" },
  { id: 7, nome: "Spike", categoria: "Comum", precoLoja: 15.00, precoBlox: 24.00, emoji: "🌵" },

  // INCOMUM
  { id: 8, nome: "Flame", categoria: "Incomum", precoLoja: 22.00, precoBlox: 34.00, emoji: "🔥" },
  { id: 9, nome: "Ice", categoria: "Incomum", precoLoja: 30.00, precoBlox: 47.00, emoji: "❄️" },
  { id: 10, nome: "Sand", categoria: "Incomum", precoLoja: 34.00, precoBlox: 53.00, emoji: "🏜️" },
  { id: 11, nome: "Dark", categoria: "Incomum", precoLoja: 38.00, precoBlox: 59.00, emoji: "🌑" },
  { id: 12, nome: "Eagle", categoria: "Incomum", precoLoja: 38.50, precoBlox: 61.00, emoji: "🦅" },
  { id: 13, nome: "Diamond", categoria: "Incomum", precoLoja: 39.00, precoBlox: 62.00, emoji: "💎" },

  // RARA
  { id: 14, nome: "Light", categoria: "Rara", precoLoja: 44.00, precoBlox: 68.00, emoji: "💡" },
  { id: 15, nome: "Rubber", categoria: "Rara", precoLoja: 47.00, precoBlox: 75.00, emoji: "🎈" },
  { id: 16, nome: "Ghost", categoria: "Rara", precoLoja: 51.00, precoBlox: 79.00, emoji: "👻" },
  { id: 17, nome: "Magma", categoria: "Rara", precoLoja: 56.00, precoBlox: 81.00, emoji: "🌋" },

  // LENDÁRIA
  { id: 18, nome: "Quake", categoria: "Lendária", precoLoja: 62.00, precoBlox: 93.00, emoji: "🌊" },
  { id: 19, nome: "Buddha", categoria: "Lendária", precoLoja: 75.00, precoBlox: 103.00, emoji: "🧘" },
  { id: 20, nome: "Love", categoria: "Lendária", precoLoja: 78.00, precoBlox: 106.00, emoji: "💗" },
  { id: 21, nome: "Creation", categoria: "Lendária", precoLoja: 80.00, precoBlox: 109.00, emoji: "🛠️" },
  { id: 22, nome: "Spider", categoria: "Lendária", precoLoja: 84.00, precoBlox: 112.00, emoji: "🕷️" },
  { id: 23, nome: "Sound", categoria: "Lendária", precoLoja: 88.00, precoBlox: 118.00, emoji: "🔊" },
  { id: 24, nome: "Phoenix", categoria: "Lendária", precoLoja: 92.00, precoBlox: 125.00, emoji: "🐦" },
  { id: 25, nome: "Portal", categoria: "Lendária", precoLoja: 92.00, precoBlox: 125.00, emoji: "🌀" },
  { id: 26, nome: "Lightning", categoria: "Lendária", precoLoja: 97.00, precoBlox: 131.00, emoji: "⚡" },
  { id: 27, nome: "Pain", categoria: "Lendária", precoLoja: 102.00, precoBlox: 137.00, emoji: "💥" },
  { id: 28, nome: "Blizzard", categoria: "Lendária", precoLoja: 105.00, precoBlox: 140.00, emoji: "🌨️" },

  // MÍTICA
  { id: 29, nome: "Gravity", categoria: "Mítica", precoLoja: 110.00, precoBlox: 143.00, emoji: "🌌" },
  { id: 30, nome: "Mammoth", categoria: "Mítica", precoLoja: 113.00, precoBlox: 146.00, emoji: "🦣" },
  { id: 31, nome: "T-Rex", categoria: "Mítica", precoLoja: 113.00, precoBlox: 146.00, emoji: "🦖" },
  { id: 32, nome: "Dough", categoria: "Mítica", precoLoja: 116.00, precoBlox: 149.00, emoji: "🍩" },
  { id: 33, nome: "Shadow", categoria: "Mítica", precoLoja: 118.00, precoBlox: 151.00, emoji: "👤" },
  { id: 34, nome: "Venom", categoria: "Mítica", precoLoja: 120.00, precoBlox: 153.00, emoji: "☠️" },
  { id: 35, nome: "Gas", categoria: "Mítica", precoLoja: 125.00, precoBlox: 156.00, emoji: "☁️" },
  { id: 36, nome: "Spirit", categoria: "Mítica", precoLoja: 128.00, precoBlox: 159.00, emoji: "✨" },
  { id: 37, nome: "Tiger", categoria: "Mítica", precoLoja: 150.00, precoBlox: 187.00, emoji: "🐯" },
  { id: 38, nome: "Yeti", categoria: "Mítica", precoLoja: 150.00, precoBlox: 187.00, emoji: "❄️" },
  { id: 39, nome: "Kitsune", categoria: "Mítica", precoLoja: 192.00, precoBlox: 249.00, emoji: "🦊" },
  { id: 40, nome: "Control", categoria: "Mítica", precoLoja: 192.00, precoBlox: 249.00, emoji: "🎮" },
  { id: 41, nome: "Dragon", categoria: "Mítica", precoLoja: 220.00, precoBlox: 311.00, emoji: "🐉" }
];

/* Elementos do DOM */
const fruitsGrid = document.getElementById("fruitsGrid");
const emptyState = document.getElementById("emptyState");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const clearFiltersBtn = document.getElementById("clearFilters");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

function formatPrice(val) {
  return val.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function rarityClass(categoria) {
  const map = { "Comum": "comum", "Incomum": "incomum", "Rara": "rara", "Lendária": "lendaria", "Mítica": "mitica" };
  return map[categoria] || "comum";
}

function calcDiscount(loja, blox) {
  if (!blox || blox <= loja) return 0;
  return Math.round(((blox - loja) / blox) * 100);
}

function createFruitCard(fruta) {
  const rarity = rarityClass(fruta.categoria);
  const discount = calcDiscount(fruta.precoLoja, fruta.precoBlox);

  const card = document.createElement("article");
  card.className = `fruit-card rarity-${rarity}`;
  card.setAttribute("role", "listitem");
  card.dataset.id = fruta.id;

  const discountBadge = discount > 0 ? `<span class="fruit-discount">-${discount}% OFF</span>` : "";

  card.innerHTML = `
    <div class="fruit-image-wrap">
      <span class="fruit-emoji" aria-hidden="true">${fruta.emoji}</span>
      <span class="fruit-badge">${fruta.categoria}</span>
    </div>

    <div class="fruit-body">
      <h3 class="fruit-name">${fruta.nome}</h3>

      <div class="fruit-prices">
        <div class="price-row-ref">
          <span>Blox Fruit:</span>
          <span class="fruit-price-ref">R$ ${formatPrice(fruta.precoBlox)}</span>
          ${discountBadge}
        </div>
        <div class="price-row-main">
          <span class="price-label">Preço:</span>
          <span class="fruit-price">R$ ${formatPrice(fruta.precoLoja)}</span>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-buy"
        data-fruit-id="${fruta.id}"
        aria-label="Comprar ${fruta.nome} por R$ ${formatPrice(fruta.precoLoja)}"
      >
        Comprar na Bolas Store
      </button>
    </div>
  `;

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
  resultsCount.textContent = list.length === 1 ? "1 fruta encontrada" : `${list.length} frutas encontradas`;

  const fragment = document.createDocumentFragment();
  list.forEach((fruta) => fragment.appendChild(createFruitCard(fruta)));
  fruitsGrid.appendChild(fragment);

  observeCards();
}

function getFilteredFruits() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  let result = FRUITS.filter((fruta) => {
    const matchName = fruta.nome.toLowerCase().includes(query);
    const matchCategory = category === "all" || fruta.categoria === category;
    return matchName && matchCategory;
  });

  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.precoLoja - b.precoLoja);
      break;
    case "price-desc":
      result.sort((a, b) => b.precoLoja - a.precoLoja);
      break;
    case "discount-desc":
      result.sort((a, b) => calcDiscount(b.precoLoja, b.precoBlox) - calcDiscount(a.precoLoja, a.precoBlox));
      break;
    case "name-asc":
      result.sort((a, b) => a.nome.localeCompare(a.nome, "pt-BR"));
      break;
    case "name-desc":
      result.sort((a, b) => b.nome.localeCompare(a.nome, "pt-BR"));
      break;
  }

  return result;
}

function applyFilters() {
  renderFruits(getFilteredFruits());
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "default";
  applyFilters();
}

function openWhatsApp(fruta) {
  const mensagem = `Olá, vim pela Bolas Store e quero comprar a fruta "${fruta.nome}" por R$ ${formatPrice(fruta.precoLoja)}!`;
  const url = `https://wa.me/5543984036702?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

let cardObserver = null;
function observeCards() {
  if (cardObserver) cardObserver.disconnect();

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".fruit-card").forEach((card) => card.classList.add("visible"));
    return;
  }

  cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fruit-card:not(.visible)").forEach((card) => cardObserver.observe(card));
}

/* Animação Tecnológica Interativa de Fundo no Canvas */
function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let particles = [];
  let width = 0, height = 0;

  function resize() {
    const hero = canvas.parentElement;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    const count = Math.min(60, Math.max(25, Math.floor((width * height) / 15000)));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Desenhar linhas de conexão tech
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 0, 60, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Desenhar partículas
    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 0, 60, ${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  }, { passive: true });
}

function initHeader() {
  if (!menuToggle || !nav || !header) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
}

function initEvents() {
  if (searchInput && categoryFilter && sortSelect) {
    searchInput.addEventListener("input", applyFilters);
    categoryFilter.addEventListener("change", applyFilters);
    sortSelect.addEventListener("change", applyFilters);
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", resetFilters);
  }

  // Atalho de teclado '/' para focar na busca
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  if (fruitsGrid) {
    fruitsGrid.addEventListener("click", (event) => {
      const button = event.target.closest(".btn-buy");
      if (!button) return;
      const id = Number(button.dataset.fruitId);
      const fruta = FRUITS.find((f) => f.id === id);
      if (fruta) openWhatsApp(fruta);
    });
  }

  document.querySelectorAll("[data-filter]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.dataset.filter;
      if (categoryFilter) {
        categoryFilter.value = category;
        applyFilters();
        document.getElementById("frutas")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFruits(FRUITS);
  initEvents();
  initHeader();
  initParticles();
});
