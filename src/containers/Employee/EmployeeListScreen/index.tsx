import {useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import ICONS from '../../../assets/icons';
import {Gap} from '../../../components/atoms';
import {
  ButtonIcon,
  EmployeeTile,
  InputField,
} from '../../../components/molecules';
import {Header, Screen} from '../../../components/organisms';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import spaces from '../../../constants/spaces';
import {joinString} from '../../../helpers';
import {useDebounce, useEmployeeList} from '../../../hooks';
import {RootStackScreenProps} from '../../../types/routes';

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
      <Header title="Employee Database" hasAction actionLabel="Logout" />
      <Gap vertical={16} />
      <View style={{paddingHorizontal: 24}}>
        <InputField
          LeftIcon={<ICONS.Lup />}
          placeholder="Search for employee"
          onChangeText={searchSet}
          value={search}
          maxLength={200}
        />
        <Gap vertical={16} />
      </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={employeeListReq.isRefetchingByUser}
            onRefresh={employeeListReq.refetchByUser}
          />
        }
        ListEmptyComponent={
          employeeListReq.isLoading ? <ActivityIndicator /> : null
        }
        contentContainerStyle={{paddingHorizontal: SCREEN_HORIZONTAL_PADDING}}
        onEndReached={loadNext}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <>
            <Gap vertical={16} />
            {employeeListReq.isFetchingNextPage ? <ActivityIndicator /> : null}
            <Gap vertical={32} />
          </>
        }
        data={employeeListReq.data || []}
        ItemSeparatorComponent={() => <Gap vertical={spaces.base} />}
        renderItem={({item}) => (
          <EmployeeTile
            company={item?.company_name}
            onPress={() => props.navigation.navigate('EmployeeDetail', {id: 3})}
            name={joinString(item?.first_name, item?.last_name, 'name')}
            address={joinString(item?.county, item?.city)}
            phone={item?.phone1}
            email={item?.email}
            web={item?.web}
          />
        )}
      />
      <ButtonIcon onPress={() => props.navigation.navigate('EmployeeCreate')} />
    </Screen>
  );
}
