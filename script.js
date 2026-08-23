// Lista oficial de Frutas com os preços atualizados
const fruits = [
  // Comuns / Incomuns
  { id: 1, name: "Rocket", rarity: "Comum", price: 3.00, oldPrice: 3.00, emoji: "🚀" },
  { id: 2, name: "Spin", rarity: "Comum", price: 4.00, oldPrice: 5.00, emoji: "🌀" },
  { id: 3, name: "Blade", rarity: "Comum", price: 5.00, oldPrice: 6.00, emoji: "⚔️" },
  { id: 4, name: "Spring", rarity: "Comum", price: 7.00, oldPrice: 11.00, emoji: "🦶" },
  { id: 5, name: "Bomb", rarity: "Comum", price: 9.00, oldPrice: 14.00, emoji: "💣" },
  { id: 6, name: "Smoke", rarity: "Comum", price: 10.00, oldPrice: 16.00, emoji: "💨" },
  { id: 7, name: "Spike", rarity: "Comum", price: 15.00, oldPrice: 24.00, emoji: "🌵" },
  { id: 8, name: "Flame", rarity: "Incomum", price: 22.00, oldPrice: 34.00, emoji: "🔥" },
  { id: 9, name: "Ice", rarity: "Incomum", price: 30.00, oldPrice: 47.00, emoji: "🧊" },
  { id: 10, name: "Sand", rarity: "Incomum", price: 34.00, oldPrice: 53.00, emoji: "⏳" },
  { id: 11, name: "Dark", rarity: "Incomum", price: 38.00, oldPrice: 59.00, emoji: "🌑" },
  { id: 12, name: "Eagle", rarity: "Incomum", price: 61.00, oldPrice: 61.00, emoji: "🦅" },
  
  // Raras
  { id: 13, name: "Diamond", rarity: "Rara", price: 39.00, oldPrice: 62.00, emoji: "💎" },
  { id: 14, name: "Light", rarity: "Rara", price: 44.00, oldPrice: 68.00, emoji: "💡" },
  { id: 15, name: "Rubber", rarity: "Rara", price: 47.00, oldPrice: 75.00, emoji: "🥊" },
  { id: 16, name: "Ghost", rarity: "Rara", price: 51.00, oldPrice: 79.00, emoji: "👻" },
  { id: 17, name: "Magma", rarity: "Rara", price: 56.00, oldPrice: 81.00, emoji: "🌋" },

  // Lendárias
  { id: 18, name: "Quake", rarity: "Lendária", price: 62.00, oldPrice: 93.00, emoji: "🫨" },
  { id: 19, name: "Buddha", rarity: "Lendária", price: 75.00, oldPrice: 103.00, emoji: "🪙" },
  { id: 20, name: "Love", rarity: "Lendária", price: 78.00, oldPrice: 106.00, emoji: "💖" },
  { id: 21, name: "Creation", rarity: "Lendária", price: 80.00, oldPrice: 109.00, emoji: "🎨" },
  { id: 22, name: "Spider", rarity: "Lendária", price: 84.00, oldPrice: 112.00, emoji: "🕸️" },
  { id: 23, name: "Sound", rarity: "Lendária", price: 88.00, oldPrice: 118.00, emoji: "🎵" },
  { id: 24, name: "Phoenix", rarity: "Lendária", price: 92.00, oldPrice: 125.00, emoji: "🐦‍🔥" },
  { id: 25, name: "Portal", rarity: "Lendária", price: 92.00, oldPrice: 125.00, emoji: "🌀" },
  { id: 26, name: "Lightning", rarity: "Lendária", price: 97.00, oldPrice: 131.00, emoji: "⚡" },
  { id: 27, name: "Pain", rarity: "Lendária", price: 102.00, oldPrice: 137.00, emoji: "🐾" },
  { id: 28, name: "Blizzard", rarity: "Lendária", price: 105.00, oldPrice: 140.00, emoji: "❄️" },

  // Míticas
  { id: 29, name: "Gravity", rarity: "Mítica", price: 110.00, oldPrice: 143.00, emoji: "⚓" },
  { id: 30, name: "Mammoth", rarity: "Mítica", price: 113.00, oldPrice: 146.00, emoji: "🦣" },
  { id: 31, name: "T-Rex", rarity: "Mítica", price: 113.00, oldPrice: 146.00, emoji: "🦖" },
  { id: 32, name: "Dough", rarity: "Mítica", price: 116.00, oldPrice: 149.00, emoji: "🍩" },
  { id: 33, name: "Shadow", rarity: "Mítica", price: 118.00, oldPrice: 151.00, emoji: "👤" },
  { id: 34, name: "Venom", rarity: "Mítica", price: 120.00, oldPrice: 153.00, emoji: "🧪" },
  { id: 35, name: "Gas", rarity: "Mítica", price: 125.00, oldPrice: 156.00, emoji: "☁️" },
  { id: 36, name: "Spirit", rarity: "Mítica", price: 128.00, oldPrice: 159.00, emoji: "👻" },
  { id: 37, name: "Tiger", rarity: "Mítica", price: 150.00, oldPrice: 187.00, emoji: "🐅" },
  { id: 38, name: "Yeti", rarity: "Mítica", price: 150.00, oldPrice: 187.00, emoji: "☃️" },
  { id: 39, name: "Control", rarity: "Mítica", price: 192.00, oldPrice: 249.00, emoji: "🕹️" },
  { id: 40, name: "Kitsune", rarity: "Mítica", price: 192.00, oldPrice: 249.00, emoji: "🦊" },
  { id: 41, name: "Dragon", rarity: "Mítica", price: 220.00, oldPrice: 311.00, emoji: "🐉" }
];

// Configure seu telefone do WhatsApp (DDD + Número)
const PHONE_NUMBER = "5511999999999"; 

// Renderiza os Cards no Grid
function renderFruits(data) {
  const fruitsGrid = document.getElementById("fruits-grid");
  const resultsCount = document.getElementById("results-count");

  if (!fruitsGrid) return;
  fruitsGrid.innerHTML = "";

  if (!data || data.length === 0) {
    fruitsGrid.innerHTML = `
      <div class="empty-state">
        <p>Nenhuma fruta encontrada com estes filtros.</p>
      </div>
    `;
    if (resultsCount) resultsCount.textContent = "0 frutas encontradas";
    return;
  }

  if (resultsCount) {
    resultsCount.textContent = `Mostrando ${data.length} fruta(s)`;
  }

  data.forEach((fruit) => {
    const rarityClass = `rarity-${fruit.rarity.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
    const hasDiscount = fruit.oldPrice > fruit.price;
    const discount = hasDiscount ? Math.round(((fruit.oldPrice - fruit.price) / fruit.oldPrice) * 100) : 0;

    const card = document.createElement("div");
    card.className = `fruit-card ${rarityClass}`;

    card.innerHTML = `
      <div>
        <div class="fruit-image-wrap">
          <span class="fruit-badge">${fruit.rarity}</span>
          <span class="fruit-emoji">${fruit.emoji}</span>
        </div>
        <h3 class="fruit-name">${fruit.name}</h3>
      </div>

      <div>
        <div class="fruit-prices">
          ${hasDiscount ? `
            <div class="price-row-ref">
              <span class="fruit-price-ref">R$ ${fruit.oldPrice.toFixed(2)}</span>
              <span class="fruit-discount">-${discount}%</span>
            </div>
          ` : ''}
          <div class="fruit-price">R$ ${fruit.price.toFixed(2)}</div>
        </div>
        <button class="btn-buy" onclick="buyFruit('${fruit.name}', ${fruit.price})">
          Comprar
        </button>
      </div>
    `;

    fruitsGrid.appendChild(card);
  });
}

// Filtro e Busca em tempo real
function filterAndRender() {
  const searchInput = document.getElementById("search-input");
  const rarityFilter = document.getElementById("rarity-filter");
  const sortFilter = document.getElementById("sort-filter");

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const selectedRarity = rarityFilter ? rarityFilter.value : "all";
  const selectedSort = sortFilter ? sortFilter.value : "default";

  let filtered = fruits.filter((fruit) => {
    const matchesSearch = fruit.name.toLowerCase().includes(searchTerm);
    const matchesRarity = selectedRarity === "all" || fruit.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  if (selectedSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderFruits(filtered);
}

// Redirecionamento de compra para o WhatsApp
function buyFruit(name, price) {
  const message = encodeURIComponent(
    `Olá! Vim pelo site da Bolas Store e gostaria de comprar a fruta *${name}* por *R$ ${price.toFixed(2)}*.`
  );
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
}

// Inicializador Principal
function init() {
  renderFruits(fruits);

  const searchInput = document.getElementById("search-input");
  const rarityFilter = document.getElementById("rarity-filter");
  const sortFilter = document.getElementById("sort-filter");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (searchInput) searchInput.addEventListener("input", filterAndRender);
  if (rarityFilter) rarityFilter.addEventListener("change", filterAndRender);
  if (sortFilter) sortFilter.addEventListener("change", filterAndRender);

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
