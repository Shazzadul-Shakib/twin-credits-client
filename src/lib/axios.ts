/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { baseUrl } from "./config";

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await apiClient.post("/user/refresh-token");

        return apiClient(originalRequest);
      } catch (err: any) {
        console.error("Token refresh failed:", err);

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject({
          status: err?.response?.status,
          data: err?.response?.data,
        });
      }
    }

    return Promise.reject({
      status: error?.response?.status,
      data: error?.response?.data,
    });
  },
);

export default apiClient;
