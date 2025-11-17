import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export type PrivateRouteProps = {
  children: ReactNode;
};
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (!token) return <Navigate to={"/auth/login"} />;
  return children;
};

export default PrivateRoute;
