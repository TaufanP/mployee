import {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import ANIMATIONS from '../../../assets/animations';
import ICONS from '../../../assets/icons';
import {Gap} from '../../../components/atoms';
import {
  ButtonIcon,
  EmployeeTile,
  InputField,
} from '../../../components/molecules';
import {Header, Screen, StateWrapper} from '../../../components/organisms';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import spaces from '../../../constants/spaces';
import {joinString} from '../../../helpers';
import {useDebounce, useEmployeeList} from '../../../hooks';
import {RootStackScreenProps} from '../../../types/routes';
import queryClient from '../../../config/queryClient';
import localStorage from '../../../config/localStorage';

export default function EmployeeListScreen(
  props: RootStackScreenProps<'EmployeeList'>,
) {
  const [search, searchSet] = useState<string>('');

  const debouncedSearch = useDebounce(search, 500);

  const employeeListReq = useEmployeeList({search: debouncedSearch});

  function loadNext() {
    if (employeeListReq.hasNextPage) employeeListReq.fetchNextPage();
  }

  function logout() {
    queryClient.resetQueries();
    queryClient.removeQueries();
    queryClient.clear();
    localStorage.clearAll();
  }

  return (
    <Screen>
      <Header
        title="Employee Database"
        hasAction
        actionLabel="Logout"
        actionPress={logout}
      />
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
        ListEmptyComponent={
          employeeListReq.isLoading ? (
            <StateWrapper
              stateLabel="Looking through files..."
              animation={ANIMATIONS.Airplane}
            />
          ) : (
            <StateWrapper
              stateLabel="There is no one here!"
              animation={ANIMATIONS.Empty}
              stateButtonLabel="Add Employee"
              statePress={createEmployee}
            />
          )
        }
        contentContainerStyle={{
          paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
        }}
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
      <ButtonIcon onPress={createEmployee} />
    </Screen>
  );

  function createEmployee() {
    props.navigation.navigate('EmployeeCreate');
  }
}
