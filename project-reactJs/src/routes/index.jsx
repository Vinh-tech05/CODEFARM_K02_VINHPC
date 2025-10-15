import { createBrowserRouter, RouterProvider } from "react-router-dom";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";

let router = createBrowserRouter([...clientRoutes, ...adminRoutes]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
