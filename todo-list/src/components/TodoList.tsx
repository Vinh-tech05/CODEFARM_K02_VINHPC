import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
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
