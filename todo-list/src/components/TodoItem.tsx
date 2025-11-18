import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getStatus,
  getValidDate,
  normalizePriority,
  getPriorityColor,
  getStatusColor,
  formatDateVN,
} from "../utils/todoUtils.js";
import type { Todo } from "../types/todoType.js";
interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const location = useLocation();

  const status = getStatus(item);
  const { level, label } = normalizePriority(item.priority);
  const dueDate = getValidDate(item.dueDate);

  const priorityColor = getPriorityColor(level);
  const badgeColor = getStatusColor(status);
  const deadline = dueDate
    ? dueDate.toLocaleDateString("vi-VN")
    : "Không có hạn chót";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 15,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        background: "#fff",
        position: "relative",
      }}
    >
      {/* Badge trạng thái */}
      <span
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          fontSize: 12,
          background: badgeColor,
          color: "#fff",
          padding: "2px 8px",
          borderRadius: 5,
        }}
      >
        {status}
      </span>

      <h3 style={{ marginBottom: 8 }}>{item.name}</h3>
      <p style={{ fontSize: 14, color: "#555" }}>{item.description}</p>

      <p style={{ marginTop: 8 }}>
        <strong>Ưu tiên:</strong>{" "}
        <span style={{ color: priorityColor }}>{label}</span>
      </p>

      <p>
        <strong>Hạn chót:</strong> {deadline}
      </p>

      <Link
        to={`/todos/${item._id}`}
        state={{ from: location.pathname }}
        style={{
          display: "inline-block",
          marginTop: 10,
          color: "#1976d2",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Xem Chi Tiết
      </Link>
    </div>
  );
};

export default TodoItem;
