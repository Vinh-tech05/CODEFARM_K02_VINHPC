const apiUrl = "http://localhost:3000/products";

// * Lấy các phần tử trong DOM
const productList = document.getElementById("productList");
const productForm = document.getElementById("productForm");
const productIdInput = document.getElementById("productId");
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");

//* Lấy all
function allProducts() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      productList.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.className =
          "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
          <div>
            <strong>${item.name}</strong> 
            <span class="text-muted">- ${item.price} VND</span>
          </div>
          <div>
            <button class="btn btn-sm btn-warning me-2" onclick="editProduct(${item.id}, '${item.name}', ${item.price})">Sửa</button>
            <button class="btn btn-sm btn-danger" onclick="deleteProduct(${item.id})">Xóa</button>
          </div>
        `;
        productList.appendChild(li);
      });
    })
    .catch((err) => console.log(err));
}

// * xử lý form thêm và sửa
productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = productIdInput.value;
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  if (!name || name.length < 3) {
    alert("Tên sản phẩm phải ít nhất 3 ký tự!");
    return;
  }
  if (price <= 0) {
    alert("Giá sản phẩm phải lớn hơn 0!");
    return;
  }

  const product = { name, price };

  if (id) {
    // ? Nếu có ID thì sẽ Gửi PUT để sửa sp
    fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then(() => {
        productForm.reset();
        productIdInput.value = "";
        allProducts();
      })
      .catch((err) => console.log(err));
  } else {
    // ? Ngược lại sẽ POST để thêm sp
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then(() => {
        productForm.reset();
        allProducts();
      })
      .catch((err) => console.log(err));
  }
});

//* truyền dữ liệu vào form khi ấn sửa
function editProduct(id, name, price) {
  productIdInput.value = id;
  nameInput.value = name;
  priceInput.value = price;
}

// *Xóa sản phẩm
function deleteProduct(id) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
    fetch(`${apiUrl}/${id}`, { method: "DELETE" })
      .then(() => allProducts())
      .catch((err) => console.log(err));
  }
}
// * gọi để hiển thị
allProducts();
