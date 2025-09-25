import React from "react";

const Legend = () => {
  const legends = [
    { label: "Yếu", color: "red" },
    { label: "Trung Bình", color: "orange" },
    { label: "Khá", color: "blue" },
    { label: "Giỏi", color: "green" },
    { label: "Xuất Sắc", color: "blueviolet" },
  ];
  return (
    <div>
      <h3> Chú Thích Danh Hiệu:</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {legends.map((item, id) => (
          <li key={id} style={{ color: item.color, fontWeight: "bold" }}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
