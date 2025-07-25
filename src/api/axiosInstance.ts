import axios from 'axios';

const BASEURL  = "http://10.99.34.198:8081";

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`[Request] ${config.method.toUpperCase()} ${config.url}`, config);
    return config;
  },
  (error) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[Response] ${response.status} ${response.config.url}`, response);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`[Response Error] ${error.response.status}`, error.response.data);
    } else {
      console.error('[Network Error]', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

