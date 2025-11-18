import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] text-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <h1 className="text-[120px] font-extrabold text-blue-600 drop-shadow-md">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Oops! Trang bạn tìm không tồn tại
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Có thể đường dẫn đã bị thay đổi hoặc trang này đã bị xóa.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
