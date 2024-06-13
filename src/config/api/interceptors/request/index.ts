import {InternalAxiosRequestConfig} from 'axios';

export default function (config: InternalAxiosRequestConfig) {
  const excludeAuthUrls = ['/login'];

  if (excludeAuthUrls.some(url => !!config?.url && config.url.includes(url))) {
    delete config.headers['Authorization'];
  }

  return config;
}
