import React from "react";
import { Outlet } from "react-router-dom";

const LayouthAdmin = () => {
  return (
    <div>
      <h1>Quản lý Project - Task</h1>
      <Outlet />
    </div>
  );
};

export default LayouthAdmin;
