import React, { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../api/apiProduct";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchProducts = async (keyword = "") => {
    try {
      const data = await getProducts(keyword);
      setProduct(data);
      //   console.log(data);
    } catch (error) {
      toast.error("Không thể tải sp đc");
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    fetchProducts(search);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleDelete = async (id) => {
    if (confirm("Bạn muốn xóa kh")) {
      await removeProduct(id);
      toast.success("Xóa Ok");
      fetchProducts();
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Tìm theo tên sản phẩm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-1/3"
          />
        </form>
        <h2>Danh sách sản phẩm</h2>
        <Link to="/product/create" className="btn btn-primary">
          Thêm sản phẩm
        </Link>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.price}</td>
                  <td>
                    <Link
                      to={`/product/edit/${p.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
