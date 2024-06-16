import {MutationCache, QueryCache, QueryClient} from '@tanstack/react-query';
import {logger} from '../../helpers';
import Toast from 'react-native-toast-message';
import localStorage from '../localStorage';

function showToast(message: string) {
  Toast.show({
    position: 'bottom',
    type: 'error',
    text1: message,
  });
}

export default new QueryClient({
  mutationCache: new MutationCache({
    onError: (error, variables, context) => {
      logger(
        error,
        undefined,
        'error',
        `src/config/queryClient/${JSON.stringify(variables)}`,
      );
      if (typeof error === 'string') {
        showToast(error || 'Something went wrong');
        if (error === 'Token Expired') localStorage.clearAll();
      } else showToast(error.message || 'Something went wrong');
    },
  }),
  queryCache: new QueryCache({
    onError: (error, query) => {
      logger(
        error?.message,
        undefined,
        'error',
        `src/config/queryClient/${query.queryKey}`,
      );

      if (typeof error === 'string') {
        showToast(error || 'Something went wrong');
        if (error === 'Token Expired') localStorage.clearAll();
      } else showToast(error.message || 'Something went wrong');

      if (query.state.data !== undefined) {
        logger(
          `Something went wrong: ${error.message}`,
          null,
          'error',
          'src/config/queryClient/if',
        );
      }
    },
  }),
});
