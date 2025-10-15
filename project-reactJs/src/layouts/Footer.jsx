import React from "react";

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const API_URL = "https://api-class-o1lo.onrender.com/api/vinhpc/products";

// const ProductForm = ({ product }) => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: "",
//     price: 0,
//     description: "",
//   });

//   // Nếu sửa, fetch dữ liệu sản phẩm
//   useEffect(() => {
//     if (id) {
//       fetch(`${API_URL}/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setFormData({
//             title: data.title || "",
//             price: data.price || 0,
//             description: data.description || "",
//           });
//         });
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const name = e.target.name;
//     let value = e.target.value;
//     if (name === "price") value = Number(value);
//     setFormData({ ...formData, [name]: value });
//   };

//   // Thêm hoặc sửa
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (id) {
//         // Sửa
//         await fetch(`${API_URL}/${id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
//         alert("Sửa thành công!");
//         navigate("/admin/products");
//       } else {
//         // Thêm
//         await fetch(API_URL, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
//         alert("Thêm thành công!");
//         navigate("/admin/products");
//       }
//     } catch (err) {
//       alert("Có lỗi xảy ra!");
//     }
//   };

//   // Reset form
//   const handleReset = () => {
//     setFormData({ title: "", price: 0, description: "" });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <div>
//             <input
//               type="text"
//               onChange={handleChange}
//               name="title"
//               value={formData.title}
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <label>Price</label>
//           <div>
//             <input
//               type="number"
//               onChange={handleChange}
//               name="price"
//               value={formData.price}
//               min={0}
//               required
//             />
//           </div>
//         </div>
//         <div>
//           <label>Description</label>
//           <div>
//             <input
//               type="text"
//               onChange={handleChange}
//               name="description"
//               value={formData.description}
//               required
//             />
//           </div>
//         </div>
//         <div style={{ marginTop: 12 }}>
//           <button type="submit">{id ? "Sửa" : "Thêm"} sản phẩm</button>
//           <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
//             Reset
//           </button>
//           {id && (
//             <button
//               type="button"
//               onClick={handleDelete}
//               style={{ marginLeft: 8, color: "red" }}
//             >
//               Xóa
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };
