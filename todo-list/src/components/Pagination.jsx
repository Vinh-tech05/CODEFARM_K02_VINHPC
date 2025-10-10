import React from "react";

const Pagination = ({ meta, onPageChange }) => {
  if (!meta || meta.totalPages <= 1) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        gap: 8,
      }}
    >
      <button
        onClick={() => meta.page > 1 && onPageChange(meta.page - 1)}
        style={{ padding: "5px 10px" }}
      >
        Prev
      </button>

      {Array.from({ length: meta.totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          style={{
            padding: "5px 10px",
            background: meta.page === i + 1 ? "#007bff" : "#fff",
            color: meta.page === i + 1 ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: 5,
          }}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() =>
          meta.page < meta.totalPages && onPageChange(meta.page + 1)
        }
        style={{ padding: "5px 10px" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
