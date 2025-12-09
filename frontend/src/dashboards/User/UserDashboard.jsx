

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Upload,
  FileText,
  Download,
  Eye,
  Trash2,
  Folder,
  LogOut,
  Building,
  User,
  X,
  Loader2,
  Home,
  Menu,
  X as XIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Configuration
const BASE_URL = "http://localhost:8080";

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

export default function UserDashboard() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(getCompanyId());
  const [selectedRole, setSelectedRole] = useState("USER");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("home");

  // Fetch documents when company changes or view changes
  useEffect(() => {
    if (activeView === "documents" || activeView === "home") {
      fetchDocuments();
    }
  }, [selectedCompany, activeView]);

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

  // Get file icon
  const getFileIcon = (contentType) => {
    if (contentType?.includes('pdf')) {
      return <FileText className="w-5 h-5 text-red-500" />;
    }
    if (contentType?.includes('image')) {
      return <FileText className="w-5 h-5 text-blue-500" />;
    }
    if (contentType?.includes('excel') || contentType?.includes('sheet')) {
      return <FileText className="w-5 h-5 text-green-500" />;
    }
    if (contentType?.includes('word') || contentType?.includes('document')) {
      return <FileText className="w-5 h-5 text-blue-600" />;
    }
    return <FileText className="w-5 h-5 text-gray-500" />;
  };

  // Render main content based on active view
  const renderMainContent = () => {
    switch (activeView) {
      case "home":
        return (
          <div className="max-w-6xl">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to DocManager</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
                <div 
                  onClick={() => setActiveView("upload")}
                  className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-xl cursor-pointer hover:shadow-lg transition-all border-2 border-blue-200"
                >
                  <div className="flex items-center justify-center mb-4 ">
                    <Upload className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center">Upload Documents</h3>
                  <p className="text-gray-600 text-center mt-2">Upload PDFs, images, and office files</p>
                </div>

                <div 
                  onClick={() => setActiveView("documents")}
                  className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-xl cursor-pointer hover:shadow-lg transition-all border-2 border-green-200"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Folder className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center">View Documents</h3>
                  <p className="text-gray-600 text-center mt-2">Browse and manage all uploaded files</p>
                </div>

               {/* <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                  <div className="flex items-center justify-center mb-4">
                    <Building className="w-12 h-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center">Company Stats</h3>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Documents:</span>
                      <span className="font-bold text-lg text-purple-700">{documents.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Storage Used:</span>
                      <span className="font-bold text-lg text-purple-700">
                        {(documents.reduce((acc, doc) => acc + (doc.size || 0), 0) / (1024 * 1024)).toFixed(1)} MB
                      </span>
                    </div>
                  </div>*
                </div>*/}
              </div>

              <div className="bg-linear-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Documents</h3>
                {documents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.slice(0, 6).map((doc) => (
                      <div key={doc.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            {getFileIcon(doc.contentType)}
                            <div className="min-w-0">
                              <p className="font-medium text-gray-800 truncate">
                                {doc.filename || doc.name || "Unnamed File"}
                              </p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-gray-500">
                                  {formatFileSize(doc.size)}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString() : "—"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => downloadDocument(doc)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No documents yet. Start by uploading some files!</p>
                    <button
                      onClick={() => setActiveView("upload")}
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Upload Your First Document
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "upload":
        return (
          <div className="max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <button
                  onClick={() => setActiveView("home")}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800">Upload Documents</h2>
              </div>
              
              <div className="border-3 border-dashed border-blue-300 rounded-xl p-12 text-center mb-8 bg-blue-50">
                <Upload className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                <p className="text-gray-700 text-lg mb-4">Drag and drop files here, or click to browse</p>
                <label className="inline-flex items-center px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 cursor-pointer shadow-md">
                  <Upload className="w-5 h-5 mr-3" />
                  <span className="font-medium">Browse Files</span>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    onClick={(e) => e.target.value = null}
                    accept=".pdf,.jpg,.jpeg,.png,.gif,.doc,.docx,.xls,.xlsx,.txt,.csv,.zip"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-6">Max file size: 50MB • Supported formats: PDF, Images (JPG, PNG, GIF), Office files (DOC, DOCX, XLS, XLSX), TXT, CSV, ZIP</p>
              </div>

              {uploading && (
                <div className="bg-blue-50 p-6 rounded-xl mb-8 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Uploading files... Please wait</span>
                </div>
              )}

              <div className="flex gap-4 justify-end">
                <button
                  onClick={() => setActiveView("home")}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
                >
                  Back to Home
                </button>
                <button
                  onClick={() => setActiveView("documents")}
                  className="px-6 py-3 bg-linear-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium"
                >
                  View Uploaded Documents
                </button>
              </div>
            </div>
          </div>
        );

      case "documents":
        return (
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveView("home")}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg sm:hidden"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-2xl font-bold text-gray-800">All Documents</h2>
                </div>
                <div className="flex gap-4">
                {/* <button
                    onClick={fetchDocuments}
                    className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center gap-2 font-medium"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                    Refresh
                  </button>*/}
                  <button
                    onClick={() => setActiveView("upload")}
                    className="px-5 py-2.5 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center gap-2 font-medium"
                  >
                    <Upload className="w-4 h-4" />
                    Upload 
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-16">
                  <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Loading documents...</p>
                </div>
              ) : documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documents.map((doc) => (
                    <div key={doc.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
                      <div className="flex items-start justify-between mb-5">
                        {getFileIcon(doc.contentType)}
                        <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                          {doc.contentType ? doc.contentType.split('/')[1].toUpperCase() : "FILE"}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg truncate">
                        {doc.filename || doc.name || "Unnamed File"}
                      </h3>
                      
                      <div className="text-sm text-gray-600 mb-6 space-y-2">
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span className="font-medium">{formatFileSize(doc.size)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Uploaded:</span>
                          <span className="font-medium">{doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString() : "—"}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => previewDocument(doc)}
                          className="flex-1 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 font-medium"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                        <button
                          onClick={() => downloadDocument(doc)}
                          className="flex-1 px-4 py-2.5 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 flex items-center justify-center gap-2 font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                        <button
                          onClick={() => deleteDocument(doc.id)}
                          className="px-4 py-2.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Folder className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">No documents found</h3>
                  <p className="text-gray-600 mb-8">Upload your first document to get started</p>
                  <button
                    onClick={() => setActiveView("upload")}
                    className="px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium"
                  >
                    Upload Documents
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {sidebarOpen ? <XIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-linear-to-b from-blue-900 to-blue-800 text-white
        transform transition-transform duration-300 ease-in-out
        flex flex-col
      `}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-blue-700">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Folder className="w-6 h-6" />
            DocManager
          </h1>
          <p className="text-blue-200 text-sm mt-1">Document Management System</p>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveView("home")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeView === "home" ? 'bg-blue-700 text-white' : 'text-blue-200 hover:bg-blue-700/50'}`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveView("upload")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeView === "upload" ? 'bg-blue-700 text-white' : 'text-blue-200 hover:bg-blue-700/50'}`}
            >
              <Upload className="w-5 h-5" />
              <span className="font-medium">Upload Documents</span>
            </button>

            <button
              onClick={() => setActiveView("documents")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeView === "documents" ? 'bg-blue-700 text-white' : 'text-blue-200 hover:bg-blue-700/50'}`}
            >
              <Folder className="w-5 h-5" />
              <span className="font-medium">View Documents</span>
            </button>
          </nav>

          
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-blue-700">
          {/*<div className="mb-4 p-3 bg-blue-700/30 rounded-lg">
            {/*<div className="flex justify-between text-sm mb-1">
              <span className="text-blue-200">Documents:</span>
              <span className="font-bold">{documents.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-200">Storage:</span>
              <span className="font-bold">
                {(documents.reduce((acc, doc) => acc + (doc.size || 0), 0) / (1024 * 1024)).toFixed(1)} MB
              </span>
            </div>*
          </div>*/}

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              <div className="flex justify-between items-center">
                <span>{error}</span>
                <button 
                  onClick={() => setError("")}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div 
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {renderMainContent()}
        </div>
      </div>

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
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => {
                    if (preview.url) URL.revokeObjectURL(preview.url);
                    setPreview(null);
                  }}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
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
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Preview not available for this file type</p>
                  <a
                    href={preview.url}
                    download={preview.name}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download File
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}