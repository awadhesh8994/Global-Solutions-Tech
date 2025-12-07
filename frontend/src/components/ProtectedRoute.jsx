import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role: requiredRole, children }) {
  const token = localStorage.getItem("authToken");
  const userRole = localStorage.getItem("userRole");

  // Not authenticated
  if (!token) {
    console.log("ProtectedRoute: no token -> redirect to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("ProtectedRoute: token present, userRole =", userRole, "requiredRole =", requiredRole);

  // Map requiredRole to backend roles
  if (requiredRole === "SUPER_ADMIN") {
    // allow both string and number representations
    if (userRole !== "SUPER_ADMIN" && userRole !== "ADMIN" && userRole !== "1" && userRole !== 1) {
      return <Navigate to="/user/dashboard" replace />;
    }
  }

  if (requiredRole === "USER") {
    if (userRole !== "USER" && userRole !== "2" && userRole !== 2) {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  return children;
}
