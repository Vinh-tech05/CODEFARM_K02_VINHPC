const m = Number(prompt("Nhập số: "));
console.log(`Các số nguyên tố từ 2 đến ${m} là:`);
function printPrimeNumber(n) {
  if (typeof m !== "number" || Number.isNaN(m)) {
    console.log("Invalid");
    return;
  }
  for (let i = 2; i <= m; i++) {
    let isPrime = true;
    for (let x = 2; x <= Math.sqrt(i); x++) {
      if (i % x === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

printPrimeNumber(m);
