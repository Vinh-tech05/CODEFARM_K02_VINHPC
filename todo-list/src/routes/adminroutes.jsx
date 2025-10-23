import TodoList from "../pages/admin/todo/TodoList";
import FormTodo from "../pages/admin/todo/FormTodo";
import LayoutAdmin from "../layouts/LayoutAdmin";
import PrivateRoute from "./protectedRoutes/PrivateRoute";

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
