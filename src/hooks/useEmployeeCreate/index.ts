import {useMutation} from '@tanstack/react-query';
import {employeeCreate} from '../../services/employee';
import {queryKeys} from '../../helpers';
import Toast from 'react-native-toast-message';
import queryClient from '../../config/queryClient';

export default function useEmployeeCreate(onSuccess?: () => void) {
  return useMutation({
    mutationKey: queryKeys.employeeCreateKey,
    mutationFn: employeeCreate,
    onSuccess: data => {
      Toast.show({
        position: 'bottom',
        type: 'success',
        text1: data,
      });
      onSuccess && onSuccess();
      queryClient.invalidateQueries({
        queryKey: queryKeys.employeeKeys.list({}),
      });
    },
  });
}
