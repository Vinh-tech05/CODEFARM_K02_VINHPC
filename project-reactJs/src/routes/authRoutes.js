import registerForm from "../pages/admin/auth/registerForm";
import loginForm from "../pages/admin/auth/loginForm";
import LayoutAuth from "../layouts/LayoutAuth";
const authRoutes = [
  {
    path: "auth",
    Component: LayoutAuth,
    children: [
      { path: "register", Component: registerForm },
      { path: "login", Component: loginForm },
    ],
  },
];

{
  /* <LayoutClient>
    <HomePage />
</LayoutClient> */
}
export default authRoutes;
