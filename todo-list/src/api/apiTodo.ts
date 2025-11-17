import type { Todo } from "../types/todoType.js";
import api from "./index.js";

export const getTodosApi = async () => {
  const { data } = await api.get("/todos");
  return data.data;
};

export const getTodoDetailApi = async (id: string) => {
  const { data } = await api.get(`/todos/${id}`);
  return data.data;
};

export const createTodoApi = async (body: Omit<Todo, "_id">) => {
  const { data } = await api.post(`/todos`, body);
  return data.data;
};

export const updateTodoApi = async (
  id: string,
  body: Partial<Omit<Todo, "_id">>
) => {
  const { data } = await api.patch(`/todos/${id}`, body);
  return data.data;
};

export const removeTodoApi = async (id: string) => {
  const { data } = await api.delete(`/todos/${id}`);
  return data.data;
};
