import React, { useState } from "react";

const TodoFilter = ({ query, setQuery }) => {
  const [search, setSearch] = useState(query.q || "");

  const handleReset = () => {
    setSearch("");
    setQuery({
      _page: 1,
      _limit: 8,
      _sort: "priority",
      _order: "desc",
      q: "",
      priority: "",
      status: "",
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
      {/*  Tìm kiếm */}
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

      {/* Bộ lọc */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {/* Ưu tiên */}
        <select
          value={query.priority || ""}
          onChange={(e) =>
            setQuery((prev) => ({
              ...prev,
              priority: e.target.value,
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

        {/* Trạng thái */}
        <select
          value={query.status || ""}
          onChange={(e) =>
            setQuery((prev) => ({
              ...prev,
              status: e.target.value,
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

        {/* Sắp xếp */}
        <select
          value={query._order || ""}
          onChange={(e) =>
            setQuery((prev) => ({
              ...prev,
              _sort: "priority",
              _order: e.target.value || "desc",
            }))
          }
          style={{ padding: "6px 10px" }}
        >
          <option value="">Sắp xếp mặc định</option>
          <option value="asc">Ưu tiên tăng dần</option>
          <option value="desc">Ưu tiên giảm dần</option>
        </select>

        {/* Làm mới bộ lọc */}
        {(query.q || query.priority || query.status) && (
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
