import api from "./index";

export const getCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

export const createCategory = async (body) => {
  const { data } = await api.post("/categories", body);
  return data;
};

export const updateCategory = async (id, body) => {
  const { data } = await api.put(`/categories/${id}`, body);
  return data;
};

export const removeCategory = async (id) => {
  const { data } = await api.delete(`/categories/${id}`);
  return data;
};
