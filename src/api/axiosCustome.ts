import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const axiosCustom = axios.create({
  baseURL: baseUrl,
  // method: "POST",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const axiosGet = axios.create({
//   baseURL: baseUrl,
//   method: "GET",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
