import api from '../../../config/api';

interface EmployeeListPayload {
  search?: string;
  id?: number;
  size?: number;
  page?: number;
}

export default async function list({
  id,
  ...payload
}: EmployeeListPayload): Promise<any> {
  const {data} = await api.get('/employee', {
    params: !!id ? {id} : payload,
  });
  return data;
}
