const url = "http://localhost:3000/products";

const productsElement = document.getElementById("products");

const titleEle = document.getElementById("title");
const priceEle = document.getElementById("price");
const formProduct = document.getElementById("product-form");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let content = "";
    data.forEach((item) => {
      content += /*html*/ `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>
            <button>Delete</button>
            <button>Update</button>
          </td>
        </tr>
        `;
    });
    productsElement.innerHTML = content;
  })
  .catch((err) => {
    console.log(err);
  });

formProduct.addEventListener("submit", function (event) {
  event.preventDefault();

  //   const title = titleEle.value;
  //   const price = priceEle.value;

  //   console.log({ title, price });

  const formData = new FormData(formProduct);
  const data = Object.fromEntries(formData);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
});
