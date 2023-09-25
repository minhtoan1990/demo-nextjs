import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
const axiosClient = Axios.create({
  // baseURL: "http://localhost:4500",
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;
