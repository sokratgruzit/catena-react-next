import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return instance;
};

export default createAxiosInstance;
