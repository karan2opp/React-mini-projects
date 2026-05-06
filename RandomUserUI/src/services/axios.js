import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://api.freeapi.app/api/v1/public";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;