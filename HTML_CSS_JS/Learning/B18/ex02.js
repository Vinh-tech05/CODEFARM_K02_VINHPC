const obj1 = { name: "hoang", address: "HN" };

console.log(obj1);

console.log(obj1.address);

let major = "IT";
obj1.major = major;

const obj2 = { name: "MINH", major };
//shorthand property - viết tắt key - value khi value là tên trùng với biến key

let address = "địa chỉ";

obj2[address] = "HN"; //computed property
obj2["giới tính"] = "Nam";
obj2["giới tính"] = undefined;

//JSON không xử lý các value là undefined, method
console.log(JSON.parse(JSON.stringify(obj2))); //Cách xóa key bằng mẹo

delete obj2.major; //Xóa thuộc tính
console.log(obj2);

/**
 * shorthand property - cho phép viết tắt key - value khi value là 1 biến trùng tên với key
 * computed property cho phép đặt tên key từ giá trị của biến or chuỗi đặc biệt
 */

//Duyệt obj
const obj4 = {
  name: "Mer",
  price: 1_500_000_000,
  color: "white",
};

for (const key in obj4) {
  console.log(`${key}: ${obj4[key]}`);
}

//Không thể dùng for...of với object
const arr = ["hoang", "vinh", "thinh"];

//Nhưng có thể dùng for...in với array(duyệt qua các index)-> cách này kh khuyến khích

for (const key in arr) {
  console.log(key);
}
