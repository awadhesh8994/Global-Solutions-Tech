import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRequest, putRequest } from "../../api/api";

export default function AdminUserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    loadUser();
  }, [id]);

  async function loadUser() {
    try {
      const res = { data: { id, name: "John Doe", email: "john@test.com" } };
      setUser(res.data);
      setFormData({ name: res.data.name, email: res.data.email });
    } catch (err) {
      console.log("Error loading user:", err);
    }
  }

  async function handleSave() {
    setUser({ ...user, ...formData });
    setEditMode(false);
    // await putRequest(`/admin/user/${id}`, formData);
  }

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Details</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto space-y-4">
        <p>
          <strong>ID:</strong> {user.id}
        </p>

        <p>
          <strong>Name:</strong>{" "}
          {editMode ? (
            <input
              className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          ) : (
            user.name
          )}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {editMode ? (
            <input
              className="border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          ) : (
            user.email
          )}
        </p>

        <div className="flex space-x-3 mt-4">
          {editMode ? (
            <>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded shadow"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          )}
          <button
            className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded shadow"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
