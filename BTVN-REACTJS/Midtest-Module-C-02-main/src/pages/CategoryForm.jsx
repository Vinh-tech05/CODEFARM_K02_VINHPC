import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCategory,
  updateCategory,
  getCategories,
} from "../api/apiCategory";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const categorySchema = z.object({
  title: z.string().min(3, "Tên danh mục phải có ít nhất 3 ký tự"),
  slug: z
    .string()
    .min(1, "Slug không được để trống")
    .refine((val) => !/\s/.test(val), "Slug không được chứa khoảng trắng"),
});

const CategoryForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: { title: "", slug: "" },
  });

  const fetchCategory = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const all = await getCategories();
      const cat = all.find((c) => c.id == id);
      if (!cat) {
        toast.error("Không tìm thấy danh mục!");
        return;
      }
      setValue("title", cat.title);
      setValue("slug", cat.slug);
    } catch (err) {
      toast.error("Lỗi khi tải danh mục!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await updateCategory(id, data);
        toast.success("Cập nhật danh mục thành công!");
      } else {
        await createCategory(data);
        toast.success("Thêm danh mục thành công!");
      }
      nav("/category");
    } catch (err) {
      toast.error("Lỗi khi lưu danh mục!");
    }
  };

  if (loading) return <p className="text-center mt-4">Đang tải...</p>;

  return (
    <div className="container mt-4">
      <h2>{id ? "Cập nhật danh mục" : "Thêm danh mục"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mb-3">
          <label>Tên danh mục</label>
          <input {...register("title")} className="form-control" />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Slug</label>
          <input {...register("slug")} className="form-control" />
          {errors.slug && <p className="text-danger">{errors.slug.message}</p>}
        </div>

        <button type="submit" className="btn btn-success">
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
