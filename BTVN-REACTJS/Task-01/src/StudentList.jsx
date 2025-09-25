import React from "react";
import StudentRow from "./StudentRow";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr style={{ background: "#eee" }}>
            <th>Mã SV</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Tuổi</th>
            <th>Chuyên ngành</th>
            <th>Điểm</th>
            <th>Danh hiệu</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => (
            <StudentRow key={st.id} student={st} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
