import {useInfiniteQuery} from '@tanstack/react-query';
import {queryKeys} from '../../helpers';
import {employeeList} from '../../services/employee';

export default function useEmployeeList() {
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
    queryKey: queryKeys.employeeKeys.lists(),
    queryFn: ({pageParam}) => {
      return employeeList({page: pageParam, size: 10});
    },
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
