const userA = {
  fullname: "Nguyen Van A",
  age: 18,
  address: "HaNoi",
  sayHello: function () {
    console.log("Hello, my name is " + this.fullname);
  },
};

userA.sayHello();
