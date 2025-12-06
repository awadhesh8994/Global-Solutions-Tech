import React from "react";
import AdminDashboard from "./Admin/AdminDashboard";
import UserDashboard from "./User/UserDashboard";

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const role = userData?.role?.toLowerCase();

  if (!role) {
    return (
      <p className="text-center mt-20 text-red-500">
        You must login to access the dashboard.
      </p>
    );
  }

  return role === "admin" ? <AdminDashboard /> : <UserDashboard />;
}
