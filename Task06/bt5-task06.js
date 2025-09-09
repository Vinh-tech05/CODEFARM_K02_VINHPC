function insertNumber(arr, num) {
  let Insert = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && Number.isFinite(arr[i])) {
      Insert.push(arr[i]);
    }
  }
  //   console.log(Insert);
  for (let i = 0; i < Insert.length - 1; i++) {
    for (let j = i + 1; j < Insert.length; j++) {
      if (Insert[i] > Insert[j]) {
        let temp = Insert[i];
        Insert[i] = Insert[j];
        Insert[j] = temp;
      }
    }
  }
  //   console.log(Insert);
  let newInsert = [];
  let inserted = false;

  for (let i = 0; i < Insert.length; i++) {
    if (!inserted && num < Insert[i]) {
      newInsert.push(num);
      inserted = true;
    }
    newInsert.push(Insert[i]);
  }

  if (!inserted && typeof num === "number" && Number.isFinite(num)) {
    newInsert.push(num);
  }

  console.log(newInsert);
}

// Output:
insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
insertNumber([], 5); // Output: [5]
insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
