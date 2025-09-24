const a = Number(prompt("Nhập số a vào đây: "));
const b = Number(prompt("Nhập số b vào đây: "));
const c = Number(prompt("Nhập số c vào đây: "));

function swapThreeNumbers(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Bạn phải nhập hai số hợp lệ!");
    return;
  }
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  if (a > c) {
    a = a + c;
    c = a - c;
    a = a - c;
  }
  if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
  }
  console.log("số a , b , c sau khi hoán vị là:", a, b, c);
}
swapThreeNumbers(a, b, c);
