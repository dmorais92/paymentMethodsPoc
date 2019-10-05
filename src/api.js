import axios from "axios";

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com",
  timeout: 1000
});

export default api;
