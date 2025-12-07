import React, { useEffect, useState } from "react";



const STORAGE_KEY = "doc_manager_files_v1";

export default function DocumentManager() {
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState("");
  const [preview, setPreview] = useState(null); // { file }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setFiles(JSON.parse(raw));
      } catch (e) {
        console.error("Failed to parse saved files", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
  }, [files]);

  function humanSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  async function handleFiles(selectedFiles) {
    if (!selectedFiles || selectedFiles.length === 0) return;
    setLoading(true);
    const toAdd = [];
    for (const file of Array.from(selectedFiles)) {
      // limit file size to 10MB in this demo
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name} is larger than 10MB and was skipped.`);
        continue;
      }
      const dataUrl = await fileToDataURL(file);
      toAdd.push({
        id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
        name: file.name,
        type: file.type || inferMime(file.name),
        size: file.size,
        uploadedAt: new Date().toISOString(),
        dataUrl,
      });
    }
    setFiles(prev => [...toAdd, ...prev]);
    setLoading(false);
  }

  function inferMime(name) {
    const ext = name.split('.').pop().toLowerCase();
    if (ext === 'pdf') return 'application/pdf';
    if (['png','jpg','jpeg','gif','webp'].includes(ext)) return 'image/' + ext;
    if (['txt','md','csv','json'].includes(ext)) return 'text/plain';
    return 'application/octet-stream';
  }

  function fileToDataURL(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  }

  function removeFile(id) {
    if (!confirm("Delete this file?")) return;
    setFiles(prev => prev.filter(f => f.id !== id));
  }

  function downloadFile(f) {
    const a = document.createElement('a');
    a.href = f.dataUrl;
    a.download = f.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function openPreview(f) {
    setPreview(f);
  }

  function filteredFiles() {
    if (!filter) return files;
    return files.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Documents</h1>
          <p className="text-sm text-gray-500">Upload and view documents. Files are stored locally (localStorage).</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by name..."
            className="border rounded-md px-3 py-2 text-sm w-52"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />

          {/* Upload button  */}
          <label className="relative inline-block">
            <input
              type="file"
              className="sr-only"
              multiple
              onChange={e => handleFiles(e.target.files)}
              accept=".pdf,image/*,.txt,.md,.csv,.json,.doc,.docx"
            />
            <span className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer text-sm">
              Upload document
            </span>
          </label>
        </div>
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
            {filteredFiles().length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">No documents yet.</td>
              </tr>
            )}

            {filteredFiles().map(f => (
              <tr key={f.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="font-medium">{f.name}</div>
                  <div className="text-xs text-gray-500">Uploaded: {new Date(f.uploadedAt).toLocaleString()}</div>
                </td>
                <td className="px-4 py-3 text-sm">{f.type || '—'}</td>
                <td className="px-4 py-3 text-sm">{humanSize(f.size)}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openPreview(f)}
                      className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100"
                    >
                      View
                    </button>
                    {/*<button
                      onClick={() => downloadFile(f)}
                      className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => removeFile(f.id)}
                      className="px-3 py-1 rounded-md border text-sm text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>*/}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {loading && (
        <div className="mt-3 text-sm text-gray-600">Processing upload...</div>
      )}

      {/* Preview modal */}
      {preview && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-auto">
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <div className="font-medium">{preview.name}</div>
              <div className="flex gap-2">
                <button onClick={() => downloadFile(preview)} className="px-3 py-1 rounded border text-sm">Download</button>
                <button onClick={() => setPreview(null)} className="px-3 py-1 rounded border text-sm">Close</button>
              </div>
            </div>

            <div className="p-4">
              {/* PDF or image or text preview based on MIME */}
              {preview.type === 'application/pdf' && (
                <iframe src={preview.dataUrl} title={preview.name} className="w-full h-[70vh] border" />
              )}

              {preview.type?.startsWith('image/') && (
                <img src={preview.dataUrl} alt={preview.name} className="mx-auto max-h-[70vh]" />
              )}

              {preview.type?.startsWith('text') && (
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">{dataURLtoText(preview.dataUrl)}</pre>
              )}

              {/* Fallback: show a link if we can't embed */}
              {!preview.type && (
                <div>
                  <a href={preview.dataUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">Open document</a>
                </div>
              )}

              {/* If the mime is unknown but the file is displayable as pdf/image we attempted above otherwise offer a download link */}
              {preview.type && !preview.type.startsWith('image') && preview.type !== 'application/pdf' && !preview.type.startsWith('text') && (
                <div className="mt-3 text-sm text-gray-600">Preview not available. Use Download to open the file.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper to extract text from a data URL when the file is text/*
function dataURLtoText(dataUrl) {
  try {
    const base64Marker = ";base64,";
    if (dataUrl.indexOf(base64Marker) === -1) {
      const parts = dataUrl.split(',');
      return decodeURIComponent(parts[1] || '');
    }
    const base64 = dataUrl.split(base64Marker)[1];
    const binary = atob(base64);
    // convert binary to string
    let text = '';
    for (let i = 0; i < binary.length; i++) text += String.fromCharCode(binary.charCodeAt(i));
    try {
      return decodeURIComponent(escape(text));
    } catch (e) {
      return text;
    }
  } catch (e) {
    return 'Unable to load text preview.';
  }
}
