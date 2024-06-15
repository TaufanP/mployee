import api from '../../../config/api';
import {Employee} from '../../../types/apiResponse/employee';

interface EmployeeListPayload {
  search?: string;
  id?: number;
  size?: number;
  page?: number;
}

export default async function list({
  id,
  ...payload
}: EmployeeListPayload): Promise<Employee[]> {
  const {data} = await api.get('/employee', {
    params: !!id ? {id} : payload,
  });
  return data;
}
