import {useInfiniteQuery} from '@tanstack/react-query';
import {queryKeys} from '../../helpers';
import {employeeList} from '../../services/employee';

export default function useEmployeeList({search}: {search?: string}) {
  const {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: queryKeys.employeeKeys.list({search}),
    queryFn: ({pageParam}) => employeeList({page: pageParam, size: 10, search}),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < 10 ? undefined : allPages.length + 1;
    },
    initialPageParam: 0,
  });

  return {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  };
}
