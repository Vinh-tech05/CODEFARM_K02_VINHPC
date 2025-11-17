import React from "react";
import LayoutClient from "../layouts/LayoutClient.js";
import ImportantPage from "../pages/client/ImportantPage";
import TodoPage from "../pages/client/TodoPage";
import TodoDetailPage from "../pages/client/TodoDetailPage";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./protectedRoutes/PrivateRoute";

const clientRoutes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <LayoutClient />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Navigate to={"/todos"} /> },
      { path: "todos", Component: TodoPage },
      // Dynamic route
      { path: "todos/:id", Component: TodoDetailPage },
      { path: "important", Component: ImportantPage },
    ],
  },
];

export default clientRoutes;
