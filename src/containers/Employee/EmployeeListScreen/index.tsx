import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDebounce, useEmployeeList} from '../../../hooks';
import {useState} from 'react';

export default function EmployeeListScreen() {
  const [search, searchSet] = useState<string>('');

  const debouncedSearch = useDebounce(search, 500);

  const employeeListReq = useEmployeeList({search: debouncedSearch});

  function loadNext() {
    if (employeeListReq.hasNextPage) employeeListReq.fetchNextPage();
  }

  return (
    <View>
      <TextInput
        placeholder="search employee"
        onChangeText={searchSet}
        value={search}
      />
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
        ItemSeparatorComponent={() => <View style={{paddingVertical: 8}} />}
        renderItem={({item}) => (
          <TouchableOpacity onPress={undefined}>
            <Text style={{color: '#333'}}>{item?.first_name}</Text>
            <Text style={{color: '#333'}}>{item?.last_name}</Text>
            <Text style={{color: '#333'}}>{item?.company_name}</Text>
            <Text style={{color: '#333'}}>{item?.address}</Text>
            <Text style={{color: '#333'}}>{item?.city}</Text>
            <Text style={{color: '#333'}}>{item?.county}</Text>
            <Text style={{color: '#333'}}>{item?.state}</Text>
            <Text style={{color: '#333'}}>{item?.zip}</Text>
            <Text style={{color: '#333'}}>{item?.phone1}</Text>
            <Text style={{color: '#333'}}>{item?.phone2}</Text>
            <Text style={{color: '#333'}}>{item?.email}</Text>
            <Text style={{color: '#333'}}>{item?.web}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}