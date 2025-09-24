// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  const newArr = arr.reduce((result1, item) => {
    const isNaN = typeof item === "number" && isNaN(item);

    const checkNaN = result1.some((value) => {
      return typeof value === "number" && isNaN(value);
    });

    if (isNaN && !checkNaN) {
      result1.push(item);
    } else if (!isNaN && !result1.includes(item)) {
      result1.push(item);
    }

    return result1;
  }, []);
  return newArr;
}

// Output:
const result1 = removeDuplicate(fruits);
console.log(result1); // ["apple", "banana", "kiwi", "orange"]
