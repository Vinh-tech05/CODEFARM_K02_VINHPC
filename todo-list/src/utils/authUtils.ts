export const logout = (navigate) => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  navigate("/auth/login");
};
