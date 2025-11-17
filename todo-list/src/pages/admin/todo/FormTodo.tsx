import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createTodoApi,
  getTodoDetailApi,
  updateTodoApi,
} from "../../../api/apiTodo.js";
import type { AppDispatch, RootState } from "../../../store/index.js";
import {
  setEditingTodo,
  addTodo,
  updateTodo,
} from "../../../features/todoSlice.js";

type Checked = {
  checked: boolean;
};

const FormTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const editingTodo = useSelector(
    (state: RootState) => state.todos.editingTodo
  );

  useEffect(() => {
    if (id) {
      (async () => {
        const todo = await getTodoDetailApi(id);
        dispatch(setEditingTodo(todo));
      })();
    } else {
      dispatch(
        setEditingTodo({
          name: "",
          priority: 1,
          description: "",
          dueDate: "",
          completed: false,
        })
      );
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked: Checked } = e.target;

    dispatch(
      setEditingTodo({
        ...editingTodo!,
        [name]:
          type === "checkbox"
            ? checked
            : name === "priority"
            ? Number(value)
            : value,
      })
    );
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingTodo?.name.trim()) {
      alert("Tên công việc không được để trống");
      return;
    }

    if (!editingTodo.dueDate) {
      alert("Vui lòng chọn hạn chót");
      return;
    }

    if (!id) {
      const newTodo = await createTodoApi({
        name: editingTodo.name,
        priority: editingTodo.priority,
        description: editingTodo.description,
        dueDate: editingTodo.dueDate,
        completed: false,
      });

      dispatch(addTodo(newTodo));
      alert("Thêm thành công");
    } else {
      const updated = await updateTodoApi(id, editingTodo);
      dispatch(updateTodo(updated));
      alert("Cập nhật thành công");
    }

    navigate("/admin/todos");
  };

  if (!editingTodo) return null;
  const handleReset = () => {
    dispatch(
      setEditingTodo({
        name: "",
        priority: 1,
        description: "",
        dueDate: "",
        completed: false,
      })
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {id ? "Cập nhật công việc" : "Tạo mới công việc"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* NAME */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Tên công việc
          </label>
          <input
            type="text"
            name="name"
            value={editingTodo.name}
            onChange={handleChange}
            placeholder="Nhập tên công việc"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* PRIORITY */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Mức độ ưu tiên
          </label>
          <select
            name="priority"
            value={editingTodo.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value={1}>Thấp</option>
            <option value={2}>Trung bình</option>
            <option value={3}>Cao</option>
          </select>
        </div>

        {/* DUE DATE */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Hạn chót hoàn thành
          </label>
          <input
            type="date"
            name="dueDate"
            value={editingTodo.dueDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Mô tả công việc
          </label>
          <textarea
            name="description"
            value={editingTodo.description}
            onChange={handleChange}
            placeholder="Nhập mô tả công việc"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
        {id && (
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="completed"
              checked={editingTodo.completed}
              onChange={handleChange}
              className="w-5 h-5 accent-green-500"
            />
            <label className="text-gray-700 font-medium">Hoàn thành</label>
          </div>
        )}

        {/* BUTTONS */}
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {id ? "Cập nhật" : "Tạo mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
