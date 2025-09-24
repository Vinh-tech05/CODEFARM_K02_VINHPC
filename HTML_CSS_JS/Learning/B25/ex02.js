// ? setTimeout(function, delay)
// * function sẽ được thực hiện sau 1 khoảng `delay` tính theo ms

// setTimeout(
//   (name) => {
//     console.log(`hello ${name}`);
//   },
//   2000,
//   "Thay Hoang"
// );

console.log("Công việc 1");
const ID = setTimeout(() => {
  console.log("Công việc 2");
}, 0);
console.log("Công việc 3");

clearTimeout(ID);
