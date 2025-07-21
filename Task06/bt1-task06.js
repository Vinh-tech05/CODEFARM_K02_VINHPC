function cleanFalsyValues(arr) {
  const cleanFalsy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      cleanFalsy.push(arr[i]);
    }
  }
  console.log(cleanFalsy);
}

cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]
