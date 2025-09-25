import React from "react";

const PoorStudent = ({ student }) => {
  return (
    <div>
      <div>
        <h2>Sinh viên báo động đỏ</h2>
        <p>
          <b>{student.fullName}</b> ({student.major}) -{" "}
          <b>Điểm: {student.score}</b>
        </p>
      </div>
    </div>
  );
};

export default PoorStudent;
