/*import axios from "axios";

// Get base URL from environment or default to production-safe URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 second timeout
});

// Request interceptor - attach JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || localStorage.getItem("userData")?.token;
    if (token) {
      // Extract token if it's from userData JSON string
      let finalToken = token;
      try {
        const userData = JSON.parse(token);
        finalToken = userData.token || token;
      } catch (e) {
        // token is already a string
      }
      config.headers.Authorization = `Bearer ${finalToken}`;
    }
    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 401 Unauthorized - token expired or invalid
      if (error.response.status === 401) {
        console.warn("Unauthorized! Session expired. Redirecting to login...");
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        localStorage.removeItem("user");
        
        // Prevent redirect if already on login page
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
      
      // 403 Forbidden
      if (error.response.status === 403) {
        console.warn("Access forbidden (403):", error.response.data?.message);
      }
      
      // 500 Server Error
      if (error.response.status === 500) {
        console.error("Server error (500):", error.response.data?.message);
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    
    return Promise.reject(error);
  }
);

// Export helper functions
export const getRequest = (url) => api.get(url);
export const postRequest = (url, data) => api.post(url, data);
export const putRequest = (url, data) => api.put(url, data);
export const deleteRequest = (url) => api.delete(url);

export default api;*/
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