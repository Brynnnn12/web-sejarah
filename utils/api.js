import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/articles", // Sesuaikan dengan URL backend
  withCredentials: true, // Agar token (jika ada) dikirim otomatis
});

export default API;
