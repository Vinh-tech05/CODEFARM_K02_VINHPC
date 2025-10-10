import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import Pagination from "./components/Pagination";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [meta, setMeta] = useState(null);
  const [query, setQuery] = useState({
    _page: 1,
    _limit: 6,
    _sort: "priority",
    _order: "desc",
    q: "",
    priority: "",
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const params = Object.entries(query)
          .filter(([_, v]) => v !== null && v !== undefined && v !== "")
          .map(([k, v]) => `${k}=${v}`)
          .join("&");

        const res = await fetch(
          `https://api-class-o1lo.onrender.com/api/v1/todos?${params}`
        );
        const data = await res.json();

        setTodos(data.data || []);
        setMeta(data.meta || null);
      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      }
    };

    fetchTodos();
  }, [query]);

  return (
    <div
      style={{
        padding: 30,
        fontFamily: "sans-serif",
        maxWidth: 1000,
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Danh sách việc cần làm
      </h1>

      {/* Bộ lọc & tìm kiếm */}
      <TodoFilter query={query} setQuery={setQuery} />

      {/* Danh sách công việc */}
      <TodoList todos={todos} />

      {/* Phân trang */}
      {meta && (
        <Pagination
          meta={meta}
          onPageChange={(page) =>
            setQuery((prev) => ({ ...prev, _page: page }))
          }
        />
      )}
    </div>
  );
};

export default App;
