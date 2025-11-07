import api from "./index";
export const getProducts = async (keyword = "") => {
  const { data } = await api.get(`/products?q=${keyword}`);
  return data;
};

export const createProduct = async (body) => {
  const { data } = await api.post("/products", body);
  return data;
};

export const updateProduct = async (id, body) => {
  const { data } = await api.put(`/products/${id}`, body);
  return data;
};

export const removeProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
