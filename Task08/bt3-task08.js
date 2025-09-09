// Input:
const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr) {
  let total = 0;
  arr.forEach((element) => {
    if (element.trim()) {
      total += element.trim().split(/\s+/).length;
    }
  });
  return total;
}

// Output:
console.log(
  countTotalWords(["Hello world", "JS is fun", "Arrays and strings"])
); // 8
