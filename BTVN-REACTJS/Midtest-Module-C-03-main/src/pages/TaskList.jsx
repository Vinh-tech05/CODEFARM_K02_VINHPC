import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTasksByProject, removeTask } from "../api/apiTask";
import { getProjects } from "../api/apiProjects";
import { toast } from "react-toastify";

const TaskList = () => {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState(null);

  const fetchTasks = async () => {
    try {
      const data = await getTasksByProject(projectId);
      setTasks(data);
    } catch {
      toast.error("Lỗi khi tải danh sách nhiệm vụ!");
    }
  };

  const fetchProject = async () => {
    try {
      const data = await getProjects();
      const found = data.find((p) => p.id == projectId);
      setProject(found);
    } catch {
      toast.error("Lỗi khi tải task");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có muốn xoá?")) return;
    try {
      await removeTask(id);
      toast.success("Xóa ok");
      fetchTasks();
    } catch {
      toast.error("Lỗi khi xoá");
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchProject();
  }, [projectId]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách nhiệm vụ {project ? `- ${project.title}` : ""}</h2>
        <Link
          to={`/projects/${projectId}/tasks/create`}
          className="btn btn-success"
        >
          Thêm nhiệm vụ
        </Link>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên nhiệm vụ</th>
            <th>Mô tả</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                {task.status === "not-started"
                  ? "Chưa bắt đầu"
                  : task.status === "in-progress"
                  ? "Đang thực hiện"
                  : "Hoàn thành"}
              </td>
              <td>
                <Link
                  to={`/projects/${projectId}/tasks/edit/${task.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Sửa
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-danger btn-sm"
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/projects" className="btn btn-secondary mt-3">
        Quay lại danh sách dự án
      </Link>
    </div>
  );
};

export default TaskList;
