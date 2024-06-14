import {useInfiniteQuery} from '@tanstack/react-query';
import {queryKeys} from '../../helpers';
import {employeeList} from '../../services/employee';

export default function useEmployeeList({
  search,
  id,
}: {
  search?: string;
  id?: number;
}) {
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
    queryKey: queryKeys.employeeKeys.list({search, id}),
    queryFn: ({pageParam}) =>
      employeeList({page: pageParam, size: 10, search, id}),
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
