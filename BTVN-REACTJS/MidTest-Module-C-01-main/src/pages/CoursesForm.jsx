import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { createCourse, updateCourse, getCourses } from "../api/apiCourses";

const courseSchema = z.object({
  title: z
    .string()
    .min(6, "Tên khóa học phải có ít nhất 6 ký tự")
    .nonempty("Tên khóa học không được bỏ trống"),
  price: z
    .number({ invalid_type_error: "Giá phải là số" })
    .positive("Giá phải là số dương"),
  description: z.string().optional(),
});

const CourseForm = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(courseSchema),
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const data = await getCourses();
          const course = data.find((c) => String(c.id) === String(id));
          if (course) {
            setValue("title", course.title);
            setValue("price", course.price);
            setValue("description", course.description);
          } else {
            toast.error("Không tìm thấy khóa học!");
            nav("/courses");
          }
        } catch (err) {
          console.error(err);
          toast.error("Lỗi khi tải dữ liệu khóa học!");
        }
      }
    };
    fetchData();
  }, [id, setValue, nav]);

  const onSubmit = async (formData) => {
    try {
      if (id) {
        await updateCourse(id, formData);
        toast.success("Cập nhật khóa học thành công!");
      } else {
        await createCourse(formData);
        toast.success("Thêm khóa học thành công!");
      }
      nav("/courses");
    } catch (err) {
      console.error(err);
      toast.error("Có lỗi xảy ra khi lưu khóa học!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">
        {id ? "Sửa Khóa Học" : "Thêm Khóa Học"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên khóa học</label>
          <input
            type="text"
            {...register("title")}
            className="form-control"
            placeholder="Nhập tên khóa học..."
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Giá</label>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            className="form-control"
            placeholder="Nhập giá khóa học..."
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Mô tả</label>
          <textarea
            {...register("description")}
            className="form-control"
            rows="4"
            placeholder="Mô tả ngắn về khóa học..."
          ></textarea>
        </div>

        <button className="btn btn-success w-100">
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
