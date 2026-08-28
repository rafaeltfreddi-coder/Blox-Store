/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const PHONE_NUMBER = "5543984036702";


/* =========================================================
   URL BASE DAS IMAGENS DA BEEBOM
========================================================= */

const IMAGE_BASE =
  "https://static.beebom.com/wp-content/uploads/2026/01/";


/* =========================================================
   FRUTAS
========================================================= */

const fruits = [

  /* =========================
     COMUNS
  ========================= */

  {
    id: 1,
    name: "Rocket Permanente",
    rarity: "Comum",
    price: 3.00,
    oldPrice: 3.00,
    image: IMAGE_BASE + "Rocket_Fruit.png.webp?w=400"
  },

  {
    id: 2,
    name: "Spin Permanente",
    rarity: "Comum",
    price: 4.00,
    oldPrice: 5.00,
    image: IMAGE_BASE + "Spin_Fruit.png.webp?w=400"
  },

  {
    id: 3,
    name: "Blade Permanente",
    rarity: "Comum",
    price: 5.00,
    oldPrice: 6.00,
    image: IMAGE_BASE + "Blade_Fruit.png.webp?w=400"
  },

  {
    id: 4,
    name: "Spring Permanente",
    rarity: "Comum",
    price: 7.00,
    oldPrice: 11.00,
    image: IMAGE_BASE + "Spring_Fruit.png.webp?w=400"
  },

  {
    id: 5,
    name: "Bomb Permanente",
    rarity: "Comum",
    price: 9.00,
    oldPrice: 14.00,
    image: IMAGE_BASE + "Bomb_Fruit.png.webp?w=400"
  },

  {
    id: 6,
    name: "Smoke Permanente",
    rarity: "Comum",
    price: 10.00,
    oldPrice: 16.00,
    image: IMAGE_BASE + "Smoke_Fruit.png.webp?w=400"
  },

  {
    id: 7,
    name: "Spike Permanente",
    rarity: "Comum",
    price: 15.00,
    oldPrice: 24.00,
    image: IMAGE_BASE + "Spike_Fruit.png.webp?w=400"
  },


  /* =========================
     INCOMUNS
  ========================= */

  {
    id: 8,
    name: "Flame Permanente",
    rarity: "Incomum",
    price: 22.00,
    oldPrice: 34.00,
    image:
      IMAGE_BASE +
      "Flame_Fruit.png.webp?quality=75&w=1024"
  },

  {
    id: 9,
    name: "Ice Permanente",
    rarity: "Incomum",
    price: 30.00,
    oldPrice: 47.00,
    image: IMAGE_BASE + "Ice_Fruit.png.webp?w=400"
  },

  {
    id: 10,
    name: "Sand Permanente",
    rarity: "Incomum",
    price: 34.00,
    oldPrice: 53.00,
    image: IMAGE_BASE + "Sand_Fruit.png.webp?w=400"
  },

  {
    id: 11,
    name: "Dark Permanente",
    rarity: "Incomum",
    price: 38.00,
    oldPrice: 59.00,
    image: IMAGE_BASE + "Dark_Fruit.png.webp?w=400"
  },

  {
    id: 12,
    name: "Eagle Permanente",
    rarity: "Incomum",
    price: 61.00,
    oldPrice: 61.00,
    image:
      IMAGE_BASE +
      "Eagle_Fruit.png.webp?quality=75&w=1024"
  },


  /* =========================
     RARAS
  ========================= */

  {
    id: 13,
    name: "Diamond Permanente",
    rarity: "Rara",
    price: 39.00,
    oldPrice: 62.00,
    image: IMAGE_BASE + "Diamond_Fruit.png.webp?w=400"
  },

  {
    id: 14,
    name: "Light Permanente",
    rarity: "Rara",
    price: 44.00,
    oldPrice: 68.00,
    image: IMAGE_BASE + "Light_Fruit.png.webp?w=400"
  },

  {
    id: 15,
    name: "Rubber Permanente",
    rarity: "Rara",
    price: 47.00,
    oldPrice: 75.00,
    image: IMAGE_BASE + "Rubber_Fruit.png.webp?w=400"
  },

  {
    id: 16,
    name: "Ghost Permanente",
    rarity: "Rara",
    price: 51.00,
    oldPrice: 79.00,
    image: IMAGE_BASE + "Ghost_Fruit.png.webp?w=400"
  },

  {
    id: 17,
    name: "Magma Permanente",
    rarity: "Rara",
    price: 56.00,
    oldPrice: 81.00,
    image: IMAGE_BASE + "Magma_Fruit.png.webp?w=400"
  },


  /* =========================
     LENDÁRIAS
  ========================= */

  {
    id: 18,
    name: "Quake Permanente",
    rarity: "Lendária",
    price: 62.00,
    oldPrice: 93.00,
    image: IMAGE_BASE + "Quake_Fruit.png.webp?w=400"
  },

  {
    id: 19,
    name: "Buddha Permanente",
    rarity: "Lendária",
    price: 75.00,
    oldPrice: 103.00,
    image: IMAGE_BASE + "Buddha_Fruit.png.webp?w=400"
  },

  {
    id: 20,
    name: "Love Permanente",
    rarity: "Lendária",
    price: 78.00,
    oldPrice: 106.00,
    image: IMAGE_BASE + "Love_Fruit.png.webp?w=400"
  },

  {
    id: 21,
    name: "Creation Permanente",
    rarity: "Lendária",
    price: 80.00,
    oldPrice: 109.00,
    image:
      IMAGE_BASE +
      "Creation_Fruit.webp?quality=75&w=420"
  },

  {
    id: 22,
    name: "Spider Permanente",
    rarity: "Lendária",
    price: 84.00,
    oldPrice: 112.00,
    image: IMAGE_BASE + "Spider_Fruit.png.webp?w=400"
  },

  {
    id: 23,
    name: "Sound Permanente",
    rarity: "Lendária",
    price: 88.00,
    oldPrice: 118.00,
    image: IMAGE_BASE + "Sound_Fruit.png.webp?w=400"
  },

  {
    id: 24,
    name: "Phoenix Permanente",
    rarity: "Lendária",
    price: 92.00,
    oldPrice: 125.00,
    image: IMAGE_BASE + "Phoenix_Fruit.png.webp?w=400"
  },

  {
    id: 25,
    name: "Portal Permanente",
    rarity: "Lendária",
    price: 92.00,
    oldPrice: 125.00,
    image: IMAGE_BASE + "Portal_Fruit.png.webp?w=400"
  },

  {
    id: 26,
    name: "Lightning Permanente",
    rarity: "Lendária",
    price: 97.00,
    oldPrice: 131.00,
    image: IMAGE_BASE + "Lightning_Fruit.png.webp?w=400"
  },

  {
    id: 27,
    name: "Pain Permanente",
    rarity: "Lendária",
    price: 102.00,
    oldPrice: 137.00,
    image: IMAGE_BASE + "Pain_Fruit.png.webp?w=400"
  },

  {
    id: 28,
    name: "Blizzard Permanente",
    rarity: "Lendária",
    price: 105.00,
    oldPrice: 140.00,
    image: IMAGE_BASE + "Blizzard_Fruit.png.webp?w=400"
  },


  /* =========================
     MÍTICAS
  ========================= */

  {
    id: 29,
    name: "Gravity Permanente",
    rarity: "Mítica",
    price: 110.00,
    oldPrice: 143.00,
    image:
      IMAGE_BASE +
      "Gravity_Fruit.png.webp?quality=75&w=1024"
  },

  {
    id: 30,
    name: "Mammoth Permanente",
    rarity: "Mítica",
    price: 113.00,
    oldPrice: 146.00,
    image: IMAGE_BASE + "Mammoth_Fruit.png.webp?w=400"
  },

  {
    id: 31,
    name: "T-Rex Permanente",
    rarity: "Mítica",
    price: 113.00,
    oldPrice: 146.00,
    image: IMAGE_BASE + "T-Rex_Fruit.png.webp?w=400"
  },

  {
    id: 32,
    name: "Dough Permanente",
    rarity: "Mítica",
    price: 116.00,
    oldPrice: 149.00,
    image: IMAGE_BASE + "Dough_Fruit.png.webp?w=400"
  },

  {
    id: 33,
    name: "Shadow Permanente",
    rarity: "Mítica",
    price: 118.00,
    oldPrice: 151.00,
    image: IMAGE_BASE + "Shadow_Fruit.png.webp?w=400"
  },

  {
    id: 34,
    name: "Venom Permanente",
    rarity: "Mítica",
    price: 120.00,
    oldPrice: 153.00,
    image: IMAGE_BASE + "Venom_Fruit.png.webp?w=400"
  },

  {
    id: 35,
    name: "Gas Permanente",
    rarity: "Mítica",
    price: 125.00,
    oldPrice: 156.00,
    image:
      IMAGE_BASE +
      "Gas_Fruit.png.webp?quality=75&w=1024"
  },

  {
    id: 36,
    name: "Spirit Permanente",
    rarity: "Mítica",
    price: 128.00,
    oldPrice: 159.00,
    image: IMAGE_BASE + "Spirit_Fruit.png.webp?w=400"
  },

  {
    id: 37,
    name: "Tiger Permanente",
    rarity: "Mítica",
    price: 150.00,
    oldPrice: 187.00,
    image:
      IMAGE_BASE +
      "Tiger_Fruit.png.webp?quality=75&w=1024"
  },

  {
    id: 38,
    name: "Yeti Permanente",
    rarity: "Mítica",
    price: 150.00,
    oldPrice: 187.00,
    image: IMAGE_BASE + "Yeti_Fruit.png.webp?w=151"
  },

  {
    id: 39,
    name: "Control Permanente",
    rarity: "Mítica",
    price: 192.00,
    oldPrice: 249.00,
    image:
      IMAGE_BASE +
      "Control_Fruit.png.webp?w=854"
  },

  {
    id: 40,
    name: "Kitsune Permanente",
    rarity: "Mítica",
    price: 192.00,
    oldPrice: 249.00,
    image:
      IMAGE_BASE +
      "Kitsune_Fruit.png.webp?quality=75&w=1024"
  },

  {
    id: 41,
    name: "Dragon Permanente",
    rarity: "Mítica",
    price: 220.00,
    oldPrice: 311.00,
    image:
      IMAGE_BASE +
      "Dragon_Fruit.png.webp?w=150"
  }

];


/* =========================================================
   UTILIDADES
========================================================= */

function rarityClass(rarity) {

  return (
    "rarity-" +
    rarity
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
  );

}


function formatPrice(price) {

  return price.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }
  );

}


function calculateDiscount(oldPrice, price) {

  if (!oldPrice || oldPrice <= price) {
    return 0;
  }

  return Math.round(
    ((oldPrice - price) / oldPrice) * 100
  );

}


/* =========================================================
   RENDERIZAR FRUTAS
========================================================= */

function renderFruits(data) {

  const grid =
    document.getElementById("fruits-grid");

  const results =
    document.getElementById("results-count");

  if (!grid) return;


  grid.innerHTML = "";


  if (!data.length) {

    grid.innerHTML = `
      <div class="empty-state">
        <p>
          Nenhuma fruta encontrada.
        </p>
      </div>
    `;

    if (results) {
      results.textContent =
        "0 frutas encontradas";
    }

    return;
  }


  if (results) {

    results.textContent =
      `Mostrando ${data.length} fruta${data.length !== 1 ? "s" : ""}`;

  }


  const fragment =
    document.createDocumentFragment();


  data.forEach((fruit, index) => {

    const discount =
      calculateDiscount(
        fruit.oldPrice,
        fruit.price
      );


    const card =
      document.createElement("article");

    card.className =
      `fruit-card ${rarityClass(fruit.rarity)}`;


    card.style.animationDelay =
      `${Math.min(index * 0.025, .35)}s`;


    card.innerHTML = `

      <div>

        <div class="fruit-image-wrap">

          <span class="fruit-badge">
            ${fruit.rarity}
          </span>

          <img
            class="fruit-image"
            src="${fruit.image}"
            alt="${fruit.name}"
            loading="lazy"
            decoding="async"
          >

        </div>


        <h3 class="fruit-name">
          ${fruit.name}
        </h3>

      </div>


      <div>

        <div class="fruit-prices">

          ${
            discount > 0
              ? `
                <div class="price-old-row">

                  <span class="old-price">
                    ${formatPrice(fruit.oldPrice)}
                  </span>

                  <span class="discount">
                    -${discount}%
                  </span>

                </div>
              `
              : ""
          }


          <div class="current-price">
            ${formatPrice(fruit.price)}
          </div>

        </div>


        <button
          class="btn-buy"
          type="button"
          data-fruit-id="${fruit.id}"
        >
          Comprar
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

  const search =
    document
      .getElementById("search-input")
      ?.value
      .toLowerCase()
      .trim() || "";


  const rarity =
    document
      .getElementById("rarity-filter")
      ?.value || "all";


  const sort =
    document
      .getElementById("sort-filter")
      ?.value || "default";


  let filtered =
    fruits.filter((fruit) => {

      const matchesSearch =
        fruit.name
          .toLowerCase()
          .includes(search);


      const matchesRarity =
        rarity === "all" ||
        fruit.rarity === rarity;


      return (
        matchesSearch &&
        matchesRarity
      );

    });


  switch (sort) {

    case "price-asc":

      filtered.sort(
        (a, b) =>
          a.price - b.price
      );

      break;


    case "price-desc":

      filtered.sort(
        (a, b) =>
          b.price - a.price
      );

      break;


    case "name":

      filtered.sort(
        (a, b) =>
          a.name.localeCompare(
            b.name,
            "pt-BR"
          )
      );

      break;

  }


  renderFruits(filtered);

}


/* =========================================================
   WHATSAPP
========================================================= */

function buyFruit(id) {

  const fruit =
    fruits.find(
      item => item.id === Number(id)
    );


  if (!fruit) return;


  const message = encodeURIComponent(
    `Olá! Vim pelo site da Bolas Store e gostaria de comprar a fruta *${fruit.name}* por *${formatPrice(fruit.price)}*.`
  );


  const url =
    `https://wa.me/${PHONE_NUMBER}?text=${message}`;


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   EVENTO DOS BOTÕES
========================================================= */

function setupBuyButtons() {

  const grid =
    document.getElementById("fruits-grid");


  if (!grid) return;


  grid.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(".btn-buy");


      if (!button) return;


      const id =
        button.dataset.fruitId;


      buyFruit(id);

    }
  );

}


/* =========================================================
   FRUTAS FLUTUANTES NO FUNDO
========================================================= */

function createFloatingFruits() {

  const container =
    document.getElementById(
      "floating-fruits"
    );


  if (!container) return;


  /*
    Escolhemos algumas frutas para o
    fundo para não deixar a tela pesada.
  */

  const backgroundFruits = [

    fruits.find(
      fruit => fruit.name.startsWith("Dragon")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Kitsune")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Tiger")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Yeti")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Dough")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Light")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Portal")
    ),

    fruits.find(
      fruit => fruit.name.startsWith("Flame")
    )

  ].filter(Boolean);


  const amount =
    window.innerWidth < 700
      ? 5
      : 9;


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const fruit =
      backgroundFruits[
        i % backgroundFruits.length
      ];


    const img =
      document.createElement("img");


    img.className =
      "floating-fruit";


    img.src =
      fruit.image;


    img.alt = "";


    const size =
      65 +
      Math.random() * 85;


    const startX =
      Math.random() * 100;


    const startY =
      Math.random() * 100;


    const moveX =
      (Math.random() * 150) - 75;


    const moveY =
      (Math.random() * 150) - 75;


    const opacity =
      0.035 +
      Math.random() * 0.06;


    const blur =
      Math.random() > .65
        ? "2px"
        : "0px";


    const duration =
      10 +
      Math.random() * 15;


    const delay =
      Math.random() * -15;


    const rotation =
      Math.random() * 30 - 15;


    img.style.setProperty(
      "--size",
      `${size}px`
    );


    img.style.setProperty(
      "--opacity",
      opacity
    );


    img.style.setProperty(
      "--blur",
      blur
    );


    img.style.setProperty(
      "--duration",
      `${duration}s`
    );


    img.style.setProperty(
      "--delay",
      `${delay}s`
    );


    img.style.setProperty(
      "--rotate",
      `${rotation}deg`
    );


    img.style.setProperty(
      "--x1",
      `${startX}vw`
    );


    img.style.setProperty(
      "--y1",
      `${startY}vh`
    );


    img.style.setProperty(
      "--x2",
      `${startX + moveX / 10}vw`
    );


    img.style.setProperty(
      "--y2",
      `${startY + moveY / 10}vh`
    );


    container.appendChild(img);

  }

}


/* =========================================================
   MENU MOBILE
========================================================= */

function setupMenu() {

  const toggle =
    document.getElementById(
      "menu-toggle"
    );

  const nav =
    document.getElementById(
      "nav-menu"
    );


  if (!toggle || !nav) return;


  toggle.addEventListener(
    "click",
    () => {

      const open =
        nav.classList.toggle(
          "open"
        );


      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );

    }
  );


  nav
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );

          toggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =========================================================
   CTRL + K
========================================================= */

function setupSearchShortcut() {

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {

        event.preventDefault();


        const input =
          document.getElementById(
            "search-input"
          );


        if (input) {

          input.focus();

          input.select();

        }

      }

    }
  );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

  const toast =
    document.getElementById("toast");


  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2800);

}


/* =========================================================
   IMAGEM FALLBACK
========================================================= */

function setupImageFallback() {

  const grid =
    document.getElementById(
      "fruits-grid"
    );


  if (!grid) return;


  grid.addEventListener(
    "error",
    (event) => {

      if (
        event.target.tagName !==
        "IMG"
      ) {
        return;
      }


      /*
        Caso a Beebom altere/remova uma
        imagem, evita quebrar o card.
      */

      event.target.style.opacity =
        "0.15";

    },
    true
  );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function init() {

  renderFruits(fruits);

  createFloatingFruits();

  setupBuyButtons();

  setupMenu();

  setupSearchShortcut();

  setupImageFallback();


  const searchInput =
    document.getElementById(
      "search-input"
    );

  const rarityFilter =
    document.getElementById(
      "rarity-filter"
    );

  const sortFilter =
    document.getElementById(
      "sort-filter"
    );


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

}


if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
