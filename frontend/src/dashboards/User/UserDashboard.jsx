
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const res = {
      data: {
        id: 10,
        name: "Your Username",
        email: "you@test.com",
        documents: ["mydoc1.pdf", "mydoc2.pdf"],
      },
    };
    setProfile(res.data);
  }

  if (!profile) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-16">User Dashboard</h1>

      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Profile Info</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>

      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Uploaded Documents</h2>
        {profile.documents.length === 0 ? (
          <p>No documents uploaded yet.</p>
        ) : (
          <ul className="list-disc pl-5">
            {profile.documents.map((doc, index) => (
              <li key={index} className="text-blue-600 underline">{doc}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
