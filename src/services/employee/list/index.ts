import api from '../../../config/api';

interface EmployeeListPayload {
  search?: string;
  id?: number;
  size?: number;
  page?: number;
}

export default async function list(
  payload?: EmployeeListPayload,
): Promise<any> {
  const {data} = await api.get('/employee', {
    params: !!payload?.id ? {id: payload.id} : payload,
  });
  return data;
}
