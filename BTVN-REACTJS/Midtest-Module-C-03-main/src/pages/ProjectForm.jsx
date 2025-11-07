import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { createProject, updateProject, getProjects } from "../api/apiProjects";

const projectSchema = z.object({
  title: z.string().min(3, "Tên dự án phải có ít nhất 3 ký tự"),
  description: z.string().optional(),
  status: z.enum(["not-started", "in-progress", "completed"], {
    required_error: "Phải chọn trạng thái dự án",
  }),
});

const ProjectForm = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "not-started",
    },
  });

  const fetchProject = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const data = await getProjects();
      const project = data.find((p) => p.id == id);
      if (!project) {
        toast.error("Không tìm thấy");
        return;
      }
      Object.keys(project).forEach((key) => {
        if (project[key] !== undefined) setValue(key, project[key]);
      });
    } catch {
      toast.error("Lỗi khi tải");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  const onSubmit = async (formData) => {
    try {
      if (id) {
        await updateProject(id, formData);
        toast.success("Cập nhật thành công");
      } else {
        await createProject(formData);
        toast.success("Thêm thành công");
      }
      nav("/projects");
    } catch {
      toast.error("Lỗi khi lưu");
    }
  };

  if (loading) return <p className="text-center mt-4">Đang tải...</p>;

  return (
    <div className="container mt-4">
      <h2>{id ? "Cập nhật dự án" : "Thêm dự án mới"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mb-3">
          <label>Tên dự án</label>
          <input {...register("title")} className="form-control" />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Mô tả</label>
          <textarea {...register("description")} className="form-control" />
        </div>

        <div className="mb-3">
          <label>Trạng thái</label>
          <select {...register("status")} className="form-select">
            <option value="not-started">Chưa bắt đầu</option>
            <option value="in-progress">Đang thực hiện</option>
            <option value="completed">Hoàn thành</option>
          </select>
          {errors.status && (
            <p className="text-danger">{errors.status.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          {id ? "Cập nhật" : "Thêm mới"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
