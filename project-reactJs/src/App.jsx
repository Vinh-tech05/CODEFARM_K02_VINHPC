import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { students } from "../data";

const App = () => {
  const student = students;
  return (
    <>
      <Header />
      <ProductList student={student} />
      <Footer />
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
