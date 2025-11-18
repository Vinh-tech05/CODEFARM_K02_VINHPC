import React from "react";
import LayoutClient from "../layouts/LayoutClient.js";
import ImportantPage from "../pages/client/ImportantPage.js";
import TodoPage from "../pages/client/TodoPage.js";
import TodoDetailPage from "../pages/client/TodoDetailPage.js";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./protectedRoutes/PrivateRoute.js";

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
