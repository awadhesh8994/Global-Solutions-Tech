import React, { useState, useEffect } from "react";
import {
  Users,
  Building2,
  UserPlus,
  PlusCircle,
  Trash2,
  Edit2,
  CheckCircle,
  XCircle,
  LogOut,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const baseUrl = "http://localhost:8080";

  // Authorization headers
  const authHeaders = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
  };

  // Form states
  const [companyForm, setCompanyForm] = useState({ name: "" });
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    companyId: "",
  });

  // Mock authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCompanies();
      fetchUsers();
      fetchPendingUsers();
    }
  }, [isLoggedIn]);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/users/companies`);
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
      alert("Failed to fetch companies");
    }
    setLoading(false);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/users`, {
        headers: authHeaders,
      });
      if (!response.ok) {
        if (response.status === 401) {
          alert("Session expired. Please login again.");
          window.location.href = "/login";
          return;
        }
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/admin/users/pending`, {
        headers: authHeaders,
      });
      const data = await response.json();
      setPendingUsers(data);
    } catch (error) {
      console.error("Error fetching pending users:", error);
      alert("Failed to fetch pending users");
    }
    setLoading(false);
  };

  const createCompany = async () => {
    if (!companyForm.name.trim()) {
      alert("Please enter company name");
      return;
    }
    try {
      const response = await fetch(`${baseUrl}/admin/companies`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({ name: companyForm.name }),
      });
      const data = await response.json();
      setCompanies([...companies, data]);
      setCompanyForm({ name: "" });
      setShowModal(false);
      alert("Company created successfully!");
    } catch (error) {
      console.error("Error creating company:", error);
      alert("Failed to create company");
    }
  };

  const createUser = async () => {
    if (!userForm.email || !userForm.password || !userForm.companyId) {
      alert("Please fill all fields");
      return;
    }
    try {
      const response = await fetch(`${baseUrl}/admin/users`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({
          email: userForm.email,
          password: userForm.password,
          companyId: parseInt(userForm.companyId),
        }),
      });
      const data = await response.json();
      setUsers([...users, data]);
      setUserForm({ email: "", password: "", companyId: "" });
      setShowModal(false);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user");
    }
  };

  const approveUser = async (userId) => {
    try {
      await fetch(`${baseUrl}/admin/users/${userId}/approve`, {
        method: "PUT",
        headers: authHeaders,
      });
      setPendingUsers(pendingUsers.filter((u) => u.id !== userId));
      alert("User approved successfully!");
    } catch (error) {
      console.error("Error approving user:", error);
      alert("Failed to approve user");
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await fetch(`${baseUrl}/admin/users/${userId}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      setUsers(users.filter((u) => u.id !== userId));
      setPendingUsers(pendingUsers.filter((u) => u.id !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  const deleteCompany = async (companyId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this company? All associated users will be affected."
      )
    )
      return;
    try {
      await fetch(`${baseUrl}/admin/companies/${companyId}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      setCompanies(companies.filter((c) => c.id !== companyId));
      alert("Company deleted successfully!");
    } catch (error) {
      console.error("Error deleting company:", error);
      alert("Failed to delete company");
    }
  };

  const updateCompany = async () => {
    if (!companyForm.name.trim()) {
      alert("Please enter company name");
      return;
    }
    try {
      await fetch(`${baseUrl}/admin/companies/${selectedItem.id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify({ name: companyForm.name }),
      });
      setCompanies(
        companies.map((c) =>
          c.id === selectedItem.id ? { ...c, name: companyForm.name } : c
        )
      );
      setShowModal(false);
      setCompanyForm({ name: "" });
      setSelectedItem(null);
      alert("Company updated successfully!");
    } catch (error) {
      console.error("Error updating company:", error);
      alert("Failed to update company");
    }
  };

  const updateUser = async () => {
    if (!userForm.email || !userForm.companyId) {
      alert("Please fill all fields");
      return;
    }
    try {
      const updateData = {
        email: userForm.email,
        companyId: parseInt(userForm.companyId),
      };
      if (userForm.password) {
        updateData.password = userForm.password;
      }
      await fetch(`${baseUrl}/admin/users/${selectedItem.id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify(updateData),
      });
      fetchUsers();
      fetchPendingUsers();
      setShowModal(false);
      setUserForm({ email: "", password: "", companyId: "" });
      setSelectedItem(null);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);
    if (type === "editCompany" && item) {
      setCompanyForm({ name: item.name });
    } else if (type === "editUser" && item) {
      setUserForm({
        email: item.email,
        password: "",
        companyId: item.company?.id || "",
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setSelectedItem(null);
    setCompanyForm({ name: "" });
    setUserForm({ email: "", password: "", companyId: "" });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setIsLoggedIn(false);
    }
  };

  const paginate = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Session Expired
          </h2>
          <p className="text-gray-600 mb-4">
            Please login to access the admin dashboard
          </p>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Login Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-blue-900">
              Admin Dashboard
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
          <button
            onClick={() => {
              setActiveTab("users");
              setCurrentPage(1);
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === "users"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-50"
            }`}
          >
            <Users className="inline mr-2" size={20} />
            All Users
          </button>
          <button
            onClick={() => {
              setActiveTab("pending");
              setCurrentPage(1);
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === "pending"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-50"
            }`}
          >
            <UserPlus className="inline mr-2" size={20} />
            Pending Users ({pendingUsers.length})
          </button>
          <button
            onClick={() => {
              setActiveTab("companies");
              setCurrentPage(1);
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
              activeTab === "companies"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-50"
            }`}
          >
            <Building2 className="inline mr-2" size={20} />
            Companies ({companies.length})
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4">
          {activeTab === "companies" && (
            <button
              onClick={() => openModal("createCompany")}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition-all"
            >
              <PlusCircle size={20} />
              <span>Create Company</span>
            </button>
          )}
          {(activeTab === "users" || activeTab === "pending") && (
            <button
              onClick={() => openModal("createUser")}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition-all"
            >
              <UserPlus size={20} />
              <span>Create User</span>
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading...</div>
          ) : (
            <>
              {activeTab === "users" && (
                <div>
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">
                      All Users
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Manage all registered users
                    </p>
                  </div>
                  {users.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                      No users found. Create your first user!
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Company
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {paginate(users).map((user) => (
                            <tr
                              key={user.id}
                              className="hover:bg-blue-50 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm text-gray-900">
                                {user.id}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900">
                                {user.email}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-600">
                                {user.company?.name}
                              </td>
                              <td className="px-6 py-4 text-sm">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                                  {user.role?.name}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs ${
                                    user.approved
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {user.approved ? "Approved" : "Pending"}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm space-x-2">
                                <button
                                  onClick={() => openModal("editUser", user)}
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <Edit2 size={18} />
                                </button>
                                <button
                                  onClick={() => deleteUser(user.id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "pending" && (
                <div>
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">
                      Pending Approvals
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Review and approve user registrations
                    </p>
                  </div>
                  {pendingUsers.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                      No pending users
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Company
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {paginate(pendingUsers).map((user) => (
                            <tr
                              key={user.id}
                              className="hover:bg-blue-50 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm text-gray-900">
                                {user.id}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-900">
                                {user.email}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-600">
                                {user.company?.name}
                              </td>
                              <td className="px-6 py-4 text-sm space-x-2">
                                <button
                                  onClick={() => approveUser(user.id)}
                                  className="inline-flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200"
                                >
                                  <CheckCircle size={16} />
                                  <span>Approve</span>
                                </button>
                                <button
                                  onClick={() => deleteUser(user.id)}
                                  className="inline-flex items-center space-x-1 bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                                >
                                  <XCircle size={16} />
                                  <span>Reject</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "companies" && (
                <div>
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">
                      Companies
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                      Manage all registered companies
                    </p>
                  </div>
                  {companies.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                      No companies found. Create your first company!
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-blue-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Company Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {paginate(companies).map((company) => (
                            <tr
                              key={company.id}
                              className="hover:bg-blue-50 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm text-gray-900">
                                {company.id}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {company.name}
                              </td>
                              <td className="px-6 py-4 text-sm space-x-2">
                                <button
                                  onClick={() =>
                                    openModal("editCompany", company)
                                  }
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  <Edit2 size={18} />
                                </button>
                                <button
                                  onClick={() => deleteCompany(company.id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Pagination */}
              {((activeTab === "users" && users.length > itemsPerPage) ||
                (activeTab === "pending" &&
                  pendingUsers.length > itemsPerPage) ||
                (activeTab === "companies" &&
                  companies.length > itemsPerPage)) && (
                <div className="p-6 border-t border-gray-200 flex justify-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-gray-700">
                    Page {currentPage} of{" "}
                    {totalPages(
                      activeTab === "users"
                        ? users
                        : activeTab === "pending"
                        ? pendingUsers
                        : companies
                    )}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage(
                        Math.min(
                          totalPages(
                            activeTab === "users"
                              ? users
                              : activeTab === "pending"
                              ? pendingUsers
                              : companies
                          ),
                          currentPage + 1
                        )
                      )
                    }
                    disabled={
                      currentPage ===
                      totalPages(
                        activeTab === "users"
                          ? users
                          : activeTab === "pending"
                          ? pendingUsers
                          : companies
                      )
                    }
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">
                {modalType === "createCompany" && "Create New Company"}
                {modalType === "editCompany" && "Edit Company"}
                {modalType === "createUser" && "Create New User"}
                {modalType === "editUser" && "Edit User"}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {(modalType === "createCompany" ||
                modalType === "editCompany") && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={companyForm.name}
                    onChange={(e) => setCompanyForm({ name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
              )}
              {(modalType === "createUser" || modalType === "editUser") && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={userForm.email}
                      onChange={(e) =>
                        setUserForm({ ...userForm, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="user@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password{" "}
                      {modalType === "editUser" &&
                        "(leave blank to keep current)"}
                    </label>
                    <input
                      type="password"
                      value={userForm.password}
                      onChange={(e) =>
                        setUserForm({ ...userForm, password: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <select
                      value={userForm.companyId}
                      onChange={(e) =>
                        setUserForm({ ...userForm, companyId: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a company</option>
                      {companies.map((company) => (
                        <option key={company.id} value={company.id}>
                          {company.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (modalType === "createCompany") createCompany();
                  else if (modalType === "editCompany") updateCompany();
                  else if (modalType === "createUser") createUser();
                  else if (modalType === "editUser") updateUser();
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {modalType.startsWith("create") ? "Create" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
