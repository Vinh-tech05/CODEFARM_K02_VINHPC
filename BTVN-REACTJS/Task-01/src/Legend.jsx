import React from "react";

const Legend = () => {
  const legends = [
    { label: "Yếu: Nhỏ hơn 3.", color: "red" },
    { label: "Trung Bình: Trên 3 điểm và nhỏ hơn 6.", color: "orange" },
    { label: "Khá: Trên 6 điểm và nhỏ hơn hoặc bằng 8.", color: "blue" },
    { label: "Giỏi: Trên 8 điểm và nhỏ hơn 9.5.", color: "green" },
    {
      label: "Xuất Sắc: Trên hoặc bằng 9,5 điểm và nhỏ hơn 10.",
      color: "blueviolet",
    },
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
