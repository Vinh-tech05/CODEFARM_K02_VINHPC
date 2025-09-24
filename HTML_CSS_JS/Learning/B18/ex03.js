/**
 * Các cách tạo ra 1 object
 * 1.Object literal
 * 2.`new Object`
 * 3.Hàm khởi tạo
 * 4.Dùng cú pháp class
 * 5.Kế thừa bằng phương thức Object.asign()
 */

const obj1 = new Object([1, 2, 3]);

const obj2 = new Object({ name: "Hoang" });

const obj3 = new Object(1);
console.log(obj1);
console.log(typeof obj1);

//function constructor
function User(fullname, email, password) {
  this.fullname = fullname;
  this.email = email;
  this.password = password;
}

//Create an instance (nguyên mẫu)
const userA = new User("adam", "adam@gmail.com", "matkhaumanh");
console.log(userA);
