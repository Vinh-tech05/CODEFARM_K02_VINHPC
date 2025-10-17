import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            MyTodo
          </Link>
        </div>
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
