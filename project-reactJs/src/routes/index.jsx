import { createBrowserRouter, RouterProvider } from "react-router-dom";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";
import authRoutes from "./authRoutes";

let router = createBrowserRouter([
  ...clientRoutes,
  ...adminRoutes,
  ...authRoutes,
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
