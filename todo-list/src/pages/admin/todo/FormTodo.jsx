import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTodo, updateTodo, getTodoDetail } from "../../../api/apiTodo";
import { getValidDate } from "../../../utils/todoUtils";

const validateFields = (data) => {
  if (!data.name.trim()) {
    alert("Tên công việc không được để trống");
    return true;
  }
  if (data.name.length < 3 || data.name.length > 80) {
    alert("Tên công việc phải từ 3 đến 80 ký tự");
    return true;
  }
  if (!data.dueDate) {
    alert("Vui lòng chọn hạn chót hoàn thành");
    return true;
  }
  return false;
};

const FormTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    priority: 1,
    description: "",
    dueDate: "",
    completed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // state ngăn submit nhiều lần

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { data } = await getTodoDetail(id);
          const validDate = getValidDate(data.dueDate);
          const formattedDate = validDate
            ? validDate.toISOString().split("T")[0]
            : "";

          setFormData({
            ...data,
            dueDate: formattedDate,
          });
        } catch (error) {
          console.error("Lỗi khi lấy chi tiết công việc:", error);
        }
      })();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = value;
    if (name === "priority") newValue = Number(value);
    if (type === "checkbox") newValue = checked;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      priority: 1,
      description: "",
      dueDate: "",
      completed: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields(formData)) return;

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      if (!id) {
        await createTodo(formData);
        alert("Thêm công việc thành công!");
      } else {
        await updateTodo(id, formData);
        alert("Cập nhật công việc thành công!");
      }
      navigate("/admin/todos");
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {id ? "Cập nhật công việc" : "Tạo mới công việc"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Tên công việc
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên công việc"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Mức độ ưu tiên
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value={1}>Thấp</option>
            <option value={2}>Trung bình</option>
            <option value={3}>Cao</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Hạn chót hoàn thành
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Mô tả công việc
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Nhập mô tả công việc (tùy chọn)"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {id && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
              className="w-5 h-5 accent-green-500"
            />
            <label className="text-gray-700 font-medium">Hoàn thành</label>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          {!id && (
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Làm mới
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate("/admin/todos")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-5 py-2 rounded-lg transition"
          >
            Quay lại
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition disabled:opacity-50"
          >
            {id ? "Cập nhật" : "Tạo mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
