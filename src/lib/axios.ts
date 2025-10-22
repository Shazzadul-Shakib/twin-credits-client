import axios from "axios";
import { baseUrl } from "./config";

// Utility function to get cookie by name
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }

  return null;
};

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request interceptor - Add token from cookie to Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken"); // or whatever your cookie name is

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor - Handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh token endpoint will set new access token cookie
        await apiClient.post("/user/refresh-token");

        // Get the new token from cookie and add to retry request
        const newToken = getCookie("accessToken");
        if (newToken) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }

        return apiClient(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
