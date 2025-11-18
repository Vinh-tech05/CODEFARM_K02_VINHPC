import type { NavigateFunction } from "react-router-dom";

export const logout = (navigate: NavigateFunction) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  navigate("/auth/login");
};
