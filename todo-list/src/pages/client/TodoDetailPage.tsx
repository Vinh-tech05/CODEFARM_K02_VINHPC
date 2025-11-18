import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  getStatus,
  getValidDate,
  normalizePriority,
  getPriorityColor,
  getStatusColor,
  formatDateVN,
} from "../../utils/todoUtils.js";
import type { Todo } from "../../types/todoType.js";

const TodoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<Todo | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchTodoItem = async () => {
      try {
        const res = await fetch(
          `https://api-class-o1lo.onrender.com/api/vinh/todos/${id}`
        );
        const { data } = await res.json();
        setTodo(data as Todo);
      } catch (err) {
        console.error("Fetch todo error:", err);
      }
    };
    fetchTodoItem();
  }, [id]);

  if (!todo)
    return (
      <div className="text-center py-10 text-gray-600 animate-pulse">
        Đang tải dữ liệu...
      </div>
    );

  // ✅ Các thông tin todo
  const status = getStatus(todo);
  const { level, label } = normalizePriority(todo.priority);
  const dueDate = getValidDate(todo.dueDate);
  const priorityColor = getPriorityColor(level);
  const badgeColor = getStatusColor(status);
  const deadline = dueDate
    ? formatDateVN(dueDate.toISOString())
    : "Không có hạn chót";

  const handleBack = () => {
    if ((location.state as any)?.from) navigate((location.state as any).from);
    else navigate("/todos");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Chi Tiết Công Việc
      </h1>

      <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        {/* Badge trạng thái */}
        <span
          className="absolute top-2 right-2 text-xs text-white px-2 py-1 rounded"
          style={{ background: badgeColor }}
        >
          {status}
        </span>

        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {todo.name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {todo.description ?? "Không có mô tả."}
        </p>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Ưu tiên:</strong>{" "}
            <span style={{ color: priorityColor }}>{label}</span>
          </p>
          <p>
            <strong>Hạn chót:</strong> {deadline}
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleBack}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default TodoDetailPage;
