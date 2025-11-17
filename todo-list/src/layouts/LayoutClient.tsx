import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";

const LayoutClient = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutClient;
