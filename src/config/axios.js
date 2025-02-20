export const getAxiosConfig = () => `
import axios from "axios";

import { requestInterceptor, responseInterceptor } from "./config/interceptors";

const api = axios.create({
  baseURL: "",
  timeout: 15000, // 15 seconds is the default timeout for axios
});

api.interceptors.request.use(
  requestInterceptor.onFulfilled,
  requestInterceptor.onRejected
);
api.interceptors.response.use(
  responseInterceptor.onFulfilled,
  responseInterceptor.onRejected
);

export default api;
`;

export const getAxiosInterceptors = () => `
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = {
  onFulfilled: (config: InternalAxiosRequestConfig) => {
    return config;
  },
  onRejected: (error: AxiosError) => {
    return Promise.reject(error);
  },
};

export const responseInterceptor = {
  onFulfilled: (response: AxiosResponse) => {

    return response;
  },
  onRejected: (error: AxiosError) => {

    if (error.response) {
      if (error.response.status === 401) {
        // Write some code for manage 401 error
      } else if (error.response.status === 500) {
        // Write some code for manage 500 error
      } else if (error.response.status === 404) {
        // Write some code for manage 404 error
      } else if (error.response.status === 400) {
        // Write some code for manage 400 error
      } else if (error.response.status === 429) {
        // Write some code for manage 429 error
      } else {
        // Write some code for manage unknown error
      }

      // Write some code for manage unknown error
    } else if (error.request) {
      // Write some code for manage unknown error
      if (error.message === "Network Error") {
        // Write some code for manage network error
      } else if (error.message === "canceled") {
        // Write some code for manage canceled error
      } else if (String(error.message).includes("timeout")) {
        // Write some code for manage timeout error
      } else {
        // Write some code for manage unknown error
      }
      // Write some code for manage unknown error
    } else {
      // Write some code for manage unknown error

      // Write some code for manage unknown error
    }

    return Promise.reject(error);
  },
};
`;
