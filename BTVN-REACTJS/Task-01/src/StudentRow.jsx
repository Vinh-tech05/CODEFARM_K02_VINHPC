import React from "react";

const getDanhHieu = (score) => {
  if (score < 3)
    return {
      label: "Yếu",
      color: "red",
    };
  if (score >= 3 && score < 6)
    return {
      label: "Trung Bình",
      color: "orange",
    };
  if (score >= 6 && score <= 8)
    return {
      label: "Khá",
      color: "blue",
    };
  if (score > 8 && score < 9.5)
    return {
      label: "Giỏi",
      color: "green",
    };
  if (score >= 9.5 && score <= 10)
    return {
      label: "Xuất Sắc",
      color: "blueviolet",
    };
  return;
};

const StudentRow = ({ student }) => {
  const danhHieu = getDanhHieu(student.score);
  let rowClass = "";
  switch (danhHieu.label) {
    case "Yếu":
      rowClass = "row-yeu";
      break;
    case "Trung Bình":
      rowClass = "row-trungbinh";
      break;
    case "Khá":
      rowClass = "row-kha";
      break;
    case "Giỏi":
      rowClass = "row-gioi";
      break;
    case "Xuất Sắc":
      rowClass = "row-xuatsac";
      break;
    default:
      rowClass = "";
  }
  //   console.log(danhHieu);
  //   return;
  //   console.log(student);
  //   return;

  return (
    <tr className={rowClass}>
      <td>{student.id}</td>
      <td>{student.fullName}</td>
      <td>{student.gender == "male" ? "Nam" : "Nữ"}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
      <td>{student.score}</td>
      <td style={{ color: danhHieu.color, fontWeight: "bold" }}>
        {danhHieu.label}
      </td>
    </tr>
  );
};

export default StudentRow;
