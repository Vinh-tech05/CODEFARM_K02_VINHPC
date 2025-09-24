// không dùng flat, hãy làm phẳng mảng
const arr = [1, 2, 3, [4, 5, [[[[[[6]]]]]]]];

// const result = arr.flat();

function floatArr(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...floatArr(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(floatArr(arr));
