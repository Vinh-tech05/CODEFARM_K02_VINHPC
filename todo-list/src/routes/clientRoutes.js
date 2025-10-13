import React from "react";
import LayoutClient from "../layouts/LayoutClient";
import ImportantPage from "../pages/client/ImportantPage";
import TodoPage from "../pages/client/TodoPage";
import TodoDetailPage from "../pages/client/TodoDetailPage";

const clientRoutes = [
  {
    path: "/",
    Component: LayoutClient,
    children: [
      { index: true, Component: TodoPage },
      { path: "todos", Component: TodoPage },
      // Dynamic route
      { path: "todos/:id", Component: TodoDetailPage },
      { path: "important", Component: ImportantPage },
    ],
  },
];

export default clientRoutes;
