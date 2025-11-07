import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import authRoute from "./authRoute";
import adminRoute from "./adminRoute";

let router = createBrowserRouter([
  ...authRoute,
  ...adminRoute,
  { path: "*", Component: NotFoundPage },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};
export default AppRoute;
