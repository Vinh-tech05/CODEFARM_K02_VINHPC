Array.prototype.map2 = function (callback) {
  const newArray = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    // gọi callback nếu phần tử tại i tốn tại
    if (i in this) {
      newArray[i] = callback(this[i], i, this);
    }
  }
  return newArray;
};

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result3 = arr1.map2((value) => value * 2);

console.log(result3); // [2, 4, 6, 8, 10]
console.log(result3.length); // 5

// Sample 2
const arr2 = [1, , , , 5]; // Có phần tử trống
const result4 = arr2.map2((value) => value * 2);

console.log(result4); // [2, , , , 10]
console.log(result4.length); // 5
