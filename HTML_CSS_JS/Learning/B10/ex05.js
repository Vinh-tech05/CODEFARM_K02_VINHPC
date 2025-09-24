let km = Number(prompt("Nhập số km đã đi"));
function taxi(km) {
  let price = 0;
  if (km > 0 && km <= 1) {
    price = 10000;
  } else if (km > 1 && km <= 30) {
    price = 10000 + (km - 1) * 8000;
  } else if (km > 30) {
    price = 10000 + 29 * 8000 + (km - 30) * 7000;
  } else {
    console.log("Số km kh hợp lệ");
  }
  return price;
}
console.log(taxi(km));
