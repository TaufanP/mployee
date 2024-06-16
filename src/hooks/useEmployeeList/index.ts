import {useInfiniteQuery} from '@tanstack/react-query';
import {queryKeys} from '../../helpers';
import {employeeList} from '../../services/employee';
import useRefetch from '../useRefetch';

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
    refetch,
  } = useInfiniteQuery({
    queryKey: queryKeys.employeeKeys.list({search, id}),
    queryFn: ({pageParam}) =>
      employeeList({page: pageParam, size: 10, search, id}),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < 10 ? undefined : allPages.length + 1;
    },
    initialPageParam: 0,
    select(data) {
      return data?.pages.map(page => page).flatMap(data => data);
    },
  });

  const refetchByUser = useRefetch(refetch);

  return {
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    ...refetchByUser,
  };
}
