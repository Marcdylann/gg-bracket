import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // This points to your Node server
});

// This "Interceptor" automatically attaches your JWT Badge
// to every request if you are logged in.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;