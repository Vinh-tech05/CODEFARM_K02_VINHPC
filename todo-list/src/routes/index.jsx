import { Component } from "react";
import clientRoutes from "./clientRoutes";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFoundPage from "../pages/client/NotFoundPage";

let router = createBrowserRouter([
  ...clientRoutes,
  { path: "*", Component: NotFoundPage },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
