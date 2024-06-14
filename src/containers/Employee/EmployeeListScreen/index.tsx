import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useEmployeeList} from '../../../hooks';

export default function EmployeeListScreen() {
  const employeeListReq = useEmployeeList();

  function loadNext() {
    if (employeeListReq.hasNextPage) employeeListReq.fetchNextPage();
  }

  return (
    <View>
      <FlatList
        ListEmptyComponent={
          employeeListReq.isLoading ? <ActivityIndicator /> : null
        }
        onEndReached={loadNext}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          employeeListReq.isFetchingNextPage ? <ActivityIndicator /> : null
        }
        data={
          employeeListReq.data?.pages.map(page => page).flatMap(data => data) ||
          []
        }
        renderItem={({item}) => (
          <View style={{height: 100}}>
            <Text style={{color: '#333'}}>{item?.first_name}</Text>
          </View>
        )}
      />
    </View>
  );
}
