function kiemTien(callback) {
  console.log("Đang Kiếm Tiền");
  setTimeout(() => {
    console.log("Kiếm đc 10tr");
    callback();
  }, 3000);
}
function muaDT() {
  console.log("Mua điện thoại");
}
kiemTien(muaDT);
