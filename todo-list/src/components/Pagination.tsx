import React from "react";

const Pagination = ({ meta, onPageChange }) => {
  if (!meta || meta.totalPages <= 1) return null;

  const { currentPage, totalPages } = meta;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200 ${
          currentPage === i
            ? "bg-blue-600 text-white border-blue-600 shadow-md"
            : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center items-center gap-3 mt-6 select-none">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
          currentPage === 1
            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
            : "text-gray-700 bg-white hover:bg-blue-50 border-gray-300"
        }`}
      >
        Prev
      </button>

      <div className="flex gap-2">{pages}</div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
          currentPage === totalPages
            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
            : "text-gray-700 bg-white hover:bg-blue-50 border-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
