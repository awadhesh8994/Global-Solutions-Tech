import React, { useEffect, useState } from "react";
import axios from "axios";

// Configuration
const BASE_URL = "http://localhost:8080";

// SVG Icons
const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const CompanyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const LoadingSpinner = () => (
  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const PDFIcon = () => (
  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
  </svg>
);

const ExcelIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const WordIcon = () => (
  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const DefaultFileIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

// Helper functions
const getAuthToken = () => {
  try {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      return parsed.token || null;
    }
  } catch (e) {
    console.error("Error reading token:", e);
  }
  return null;
};

const getCompanyId = () => {
  try {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsed = JSON.parse(userData);
      return parsed.companyId || 1;
    }
  } catch (e) {
    console.error("Error reading companyId:", e);
  }
  return 1;
};

const createApiClient = () => {
  const token = getAuthToken();
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json"
    }
  });
};

// Get file icon component based on type
const getFileIconComponent = (contentType) => {
  if (contentType?.includes('pdf')) return <PDFIcon />;
  if (contentType?.includes('image')) return <ImageIcon />;
  if (contentType?.includes('excel') || contentType?.includes('sheet')) return <ExcelIcon />;
  if (contentType?.includes('word') || contentType?.includes('document')) return <WordIcon />;
  return <DefaultFileIcon />;
};

// Get human-readable file type
const getFileTypeDisplay = (contentType) => {
  if (!contentType) return "Unknown";
  
  const typeMap = {
    'application/pdf': 'PDF Document',
    'image/jpeg': 'JPEG Image',
    'image/png': 'PNG Image',
    'image/gif': 'GIF Image',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Spreadsheet',
    'application/vnd.ms-excel': 'Excel Spreadsheet',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Document',
    'application/msword': 'Word Document',
    'text/plain': 'Text File',
    'text/csv': 'CSV File',
    'application/zip': 'ZIP Archive'
  };
  
  return typeMap[contentType] || contentType;
};

export default function UserDashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(getCompanyId());
  const [selectedRole, setSelectedRole] = useState("USER");

  // Fetch documents when company changes
  useEffect(() => {
    fetchDocuments();
  }, [selectedCompany]);

  // Fetch documents from API
  const fetchDocuments = async () => {
    setLoading(true);
    setError("");

    try {
      const api = createApiClient();
      const response = await api.get(`/api/companies/${selectedCompany}/documents`);
      
      if (response.data && Array.isArray(response.data)) {
        setDocuments(response.data);
      } else {
        setDocuments([]);
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Session expired. Please login again.");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else if (err.response?.status === 403) {
        setError("Access denied. You don't have permission.");
      } else if (err.response?.status === 404) {
        setError("Documents not found.");
      } else {
        setError(err.response?.data?.message || "Failed to load documents");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle file upload
  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;
    
    setUploading(true);
    setError("");

    try {
      const api = createApiClient();
      
      for (const file of Array.from(files)) {
        if (file.size > 50 * 1024 * 1024) {
          alert(`${file.name} is too large (max 50MB)`);
          continue;
        }

        const allowedTypes = [
          'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'text/plain', 'text/csv',
          'application/zip'
        ];

        if (!allowedTypes.includes(file.type)) {
          alert(`${file.name} has unsupported file type`);
          continue;
        }

        const formData = new FormData();
        formData.append("file", file);
        
        await api.post(`/api/companies/${selectedCompany}/documents`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      }

      await fetchDocuments();
      alert("Files uploaded successfully!");
      
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // Delete document
  const deleteDocument = async (id) => {
    if (!window.confirm("Are you sure you want to delete this document?")) return;
    
    setError("");

    try {
      const api = createApiClient();
      await api.delete(`/api/companies/${selectedCompany}/documents/${id}`);
      
      setDocuments(prev => prev.filter(doc => doc.id !== id));
      
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  // Preview document
  const previewDocument = async (doc) => {
    setPreview(null);
    setError("");

    try {
      const api = createApiClient();
      const response = await api.get(`/api/companies/${selectedCompany}/documents/${doc.id}`, {
        responseType: "blob"
      });

      const blob = response.data;
      const fileType = blob.type || doc.contentType || "application/octet-stream";
      const url = URL.createObjectURL(blob);
      
      setPreview({
        name: doc.filename || doc.name || "Document",
        url: url,
        type: fileType
      });
      
    } catch (err) {
      setError(err.response?.data?.message || "Preview failed");
    }
  };

  // Download document
  const downloadDocument = async (doc) => {
    setError("");

    try {
      const api = createApiClient();
      const response = await api.get(`/api/companies/${selectedCompany}/documents/${doc.id}`, {
        responseType: "blob"
      });

      const blob = response.data;
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = doc.filename || doc.name || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => window.URL.revokeObjectURL(url), 100);
      
    } catch (err) {
      setError(err.response?.data?.message || "Download failed");
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (!bytes) return "0 B";
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-blue-900 text-white transition-all duration-300`}>
        <div className="p-4">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-6 p-2 bg-blue-900 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>

         

          {/* Company Dropdown */}
          <div className="mt-8">
            {sidebarOpen && (
              <div className="flex items-center gap-2 text-sm text-blue-300 mb-2">
                <CompanyIcon />
                <span>Company</span>
              </div>
            )}
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className={`w-full bg-white text-gray-900 border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!sidebarOpen ? 'px-2 py-3' : ''}`}
            >
              <option value="1">Company 1</option>
              <option value="2">Company 2</option>
            </select>
          </div>

          {/* Role Dropdown */}
          <div className="mt-4">
            {sidebarOpen && (
              <div className="flex items-center gap-2 text-sm text-blue-300 mb-2">
                <UserIcon />
                <span>Role</span>
              </div>
            )}
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className={`w-full bg-white text-gray-900 border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!sidebarOpen ? 'px-2 py-3' : ''}`}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          {/* Stats */}
          {sidebarOpen && (
            <div className="mt-8 p-4 bg-blue-200 text-blue-900 rounded-lg">
              <p className="text-sm text-blue-900 mb-2">Statistics</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Documents:</span>
                  <span className="font-medium">{documents.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Storage:</span>
                  <span className="font-medium">
                    {(documents.reduce((acc, doc) => acc + (doc.size || 0), 0) / (1024 * 1024)).toFixed(1)} MB
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`mt-8 w-full p-3 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center gap-3 transition-colors ${!sidebarOpen && 'px-2'}`}
          >
            <LogoutIcon />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">DocManager</h1>
            
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={fetchDocuments}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2 transition-colors"
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : <RefreshIcon />}
              <span className="hidden sm:inline">Refresh</span>
            </button>
            
            <label className="cursor-pointer bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors">
              <UploadIcon />
              <span className="hidden sm:inline">Upload</span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
                onClick={(e) => e.target.value = null}
                accept=".pdf,.jpg,.jpeg,.png,.gif,.doc,.docx,.xls,.xlsx,.txt,.csv,.zip"
              />
            </label>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            <div className="flex justify-between items-center">
              <span>{error}</span>
              <button 
                onClick={() => setError("")}
                className="text-red-500 hover:text-red-700"
                aria-label="Close error"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center">
              <LoadingSpinner />
            </div>
            <p className="mt-4 text-gray-600">Loading documents from Company {selectedCompany}...</p>
          </div>
        )}

        {/* Uploading State */}
        {uploading && (
          <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-lg flex items-center gap-3">
            <LoadingSpinner />
            <span>Uploading files... Please wait.</span>
          </div>
        )}

        {/* Documents List */}
        {!loading && documents.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Uploaded
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {getFileIconComponent(doc.contentType)}
                          <div>
                            <div className="font-medium text-gray-900">
                              {doc.filename || doc.name || "Unnamed File"}
                            </div>
                            <div className="text-sm text-gray-500">ID: {doc.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                          {getFileTypeDisplay(doc.contentType)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatFileSize(doc.size)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleString() : "—"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => previewDocument(doc)}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm flex items-center gap-1 transition-colors"
                            title="Preview"
                          >
                            <EyeIcon />
                            <span className="hidden sm:inline">View</span>
                          </button>
                          <button
                            onClick={() => downloadDocument(doc)}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm flex items-center gap-1 transition-colors"
                            title="Download"
                          >
                            <DownloadIcon />
                            <span className="hidden sm:inline">Download</span>
                          </button>
                          <button
                            onClick={() => deleteDocument(doc.id)}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm flex items-center gap-1 transition-colors"
                            title="Delete"
                          >
                            <TrashIcon />
                            <span className="hidden sm:inline">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && documents.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <div className="text-gray-400 mb-6">
              <DocumentIcon className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              No documents found in Company {selectedCompany}
            </h3>
            <p className="text-gray-500 mb-6">Upload your first document to get started</p>
            <label className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2 transition-colors">
              <UploadIcon />
              Upload First Document
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </label>
          </div>
        )}

        {/* Preview Modal */}
        {preview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-medium truncate">{preview.name}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = preview.url;
                      link.download = preview.name;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm flex items-center gap-1"
                  >
                    <DownloadIcon />
                    Download
                  </button>
                  <button
                    onClick={() => {
                      if (preview.url) URL.revokeObjectURL(preview.url);
                      setPreview(null);
                    }}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm flex items-center gap-1"
                  >
                    <CloseIcon />
                    Close
                  </button>
                </div>
              </div>
              
              <div className="p-4 max-h-[70vh] overflow-auto">
                {preview.type === "application/pdf" ? (
                  <iframe
                    src={preview.url}
                    title={preview.name}
                    className="w-full h-[65vh] border-0"
                  />
                ) : preview.type.startsWith("image/") ? (
                  <img
                    src={preview.url}
                    alt={preview.name}
                    className="max-w-full max-h-[65vh] mx-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-center py-12">
                          <p class="text-gray-500 mb-4">Preview not available</p>
                          <button onclick="document.querySelector('a[download]').click()" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Download File
                          </button>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">Preview not available for this file type</p>
                    <a
                      href={preview.url}
                      download={preview.name}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-flex items-center gap-2"
                    >
                      <DownloadIcon />
                      Download File
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


