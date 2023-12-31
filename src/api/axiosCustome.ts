import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosCustom = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
