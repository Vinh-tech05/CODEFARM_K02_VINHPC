import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "../types/todoType.js";

type ID = {
  _id: number;
};

export interface TodoState {
  todos: Todo[];
  editingTodo?: Todo | undefined;
}

export const initialState: TodoState = {
  todos: [],
  editingTodo: undefined,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },

    setEditingTodo(state, action: PayloadAction<Todo | undefined>) {
      state.editingTodo = action.payload;
    },

    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      const index = state.todos.findIndex((t) => t._id === action.payload._id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const todo = state.todos.find((t) => t._id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const {
  getTodos,
  addTodo,
  removeTodo,
  setEditingTodo,
  updateTodo,
  toggleCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
