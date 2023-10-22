import axios, { AxiosRequestConfig } from "axios";
import { getAuthCredentials } from "./auth";

const http = axios.create({
  timeout: 30000,
  baseURL: "http://localhost:5000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}); 

http.interceptors.request.use(
  async (config: any) => {
    const authCredentials = await getAuthCredentials();
    const { token } = authCredentials;
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error :any) => {
    return Promise.reject(error);
  }
);

export default http;



// sudo mount -t efs -o tls fs-0512f12c8eeb1ce15:/ efs