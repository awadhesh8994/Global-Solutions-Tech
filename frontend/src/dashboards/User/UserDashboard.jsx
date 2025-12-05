import { useEffect, useState } from "react";
import { getRequest } from "../../api/api";

export default function UserDashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user's documents
  const fetchDocs = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await getRequest("/documents"); // GET user documents
      setDocuments(res.data || []);
    } catch (err) {
      console.error("Error fetching documents:", err);
      setError(err.response?.data?.message || "Failed to load documents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-16">Your Documents</h1>

      {documents.length === 0 ? (
        <p>No documents uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {documents.map((doc) => (
            <li key={doc}>
              <a
                href={doc.startsWith("http") ? doc : `http://localhost:8080/${doc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {doc}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
