import FormRegister from "../pages/auth/FormRegister";
import FormLogin from "../pages/auth/FormLogin";
import LayoutAuth from "../layouts/LayoutAuth";

const authRoutes = [
  {
    path: "auth",
    Component: LayoutAuth,
    children: [
      { path: "register", Component: FormRegister },
      { path: "login", Component: FormLogin },
    ],
  },
];

export default authRoutes;
