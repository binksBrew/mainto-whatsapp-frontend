import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000", // change if backend hosted elsewhere
});

export const login = async (email, password) =>
  API.post("/login", { email, password });

export const configureLandlord = async (data, token) =>
  API.post("/configure-landlord", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
