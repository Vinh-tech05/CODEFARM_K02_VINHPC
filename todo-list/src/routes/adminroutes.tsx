import TodoList from "../pages/admin/todo/TodoList.js";
import FormTodo from "../pages/admin/todo/FormTodo.js";
import LayoutAdmin from "../layouts/LayoutAdmin.js";
import PrivateRoute from "./protectedRoutes/PrivateRoute.js";

const adminRoutes = [
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <LayoutAdmin />
      </PrivateRoute>
    ),
    children: [
      { path: "todos", Component: TodoList },
      { path: "todos/add", Component: FormTodo },
      { path: "todos/update/:id", Component: FormTodo },
    ],
  },
];

export default adminRoutes;
