const a = Number(prompt(" Nhập vào cạnh a:"));
const b = Number(prompt(" Nhập vào cạnh b:"));
const c = Number(prompt(" Nhập vào cạnh c:"));

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isTriangle(a, b, c);
