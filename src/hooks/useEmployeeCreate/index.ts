import {useMutation} from '@tanstack/react-query';
import {employeeCreate} from '../../services/employee';
import {queryKeys} from '../../helpers';

export default function useEmployeeCreate() {
  return useMutation({
    mutationKey: queryKeys.employeeCreateKey,
    mutationFn: employeeCreate,
    onSuccess: data => {},
  });
}
