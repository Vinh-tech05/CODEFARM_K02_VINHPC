const a = Number(prompt(" Nhập vào cạnh a:"));
const b = Number(prompt(" Nhập vào cạnh b:"));
const c = Number(prompt(" Nhập vào cạnh c:"));

function isTriangle(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Bạn phải nhập hai số hợp lệ!");
    return;
  }
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(a, b, c));
