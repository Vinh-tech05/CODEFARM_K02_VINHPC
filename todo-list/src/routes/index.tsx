import { createBrowserRouter, RouterProvider } from "react-router";
import NotFoundPage from "../pages/client/NotFoundPage.js";
import adminRoutes from "./adminroutes.js";
import authRoutes from "./authRoutes.js";
import clientRoutes from "./clientRoutes.js";

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
