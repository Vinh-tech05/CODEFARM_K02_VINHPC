import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/authUtils.js";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất không?");
    if (confirmed) {
      logout(navigate);
      toast.success("Đăng xuất thành công nhé");
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            MyTodo
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 text-lg font-medium items-center">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/todos"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Todo
              </Link>
            </li>
            <li>
              <Link
                to="/important"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Important
              </Link>
            </li>
            <li>
              <Link
                to="/admin/todos"
                className="hover:text-yellow-300 transition-colors duration-200"
              >
                Admin
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-red-400 transition-colors duration-200"
              >
                Đăng xuất
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
