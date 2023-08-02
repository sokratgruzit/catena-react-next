import axios from 'axios';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL}`,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  return instance;
};

export default createAxiosInstance;
