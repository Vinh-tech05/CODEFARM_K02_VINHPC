import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ListTodo, PlusCircle, Link } from "lucide-react";
import TodoStatusBar from "../components/TodoStatus.js";

const LayoutAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Bạn có chắc muốn rời khỏi trang admin không?")) {
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-8 text-center">
            Admin ToDo
          </h1>

          <nav className="space-y-3">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <LayoutDashboard className="w-5 h-5" />
              Bảng điều khiển
            </NavLink>

            <NavLink
              to="/admin/todos"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <ListTodo className="w-5 h-5" />
              Quản lý công việc
            </NavLink>

            <NavLink
              to="/admin/todos/add"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <PlusCircle className="w-5 h-5" />
              Thêm công việc
            </NavLink>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-gray-600 hover:text-red-600 px-4 py-2 rounded-lg transition mt-8"
        >
          <Link className="w-5 h-5" />
          Client
        </button>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Xin chào, Admin
          </h2>
          <span className="text-sm text-gray-500">
            Hôm nay là {new Date().toLocaleDateString("vi-VN")}
          </span>
          <span className="text-sm text-gray-500">
            <TodoStatusBar />
          </span>
        </header>
        <section className="flex-1 p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default LayoutAdmin;
