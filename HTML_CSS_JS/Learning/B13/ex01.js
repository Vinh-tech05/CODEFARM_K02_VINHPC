/**
 * while
 */

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i <= 100) {
//   console.log(i++);
//   i += 2;
// }

/**
 * do-while
 */
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

/**
 * in ra số nguyên tố lớn nhất nhỏ hơn n
 */
function printPrimeNumber(n) {
  for (let i = n; i >= 2; i--) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
      return;
    }
  }
}
printPrimeNumber(10);
