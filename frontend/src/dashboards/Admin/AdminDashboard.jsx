
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  // Mock function to simulate fetching users from API
  async function loadUsers() {
    const res = {
      data: [
        { id: 1, name: "John Doe", email: "john@test.com", status: "inactive", documents: ["doc1.pdf", "doc2.pdf"] },
        { id: 2, name: "Amit Sharma", email: "amit@test.com", status: "inactive", documents: ["report.pdf"] },
      ],
    };
    setUsers(res.data);
  }

  // Function to verify user
  const verifyUser = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: "active" } : user));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-16">Admin Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>

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
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className={`border p-2 font-semibold ${user.status === "inactive" ? "text-red-500" : "text-green-500"}`}>
                  {user.status}
                </td>
                <td className="border p-2">
                  {user.status === "inactive" && (
                    <button
                      onClick={() => verifyUser(user.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Verify
                    </button>
                  )}
                </td>
                <td className="border p-2">
                  {user.documents.map(doc => (
                    <div key={doc} className="text-blue-600 underline">{doc}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
