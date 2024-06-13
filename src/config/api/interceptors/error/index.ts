import {AxiosError} from 'axios';
import {logger} from '../../../../helpers';

const LOCATION = 'src/utils/apiHelper/interceptors/error';

export default function (error: AxiosError) {
  const statusCode = error?.response ? error?.response?.status : null;

  // console.log(error?.request);

  if (statusCode === null) return Promise.reject(error);

  if (statusCode === 413) {
    // Method not allowed
    // logging('Method not allowed', undefined, 'info', `${LOCATION}/405`);
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 405) {
    // Method not allowed
    // logging('Method not allowed', undefined, 'info', `${LOCATION}/405`);
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 401) {
    // Unauthorized user
    // logging('Unauthorized user', undefined, 'info', `${LOCATION}/401`);
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode >= 500) {
    // Server error
    // logging(JSON.stringify(error?.response), 'er', 'error');
    // logging('Server error', undefined, 'error', `${LOCATION}/500`);
    return Promise.reject({
      // @ts-ignore
      ...(error?.response?.data?.error || {}),
      status: statusCode,
    });
  }

  if (statusCode === 400) {
    // Bad Request
    // logging('Bad Request detected', undefined, 'error', `${LOCATION}/400`);
    return Promise.reject({
      ...(error?.response?.data || {}),
      status: statusCode,
    });
  }

  if (statusCode === 422) {
    // Server unable to process the request
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
