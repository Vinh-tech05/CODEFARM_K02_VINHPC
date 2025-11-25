import React, { useEffect } from "react";
import TodoItem from "./TodoItem.js";
import type { Todo } from "../types/todoType.js";
import { fetchTodos } from "../features/todoActions.js";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/index.js";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = () => {
  const dispath = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos || []);
  useEffect(() => {
    dispath(fetchTodos());
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 20,
      }}
    >
      {todos.length > 0 ? (
        todos.map((item) => <TodoItem key={item._id} item={item} />)
      ) : (
        <p>Không có công việc nào.</p>
      )}
    </div>
  );
};

export default TodoList;
