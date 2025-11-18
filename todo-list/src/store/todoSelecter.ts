import type { RootState } from "./index.js";

export const selectTodoStats = (state: RootState) => {
  const todos = state.todos.todos;

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const notCompleted = total - completed;

  return { total, completed, notCompleted };
};
