const a = Number(prompt("Nhập số n :  "));
const b = prompt("Nhập kí tự");
function cayThong(a, b) {
  if (!Number.isInteger(a) || a <= 0 || a >= 100) {
    console.log("Chiều cao phải là số nguyên dương nhỏ hơn 100.");
    return;
  }

  if (typeof b !== "string" || b.length !== 1) {
    console.log("Ký tự phải là một ký tự duy nhất.");
    return;
  }
  for (let i = 1; i <= a; i++) {
    let row = "";
    for (let j = 0; j < a - i; j++) {
      row += " ";
    }
    for (let p = 0; p < 2 * i - 1; p++) {
      row += b;
    }
    console.log(row);
  }
  let trunk = " ".repeat(a - 1) + b;
  console.log(trunk);
}
cayThong(a, b);
