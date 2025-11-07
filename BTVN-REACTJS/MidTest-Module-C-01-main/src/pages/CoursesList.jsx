import { useEffect, useState } from "react";
import { getCourses, removeCourse } from "../api/apiCourses";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const nav = useNavigate();

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
      setDisplayedCourses(data);
    } catch (err) {
      console.error(err);
      toast.error("Không thể tải danh sách khóa học!");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(keyword)
    );
    setDisplayedCourses(filtered);
  };

  const handleSort = (order) => {
    setSortOrder(order);

    let sorted = [...displayedCourses];
    if (order === "asc") {
      sorted.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (order === "desc") {
      sorted.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      sorted = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm)
      );
    }

    setDisplayedCourses(sorted);
  };

  const handleDelete = async (id) => {
    if (confirm("Bạn có chắc muốn xóa khóa học này không?")) {
      await removeCourse(id);
      toast.success("Xóa khóa học thành công!");
      fetchCourses();
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách khóa học</h2>
        <Link to="/courses/create" className="btn btn-primary">
          Thêm khóa học
        </Link>
      </div>

      <div className="d-flex mb-3 gap-2">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          value={searchTerm}
          onChange={handleSearch}
          className="form-control"
          style={{ maxWidth: "300px" }}
        />
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="form-select"
          style={{ maxWidth: "200px" }}
        >
          <option value="none">-- Sắp xếp giá --</option>
          <option value="asc">Tăng dần</option>
          <option value="desc">Giảm dần</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khóa học</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>
                  <Link to={`/courses/${course.id}/lessons`}>
                    {course.title}
                  </Link>
                </td>
                <td>{course.price}</td>
                <td>{course.description}</td>
                <td>
                  <Link
                    to={`/courses/edit/${course.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => handleDelete(course.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                Không có khóa học nào phù hợp.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesList;
