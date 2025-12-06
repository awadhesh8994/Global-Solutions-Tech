import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

const AdminDashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [editingCompany, setEditingCompany] = useState(null);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    companyId: "",
    roleId: "",
  });
  const [editingUser, setEditingUser] = useState(null);

  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: BASE_URL,
    headers: { 
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  });

  // Load Data on Page Load
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    setError("");
    try {
      await Promise.all([
        fetchCompanies(),
        fetchUsers(),
        fetchPendingUsers()
      ]);
    } catch (err) {
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // GET companies
  const fetchCompanies = async () => {
    try {
      const res = await api.get("/admin/companies");
      setCompanies(res.data);
    } catch (err) {
      setError("Failed to fetch companies");
      console.log(err);
    }
  };

  // GET all users
  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users");
      console.log(err);
    }
  };

  // GET pending users
  const fetchPendingUsers = async () => {
    try {
      const res = await api.get("/admin/users/pending");
      setPendingUsers(res.data);
    } catch (err) {
      setError("Failed to fetch pending users");
      console.log(err);
    }
  };

  // CREATE company
  const createCompany = async () => {
    if (!companyName.trim()) {
      setError("Company name is required");
      return;
    }
    try {
      await api.post("/admin/companies", { name: companyName });
      alert("Company created successfully");
      setCompanyName("");
      fetchCompanies();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create company");
      console.log(err);
    }
  };

  // UPDATE company
  const updateCompany = async () => {
    if (!companyName.trim()) {
      setError("Company name is required");
      return;
    }
    try {
      await api.put(`/admin/companies/${editingCompany.id}`, { name: companyName });
      alert("Company updated successfully");
      setCompanyName("");
      setEditingCompany(null);
      fetchCompanies();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update company");
      console.log(err);
    }
  };

  // DELETE company
  const deleteCompany = async (id) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;
    try {
      await api.delete(`/admin/companies/${id}`);
      alert("Company deleted successfully");
      fetchCompanies();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete company");
      console.log(err);
    }
  };

  // CREATE user
  const createUser = async () => {
    if (!userData.email || !userData.password || !userData.companyId || !userData.roleId) {
      setError("All fields are required");
      return;
    }
    try {
      await api.post("/admin/users", userData);
      alert("User created successfully");
      setUserData({ email: "", password: "", companyId: "", roleId: "" });
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create user");
      console.log(err);
    }
  };

  // UPDATE user
  const updateUser = async () => {
    if (!editingUser) return;
    try {
      // Only send password if it's not empty
      const updateData = { ...userData };
      if (!updateData.password) {
        delete updateData.password;
      }
      
      await api.put(`/admin/users/${editingUser.id}`, updateData);
      alert("User updated successfully");
      setUserData({ email: "", password: "", companyId: "", roleId: "" });
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update user");
      console.log(err);
    }
  };

  // DELETE user
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await api.delete(`/admin/users/${id}`);
      alert("User deleted successfully");
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete user");
      console.log(err);
    }
  };

  // APPROVE pending user
  const approveUser = async (id) => {
    try {
      await api.put(`/admin/users/${id}/approve`);
      alert("User approved successfully");
      fetchPendingUsers();
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to approve user");
      console.log(err);
    }
  };

  // Handle edit company
  const handleEditCompany = (company) => {
    setEditingCompany(company);
    setCompanyName(company.name);
  };

  // Handle edit user
  const handleEditUser = (user) => {
    setEditingUser(user);
    setUserData({
      email: user.email,
      password: "", // Don't show existing password
      companyId: user.companyId,
      roleId: user.roleId
    });
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingCompany(null);
    setEditingUser(null);
    setCompanyName("");
    setUserData({ email: "", password: "", companyId: "", roleId: "" });
  };

  if (!token) {
    return (
      <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>
          <p className="text-gray-600">Please login to access the admin dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Admin Dashboard
      </h1>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
          <button 
            onClick={() => setError("")}
            className="float-right font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Company Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editingCompany ? "Edit Company" : "Create Company"}
        </h2>

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            className="border px-3 py-2 w-64 rounded"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <button
            onClick={editingCompany ? updateCompany : createCompany}
            className={`px-4 py-2 rounded text-white ${editingCompany ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {editingCompany ? "Update" : "Create"}
          </button>

          {editingCompany && (
            <button
              onClick={handleCancelEdit}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Company List */}
        <h3 className="text-xl font-semibold mb-3">Company List</h3>
        <ul className="space-y-3">
          {companies.map((company) => (
            <li
              key={company.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded"
            >
              <span className="font-medium">{company.name} (ID: {company.id})</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditCompany(company)}
                  className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCompany(company.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* User Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editingUser ? "Edit User" : "Create User"}
        </h2>

        <div className="grid grid-cols-2 gap-4 max-w-xl mb-4">
          <input
            type="email"
            className="border px-3 py-2 rounded"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <input
            type="password"
            className="border px-3 py-2 rounded"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <select
            className="border px-3 py-2 rounded"
            value={userData.companyId}
            onChange={(e) =>
              setUserData({ ...userData, companyId: e.target.value })
            }
          >
            <option value="">Select Company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name} (ID: {company.id})
              </option>
            ))}
          </select>

          <select
            className="border px-3 py-2 rounded"
            value={userData.roleId}
            onChange={(e) =>
              setUserData({ ...userData, roleId: e.target.value })
            }
          >
            <option value="">Select Role</option>
            <option value="1">Admin</option>
            <option value="2">Manager</option>
            <option value="3">User</option>
          </select>
        </div>

        <div className="space-x-2">
          <button
            onClick={editingUser ? updateUser : createUser}
            className={`px-4 py-2 rounded text-white ${editingUser ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'}`}
          >
            {editingUser ? "Update User" : "Create User"}
          </button>

          {editingUser && (
            <button
              onClick={handleCancelEdit}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          )}
        </div>

        {/* User List */}
        <h3 className="text-xl font-semibold mt-6 mb-3">All Users</h3>
        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded"
            >
              <div>
                <span className="font-medium">{user.email}</span>
                <span className="text-sm text-gray-600 ml-4">
                  Company: {user.companyId} | Role: {user.roleId}
                </span>
                {!user.approved && (
                  <span className="ml-4 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                    Pending Approval
                  </span>
                )}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Pending Users */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Pending User Approvals</h2>

        <ul className="space-y-3">
          {pendingUsers.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-yellow-50 p-3 rounded"
            >
              <div>
                <span className="font-medium">{user.email}</span>
                <span className="text-sm text-gray-600 ml-4">
                  Company: {user.companyId} | Role: {user.roleId}
                </span>
              </div>
              <button
                onClick={() => approveUser(user.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Approve
              </button>
            </li>
          ))}

          {pendingUsers.length === 0 && (
            <p className="text-gray-600">No pending users.</p>
          )}
        </ul>
      </div>

      
    </div>
  );
};

export default AdminDashboard;