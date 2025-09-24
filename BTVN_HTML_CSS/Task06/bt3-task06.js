function filterLongStrings(arr) {
  const LongStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length > 5) {
      LongStrings.push(arr[i]);
    }
  }
  console.log(LongStrings);
}

filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); // Output: []
