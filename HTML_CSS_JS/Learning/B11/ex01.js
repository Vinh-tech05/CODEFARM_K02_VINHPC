console.log("1" + 1);
console.log(1 + "1"); //toán tử nối chuỗi: +
console.log("1" - 1); //toán tử số học: -

console.log([] + []); // thành chuỗi rỗng có [] là ép kiểu sang chuỗi

console.log(!!"Vinh"); //true (ép kiểu sang boolean)
/**
 * Ép kiểu ngầm định ( ép kiểu tự động)
 * - Khi dùng dấu + thì sẽ ưu tiên nối chuỗi
 * - Các toán tử khác sẽ ưu tiên tính toán số học
 * - false, null, 0, undefined, NaN sẽ -> false
 * - khi ép kiểu về số NaN và undefined -> NaN
 * -
 * Ép kiểu chủ động(lập trình viên ép kiểu)
 */
