import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getLessonsByCourse, removeLesson } from "../api/apiLessons";
import { toast } from "react-toastify";

const LessonList = () => {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const nav = useNavigate();

  const fetchLessons = async () => {
    try {
      const data = await getLessonsByCourse(courseId);
      setLessons(data);
    } catch (err) {
      console.error(err);
      toast.error("Không thể tải danh sách bài học!");
    }
  };

  useEffect(() => {
    fetchLessons();
  }, [courseId]);

  const handleDelete = async (id) => {
    if (confirm("Bạn có chắc muốn xóa bài học này không?")) {
      await removeLesson(id);
      toast.success("Xóa bài học thành công!");
      fetchLessons();
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách bài học của khóa{courseId}</h2>
        <Link
          to={`/courses/${courseId}/lessons/create`}
          className="btn btn-primary"
        >
          Thêm bài học
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên bài học</th>
            <th>Nội dung</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr key={lesson.id}>
              <td>{lesson.id}</td>
              <td>{lesson.title}</td>
              <td>{lesson.content}</td>
              <td>
                <Link
                  to={`/courses/${courseId}/lessons/edit/${lesson.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Sửa
                </Link>
                <button
                  onClick={() => handleDelete(lesson.id)}
                  className="btn btn-danger btn-sm"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => nav("/courses")}
        className="btn btn-secondary mt-3"
      >
        Quay lại danh sách khóa học
      </button>
    </div>
  );
};

export default LessonList;
