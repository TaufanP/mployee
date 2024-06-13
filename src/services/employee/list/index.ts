import api from '../../../config/api';

export default async function list(): Promise<any> {
  const {data} = await api.get('/employee');
  return data;
}
