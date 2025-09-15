const products = [
  {
    name: "Sony Playstation 5",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/playstation_5_tywoqq.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739038/samsung_galaxy_iad0cv.png",
    type: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739063/cannon_eos_camera_ydidrx.png",
    type: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_a7_camera_xvkxwd.png",
    type: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/lg_tv_yl0k03.png",
    type: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/nintendo_switch_diq6cy.png",
    type: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/xbox_series_x_e9yex6.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/samsung_tv_adpfag.png",
    type: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739064/google_pixel_r2bpdo.png",
    type: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_zv1f_camera_o7kt3t.png",
    type: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/toshiba_tv_sdsrnz.png",
    type: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739062/iphone_14_fhu2gq.png",
    type: "smartphones",
    price: 999.99,
  },
];
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const sortSelect = document.getElementById("sortSelect");

function renderProducts(data) {
  productList.innerHTML = "";
  if (data.length === 0) {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm nào</p>";
    return;
  }

  data.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.url}" class="product-image">
      <h3 class="product-title">${product.name}</h3>
      <div class="product-type">${product.type}</div>
      <div class="price-container">
        <span class="current-price">$${product.price}</span>
      </div>
      <button class="add-button">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function filterProducts() {
  let filtered = [...products];

  const selectedTypes = Array.from(checkboxes)
    .filter((product) => product.checked)
    .map((product) => product.value);

  if (selectedTypes.length > 0) {
    filtered = filtered.filter((product) =>
      selectedTypes.includes(product.type)
    );
  }

  const keyword = searchInput.value.toLowerCase();
  if (keyword) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(keyword)
    );
  }

  if (sortSelect.value === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
checkboxes.forEach((product) =>
  product.addEventListener("change", filterProducts)
);
sortSelect.addEventListener("change", filterProducts);

renderProducts(products);

const btn = document.getElementById("trollBtn");
btn.style.position = "absolute";
btn.style.top = "100px";
btn.style.left = "100px";

btn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - btn.offsetWidth);
  const y = Math.random() * (window.innerHeight - btn.offsetHeight);
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
});
