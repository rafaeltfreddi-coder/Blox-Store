// Lista completa de todas as Frutas do Blox Fruits
const fruits = [
  { id: 1, name: "Kitsune", rarity: "Mítica", price: 35.00, oldPrice: 45.00, emoji: "🦊" },
  { id: 2, name: "Dragon", rarity: "Mítica", price: 30.00, oldPrice: 40.00, emoji: "🐉" },
  { id: 3, name: "Leopard", rarity: "Mítica", price: 25.00, oldPrice: 32.00, emoji: "🐆" },
  { id: 4, name: "Dough", rarity: "Mítica", price: 18.00, oldPrice: 22.00, emoji: "🍩" },
  { id: 5, name: "TRex", rarity: "Mítica", price: 16.00, oldPrice: 20.00, emoji: "🦖" },
  { id: 6, name: "Mammoth", rarity: "Mítica", price: 14.00, oldPrice: 18.00, emoji: "🦣" },
  { id: 7, name: "Venom", rarity: "Mítica", price: 12.00, oldPrice: 15.00, emoji: "🧪" },
  { id: 8, name: "Spirit", rarity: "Mítica", price: 12.00, oldPrice: 15.00, emoji: "👻" },
  { id: 9, name: "Shadow", rarity: "Mítica", price: 11.00, oldPrice: 14.00, emoji: "👤" },
  { id: 10, name: "Gravity", rarity: "Mítica", price: 10.00, oldPrice: 13.00, emoji: "⚓" },
  { id: 11, name: "Blizzard", rarity: "Lendária", price: 9.00, oldPrice: 12.00, emoji: "❄️" },
  { id: 12, name: "Buddha", rarity: "Lendária", price: 10.00, oldPrice: 13.00, emoji: "🪙" },
  { id: 13, name: "Portal", rarity: "Lendária", price: 9.00, oldPrice: 12.00, emoji: "🌀" },
  { id: 14, name: "Rumble", rarity: "Lendária", price: 8.00, oldPrice: 10.00, emoji: "⚡" },
  { id: 15, name: "Sound", rarity: "Lendária", price: 8.00, oldPrice: 10.00, emoji: "🎵" },
  { id: 16, name: "Phoenix", rarity: "Lendária", price: 7.00, oldPrice: 9.00, emoji: "🔥" },
  { id: 17, name: "Spider", rarity: "Lendária", price: 6.00, oldPrice: 8.00, emoji: "🕸️" },
  { id: 18, name: "Love", rarity: "Lendária", price: 6.00, oldPrice: 8.00, emoji: "💖" },
  { id: 19, name: "Quake", rarity: "Lendária", price: 5.00, oldPrice: 7.00, emoji: "🫨" },
  { id: 20, name: "Magma", rarity: "Rara", price: 5.00, oldPrice: 7.00, emoji: "🌋" },
  { id: 21, name: "Ghost", rarity: "Rara", price: 4.50, oldPrice: 6.00, emoji: "👻" },
  { id: 22, name: "Light", rarity: "Rara", price: 4.00, oldPrice: 6.00, emoji: "💡" },
  { id: 23, name: "Rubber", rarity: "Rara", price: 3.50, oldPrice: 5.00, emoji: "🥊" },
  { id: 24, name: "Barrier", rarity: "Rara", price: 3.00, oldPrice: 4.50, emoji: "🛡️" },
  { id: 25, name: "Ice", rarity: "Incomum", price: 3.00, oldPrice: 4.00, emoji: "🧊" },
  { id: 26, name: "Flame", rarity: "Incomum", price: 2.50, oldPrice: 3.50, emoji: "🔥" },
  { id: 27, name: "Sand", rarity: "Incomum", price: 2.50, oldPrice: 3.50, emoji: "⏳" },
  { id: 28, name: "Dark", rarity: "Incomum", price: 2.50, oldPrice: 3.50, emoji: "🌑" },
  { id: 29, name: "Chop", rarity: "Comum", price: 1.50, oldPrice: 2.00, emoji: "⚔️" },
  { id: 30, name: "Rocket", rarity: "Comum", price: 1.00, oldPrice: 1.50, emoji: "🚀" }
];

// WhatsApp oficial
const PHONE_NUMBER = "5511999999999"; 

// Renderizador dos Cards de Fruta
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
    const discount = Math.round(((fruit.oldPrice - fruit.price) / fruit.oldPrice) * 100);

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
          <div class="price-row-ref">
            <span class="fruit-price-ref">R$ ${fruit.oldPrice.toFixed(2)}</span>
            <span class="fruit-discount">-${discount}%</span>
          </div>
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

// Filtro e Busca
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

// Ação do Botão Comprar (WhatsApp)
function buyFruit(name, price) {
  const message = encodeURIComponent(
    `Olá! Vim pelo site da Bolas Store e gostaria de comprar a fruta *${name}* por *R$ ${price.toFixed(2)}*.`
  );
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
}

// Inicialização Principal
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

  // Menu Hambúrguer (Mobile)
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Atalho CTRL + K para focar na busca
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });
}

// Execução garantida
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
