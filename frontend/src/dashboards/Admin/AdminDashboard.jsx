import { useEffect, useState } from "react";
import { getRequest, putRequest } from "../../api/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [approvingId, setApprovingId] = useState(null);

  // Load users from API
  const loadUsers = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await getRequest("/user/list"); // GET list users
      setUsers(res.data || []);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err.response?.data?.message || "Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Approve user API
  const approveUser = async (id) => {
    try {
      setApprovingId(id);
      await putRequest(`/user/approve/${id}`); // PUT approve user
      await loadUsers(); // refresh list after approve
    } catch (err) {
      console.error("Failed to approve user:", err);
      setError(err.response?.data?.message || "Failed to approve user.");
    } finally {
      setApprovingId(null);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-16">Admin Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="w-full border-collapse table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">ID</th>
                <th className="border p-2 text-left">Name</th>
                <th className="border p-2 text-left">Email</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Actions</th>
                <th className="border p-2 text-left">Documents</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>

                  <td
                    className={`border p-2 font-semibold ${
                      user.status === "inactive" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {user.status}
                  </td>

                  <td className="border p-2">
                    {user.status === "inactive" && (
                      <button
                        onClick={() => approveUser(user.id)}
                        disabled={approvingId === user.id}
                        className={`px-3 py-1 rounded text-white ${
                          approvingId === user.id
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                        }`}
                      >
                        {approvingId === user.id ? "Approving..." : "Approve"}
                      </button>
                    )}
                  </td>

                  <td className="border p-2">
                    {(user.documents || []).map((doc) => (
                      <a
                        key={doc}
                        href={doc.startsWith("http") ? doc : `http://localhost:8080/${doc}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline block"
                      >
                        {doc}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
