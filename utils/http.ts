import axios, { AxiosRequestConfig } from "axios";
import { getAuthCredentials } from "./auth";

const http = axios.create({
  timeout: 30000,
  baseURL: "http://localhost:5000/",
  //baseURL: "https://easyrent-44an.onrender.com/",
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



