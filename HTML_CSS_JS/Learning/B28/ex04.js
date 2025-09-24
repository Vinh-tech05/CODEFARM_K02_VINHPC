const apiUrl = "http://192.168.1.28:3000/products";
let allData = [];

function renderProducts(data) {
  let content = "";
  data.forEach((item) => {
    content += `
      <li class="list-group-item">
        <strong>Tên SP: ${item.name}</strong><br> 
        <span class="text-muted">- Danh mục: ${item.type}</span><br>
        <span class="text-muted">- Giá Tiền: ${item.price} VND</span>
      </li>`;
  });
  document.getElementById("productList").innerHTML = content;
}

function allProducts() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      renderTypeOptions(data);
      renderProducts(data);
    });
}

function renderTypeOptions(data) {
  const typeSet = new Set(data.map((item) => item.type));
  const select = document.getElementById("typeFilter");
  select.innerHTML = `<option value="">Tất cả</option>`;
  typeSet.forEach((type) => {
    select.innerHTML += `<option value="${type}">${type}</option>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  allProducts();
  document.getElementById("typeFilter").addEventListener("change", function () {
    const value = this.value;
    if (value === "") {
      renderProducts(allData);
    } else {
      renderProducts(allData.filter((item) => item.type === value));
    }
  });
});
