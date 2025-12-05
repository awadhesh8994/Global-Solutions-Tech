import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "http://localhost:8080/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - attach JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT after login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 401 Unauthorized - token expired or invalid
      if (error.response.status === 401) {
        console.warn("Unauthorized! Redirecting to login...");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login"; // redirect to login
      }
      
      // e.g., 403 Forbidden, 500 Server Error
    }
    return Promise.reject(error);
  }
);

// Export helper functions
export const getRequest = (url) => api.get(url);
export const postRequest = (url, data) => api.post(url, data);
export const putRequest = (url, data) => api.put(url, data);
export const deleteRequest = (url) => api.delete(url);

export default api;