import React from "react";
import { Navigate } from "react-router-dom";
import type { PrivateRouteProps } from "./PrivateRoute.js";

const AuthProtected = ({ children }: PrivateRouteProps) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  if (token) return <Navigate to={"/todos"} />;
  return children;
};

export default AuthProtected;
