import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }
  if (user.role !== "admin") {
    return (
      <h1 className="text-center text-danger mt-5">
        Forbidden: You do not have access to this resource.
      </h1>
    );
  }
  return <>{children}</>;
};

export default ProtectedRoute;
