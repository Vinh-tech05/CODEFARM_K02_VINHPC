import React from "react";

const TodoItem = ({ item }) => {
  // ✅ Chuẩn hóa ngày tháng (fix lỗi có '012' trong ngày)
  const getValidDate = (dateStr) => {
    if (!dateStr) return null;
    const fixed = dateStr.replace(/(\d{4}-\d{2}-)0*(\d{2})T/, "$1$2T");
    const d = new Date(fixed);
    return isNaN(d.getTime()) ? null : d;
  };

  const dueDate = getValidDate(item.dueDate);
  const today = new Date();

  const getStatus = () => {
    if (item.completed) return "Hoàn thành";
    if (!dueDate) return "Không xác định";
    return dueDate < today ? "Quá hạn" : "Đang thực hiện";
  };

  const normalizePriority = (priority) => {
    if (typeof priority === "object" && priority !== null) {
      return {
        level: priority.level ?? 1,
        label: priority.label ?? "low",
      };
    }
    const mapping = {
      1: { level: 1, label: "Thấp" },
      2: { level: 2, label: "Trung bình" },
      3: { level: 3, label: "Cao" },
    };
    return mapping[priority] || { level: 1, label: "Thấp" };
  };

  const { level, label } = normalizePriority(item.priority);

  const priorityColor = level === 3 ? "red" : level === 2 ? "orange" : "green";

  const status = getStatus();
  const bgColor = status.includes("Hoàn thành")
    ? "#e6ffe6"
    : status.includes("Quá hạn")
    ? "#ffe6e6"
    : "#fff";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 15,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        background: bgColor,
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
          background: status.includes("Hoàn thành")
            ? "#4caf50"
            : status.includes("Quá hạn")
            ? "#f44336"
            : "#ff9800",
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
        <strong>Hạn chót:</strong>{" "}
        {dueDate ? dueDate.toLocaleDateString("vi-VN") : "Không hợp lệ"}
      </p>
    </div>
  );
};

export default TodoItem;
