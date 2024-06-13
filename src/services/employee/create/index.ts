import api from '../../../config/api';
// import {Login} from '../../../types/apiResponses/login';

interface EmployeeCreatePayload {
  first_name: string;
  last_name: string;
  company_name: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zip: number;
  phone1: string;
  phone2: string;
  email: string;
  web: string;
}

export default async function login(
  payload: EmployeeCreatePayload,
): Promise<any> {
  const {data} = await api.post('/employee/create', payload);
  return data;
}
