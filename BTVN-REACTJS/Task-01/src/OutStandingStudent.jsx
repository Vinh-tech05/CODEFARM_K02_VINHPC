import React from "react";

const OutStandingStudent = ({ student }) => {
  //   console.log(student);

  return (
    <div>
      <h2>Sinh viên tiêu biểu</h2>
      <p>
        <b>{student.fullName}</b> ({student.major}) -{" "}
        <b>Điểm: {student.score}</b>
      </p>
    </div>
  );
};

export default OutStandingStudent;
