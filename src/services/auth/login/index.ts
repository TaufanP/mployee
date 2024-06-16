import api from '../../../config/api';
// import {Login} from '../../../types/apiResponses/login';

interface LoginPayload {
  username: string;
  password: string;
}

export default async function login(payload: LoginPayload): Promise<any> {
  const {data} = await api.post('/login', payload);
  if (data === 'Username or Password not known')
    throw 'Username or Password not known';
  return data;
}
