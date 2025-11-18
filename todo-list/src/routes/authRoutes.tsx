import FormRegister from "../pages/auth/FormRegister.js";
import FormLogin from "../pages/auth/FormLogin.js";
import LayoutAuth from "../layouts/LayoutAuth.js";
import AuthProtected from "./protectedRoutes/AuthProtected.js";

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
