//filter
const products = [
  { id: 1, name: "chuot logitech M102", price: 100, category: "hitech" },
  { id: 2, name: "ban phim co Anko 111", price: 200, category: "hitech" },
  { id: 3, name: "tai nghe samsung", price: 50, category: "hitech" },
  { id: 4, name: "ao khoac giu nhiet nam", price: 30, category: "clother" },
];

// const product = products.filter(
//   (item) => item.category === "hitech" && item.price >= 100
// );
// console.log(product);

function sortProducts(products) {
  for (let i = 0; i < products.length - 1; i++) {
    for (let j = 0; j < products.length; j++) {
      if (products[i] > products[j]) {
        let temp = products[i];
        products[i] = products[j];
        products[j] = temp;
      }
    }
  }
  console.log(products);
}
sortProducts(products);
