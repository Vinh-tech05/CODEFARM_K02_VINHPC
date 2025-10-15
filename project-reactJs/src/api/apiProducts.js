import api from ".";

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};
export const createProduct = async (body) => {
  const { data } = await api.post(`/products`, body);
  return data;
};
export const updateProduct = async (id, body) => {
  const { data } = await api.patch(`/products/${id}`, body);
  return data;
};
