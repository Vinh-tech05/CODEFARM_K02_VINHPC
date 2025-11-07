import { Component } from "react";
import LayoutAdmin from "../layouts/LayoutAdmin";
import ProjectList from "../pages/ProjectList";
import ProtectedRoute from "./ProtectedRoute";
import ProjectForm from "../pages/ProjectForm";
import TaskList from "../pages/TaskList";
import TaskForm from "../pages/TaskForm";

const adminRoute = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      { path: "projects", Component: ProjectList },
      { path: "projects/create", Component: ProjectForm },
      { path: "projects/edit/:id", Component: ProjectForm },

      { path: "projects/:projectId/tasks", Component: TaskList },
      { path: "projects/:projectId/tasks/create", Component: TaskForm },
      { path: "projects/:projectId/tasks/edit/:id", Component: TaskForm },
    ],
  },
];
export default adminRoute;
