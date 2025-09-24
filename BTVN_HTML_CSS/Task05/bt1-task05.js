const n = Number(prompt("Nhập số: "));
console.log(`Các số chính phương từ 2 đến ${n} là:`);
function printSquareNumber(n) {
  for (let i = 2; i <= n; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
}
printSquareNumber(n);
