function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length <= 0) return "Invalid";

  let secondLargest = arr[0];
  let Largest = arr[0];

  arr.forEach((item) => {
    if (item > Largest) {
      secondLargest = Largest;
      Largest = item;
    } else if (item < Largest && item > secondLargest) {
      secondLargest = item;
    }
  });
  if (secondLargest === Largest) {
    return null;
  }
  return secondLargest;
}
console.log(findSecondLargestNumber([]));
console.log(findSecondLargestNumber([1, 4, 3, 4, 5]));
console.log(findSecondLargestNumber([1, 1, 1, 1]));
