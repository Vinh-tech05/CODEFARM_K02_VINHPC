import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutClient = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutClient;
