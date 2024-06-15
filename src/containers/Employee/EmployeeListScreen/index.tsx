import {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDebounce, useEmployeeList} from '../../../hooks';
import {RootStackScreenProps} from '../../../types/routes';
import {InputField} from '../../../components/molecules';
import {Screen} from '../../../components/organisms';

export default function EmployeeListScreen(
  props: RootStackScreenProps<'EmployeeList'>,
) {
  const [search, searchSet] = useState<string>('');

  const debouncedSearch = useDebounce(search, 500);

  const employeeListReq = useEmployeeList({search: debouncedSearch});

  function loadNext() {
    if (employeeListReq.hasNextPage) employeeListReq.fetchNextPage();
  }

  return (
    <Screen>
      <Button
        title="Create Employee"
        onPress={() => props.navigation.navigate('EmployeeCreate')}
      />
      <InputField
        placeholder="search employee"
        onChangeText={searchSet}
        value={search}
        maxLength={200}
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
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('EmployeeDetail', {id: 3})
            }>
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
    </Screen>
  );
}
