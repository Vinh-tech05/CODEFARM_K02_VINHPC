import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask, getTasksByProject } from "../api/apiTask";
import { getProjects } from "../api/apiProjects";

const taskSchema = z.object({
  title: z.string().min(3, "Tên nhiệm vụ phải có ít nhất 3 ký tự"),
  description: z.string().optional(),
  status: z.enum(["not-started", "in-progress", "completed"], {
    required_error: "Phải chọn trạng thái nhiệm vụ",
  }),
});

const TaskForm = () => {
  const { id, projectId } = useParams();
  const nav = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "not-started",
      projectId: projectId,
    },
  });

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch {
      toast.error("Lỗi khi tải danh sách dự án!");
    }
  };

  const fetchTask = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const tasks = await getTasksByProject(projectId);
      const task = tasks.find((t) => t.id == id);
      if (!task) {
        toast.error("Không tìm thấy nhiệm vụ!");
        return;
      }
      Object.keys(task).forEach((key) => {
        if (task[key] !== undefined) setValue(key, String(task[key]));
      });
    } catch {
      toast.error("Lỗi khi tải nhiệm vụ!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchTask();
  }, [id, projectId]);

  const onSubmit = async (formData) => {
    try {
      if (id) {
        await updateTask(id, {
          ...formData,
          projectId: Number(formData.projectId),
        });
        toast.success("Cập nhật nhiệm vụ thành công!");
      } else {
        await createTask({
          ...formData,
          projectId: Number(formData.projectId),
        });
        toast.success("Thêm nhiệm vụ thành công!");
      }
      nav(`/projects/${projectId}/tasks`);
    } catch {
      toast.error("Lỗi khi lưu nhiệm vụ!");
    }
  };

  if (loading) return <p className="text-center mt-4">Đang tải dữ liệu...</p>;

  return (
    <div className="container mt-4">
      <h2>{id ? "Cập nhật nhiệm vụ" : "Thêm nhiệm vụ mới"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <div className="mb-3">
          <label>Tên nhiệm vụ</label>
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

export default TaskForm;
