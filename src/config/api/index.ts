import axios from 'axios';
import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor,
} from './interceptors';

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.response.use(responseInterceptor, errorInterceptor);
api.interceptors.request.use(requestInterceptor, errorInterceptor);

export default api;
