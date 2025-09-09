// Input:
function findSecondLargestNumber(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return -1;

  let secondLargest = arr[0];
  let Largest = arr[0];

  arr.forEach((num) => {
    if (num > Largest) {
      secondLargest = Largest;
      Largest = num;
    } else if (num < Largest && num > secondLargest) {
      secondLargest = num;
    }
  });
  if (secondLargest === Largest) {
    return -1;
  }
  return secondLargest;
}

// Output:
console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); //4
console.log(findSecondLargestNumber([1, 1, 1])); //-1
console.log(findSecondLargestNumber([1])); //-1
