const arr1 = [1, 2, 3, 4];
Array.prototype.find2 = function (callback) {
  // * tìm phần tử đầu tiên thoả mãn callback
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    if (callback(this[i])) {
      console.log(this[i]);
      return;
    }
  }
  console.log(callback);
};

arr1.find2((item, index) => item > 3);
