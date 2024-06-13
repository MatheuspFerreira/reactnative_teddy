import axios from "axios";
import { AppError } from "../../utils/appError";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const api = axios.create({
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data));
    } else {
      return Promise.reject(error);
    }
  }
);

export { api };
