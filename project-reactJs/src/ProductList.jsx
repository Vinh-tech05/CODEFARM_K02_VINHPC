import React from "react";

const ProductList = ({ student }) => {
  return (
    <div>
      <h1>Danh sách học viên</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-borderless table-primary align-middle">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Score</th>
              <th>Kết quả</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {student.map((item) => (
              <tr
                className="table-primary"
                key={item.id}
                style={{ color: item.score < 5 ? "red" : "" }}
              >
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.score}</td>
                <td>
                  <p>{item.score < 5 ? "fail" : "pass"}</p>
                </td>
                <td>{item.score < 5 && <button>Đăng ký học lại</button>}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                Tổng số học viên học lại:{" "}
                {student.filter((item) => item.score < 5).length  }
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
