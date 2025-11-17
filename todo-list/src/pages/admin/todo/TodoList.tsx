import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchTodos,
  removeTodoAsync,
  toggleCompletedAsync,
} from "../../../features/todoActions.js";
import type { AppDispatch, RootState } from "../../../store/index.js";
import {
  formatDateVN,
  getPriorityColor,
  getStatus,
  getStatusColor,
} from "../../../utils/todoUtils.js";

const TodoList = () => {
  const dispath = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos || []);

  useEffect(() => {
    dispath(fetchTodos());
  }, []);

  const handleRemove = async (_id: string) => {
    if (!confirm("Bạn có chắc muốn xóa công việc này không?")) return;
    try {
      await dispath(removeTodoAsync(_id));
      alert("Xóa thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa công việc:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý công việc</h1>
        <Link
          to="/admin/todos/add"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Thêm công việc
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full border border-gray-200 text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-900 uppercase text-sm">
            <tr>
              <th className="px-4 py-3">Tên công việc</th>
              <th className="px-4 py-3">Độ ưu tiên</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3">Hạn chót</th>
              <th className="px-4 py-3">Mô tả</th>
              <th className="px-4 py-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-gray-500 italic"
                >
                  Không có công việc nào
                </td>
              </tr>
            ) : (
              todos.map((todo) => {
                const status = getStatus(todo);

                return (
                  <tr
                    key={todo._id}
                    onClick={() =>
                      dispath(toggleCompletedAsync(todo._id, !todo.completed))
                    }
                    className={`border-b hover:bg-gray-50 transition cursor-pointer ${
                      todo.completed ? "line-through opacity-50" : ""
                    }`}
                  >
                    <td className="px-4 py-2 font-medium">{todo.name}</td>
                    <td
                      className="px-4 py-2 font-semibold"
                      style={{ color: getPriorityColor(todo.priority) }}
                    >
                      {todo.priority === 1
                        ? "Thấp"
                        : todo.priority === 2
                        ? "Trung bình"
                        : "Cao"}
                    </td>
                    <td
                      className="px-4 py-2"
                      style={{ color: getStatusColor(status) }}
                    >
                      {status}
                    </td>
                    <td className="px-4 py-2">{formatDateVN(todo.dueDate)}</td>
                    <td className="px-4 py-2 truncate max-w-xs">
                      {todo.description || "—"}
                    </td>
                    <td className="px-4 py-2 text-center flex justify-center gap-2">
                      <Link
                        to={`/admin/todos/update/${todo._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition"
                      >
                        Sửa
                      </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(todo._id);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
