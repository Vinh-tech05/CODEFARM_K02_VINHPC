const a = Number(prompt(" Nhajapj vào cạnh a:"));
const b = Number(prompt(" Nhajapj vào cạnh b:"));
const c = Number(prompt(" Nhajapj vào cạnh c:"));

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isTriangle(a, b, c);
