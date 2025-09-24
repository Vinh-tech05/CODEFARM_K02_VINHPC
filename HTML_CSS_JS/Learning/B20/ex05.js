// console.log(Math);
// console.log(typeof Math);
// console.log(Math.abs(-10));
// console.log(Math.max(1, -10, 100));
// console.log(Math.min(1, -10, 100));
// console.log(Math.pow(2, 4));

//* Cách làm tron trogn JS

// let a = 10.56789;

// console.log(a.toFixed()); //11
// console.log(a.toPrecision(4)); //10.57
// console.log(Number.parseInt(a)); //10
// console.log(Math.floor(a)); //10
// console.log(Math.ceil(a)); //11
// console.log(Math.trunc(a)); //10

// console.log(Math.floor(Math.random() * 10));

// const students = [
//   {
//     id: 1,
//     name: "A",
//   },
//   {
//     id: 2,
//     name: "B",
//   },
//   {
//     id: 3,
//     name: "C",
//   },
//   {
//     id: 4,
//     name: "D",
//   },
//   {
//     id: 7,
//     name: "E",
//   },
//   {
//     id: 10,
//     name: "F",
//   },
// ];

// function randomName(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
// console.log(randomName(students));

// function analyzeArray(arr) {
//   console.log(Math.max(...arr));
//   console.log(Math.min(...arr));

//   const T = arr.reduce((acc, num) => acc + num);
//   console.log(T);
//   const TB = (T / arr.length).toFixed(2);
//   console.log(TB);

//   const LTX = arr.reduce((acc, num) => acc + Math.floor(num));
//   console.log(Math.trunc(LTX));

//   const LTL = arr.reduce((acc, num) => acc + Math.ceil(num));

//   console.log(Math.ceil(LTL));
// }

// analyzeArray([1.5, 2.7, 3.2, 4.9]);

// function generateRandom(min, max) {
//   const a = Math.random() * (max - min) + min;
//   console.log(a.toFixed(3));
//   console.log(Math.round(a));
//   console.log(Math.floor(a));
//   console.log(Math.ceil(a));
// }
// generateRandom(1, 10);

//CHu vi tronf
function chuViTron(radius) {
  if (radius < 0) {
    console.log("Sai òi");
    return;
  }
  const CV = 2 * Math.PI * radius;
  console.log(CV.toFixed(2));
}
chuViTron(5);
