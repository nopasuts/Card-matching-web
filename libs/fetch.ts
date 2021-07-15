import axios from 'axios';

let client = axios.create({ baseURL: "/api" });

// Request interceptor for API calls
client.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

client.interceptors.response.use(
  async (value) => value,
  (error) => {}
);

export { client };
