import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/api", 
  withCredentials: true, // Only if backend uses cookies/token
});

// Default GET
export const getRequest = (url) => api.get(url);

// Default POST
export const postRequest = (url, data) => api.post(url, data);

// Default PUT
export const putRequest = (url, data) => api.put(url, data);

// Default DELETE
export const deleteRequest = (url) => api.delete(url);

export default api;
