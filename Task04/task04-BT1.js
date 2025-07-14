const weight = prompt("Vui lòng nhập vào số cân nặng: ");
const height = prompt("Vui lòng nhập vào chiều cao: ");

function calcBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Bạn đang bị thiếu cân");
  } else if (18.5 <= bmi && bmi < 23) {
    console.log("Bạn đang bình thường");
  } else if (23 <= bmi && bmi < 25) {
    console.log("Bạn đang thừa cân rồi");
  } else if (bmi >= 25) {
    console.log("Bạn đang béo phì rồi");
  } else {
    console.log("VUI LÒNG NHẬP SỐ CÂN NẶNG VÀ CHIỀU CAO NHÉ!!!!");
  }
  return bmi;
}

console.log("Chỉ số của bạn là:", calcBMI(weight, height));
