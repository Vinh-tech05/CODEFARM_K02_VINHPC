import {
  createTodoApi,
  getTodosApi,
  removeTodoApi,
  updateTodoApi,
} from "../api/apiTodo.js";
import type { AppDispatch } from "../store/index.js";
import type { Todo } from "../types/todoType.js";
import { addTodo, getTodos, removeTodo, updateTodo } from "./todoSlice.js";

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  const data = await getTodosApi();
  dispatch(getTodos(data));
};

export const createTodo =
  (body: Omit<Todo, "_id">) => async (dispatch: AppDispatch) => {
    const data = await createTodoApi(body);
    dispatch(addTodo(data));
  };

export const removeTodoAsync =
  (id: string) => async (dispatch: AppDispatch) => {
    await removeTodoApi(id);
    dispatch(removeTodo(id));
  };
export const updateTodoAsync =
  (id: string, body: Omit<Todo, "_id">) => async (dispatch: AppDispatch) => {
    const data = await updateTodoApi(id, body);
    dispatch(updateTodo(data));
  };

export const toggleCompletedAsync =
  (id: string, completed: boolean) => async (dispatch: AppDispatch) => {
    const updated = await updateTodoApi(id, { completed });
    dispatch(updateTodo(updated));
  };
