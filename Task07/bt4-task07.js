// Input:
function findCommonElement(arr1, arr2) {
  const setArr1 = new Set(arr1);
  const setArr2 = new Set(arr2);
  const CommonElement = [...setArr1].filter((value) => setArr2.has(value));

  if (CommonElement.length > 0) {
    console.log(CommonElement.join(" "));
  } else {
    console.log(false);
  }
}

// Output:
findCommonElement([1, 2, 3], [2, 3, 4]); // 2 3
findCommonElement([1, 2, 3], [4, 5, 6]); // false
findCommonElement([1, 2, 2, 3, 4], [2, 3, 4, 5]); // 2 3 4
