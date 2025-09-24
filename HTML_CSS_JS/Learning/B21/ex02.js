let myString = `Hoc lap trinh cung thay Hoang tai CodeFarm:
1. Được ăn lạp xưởng
2. Được chụp hình cùng thay Hoang
HoangThanhHuy
`;

/**
 * 1. Thay thế mọi từ khóa "Hoang" thành từ khóa "Quoc" trong đoạn chuỗi trên.
 * 2. Thay thế từ khóa ngay cả khi viết hoa hoặc viết thường
 * 3. Trc và sau từ khóa" Hoang " đều là dấu cách thfi mới tahy thế bằng từ kháo " Quoc "
 */
// function replaceAllString(str) {
//   const t = myString.toLowerCase();
//   const a = t.replaceAll(" hoang", " Quoc");
//   console.log(a);
// }
// replaceAllString(myString);

// function replaceAllString(str) {
//   const row = [];
//   let stringLower = str.toLowerCase();
// }
function replaceAllString(str) {
  const target = "hoang";
  const replacement = "Quoc";
  let result = "";
  let i = 0;

  while (i < str.length) {
    // Cắt ra 1 đoạn có độ dài bằng target
    const segment = str.slice(i, i + target.length);

    // Nếu khớp (không phân biệt hoa/thường)
    if (segment.toLowerCase() === target) {
      result += replacement; // thêm từ thay thế
      i += target.length; // nhảy qua phần vừa thay
    } else {
      result += str[i]; // giữ nguyên ký tự gốc
      i++;
    }
  }

  return result;
}

console.log(replaceAllString(myString));
