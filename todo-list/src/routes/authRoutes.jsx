import FormRegister from "../pages/auth/FormRegister";
import FormLogin from "../pages/auth/FormLogin";
import LayoutAuth from "../layouts/LayoutAuth.js";
import AuthProtected from "./protectedRoutes/AuthProtected";

const authRoutes = [
  {
    path: "auth",
    element: (
      <AuthProtected>
        <LayoutAuth />
      </AuthProtected>
    ),
    children: [
      { path: "register", Component: FormRegister },
      { path: "login", Component: FormLogin },
    ],
  },
];

export default authRoutes;
