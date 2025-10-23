import React from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  //   console.log(token);

  if (token) return <Navigate to={"/todos"} />;
  return children;
};

export default AuthProtected;
