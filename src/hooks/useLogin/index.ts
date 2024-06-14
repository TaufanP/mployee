import {useMutation} from '@tanstack/react-query';
import {queryKeys} from '../../helpers';
import {login} from '../../services/auth';
import queryClient from '../../config/queryClient';
import localStorage, {storageKeys} from '../../config/localStorage';
import transformResponse from '../../transformResponse';

export default function useLogin() {
  return useMutation({
    mutationKey: [queryKeys.loginKey],
    mutationFn: login,
    onSuccess: data => {
      queryClient.setQueryData(
        [queryKeys.userAuthKey],
        transformResponse.login(data),
      );
      localStorage.set(
        storageKeys.userAuth,
        JSON.stringify(transformResponse.login(data)),
      );
    },
  });
}
