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
  Menu,
  X,
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const itemsPerPage = 10;

  const baseUrl = "http://localhost:8080";

  const authHeaders = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
  };

  const [companyForm, setCompanyForm] = useState({ name: "" });
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    companyId: "",
  });

  useEffect(() => {
    fetchCompanies();
    fetchUsers();
    fetchPendingUsers();
  }, []);

  useEffect(() => {
    const items =
      activeTab === "users"
        ? users
        : activeTab === "pending"
        ? pendingUsers
        : companies;
    const total = Math.ceil(items.length / itemsPerPage);
    if (currentPage > total && total > 0) {
      setCurrentPage(total);
    }
  }, [users, pendingUsers, companies, activeTab, currentPage]);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/users/companies`, {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      if (error.message.includes("401")) {
        alert("Session expired. Please login again.");
        window.location.href = "/login";
      } else {
        alert("Failed to fetch companies");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/users`, {
        headers: authHeaders,
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error.message.includes("401")) {
        alert("Session expired. Please login again.");
        window.location.href = "/login";
      }
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
      if (!response.ok) throw new Error();
      const data = await response.json();
      setPendingUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const isUserPending = (userId) => pendingUsers.some((u) => u.id === userId);

  const createCompany = async () => {
    if (!companyForm.name.trim()) return alert("Please enter company name");
    try {
      const response = await fetch(`${baseUrl}/admin/companies`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({ name: companyForm.name }),
      });
      if (!response.ok) throw new Error();
      setCompanyForm({ name: "" });
      setShowModal(false);
      await fetchCompanies();
      alert("Company created successfully!");
    } catch (error) {
      alert("Failed to create company");
    }
  };

  const createUser = async () => {
    if (!userForm.email.trim() || !userForm.password.trim() || !userForm.companyId) {
      return alert("Please fill all fields");
    }
    try {
      const response = await fetch(`${baseUrl}/admin/users`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({
          email: userForm.email.trim(),
          password: userForm.password.trim(),
          companyId: parseInt(userForm.companyId),
        }),
      });
      if (!response.ok) throw new Error();
      setUserForm({ email: "", password: "", companyId: "" });
      setShowModal(false);
      await Promise.all([fetchUsers(), fetchPendingUsers()]);
      alert("User created successfully!");
    } catch (error) {
      alert("Failed to create user");
    }
  };

  const approveUser = async (userId) => {
    try {
      const response = await fetch(`${baseUrl}/admin/users/${userId}/approve`, {
        method: "PUT",
        headers: authHeaders,
      });
      if (!response.ok) throw new Error();
      await Promise.all([fetchUsers(), fetchPendingUsers()]);
      alert("User approved successfully!");
    } catch (error) {
      alert("Failed to approve user");
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const response = await fetch(`${baseUrl}/admin/users/${userId}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      if (!response.ok) throw new Error();
      await Promise.all([fetchUsers(), fetchPendingUsers()]);
      alert("User deleted successfully!");
    } catch (error) {
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
      const response = await fetch(`${baseUrl}/admin/companies/${companyId}`, {
        method: "DELETE",
        headers: authHeaders,
      });
      if (!response.ok) throw new Error();
      await Promise.all([fetchCompanies(), fetchUsers(), fetchPendingUsers()]);
      alert("Company deleted successfully!");
    } catch (error) {
      alert("Failed to delete company");
    }
  };

  const updateCompany = async () => {
    if (!companyForm.name.trim()) return alert("Please enter company name");
    try {
      const response = await fetch(`${baseUrl}/admin/companies/${selectedItem.id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify({ name: companyForm.name }),
      });
      if (!response.ok) throw new Error();
      setShowModal(false);
      setCompanyForm({ name: "" });
      setSelectedItem(null);
      await fetchCompanies();
      alert("Company updated successfully!");
    } catch (error) {
      alert("Failed to update company");
    }
  };

  const updateUser = async () => {
    if (!userForm.email.trim()) return alert("Email is required");
    if (!userForm.companyId) return alert("Please select a company");

    const payload = {
      email: userForm.email.trim(),
      companyId: parseInt(userForm.companyId),
    };
    if (userForm.password?.trim()) {
      payload.password = userForm.password.trim();
    }

    try {
      const response = await fetch(`${baseUrl}/admin/users/${selectedItem.id}`, {
        method: "PUT",
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || "Update failed");
      }
      closeModal();
      await Promise.all([fetchUsers(), fetchPendingUsers()]);
      alert("User updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update user");
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setSelectedItem(item);
    if (type === "editCompany" && item) {
      setCompanyForm({ name: item.name });
    } else if ((type === "createUser" || type === "editUser") && item) {
      setUserForm({
        email: item.email,
        password: "",
        companyId: item.company?.id || "",
      });
    } else if (type === "createUser") {
      setUserForm({ email: "", password: "", companyId: "" });
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
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
  };

  const paginate = (items) => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const totalPages = (items) => Math.ceil(items.length / itemsPerPage);

  const getCurrentItems = () => {
    if (activeTab === "users") return users;
    if (activeTab === "pending") return pendingUsers;
    return companies;
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuItems = [
    { id: "users", label: "All Users", icon: Users },
    { id: "pending", label: "Pending Users", icon: UserPlus, badge: pendingUsers.length },
    { id: "companies", label: "Companies", icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-900 text-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-lg z-40 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-blue-900">Admin Panel</h2>
            <p className="text-sm text-gray-500 mt-1">Manage your system</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setCurrentPage(1);
                    if (window.innerWidth < 1024) {
                      toggleSidebar();
                    }
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-900 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge > 0 && (
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        isActive
                          ? "bg-white text-blue-900"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8 py-4 ml-16 lg:ml-0">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-900">
              {activeTab === "users" && "All Users"}
              {activeTab === "pending" && "Pending Users"}
              {activeTab === "companies" && "Companies"}
            </h1>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Add Button */}
          <div className="mb-4">
            {activeTab === "companies" && (
              <button
                onClick={() => openModal("createCompany")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-sm transition-colors"
              >
                <PlusCircle size={18} /> <span>Add Company</span>
              </button>
            )}
            {(activeTab === "users" || activeTab === "pending") && (
              <button
                onClick={() => openModal("createUser")}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-sm transition-colors"
              >
                <UserPlus size={18} /> <span>Add User</span>
              </button>
            )}
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            {loading ? (
              <div className="p-12 text-center text-gray-500">Loading...</div>
            ) : (
              <>
                {/* Users Tab */}
                {activeTab === "users" && (
                  <div className="overflow-x-auto">
                    {users.length === 0 ? (
                      <div className="p-12 text-center text-gray-500">No users found</div>
                    ) : (
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Email</th>
                            <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Company</th>
                            <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                            <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {paginate(users).map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                              <td className="px-4 sm:px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{user.email}</div>
                                <div className="sm:hidden text-xs text-gray-500 mt-1">{user.company?.name}</div>
                              </td>
                              <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-600">{user.company?.name}</td>
                              <td className="hidden sm:table-cell px-6 py-4">
                                <span
                                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                    isUserPending(user.id)
                                      ? "bg-yellow-100 text-yellow-700"
                                      : "bg-green-100 text-green-700"
                                  }`}
                                >
                                  {isUserPending(user.id) ? "Pending" : "Approved"}
                                </span>
                              </td>
                              <td className="px-4 sm:px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                  <button onClick={() => openModal("editUser", user)} className="text-gray-600 hover:text-gray-900">
                                    <Edit2 size={16} />
                                  </button>
                                  <button onClick={() => deleteUser(user.id)} className="text-red-600 hover:text-red-800">
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}

                {/* Pending Tab */}
                {activeTab === "pending" && (
                  <div className="overflow-x-auto">
                    {pendingUsers.length === 0 ? (
                      <div className="p-12 text-center text-gray-500">No pending users</div>
                    ) : (
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Email</th>
                            <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Company</th>
                            <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {paginate(pendingUsers).map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                              <td className="px-4 sm:px-6 py-4">
                                <div className="text-sm font-medium text-gray-900">{user.email}</div>
                                <div className="md:hidden text-xs text-gray-500 mt-1">{user.company?.name}</div>
                              </td>
                              <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-600">{user.company?.name}</td>
                              <td className="px-4 sm:px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                  <button
                                    onClick={() => approveUser(user.id)}
                                    className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded text-xs hover:bg-green-200"
                                  >
                                    <CheckCircle size={14} /> <span>Approve</span>
                                  </button>
                                  <button
                                    onClick={() => deleteUser(user.id)}
                                    className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded text-xs hover:bg-red-200"
                                  >
                                    <XCircle size={14} /> <span>Reject</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}

                {/* Companies Tab */}
                {activeTab === "companies" && (
                  <div className="overflow-x-auto">
                    {companies.length === 0 ? (
                      <div className="p-12 text-center text-gray-500">No companies found</div>
                    ) : (
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Company Name</th>
                            <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {paginate(companies).map((company) => (
                            <tr key={company.id} className="hover:bg-gray-50">
                              <td className="px-4 sm:px-6 py-4 text-sm font-medium text-gray-900">{company.name}</td>
                              <td className="px-4 sm:px-6 py-4 text-right">
                                <div className="flex justify-end gap-2">
                                  <button onClick={() => openModal("editCompany", company)} className="text-gray-600 hover:text-gray-900">
                                    <Edit2 size={16} />
                                  </button>
                                  <button onClick={() => deleteCompany(company.id)} className="text-red-600 hover:text-red-800">
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}

                {/* Pagination */}
                {getCurrentItems().length > itemsPerPage && (
                  <div className="border-t border-gray-200 px-4 py-3 flex items-center justify-between sm:px-6">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages(getCurrentItems())}
                    </span>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages(getCurrentItems()), currentPage + 1))}
                      disabled={currentPage === totalPages(getCurrentItems())}
                      className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-blue-900">
                {modalType === "createCompany" && "Add Company"}
                {modalType === "editCompany" && "Edit Company"}
                {modalType === "createUser" && "Add User"}
                {modalType === "editUser" && "Edit User"}
              </h3>
            </div>
            <div className="p-6 space-y-4">
              {(modalType === "createCompany" || modalType === "editCompany") && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={companyForm.name}
                    onChange={(e) => setCompanyForm({ name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Enter company name"
                  />
                </div>
              )}
              {(modalType === "createUser" || modalType === "editUser") && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={userForm.email}
                      onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder="user@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password{" "}
                      {modalType === "editUser" && "(leave blank to keep current)"}
                      {modalType === "createUser" && "(required)"}
                    </label>
                    <input
                      type="password"
                      value={userForm.password}
                      onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                      placeholder={modalType === "editUser" ? "Leave blank to keep current" : "Enter password"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <select
                      value={userForm.companyId}
                      onChange={(e) => setUserForm({ ...userForm, companyId: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
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
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
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
                className="px-4 py-2 text-sm bg-blue-900 text-white rounded-lg hover:bg-gray-800"
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