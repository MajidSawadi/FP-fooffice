import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});
