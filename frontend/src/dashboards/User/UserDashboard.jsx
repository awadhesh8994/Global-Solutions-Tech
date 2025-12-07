import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const COMPANY_ID = 1;

// Helper: get token from localStorage
function getAuthToken() {
  try {
    const raw = localStorage.getItem("userData");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.token) return parsed.token;
    }
  } catch (e) {}
  return localStorage.getItem("token") || null;
}

// axios instance with auth header applied dynamically
function makeApiClient() {
  const token = getAuthToken();
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

export default function DocumentManagerAPI() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  async function fetchFiles() {
    setLoading(true);
    setError(null);
    try {
      const api = makeApiClient();
      const res = await api.get(`/api/companies/${COMPANY_ID}/documents`);
      setFiles(res.data || []);
    } catch (err) {
      console.error("Failed to fetch documents", err);
      setError("Failed to load documents");
    } finally {
      setLoading(false);
    }
  }

  function humanSize(bytes) {
    if (!bytes && bytes !== 0) return "—";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  async function handleFiles(selectedFiles) {
    if (!selectedFiles || selectedFiles.length === 0) return;
    setUploading(true);
    setError(null);

    try {
      const api = makeApiClient();
      for (const file of Array.from(selectedFiles)) {
        if (file.size > 50 * 1024 * 1024) {
          alert(`${file.name} is larger than 50MB and was skipped.`);
          continue;
        }

        const fd = new FormData();
        fd.append("file", file);
        await api.post(`/api/companies/${COMPANY_ID}/documents`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      await fetchFiles();
    } catch (err) {
      console.error("Upload failed", err);
      setError("One or more uploads failed");
    } finally {
      setUploading(false);
    }
  }

  async function deleteFile(id) {
    if (!confirm("Delete this file?")) return;

    setError(null);
    try {
      const api = makeApiClient();
      await api.delete(`/api/companies/${COMPANY_ID}/documents/${id}`);
      setFiles(prev => prev.filter(f => String(f.id) !== String(id)));
    } catch (err) {
      console.error("Delete failed", err);
      setError("Delete failed");
    }
  }

  // Preview: fetch file and display
  async function previewFile(doc) {
    setPreview(null);
    setError(null);
    try {
      const api = makeApiClient();
      const res = await api.get(`/api/companies/${COMPANY_ID}/documents/${doc.id}`, {
        responseType: "blob",
      });

      const blob = res.data;
      const mime = blob.type || doc.type || "application/octet-stream";

      if (mime.startsWith("image/") || mime === "application/pdf") {
        const url = URL.createObjectURL(blob);
        setPreview({ name: doc.name, url, mime, isBlobUrl: true });
      } else if (mime.startsWith("text/")) {
        const text = await blob.text();
        setPreview({ name: doc.name, text, mime });
      } else {
        const url = URL.createObjectURL(blob);
        setPreview({ name: doc.name, url, mime, isBlobUrl: true });
      }
    } catch (err) {
      console.error("Preview failed", err);
      setError("Could not load preview");
    }
  }

  async function downloadFile(doc) {
    setError(null);
    try {
      const api = makeApiClient();
      const res = await api.get(`/api/companies/${COMPANY_ID}/documents/${doc.id}`, {
        responseType: "blob",
      });

      const blob = res.data;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = doc.name || "download";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => URL.revokeObjectURL(url), 10000);
    } catch (err) {
      console.error("Download failed", err);
      setError("Download failed");
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Documents</h1>

        <label className="relative inline-block">
          <input
            type="file"
            className="sr-only"
            multiple
            onChange={e => handleFiles(e.target.files)}
          />
          <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer text-sm">
            Upload document
          </span>
        </label>
      </div>

      <div className="bg-white border rounded-lg shadow-sm">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-4 py-3 w-1/2">Name</th>
              <th className="px-4 py-3 w-1/6">Type</th>
              <th className="px-4 py-3 w-1/6">Size</th>
              <th className="px-4 py-3 w-1/6">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            )}

            {!loading && files.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                  No documents yet.
                </td>
              </tr>
            )}

            {files.map(f => (
              <tr key={f.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{f.name}</div>
                  <div className="text-xs text-gray-500">
                    Uploaded: {f.uploadedAt ? new Date(f.uploadedAt).toLocaleString() : "—"}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{f.type || "—"}</td>
                <td className="px-4 py-3 text-sm">{humanSize(f.size)}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => previewFile(f)}
                      className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100"
                    >
                      View
                    </button>
                    <button
                      onClick={() => downloadFile(f)}
                      className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => deleteFile(f.id)}
                      className="px-3 py-1 rounded-md border text-sm text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {uploading && <div className="mt-3 text-sm text-gray-600">Uploading...</div>}
      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

      {preview && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-auto">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <div className="font-medium">{preview.name}</div>
              <div className="flex gap-2">
                {preview.url && (
                  <a
                    href={preview.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded border text-sm"
                  >
                    Open
                  </a>
                )}
                <button
                  onClick={() => setPreview(null)}
                  className="px-3 py-1 rounded border text-sm"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-4">
              {preview.mime === "application/pdf" && preview.url && (
                <iframe src={preview.url} title={preview.name} className="w-full h-[70vh] border" />
              )}

              {preview.mime?.startsWith("image/") && preview.url && (
                <img src={preview.url} alt={preview.name} className="mx-auto max-h-[70vh]" />
              )}

              {preview.text && (
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">
                  {preview.text}
                </pre>
              )}

              {!preview.url && !preview.text && (
                <div className="mt-3 text-sm text-gray-600">
                  Preview not available. Use Download to open the file.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
