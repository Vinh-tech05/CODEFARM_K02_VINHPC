import api from ".";

export const register = async () => {
  const { data } = await api.get("/auth/register");
  return data;
};
export const login = async () => {
  const { data } = await api.get("/auth/login");
  return data;
};
