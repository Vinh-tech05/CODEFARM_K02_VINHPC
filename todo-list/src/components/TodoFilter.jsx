import React, { useEffect, useState } from "react";

const TodoFilter = ({ query, setQuery }) => {
  const [search, setSearch] = useState(query.q || "");

  useEffect(() => {
    setQuery((prev) => ({
      ...prev,
      _sort: "",
      _order: "",
    }));
  }, []);

  const handleReset = () => {
    setSearch("");
    setQuery({
      ...query,
      q: "",
      priority: "",
      status: "",
      _sort: "",
      _order: "",
      _page: 1,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <input
          type="text"
          placeholder="Tìm kiếm công việc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              setQuery((prev) => ({ ...prev, q: search, _page: 1 }));
          }}
          style={{ padding: "6px 10px", minWidth: 250 }}
        />
        <button
          onClick={() => setQuery((prev) => ({ ...prev, q: search, _page: 1 }))}
          style={{
            padding: "6px 10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Tìm kiếm
        </button>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <select
          value={query.priority || ""}
          onChange={(e) =>
            setQuery((prev) => ({
              ...prev,
              priority: e.target.value || "",
              _page: 1,
            }))
          }
          style={{ padding: "6px 10px" }}
        >
          <option value="">Tất cả ưu tiên</option>
          <option value="1">Ưu tiên thấp</option>
          <option value="2">Ưu tiên trung bình</option>
          <option value="3">Ưu tiên cao</option>
        </select>

        <select
          value={query.status || ""}
          onChange={(e) =>
            setQuery((prev) => ({
              ...prev,
              status: e.target.value || "",
              _page: 1,
            }))
          }
          style={{ padding: "6px 10px" }}
        >
          <option value="">Tất cả trạng thái</option>
          <option value="doing">Đang thực hiện</option>
          <option value="completed">Hoàn thành</option>
          <option value="overdue">Quá hạn</option>
        </select>

        <select
          value={query._order || ""}
          onChange={(e) =>
            setQuery((prev) => ({
              ...prev,
              _sort: e.target.value ? "priority" : "",
              _order: e.target.value || "",
            }))
          }
          style={{ padding: "6px 10px" }}
        >
          <option value="">Sắp xếp</option>
          <option value="asc">Ưu tiên tăng dần</option>
          <option value="desc">Ưu tiên giảm dần</option>
        </select>

        {(query.q || query.priority || query.status || query._order) && (
          <button
            onClick={handleReset}
            style={{
              padding: "6px 10px",
              background: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Làm mới
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoFilter;
