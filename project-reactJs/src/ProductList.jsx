// import React from "react";

// // const App = () => {
// //   // const [count, setCount] = useState(0);
// //   // function increment() {
// //   //   setCount((count) => count + 1);
// //   //   console.log(count);
// //   // }

// //   const [cart, setCart] = useState([]);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [count, setCount] = useState(0);
// //   function handleAddToCart(product) {
// //     // setCount((count) => count + 1);
// //     // console.log(count);
// //     let checkProduct = cart.find((item) => item.id === product.id);
// //     // console.log(checkProduct);

// //     if (checkProduct) {
// //       const newCart = cart.map((item) =>
// //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// //       );
// //       setCart(newCart);
// //       localStorage.setItem("cart", JSON.stringify(newCart));
// //     } else {
// //       const newCart = [...cart, { ...product, quantity: 1 }];
// //       setCart(newCart);
// //       localStorage.setItem("cart", JSON.stringify(newCart));
// //     }

// //     const totalPrice = newCart.reduce((acc, cur) => {
// //       return (acc += cur.price * cur.quantity);
// //     });
// //   }
// //   // const student = students;
// //   return (
// //     <>
// //       {/* <Header />
// //       <ProductList student={student} />
// //       <Footer /> */}
// //       {/* <button onClick={() => console.log("helloJSX")}>Click Me</button>
// //       <button onClick={increment}>Click Count</button>
// //       <p>{count}</p> */}

// //       <h1>Danh sách sản phẩm</h1>
// //       <p>Giỏ hàng {}</p>
// //       <div>
// //         {product.map((item) => (
// //           <div key={item.id}>
// //             <h3>{item.name}</h3>
// //             <p>{item.price}</p>
// //             <button onClick={() => handleAddToCart(item)}>
// //               Thêm vào giỏ hàng
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };
// // export default App;

// const ProductList = ({ student }) => {
//   return (
//     <div>
//       <h1>Danh sách học viên</h1>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover table-borderless table-primary align-middle">
//           <thead className="table-light">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Age</th>
//               <th>Gender</th>
//               <th>Score</th>
//               <th>Kết quả</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody className="table-group-divider">
//             {student.map((item) => (
//               <tr
//                 className="table-primary"
//                 key={item.id}
//                 style={{ color: item.score < 5 ? "red" : "" }}
//               >
//                 <td scope="row">{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.age}</td>
//                 <td>{item.gender}</td>
//                 <td>{item.score}</td>
//                 <td>
//                   <p>{item.score < 5 ? "fail" : "pass"}</p>
//                 </td>
//                 <td>{item.score < 5 && <button>Đăng ký học lại</button>}</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td>
//                 Tổng số học viên học lại:{" "}
//                 {student.filter((item) => item.score <td 5).length}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
