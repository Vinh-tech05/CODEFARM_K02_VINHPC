import React from "react";
import LayoutClient from "../layouts/LayoutClient";
import ImportantPage from "../pages/client/ImportantPage";
import TodoPage from "../pages/client/TodoPage";
import TodoDetailPage from "../pages/client/TodoDetailPage";
import { Navigate } from "react-router-dom";

const clientRoutes = [
  {
    path: "/",
    Component: LayoutClient,
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
