import React from "react";

const loginForm = () => {
  return (
    <div>
      <form>
        <h2>Đăng Nhập</h2>
        <div style={{ marginBottom: 8 }}>
          <input placeholder="Email" />
        </div>
        <div style={{ marginBottom: 8 }}>
          <input type="password" placeholder="Mật khẩu" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default loginForm;
