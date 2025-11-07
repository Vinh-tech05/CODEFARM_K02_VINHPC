import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProjects, removeProject } from "../api/apiProjects";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState([]);

  const fetchProjects = async (keyword = "") => {
    try {
      const data = await getProjects(keyword);
      setProjects(data);
    } catch (error) {
      toast.error("Lỗi khi tải ");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchProjects(search);
  };
  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xoá dự án này?")) return;
    try {
      await removeProject(id);
      toast.success("Xóa dự án thành công!");
      fetchProjects();
    } catch (error) {
      toast.error("Lỗi khi xóa dự án!");
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div>
      <div>
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Tìm theo tên..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-1/3"
          />
        </form>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Danh sách Dự án</h2>
          <Link to="/projects/create" className="btn btn-success">
            + Thêm dự án
          </Link>
        </div>

        {projects.length === 0 ? (
          <p>Chưa có dự án nào.</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên dự án</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, index) => (
                <tr key={p.id}>
                  <td>{index + 1}</td>
                  <td>{p.title}</td>
                  <td>
                    {p.status === "not-started"
                      ? "Chưa bắt đầu"
                      : p.status === "in-progress"
                      ? "Đang thực hiện"
                      : "Hoàn thành"}
                  </td>
                  <td>
                    <Link
                      to={`/projects/${p.id}/tasks`}
                      className="btn btn-info btn-sm me-2"
                    >
                      Xem chi tiết
                    </Link>
                    <Link
                      to={`/projects/edit/${p.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
