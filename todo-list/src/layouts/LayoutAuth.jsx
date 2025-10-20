import React from "react";
import { Outlet, Link } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-3xl w-full max-w-md p-8 border border-gray-100">
        <div className="text-center mb-6">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            MyToDo
          </Link>
          <p className="text-gray-500 mt-2 text-sm">
            Quản lý công việc thông minh
          </p>
        </div>
        <Outlet />

        <footer className="text-center text-gray-400 text-xs mt-6">
          © {new Date().getFullYear()} MyToDo. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LayoutAuth;
