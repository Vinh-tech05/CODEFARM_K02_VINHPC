import React, { useEffect, useState } from "react";
import TodoItem from "../../components/TodoItem.js";
import type { Todo } from "../../types/todoType.js";

const ImportantPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await fetch(
        "https://api-class-o1lo.onrender.com/api/vinh/todos"
      );
      const { data } = await res.json();

      const isPriorityObj = (
        p: number | { level: number; label: string } | undefined
      ): p is { level: number; label: string } => {
        return typeof p === "object" && p !== null && "level" in p;
      };

      const importantTasks: Todo[] = data.filter(
        (item: Todo) =>
          item.priority === 3 ||
          (isPriorityObj(item.priority) && item.priority.level === 3)
      );

      setTodos(importantTasks);
    } catch (err) {
      console.error("Lỗi fetch dữ liệu:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-60 text-gray-600 animate-pulse">
        Đang tải công việc quan trọng...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
        Công Việc Quan Trọng
      </h1>

      {todos.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Không có công việc quan trọng nào.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {todos.map((item) => (
            <div
              key={item._id}
              className="transform transition duration-300 hover:scale-105"
            >
              <TodoItem item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImportantPage;
