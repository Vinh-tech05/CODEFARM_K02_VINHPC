import { Component } from "react";
import clientRoutes from "./clientRoutes";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFoundPage from "../pages/client/NotFoundPage";
import adminRoutes from "./adminroutes";
import authRoutes from "./authRoutes";

let router = createBrowserRouter([
  ...clientRoutes,
  ...adminRoutes,
  ...authRoutes,
  { path: "*", Component: NotFoundPage },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
