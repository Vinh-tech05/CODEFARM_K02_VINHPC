// Input:
function findMinMaxAverage(arr) {
  let min = arr[0];
  let max = arr[0];
  let minIndex = 0;
  let maxIndex = 0;
  let primeTotal = 0;
  let primeCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // 1
      minIndex = i; //vị trí số = 1
    }
    if (arr[i] > max) {
      max = arr[i]; // 9
      maxIndex = i; //vị trí số = 5
    }
    if (isPrime(arr[i])) {
      primeTotal += arr[i]; // tổng các số nguyên tố
      primeCount++; // số lượng của các số tb cộng
    }
  }

  let primeAverage = null;
  if (primeCount > 0) {
    primeAverage = Math.round((primeTotal / primeCount) * 100) / 100; // 3.3333 * 100 = 333/100 = 3.33
  }
  return { max, maxIndex, min, minIndex, primeAverage };
}
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Output:
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
console.log(findMinMaxAverage([5, 5, 2, 2, 1])); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
console.log(findMinMaxAverage([-3, 7, -8, 11, 0])); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
