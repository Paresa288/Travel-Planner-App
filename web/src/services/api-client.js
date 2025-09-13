import axios from "axios";
import { LS_USER } from "../contexts/auth";

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  withCredentials: true  
});

http.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (
      err.response?.status === 401 &&
        location.pathname !== "/login"
    ) {
      localStorage.clear(LS_USER);
      location.replace("/login");
    } else return Promise.reject(err);
  }
);

export const login = (user) => {
  return http.post("/sessions", user);
};

export const logout = () => {
  return http.delete("/sessions");
};

export const getUser = (id) => {
  return http.get(`/users/${id}`);
};

export const create = (user) => {
  return http.post("/users", user);
};

export const createTravel = (travel) => {
  return http.post("/travels", travel);
};

export const getTravels = () => {
  return http.get("/travels");
};

export const updateTravel = (id, travel) => {
  return http.patch(`/travels/${id}`, travel)
}