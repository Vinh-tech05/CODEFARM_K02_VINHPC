// const arr = [1, 5, 3, 1000, null, 7, 9, 2];

// console.log(arr.sort((a, b) => a - b));

/**
 * sort(compareFn?)
 * Nếu không truyền compareFn: Sắp xếp kiểu chuỗi theo bảng mã ACSII
 * Nếu truyền (a,b) => a-b:
 * -> dương: a sau b
 * -> âm: a trước b
 * -> nếu NaN và = 0: kh đổi chỗ
 */

// const students = [
//   { id: 1, name: "Phuc", age: 22 },
//   { id: 2, name: "Thinh", age: 20 },
//   { id: 3, name: "VINH", age: 21 },
//   { id: 4, name: "VanAnh", age: 19 },
//   { id: 5, name: "Phuong", age: 21 },
// ];

// function sortByField(arr, fieldName) {
//   arr.sort((a, b) => {
//     if (typeof a[fieldName] === "number") {
//       return a[fieldName] - b[fieldName];
//     } else if (typeof a[fieldName] === "string") {
//       return a[fieldName] > b[fieldName] ? 1 : -1;
//     }
//   });
//   console.log(arr);
// }
// sortByField(students, "age");
// sortByField(students, "name");

const products = [
  { id: 1, title: "Product A", price: 200 },
  { id: 5, title: "Product E", price: 600 },
  { id: 2, title: "Product B", price: 300 },
  { id: 7, title: "Product G", price: 800 },
  { id: 3, title: "Product C", price: 400 },
  { id: 4, title: "Product D", price: 500 },
  { id: 6, title: "Product F", price: 700 },
  { id: 8, title: "Product H", price: 900 },
];
function topCheapest(arr, n) {
  return arr.sort((a, b) => a.price - b.price).slice(0, n);
}
console.log(topCheapest(products, 2));
