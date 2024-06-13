import {AxiosResponse} from 'axios';

export default function (response: AxiosResponse) {
  if (response.status === 404) {
    const customError = new Error(response?.data?.message || 'Error 404');
    return Promise.reject(customError);
  }

  return response;
}
