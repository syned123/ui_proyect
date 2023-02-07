import axios from "axios";

const lendApi = axios.create({
  baseURL: "http://localhost:5000/api",
});
lendApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };
  return config;
});
// Todo: configurar interceptores
export default lendApi;
