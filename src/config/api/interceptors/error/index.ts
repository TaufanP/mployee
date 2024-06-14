import {AxiosError} from 'axios';
import {logger} from '../../../../helpers';

const LOCATION = 'src/utils/apiHelper/interceptors/error';

export default function (error: AxiosError) {
  const statusCode = error?.response ? error?.response?.status : null;

  if (statusCode === null) return Promise.reject(error);

  if (statusCode === 413) {
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 405) {
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 401) {
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode >= 500) {
    return Promise.reject({
      // @ts-ignore
      ...(error?.response?.data?.error || {}),
      status: statusCode,
    });
  }

  if (statusCode === 400) {
    return Promise.reject({
      ...(typeof error?.response?.data === 'string'
        ? {message: error?.response?.data}
        : error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 422) {
    logger(
      'Unable to process the request',
      undefined,
      'info',
      `${LOCATION}/422`,
    );
    return;
  }

  return Promise.reject(error);
}
