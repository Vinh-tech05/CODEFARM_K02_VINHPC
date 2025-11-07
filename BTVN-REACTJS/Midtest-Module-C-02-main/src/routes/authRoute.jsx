import { Component } from "react";
import FormRegister from "../pages/FormRegister";
import LayoutAuth from "../layouts/LayoutAuth";
import FormLogin from "../pages/FormLogin";

const authRoute = [
  {
    path: "auth",
    element: <LayoutAuth />,
    children: [
      { path: "register", Component: FormRegister },
      { path: "login", Component: FormLogin },
    ],
  },
];
export default authRoute;
