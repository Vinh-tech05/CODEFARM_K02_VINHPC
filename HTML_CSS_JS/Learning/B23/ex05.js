const cart = [
  { id: 1, name: "productsA", price: 200, quantity: 2 },
  { id: 2, name: "productsB", price: 100, quantity: 1 },
  { id: 3, name: "productsC", price: 300, quantity: 3 },
  { id: 4, name: "productsD", price: 50, quantity: 5 },
];

/**
 ** In ra bảng chi tiết cart
 *! Bổ sung tổng tiền từng sản phẩm
 *?Cuối bảng in ra tổng tiền tất cả sản phẩm
 ** Với mỗi sp kh muốn mua thêm nút xóa
 **Với những sp có giá từ đủ 200 trở lên, tô chữ màu đỏ
 ** Viết hàm xóa sp khỏi giỏ hàng
 */

const element3 = document.getElementsByClassName("student-table")[0];
// console.log(element3);
function renderCart() {
  let content = "";
  cart.forEach((item) => {
    const tong = item.price * item.quantity;

    //   console.log(tong);
    content += ` <tr style="color:${item.price >= 200 ? "red" : ""}">
              <td scope="row">${item.id}</td>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td>${item.quantity}</td>
              <td>${tong}</td>
              <td><button onclick="removeHandle(${
                item.id
              })">DELETE</button></td>
            </tr>`;
    //   console.log(table);
  });

  element3.innerHTML = content;
}
renderCart();

function removeHandle(id) {
  console.log(cart);

  const removeItem = cart.findIndex((item) => item.id === id);
  if (removeItem !== -1) {
    cart.splice(removeItem, 1);
    renderCart();
  }
}
