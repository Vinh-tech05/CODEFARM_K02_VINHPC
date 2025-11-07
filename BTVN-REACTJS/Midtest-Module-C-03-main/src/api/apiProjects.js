import api from ".";

export const getProjects = async (keyword = "") => {
  const { data } = await api.get(`/projects?q=${keyword}`);
  return data;
};

export const createProject = async (body) => {
  const { data } = await api.post("/projects", body);
  return data;
};

export const updateProject = async (id, body) => {
  const { data } = await api.put(`/projects/${id}`, body);
  return data;
};

export const removeProject = async (id) => {
  const { data } = await api.delete(`/projects/${id}`);
  return data;
};
