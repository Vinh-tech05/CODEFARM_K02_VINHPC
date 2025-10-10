import { useEffect, useState } from "react";
import Header from "./Header";
// import ProductList from "./ProductList";
import Footer from "./Footer";
// import { students } from "../data";
// import { product } from "../data";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [metaData, setMetaData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchValue, setSearchValue] = useState("");
//   useEffect(() => {
//     fetch(
//       `https://api-class-o1lo.onrender.com/api/example/products?${
//         searchValue && `q=${searchValue}`
//       }&_limit=10&_page=${currentPage}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data.data);
//         setMetaData(data.meta);
//       });
//   }, [searchValue, currentPage]);

//   // Phân trang dữ liệu và chọn được limit xây dựng tìm kiếm
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="Tim kiem..."
//           onKeyDown={(e) => {
//             if (e.code === "Enter") {
//               setSearchValue(e.target.value);
//             }
//           }}
//         />
//         <button>Tim kiem</button>
//       </div>
//       <h1>Learning useEffect</h1>
//       <div id="productList">
//         {products.length > 0
//           ? products.map((item) => (
//               <div key={item.id}>
//                 <h2>{item.title}</h2>
//                 <p>{item.price}</p>
//                 <p>{item.description}</p>
//                 <button>Mua ngay</button>
//               </div>
//             ))
//           : "dang tai du lieu..."}
//       </div>
//       {metaData && (
//         <div
//           style={{
//             marginTop: 15,
//             display: "flex",
//             alignItems: "center",
//             gap: 5,
//           }}
//         >
//           {Array.from({ length: metaData.totalPages }).map((_, index) => (
//             <button
//               onClick={() => setCurrentPage(index + 1)}
//               style={{
//                 background: `${index + 1 === currentPage ? "pink" : ""}`,
//               }}
//               key={index}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState({
    _page: 1,
    _limit: 10,
  });
  // api: https://api-class-o1lo.onrender.com/api/example/products
  // hiển thị danh sách sản phẩm từ api
  // Có phân trang, tìm kiếm bộ lọc khoảng giá, sắp xếp theo giá tiền
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Làm sạch lại query params không cho phép có các key undefined
        const cleanUpParams = Object.entries(query)
          .filter((item) => Boolean(item))
          .map(([item, value]) => `${item}=${value}`)
          .join("&");
        // Gọi tới API
        const response = await fetch(
          `https://api-class-o1lo.onrender.com/api/example/products?${cleanUpParams}`
        ).then((res) => res.json());
        setProducts(response.data);
        setMeta(response.meta);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
    // Phụ thuộc của useEffect là state query
  }, [query]);

  const handlePagination = (page) => {
    // thay đổi lại state query, giải lại các query cũ và cập nhật lại key page = với page mình truyền đi
    setQuery((prev) => ({ ...prev, _page: page }));
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              console.log(e);
              if (e.key === "Enter") {
                setQuery((prev) => ({ ...prev, q: searchValue }));
              }
            }}
          />
          <button
            onClick={() => {
              setQuery((prev) => ({ ...prev, q: searchValue }));
            }}
          >
            Tim kiem
          </button>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="range-input" style={{ display: "flex", gap: 15 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="">Từ</label>
              <input
                type="number"
                defaultValue={0}
                onChange={(e) => {
                  if (isNaN(e.target.value)) return;
                  setQuery((prev) => ({
                    ...prev,
                    price_gte: e.target.value || 0,
                  }));
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="">Đến</label>
              <input
                type="number"
                defaultValue={100000}
                onChange={(e) => {
                  if (isNaN(e.target.value)) return;
                  setQuery((prev) => ({
                    ...prev,
                    price_lte: e.target.value || 100000,
                  }));
                }}
              />
            </div>
          </div>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => {
                if (!e.target.value) {
                  setQuery((prev) => ({ ...prev, _sort: null, _order: null }));
                  return;
                }
                setQuery((prev) => ({
                  ...prev,
                  _sort: "price",
                  _order: e.target.value,
                }));
              }}
            >
              <option value="">Mặc định</option>
              <option value="desc">Từ cao đến thấp</option>
              <option value="asc">Từ thấp đến cao</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
              }}
            >
              <img style={{ width: 150 }} src={item.thumbnail} alt="" />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <div>Khong co san pham</div>
        )}
      </div>
      {meta && (
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <button
            onClick={() => {
              if (meta.page === 1) return;
              handlePagination(meta.page - 1);
            }}
          >
            prev
          </button>
          {Array.from({ length: meta.totalPages }).map((_, index) => (
            <button
              style={{ background: meta.page === index + 1 ? "pink" : "" }}
              onClick={() => handlePagination(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => {
              if (meta.page === meta.totalPages) return;
              handlePagination(meta.page + 1);
            }}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
};

// state -> component re-render -> goi callback trong useEffect (callback co dependencies)

export default App;
/**
 * ? Component
 ** - Đặt tên theo PascalCase
 ** - Sử dụng props thay cho cách truyền parameter thông thường
 ** - Component trả về JSX
 ** - Component là 1 thành phần tham gia xây dựng giao diện cho ứng dụng, đc tạo ra để tùy chỉnh, tái sử dụng và cập nhật khi cần thiết
 ** - React kh re-render (cập nhật lại giao diện) khi state thay đổi (vì react kh quản lý function ) -react chỉ re-render component khi có sự thay đổi-> vì vậy luôn dùng cú phap component để xd giao diện
 */
