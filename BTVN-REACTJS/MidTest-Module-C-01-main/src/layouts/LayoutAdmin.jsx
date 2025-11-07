import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <h1 className="text-center">Quản lý khóa học và bài học By PCV</h1>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
