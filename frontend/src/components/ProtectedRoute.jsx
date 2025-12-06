import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  // Match keys from login storage
  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("userData"));

  // Not logged in
  if (!token || !user) {
    console.log("No token found, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  // Safely get user's role
  const userRole = typeof user.role === "string" ? user.role : user.role?.name;

  // Role mismatch
  if (role && userRole?.toLowerCase() !== role.toLowerCase()) {
    console.log("Role mismatch, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  // User is authenticated and role matches
  return children;
}
