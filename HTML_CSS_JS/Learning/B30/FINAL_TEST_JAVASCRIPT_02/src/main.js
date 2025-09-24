const products = [
  {
    id: 1,
    name: "Iphone X 64GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    price: 2000,
  },
  {
    id: 2,
    name: "Iphone 11 64GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
    price: 2800,
  },
  {
    id: 3,
    name: "Iphone 16 64GB",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/iphone_17_lavender_1_607c4326aa.png",
    price: 8000,
  },
  {
    id: 4,
    name: "Iphone 17 256GB",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/iphone_17_lavender_1_607c4326aa.png",
    price: 88000,
  },
];

const productList = document.getElementById("productList");
const cartList = document.getElementById("list-cart");
const fetchURL = "http://localhost:3000/cart";
let carts = [];

function renderProducts(data) {
  productList.innerHTML = "";
  if (data.length === 0) {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm nào</p>";
    return;
  }

  data.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${product.image}" class="product-image">
      <h3 class="product-title">${product.name}</h3>
      <div class="price-container">
        <span class="current-price"> Giá sản phẩm: ${product.price}$</span>
      </div>

      <button class="add-button" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(div);

    div.querySelector(".add-button").addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(product.id);
    });
  });
}

renderProducts(products);

function addToCart(dataId) {
  const foundProduct = products.find((item) => item.id === Number(dataId));
  const existingItem = carts.find((item) => item.id === foundProduct.id);
  if (existingItem) {
    fetch(`${fetchURL}/${existingItem.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        quantity: existingItem.quantity + 1,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      allCarts();
    });
    return;
  }
  fetch(fetchURL, {
    method: "POST",
    body: JSON.stringify({
      ...foundProduct,
      quantity: 1,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then(() => {
    allCarts();
  });
}

function allCarts() {
  fetch(fetchURL)
    .then((res) => res.json())
    .then((data) => {
      carts = data; // cập nhật carts
      cartList.innerHTML = "";
      data.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="${item.image}" class="product-image">
      <h3 class="product-title">${item.name}</h3>
      <div class="price-container">
        <span class="current-price">$${item.price}</span>
        </div>
        <span class="current-price">Số lượng: ${item.quantity}</span> <br>
        <span class="current-price">Tổng giá: ${
          item.quantity * item.price
        }</span>
        
      `;
        cartList.appendChild(div);
      });
    })
    .catch((err) => console.log(err));
}
allCarts();
