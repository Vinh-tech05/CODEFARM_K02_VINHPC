import { useEffect, useState } from "react";
import Header from "./Header";
// import ProductList from "./ProductList";
import Footer from "./Footer";
// import { students } from "../data";
// import { product } from "../data";

const App = () => {
  const [products, setProducts] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch(
      `https://api-class-o1lo.onrender.com/api/example/products?${
        searchValue && `q=${searchValue}`
      }&_limit=10&_page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setMetaData(data.meta);
      });
  }, [searchValue, currentPage]);

  // Phân trang dữ liệu và chọn được limit xây dựng tìm kiếm
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Tim kiem..."
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setSearchValue(e.target.value);
            }
          }}
        />
        <button>Tim kiem</button>
      </div>
      <h1>Learning useEffect</h1>
      <div id="productList">
        {products.length > 0
          ? products.map((item) => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <button>Mua ngay</button>
              </div>
            ))
          : "dang tai du lieu..."}
      </div>
      {metaData && (
        <div
          style={{
            marginTop: 15,
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          {Array.from({ length: metaData.totalPages }).map((_, index) => (
            <button
              onClick={() => setCurrentPage(index + 1)}
              style={{
                background: `${index + 1 === currentPage ? "pink" : ""}`,
              }}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
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
