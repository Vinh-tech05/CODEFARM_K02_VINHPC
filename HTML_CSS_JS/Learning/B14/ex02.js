const arr = [1, 2, 3];
/**
 * Khai báo spread
 * Đối với new Array khi chỉ có duy nhất 1 tham số truyền vào thì đó đc coi là độ dài mảng
 * Còn khi truyền vào 1 thì là empty, 0 thì là mảng rỗng []
 *
 */

const arr2 = new Array(0);
// console.log(arr2);

/**
 * Các phương thức thay đổi mảng:
 * push: chèn 1 phần tử vào cuối mảng
 * unshift: chèn 1 phần tử vào đầu mảng
 * pop: xóa 1 phần tử cuối mảng
 * shift: xóa 1 phần tử đầu mảng
 * Khi thêm (push, unshift) trả về độ dài mới của mảng
 * Khi bớt (pop, shift) trả về phần tử bị bớt
 */
//Đảo ngược nhưng kh dùng phương thức reverse chỉ dùng for và mấy phương thức trên
// function reverseArr(arr) {
//   const arr1 = [];
//   while (arr.length > 0) {
//     arr1.push(arr.pop());
//   }
//   return arr1;
// }

// console.log(reverseArr([4, 5, 6])); //1,2,3-> 3,2,1

// const students = [
//   { id: 1, name: "PL", age: 24 },
//   { id: 2, name: "HL", age: 22 },
//   { id: 3, name: "Thuan", age: 21 },
//   { id: 4, name: "VA", age: 19 },
// ];
// function filterStudent(students) {
//   const arr1 = [];
//   const arr2 = [];
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 20) {
//       arr1.push(students[i]);
//     } else {
//       arr2.push(students[i]);
//     }
//   }
//   console.log(arr1);
//   console.log(arr2);
// }
// filterStudent(students);

// Viết hàm findFirstDuplicate(arr) nhận vào một mảng số nguyên. Trả về giá trị của phần tử đầu tiên bị lặp lại (xuất hiện ít nhất 2 lần) khi duyệt từ trái sang phải.
function findFirstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return arr[j];
      }
    }
  }
  return undefined;
}
console.log(findFirstDuplicate([3, 5, 1, 2, 4, 5, 1])); // 5
console.log(findFirstDuplicate([1, 2, 3, 4])); // undefined
console.log(findFirstDuplicate([9, 8, 7, 19, 8, 7])); // 9
