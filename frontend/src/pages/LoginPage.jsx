import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_URL = "http://localhost:8080";

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the same key as LoginPage
  const token = localStorage.getItem("authToken");

  // Redirect if token missing
  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const fetchUserData = async () => {
    try {
      const res = await api.get("/api/users"); 
      console.log("User Data Response:", res.data);

      let user = res.data;

      // Handle array response (if backend returns list)
      if (Array.isArray(user) && user.length > 0) {
        user = user[0];
      }

      setUserData(user);
    } catch (err) {
      console.error("User fetch error:", err);
      setError("Failed to load user data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchUserData();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  const handleEditProfileClick = () => {
    alert("Edit Profile functionality coming soon!");
  };

  if (loading) {
    return <p className="text-center mt-20">Loading dashboard...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }

  const documents = userData?.documents || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={userData} onLogout={handleLogout} />

      <main className="pt-20 pb-10 max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
        <p className="text-gray-600 mb-10">
          Welcome back, {userData?.name || userData?.email}
        </p>

        {/* Profile */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>

          <div className="space-y-3">
            <div className="flex">
              <span className="w-24 text-gray-600">Name:</span>
              <span>{userData?.name || "Not set"}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-gray-600">Email:</span>
              <span>{userData?.email}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-gray-600">Status:</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  userData?.status === "approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {userData?.status || "pending"}
              </span>
            </div>
          </div>

          <button
            onClick={handleEditProfileClick}
            className="mt-4 px-4 py-2 border rounded"
          >
            Edit Profile
          </button>
        </div>

        {/* Documents */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Documents</h2>
            <button
              onClick={() => alert("Upload feature not implemented yet")}
              className="px-4 py-2 bg-blue-700 text-white rounded"
            >
              Upload Document
            </button>
          </div>

          {documents.length === 0 ? (
            <p className="text-gray-500">You have no documents uploaded.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <li
                  key={idx}
                  className="border p-4 rounded hover:bg-gray-50 transition"
                >
                  <p className="font-medium">
                    {typeof doc === "string" ? doc.split("/").pop() : doc.name}
                  </p>
                  <a
                    href={
                      typeof doc === "string"
                        ? `${BASE_URL}/${doc}`
                        : doc.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-2 inline-block"
                  >
                    View
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
