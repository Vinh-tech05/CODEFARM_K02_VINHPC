import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      <h1 className="text-center">Quản lý SP Và Danh Mục By PCV</h1>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
