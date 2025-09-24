function User(fullname, email) {
  this.fullname = fullname;
  this.email = email;
}
//Phương thức tĩnh là phương thưc đc gắn vào constructor function và kh đi theo instances

User.showName = function () {
  console.log(`${this.fullname}`);
};

//Prototype: là 1 object đc sinh ra nhằm mục đích kế thừa lại các phương thức từ constructor function
User.prototype.sayHello = function () {
  console.log(`Xin chào tên tôi là ${this.fullname}`);
};
const userA = new User("Nguyen van A", "a@gmail.com");
console.log(userA);
// userA.showName(); //userA k hề kế thừa đc phương thức showNam() từ user, nên gặp lỗi
userA.sayHello();
