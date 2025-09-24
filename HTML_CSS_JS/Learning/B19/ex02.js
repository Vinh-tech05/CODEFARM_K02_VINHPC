console.log(Object.create({}));
console.log(Object.create(null));

const obj1 = Object.create(
  {},
  {
    name: {
      value: "Hoang",
    },
  }
);

console.log(obj1);

/**
 * Object.create({prototype}, {properties})
 * -writable: config khả năng ghi đè hoặc xóa của thuộc tính
 * -enumerable: config khả năng xuất hiện ở vòng lặp hoặc phương thức tĩnh của thuộc tính( ẩn thuộc tính hay không?)
 * -configurable: config khả năng đặt lại tất cả các tùy chọn trên
 */
