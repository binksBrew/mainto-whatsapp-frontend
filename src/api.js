import axios from "axios";

const API = axios.create({
  baseURL: "https://api.trinetraventures.com",
});

export const login = async (email, password) =>
  API.post("/login", { email, password });

export const configureLandlord = async (data, token) =>
  API.post("/configure-landlord", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
