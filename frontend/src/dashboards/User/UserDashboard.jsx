import { useEffect, useState } from "react";
import { getRequest } from "../../api/api";

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Try different endpoints
  const fetchUserData = async () => {
    try {
      setError(null);
      setLoading(true);
      
      // Try endpoint 1: "List User" (singular)
      const res = await getRequest("/List User");
      console.log("API Response:", res.data);
      
      // Check different response structures
      if (res.data) {
        // Structure 1: Direct user object
        if (res.data.documents) {
          setUserData(res.data);
        }
        // Structure 2: Nested in data property
        else if (res.data.data && res.data.data.documents) {
          setUserData(res.data.data);
        }
        // Structure 3: Array with single user
        else if (Array.isArray(res.data) && res.data[0]?.documents) {
          setUserData(res.data[0]);
        }
        else {
          setUserData({ ...res.data, documents: [] });
        }
      }
      
    } catch (err) {
      console.error("Error fetching user data:", err);
      
      // Try alternative endpoints if first fails
      try {
        // Try endpoint 2: Maybe "/user" or "/profile"
        const altRes = await getRequest("/user");
        console.log("Alternative endpoint response:", altRes.data);
      } catch (altErr) {
        setError("Cannot load user data. Endpoint might be missing.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  const documents = userData?.documents || [];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-16">User Dashboard</h1>
      
      {/* User Info */}
      {userData && (
        <div className="mb-6 p-4 bg-gray-50 rounded">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <p>Name: {userData.name || 'Not set'}</p>
          <p>Email: {userData.email}</p>
          <p>Status: <span className={`font-semibold ${userData.status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>
            {userData.status || 'pending'}
          </span></p>
        </div>
      )}

      {/* Documents Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Documents</h2>

        {documents.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No documents uploaded yet.</p>
            <p className="text-sm text-gray-400">
              Documents will appear here after upload and admin approval.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50">
                <div>
                  <p className="font-medium">
                    {typeof doc === 'string' ? doc.split('/').pop() : doc.name || `Document ${index + 1}`}
                  </p>
                  {typeof doc !== 'string' && doc.uploadedAt && (
                    <p className="text-sm text-gray-500">
                      Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <a
                  href={typeof doc === 'string' 
                    ? (doc.startsWith('http') ? doc : `http://localhost:8080/${doc}`)
                    : doc.url || `http://localhost:8080/${doc.path}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        )}
        
        {/* Upload button (if endpoint exists) */}
        <div className="mt-6 pt-6 border-t">
          <button
            onClick={() => alert('Upload functionality needs backend endpoint')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            + Upload New Document
          </button>
        </div>
      </div>
    </div>
  );
}