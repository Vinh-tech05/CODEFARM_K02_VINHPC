import React, { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { students } from "../data";
import { product } from "../data";

const App = () => {
  // const [count, setCount] = useState(0);
  // function increment() {
  //   setCount((count) => count + 1);
  //   console.log(count);
  // }

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(0);
  function handleAddToCart(product) {
    // setCount((count) => count + 1);
    // console.log(count);
    let checkProduct = cart.find((item) => item.id === product.id);
    // console.log(checkProduct);

    if (checkProduct) {
      const newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    const totalPrice = newCart.reduce((acc, cur) => {
      return (acc += cur.price * cur.quantity);
    });
  }
  // const student = students;
  return (
    <>
      {/* <Header />
      <ProductList student={student} />
      <Footer /> */}
      {/* <button onClick={() => console.log("helloJSX")}>Click Me</button>
      <button onClick={increment}>Click Count</button>
      <p>{count}</p> */}

      <h1>Danh sách sản phẩm</h1>
      <p>Giỏ hàng {}</p>
      <div>
        {product.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default App;

/**
 * ? Component
 ** - Đặt tên theo PascalCase
 ** - Sử dụng props thay cho cách truyền parameter thông thường
 ** - Component trả về JSX
 ** - Component là 1 thành phần tham gia xây dựng giao diện cho ứng dụng, đc tạo ra để tùy chỉnh, tái sử dụng và cập nhật khi cần thiết
 ** - React kh re-render (cập nhật lại giao diện) khi state thay đổi (vì react kh quản lý function ) -react chỉ re-render component khi có sự thay đổi-> vì vậy luôn dùng cú phap component để xd giao diện
 */
