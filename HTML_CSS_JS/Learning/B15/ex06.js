// const arr = [10, 11, 12];

// arr.forEach((item, index, thisArr) => {
//   console.log(`item; ${item}`);
//   console.log(`index; ${index}`);
//   console.log(`thisArr,; ${thisArr}`);
// });

let students = ["H", "T", "V"];

let stringContent = "Danh sasch sinh vieen ";

students.forEach((item) => {
  stringContent += `${item}`;
});

console.log(stringContent);
// document.write(stringContent);

// const arr2 = [
//   { id: 1, firstName: "Hoang", lastName: "Nguyen Minh" },
//   { id: 2, firstName: "Huy", lastName: "Hoang Thanh" },
//   { id: 3, firstName: "Dat", lastName: "Trinh Quoc" },
// ];

// let arr3 = [];
// arr2.forEach((item) => {
//   item.fullName = `${item.lastName}` + `${item.firstName}`;
//   arr3.push(item);
// });

// console.log(arr3);

//MAP
// const result = [1, 2, 3, 4].map((item) => item * 2);
// console.log(result);
// const result2 = arr2.map((item) => {
//   item.fullName = item.lastName + " " + item.firstName;
//   return item;
// });
// console.log(result2);

const products = [
  { id: 1, title: "IP16PRM", price: 30_000_000, quantity: 10 },
  { id: 2, title: "Rau", price: 10_000, quantity: 20 },
  { id: 3, title: "MACM4", price: 60_000_000, quantity: 2 },
];

const products2 = products.map((item) => {
  /**Copy object cũ sang object mới, sau đó thay đổi trên object mới */
  return { ...item, cost: item.price * item.quantity };
});
console.log(products2);
console.log(products);
