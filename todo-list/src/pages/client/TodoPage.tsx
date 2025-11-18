import React, { useEffect, useState } from "react";
import TodoList from "../../components/TodoList.js";
import TodoFilter from "../../components/TodoFilter.js";
import Pagination from "../../components/Pagination.js";
import type { Todo } from "../../types/todoType.js";

interface Query {
  _page: number;
  _limit: number;
  _sort: string;
  _order: "asc" | "desc" | "";
  q: string;
  priority: string;
  status: string;
}

interface Meta {
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [query, setQuery] = useState<Query>({
    _page: 1,
    _limit: 6,
    _sort: "priority",
    _order: "desc",
    q: "",
    priority: "",
    status: "",
  });

  const getStatus = (
    item: Todo
  ): "completed" | "overdue" | "doing" | "unknown" => {
    const today = new Date();
    const due = item.dueDate ? new Date(item.dueDate) : null;
    if (item.completed) return "completed";
    if (!due) return "unknown";
    return due < today ? "overdue" : "doing";
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const params = Object.entries(query)
          .filter(
            ([k, v]) =>
              !["_page", "_limit", "status"].includes(k) &&
              v !== null &&
              v !== undefined &&
              v !== ""
          )
          .map(([k, v]) => `${k}=${v}`)
          .join("&");

        const url = `https://api-class-o1lo.onrender.com/api/vinh/todos?${params}`;
        const res = await fetch(url);
        const data = await res.json();

        let todosData: Todo[] = data.data || [];

        if (query.status) {
          todosData = todosData.filter(
            (todo) => getStatus(todo) === query.status
          );
        }

        const start = (query._page - 1) * query._limit;
        const paginated = todosData.slice(start, start + query._limit);

        setTodos(todosData);
        setFilteredTodos(paginated);
        setMeta({
          totalItems: todosData.length,
          totalPages: Math.ceil(todosData.length / query._limit),
          currentPage: query._page,
        });
      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      }
    };

    fetchTodos();
  }, [query]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 font-sans">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Danh Sách Việc Cần Làm
      </h1>
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 mb-8 border border-gray-100">
        <TodoFilter query={query} setQuery={setQuery} />
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
        {filteredTodos.length > 0 ? (
          <TodoList todos={filteredTodos} />
        ) : (
          <p className="text-center text-gray-500 py-10 text-lg">
            Không có công việc nào được tìm thấy
          </p>
        )}
      </div>
      {meta && (
        <div className="mt-6">
          <Pagination
            meta={meta}
            onPageChange={(page) =>
              setQuery((prev) => ({ ...prev, _page: page }))
            }
          />
        </div>
      )}
    </div>
  );
};

export default TodoPage;
