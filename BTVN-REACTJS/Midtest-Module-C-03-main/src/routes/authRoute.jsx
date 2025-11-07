import FormLogin from "../pages/FormLogin";
import FormRegister from "../pages/FormRegister";
import LayoutAuth from "../layouts/LayoutAuth";

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
