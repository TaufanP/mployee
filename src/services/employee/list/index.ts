import api from '../../../config/api';
import {Employee} from '../../../types/apiResponse/employee';

interface EmployeeListPayload {
  search?: string;
  id?: number;
  size?: number;
  page?: number;
}

export default async function list(
  payload: EmployeeListPayload & {id: number},
): Promise<Employee>;
export default async function list(
  payload: EmployeeListPayload,
): Promise<Employee[]>;

export default async function list({
  id,
  ...payload
}: EmployeeListPayload): Promise<Employee | Employee[]> {
  const {data} = await api.get('/employee', {
    params: id === undefined ? payload : {id},
  });
  if (id !== undefined) {
    if (data === '') throw {message: `Cannot find employee with ID ${id}`};
    else return data as Employee;
  } else {
    return data as Employee[];
  }
}
