/**
 * Dùng if else khi:
 * - có hoặc ít hơn tối đa 3 trường hợp
 * - khi không có giá trị đúng cụ thể ( có thể là khoảng giá trị)
 * Dùng switch case khi:
 * - có nhiều trường hợp xảy ra
 * - đôi khi có các giá trị cụ thể cho các case
 */
const weight = Number(prompt("Nhập cân nặng"));
const height = Number(prompt("Nhập chiều cao"));
function cacliBMI(weight, height) {
  const BMI = weight / (height * height);
  switch (true) {
    case BMI < 18.5:
      console.log("Thiếu cân");
      break;
    case BMI >= 18.5 && BMI < 23:
      console.log("BT");
      break;
    case 23 < BMI && BMI < 25:
      console.log("TC");
      break;
    case BMI >= 25:
      console.log("BP");
      break;
    default:
      break;
  }
  console.log(BMI.toFixed(2));
}
cacliBMI(weight, height);
