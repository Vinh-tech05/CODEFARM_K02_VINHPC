import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getProducts, createProduct, updateProduct } from "../api/apiProduct";
import { getCategories } from "../api/apiCategory";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const productSchema = z.object({
  title: z.string().min(3, "Tên sản phẩm phải có ít nhất 3 ký tự"),
  price: z.string().refine((val) => !isNaN(val) && Number(val) >= 0, {
    message: "Giá phải là số >= 0",
  }),
  categoryId: z.string().min(1, "Phải chọn danh mục"),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  stock: z.string().refine((val) => !isNaN(val) && Number(val) >= 0, {
    message: "Số lượng phải là số >= 0",
  }),
});

const ProductForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: "",
      categoryId: "",
      description: "",
      thumbnail: "",
      stock: "",
    },
  });

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      toast.error("Lỗi khi tải danh mục!");
    }
  };

  const fetchProduct = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const allProducts = await getProducts();
      const product = allProducts.find((item) => item.id == id);
      if (!product) {
        toast.error("Không tìm thấy sản phẩm!");
        return;
      }
      Object.keys(product).forEach((key) => {
        if (product[key] !== undefined) {
          setValue(key, String(product[key]));
        }
      });
    } catch (error) {
      toast.error("Lỗi khi tải sản phẩm!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProduct();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock),
        categoryId: Number(data.categoryId),
      };
      if (id) {
        await updateProduct(id, formattedData);
        toast.success("Cập nhật sản phẩm thành công!");
      } else {
        await createProduct(formattedData);
        toast.success("Thêm sản phẩm thành công!");
      }
      nav("/product");
    } catch (err) {
      toast.error("Lỗi khi lưu sản phẩm!");
    }
  };

  if (loading) return <p className="text-center mt-4">Đang tải sản phẩm...</p>;

  return (
    <div className="container mt-4">
      <h2>{id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mb-3">
          <label>Tên sản phẩm</label>
          <input {...register("title")} className="form-control" />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Giá</label>
          <input
            {...register("price")}
            type="number"
            className="form-control"
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Danh mục</label>
          <select {...register("categoryId")} className="form-select">
            <option value="">-- Chọn danh mục --</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-danger">{errors.categoryId.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Mô tả</label>
          <textarea {...register("description")} className="form-control" />
        </div>

        <div className="mb-3">
          <label>Ảnh (URL)</label>
          <input {...register("thumbnail")} className="form-control" />
        </div>

        <div className="mb-3">
          <label>Số lượng</label>
          <input
            {...register("stock")}
            type="number"
            className="form-control"
          />
          {errors.stock && (
            <p className="text-danger">{errors.stock.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
