//! Xử lý ngày tháng
export const getValidDate = (dateStr) => {
  if (!dateStr) return null;
  const fixed = dateStr.replace(/(\d{4}-\d{2}-)0*(\d{2})T/, "$1$2T");
  const d = new Date(fixed);
  return isNaN(d.getTime()) ? null : d;
};

//! Xử lý ưu tiên
export const normalizePriority = (priority) => {
  if (typeof priority === "object" && priority !== null) {
    return {
      level: priority.level ?? 1,
      label: priority.label ?? "Thấp",
    };
  }
  const mapping = {
    1: { level: 1, label: "Thấp" },
    2: { level: 2, label: "Trung bình" },
    3: { level: 3, label: "Cao" },
  };
  return mapping[priority] || { level: 1, label: "Thấp" };
};

//! Xử lý trạng thái công việc
export const getStatus = (item) => {
  const dueDate = getValidDate(item.dueDate);
  const today = new Date();

  if (item.completed) return "Hoàn thành";
  if (!dueDate) return "Không xác định";
  return dueDate < today ? "Quá hạn" : "Đang thực hiện";
};

//! Xử lý màu theo mức độ ưu tiên
export const getPriorityColor = (level) => {
  switch (level) {
    case 3:
      return "red";
    case 2:
      return "orange";
    default:
      return "green";
  }
};

//! Xử lý màu sắc theop trạng thái
export const getStatusColor = (status) => {
  if (status.includes("Hoàn thành")) return "#4caf50";
  if (status.includes("Quá hạn")) return "#f44336";
  return "#ff9800";
};

//? Định dạng ngày theo kiểu Việt Nam
export const formatDateVN = (date) =>
  date ? new Date(date).toLocaleDateString("vi-VN") : "Không hợp lệ";
