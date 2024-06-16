import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '../../helpers';
import {employeeList} from '../../services/employee';

export default function useEmployeeDetail(id: number) {
  return useQuery({
    queryKey: queryKeys.employeeKeys.detail(id),
    queryFn: () => employeeList({id}),
  });
}
