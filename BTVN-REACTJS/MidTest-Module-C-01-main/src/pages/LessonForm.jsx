import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createLesson,
  updateLesson,
  getLessonsByCourse,
} from "../api/apiLessons";

const lessonSchema = z.object({
  title: z
    .string()
    .min(6, "Tên bài học phải có ít nhất 6 ký tự")
    .nonempty("Không được để trống"),
  content: z.string().optional(),
});

const LessonForm = () => {
  const { courseId, id } = useParams();
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(lessonSchema),
  });

  useEffect(() => {
    const fetchLesson = async () => {
      if (id) {
        const data = await getLessonsByCourse(courseId);
        const lesson = data.find((l) => String(l.id) === String(id));
        if (lesson) reset(lesson);
        else {
          toast.error("Không tìm thấy bài học!");
          nav(`/courses/${courseId}/lessons`);
        }
      }
    };
    fetchLesson();
  }, [id, courseId, reset, nav]);

  const onSubmit = async (formData) => {
    try {
      const payload = { ...formData, courseId: Number(courseId) };
      if (id) {
        await updateLesson(id, payload);
        toast.success("Cập nhật bài học thành công!");
      } else {
        await createLesson(payload);
        toast.success("Thêm bài học thành công!");
      }
      nav(`/courses/${courseId}/lessons`);
    } catch (err) {
      console.error(err);
      toast.error("Có lỗi xảy ra khi lưu bài học!");
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Sửa Bài Học" : "Thêm Bài Học"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên bài học</label>
          <input
            type="text"
            {...register("title")}
            className="form-control"
            placeholder="Nhập tên bài học"
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Nội dung</label>
          <textarea
            {...register("content")}
            className="form-control"
            placeholder="Nhập nội dung bài học..."
            rows="4"
          ></textarea>
          {errors.content && (
            <span className="text-danger">{errors.content.message}</span>
          )}
        </div>

        <button className="btn btn-success w-100">
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default LessonForm;
