const arr = [1, 2, 3, 4, 5, ["ABC"]];
// const result = arr.concat(6, 7, [8, [9]]);
// console.log(result);
// console.log(arr);

const arrCopy = arr.concat();
arrCopy[5][0] = "VINH";
arrCopy[3] = 1000;
console.log(arrCopy);
console.log(arr);

// console.log(arrCopy === arr);

/**
 * Khi làm việc với các giá trị kiểu tham chiếu (reference type)
 * Shallow copy:
 * -Chỉ copy được các phần tử ở lớp ngoài cùng và địa chỉ ô nhớ.
 * -Shallw copy phổ biến sử dụng : slice, concat, spreads, vòng lặp
 *
 * Deep copy:  ( là phương thức dùng structuredClone())
 *  -Thực sự tạo ra 1 biến mới(object, array) không còn liên quan gì đến biến gốc
 */
