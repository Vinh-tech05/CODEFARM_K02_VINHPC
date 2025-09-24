let myName = "Nguyen Minh Hoang";

myName = "khshcsdkc";
// console.log(myName);

// for (let i = 0; i < myName.length; i++) {
//   console.log(myName[i]);
// }

/**
 * Chuỗi là bất biến, có thể gán lại giá trị cho biến với khai báo let tuy nhiên kh thể thay đổi 1 phần của chuỗi
 * Truy cập ký tự chuỗi thông qua chỉ số (index)
 */

let b = new String("CodeFarm");
let c = new String(10);
let d = new String(true);

// console.log(b);
// console.log(c);
// console.log(d);

console.log("Hoang".at(1)); //at lấy kí tự theo index, dùng đc với chỉ số âm
console.log("Hoang"[-1]); // kh dùng đc với chỉ số âm

console.log("Hoang".charAt(1)); // lấy ký tự
