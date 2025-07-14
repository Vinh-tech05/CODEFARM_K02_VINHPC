const a = Number(prompt("Nhập số a vào đây: "));
const b = Number(prompt("Nhập số b vào đây: "));
function swapNumber(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("Số a và b sau khi hoán vị nè: ", a, b);
}
swapNumber(a, b);
