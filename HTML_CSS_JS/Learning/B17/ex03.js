// const arr = [1, 2, 3, 4];
// const result = arr.reduce((pre, cur, index, arr) => {
//   console.log({ pre, cur, index, arr });
// });

// const products = [
//   { id: 1, title: "Product A", price: 200, quantity: 1 },
//   { id: 5, title: "Product E", price: 600, quantity: 2 },
//   { id: 2, title: "Product B", price: 300, quantity: 4 },
//   { id: 7, title: "Product G", price: 800, quantity: 5 },
//   { id: 3, title: "Product C", price: 400, quantity: 1 },
//   { id: 4, title: "Product D", price: 500, quantity: 10 },
//   { id: 6, title: "Product F", price: 700, quantity: 12 },
//   { id: 8, title: "Product H", price: 900, quantity: 3 },
// ];

// const result = products.reduce((pre, cur) => {
//   return (pre += cur.price * cur.quantity);
// }, 0);

// const animals = ["phuong", "thinh", "thuan", "quoc", "lam", "phuong", "thuan"];

// const countAnimals = animals.reduce((acc, cur) => {
//   if (acc[cur]) {
//     acc[cur]++;
//   } else {
//     acc[cur] = 1;
//   }
//   return acc;
// }, {});
// console.log(countAnimals);

const students = [
  { id: 1, name: "Vinh", address: "Suoi Hai" },
  { id: 2, name: "Phuong", address: "Dai Xuyen" },
  { id: 3, name: "Hoang", address: "Bac Ninh" },
  { id: 4, name: "Quang", address: "Suoi Hai" },
  { id: 5, name: "Thuan", address: "Quang Bi" },
  { id: 6, name: "Thinh", address: "Quang Bi" },
];

/**
 * * Dùng reduce để phân nhóm các học viên theo quê quán.
 */
const student = students.reduce((acc, cur) => {
  if (!acc[cur.address]) {
    acc[cur.address] = [];
  }
  acc[cur.address].push(cur);
  return acc;
}, {});

console.log(student);
