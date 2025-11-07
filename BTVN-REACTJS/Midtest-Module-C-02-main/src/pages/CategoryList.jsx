import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getCategories, removeCategory } from "../api/apiCategory";
import { getProducts } from "../api/apiProduct";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const [product, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const categories = await getCategories();
      const products = await getProducts();
      setCategory(categories);
      setProducts(products);
      //   console.log(data);
    } catch (error) {
      toast.error("Không thể tải sp đc");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    const hasProducts = product.some(
      (p) => Number(p.categoryId) === Number(id)
    );
    if (hasProducts) {
      toast.error("Không thể xóa! Danh mục này đang có sản phẩm.");
      return;
    }
    if (confirm("Bạn muốn xóa kh")) {
      await removeCategory(id);
      toast.success("Xóa Ok");
      fetchData();
    }
  };

  return (
    <div>
      <div>
        <h2>Danh sách danh mục</h2>
        <Link to="/category/create" className="btn btn-primary">
          Thêm danh mục
        </Link>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Tên danh mục</th>
                <th>Slug</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {category?.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.slug}</td>
                  <td>
                    <Link
                      to={`/category/edit/${p.id}`}
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

export default CategoryList;
