function User(fullname, email) {
  this.fullname = fullname;
  this.email = email;
}
User.showName = function () {
  console.log(`${this.fullname}`);
};
//Phương thức tĩnh là phương thưc đc gắn vào constructor function và kh đi theo instances

const userA = new User("Nguyen van A", "a@gmail.com");
console.log(userA);
User.showName(); //fullname = undefined

const obj2 = {
  name: "hoang",
  hello: function () {
    console.log(`hello, mình là ${this.name} `);
  },
};

console.log(obj2);
obj2.hello();
/**
 * Một số phương thức tĩnh phổ biến của Object
 * Object.keys() - lấy ra mảng các key của object
 * Object.values() - lấy ra mảng các value của object
 * Object.entries() - lấy ra mảng các cặp key-value được gom theo mảng
 * Object.asign() - Sao chép lại toàn bộ thuộc tính và phương thức của object nguồn sang 1 object đích và có thể bổ sung các phương thức mới, nếu trùng thuộc tính thì objec đích sẽ bị ghi đè.
 * Object.freezes()
 */

console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));
const obj3 = Object.assign({ age: 34 }, obj2);
console.log(obj3);
Object.freeze();
