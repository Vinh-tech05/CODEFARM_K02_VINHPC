import { createBrowserRouter, RouterProvider } from "react-router-dom";
import clientRoutes from "./clientRoutes";

let router = createBrowserRouter([...clientRoutes]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
