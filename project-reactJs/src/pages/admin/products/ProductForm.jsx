import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  updateProduct,
  getProducts,
} from "../../../api/apiProducts";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProducts().then((products) => {
        const found = products.find((item) => String(item.id) === String(id));
        if (found) setFormData(found);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "price") value = Number(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateProduct(id, formData);
        alert("Cập nhật thành công!");
      } else {
        await createProduct(formData);
        alert("Thêm thành công!");
      }
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setFormData({ title: "", price: 0, description: "" });
  };

  const handleDelete = async () => {
    if (!id) return;
    if (window.confirm("Bạn có muốn xóa khum")) {
      try {
        await fetch(
          `https://api-class-o1lo.onrender.com/api/vinhpc/products/${id}`,
          {
            method: "DELETE",
          }
        );
        alert("Đã xóa");
        navigate("/admin/products");
      } catch {
        alert("Xóa lỗi ");
      }
    }
  };

  return (
    <div>
      <h1>{id ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={formData.title}
              required
            />
          </div>
        </div>
        <div>
          <label>Price</label>
          <div>
            <input
              type="number"
              onChange={handleChange}
              name="price"
              value={formData.price}
              min={0}
              required
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="description"
              value={formData.description}
              required
            />
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">{id ? "Cập nhật" : "Thêm"}</button>
          <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>
            Reset
          </button>
          {id && (
            <button
              type="button"
              onClick={handleDelete}
              style={{ marginLeft: 8, color: "red" }}
            >
              Xóa
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
