// * JOSN là 1 định dạng chuỗi có cấu trúc.
// * Trong JS thì có 2 phương thức phổ biến để chuyển đổi qua lại giữa JSON <-> JS

let obj = {
  name: "Hoang",
  age: 33,
  makeMoney: function () {
    console.log("kiem.tien");
  }, // function kh đc hỗ trợ
  gender: undefined, // undefined kh đc hỗ trợ
  map: new Map(),
  set: new Set([1, 2, 3]), //map, set thành Object rỗng
};

let json = JSON.stringify(obj);

console.log(json);
console.log(typeof json);
console.log(JSON.parse(json));
