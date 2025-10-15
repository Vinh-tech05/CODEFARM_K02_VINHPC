import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <div>
      HELLO ADMIN
      <Outlet />
    </div>
  );
};

export default LayoutClient;
