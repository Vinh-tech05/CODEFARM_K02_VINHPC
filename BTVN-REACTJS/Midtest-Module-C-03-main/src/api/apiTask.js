import api from ".";

export const getTasks = async () => {
  const { data } = await api.get("/tasks");
  return data;
};

export const createTask = async (body) => {
  const { data } = await api.post("/tasks", body);
  return data;
};

export const updateTask = async (id, body) => {
  const { data } = await api.put(`/tasks/${id}`, body);
  return data;
};

export const removeTask = async (id) => {
  const { data } = await api.delete(`/tasks/${id}`);
  return data;
};

export const getTasksByProject = async (projectId) => {
  const { data } = await api.get(`/tasks?projectId=${projectId}`);
  return data;
};
