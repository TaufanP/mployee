import {useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import ICONS from '../../../assets/icons';
import {ContentWrapper, Gap} from '../../../components/atoms';
import {
  ButtonIcon,
  EmployeeTile,
  InputField,
} from '../../../components/molecules';
import {Header, Screen} from '../../../components/organisms';
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
      <View style={{flex: 1}}>
        <ContentWrapper>
          <InputField
            LeftIcon={<ICONS.Lup />}
            placeholder="Search for employee"
            onChangeText={searchSet}
            value={search}
            maxLength={200}
          />
          <Gap vertical={24} />
          <FlatList
            ListEmptyComponent={
              employeeListReq.isLoading ? <ActivityIndicator /> : null
            }
            onEndReached={loadNext}
            onEndReachedThreshold={0.2}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <>
                {employeeListReq.isFetchingNextPage ? (
                  <ActivityIndicator />
                ) : null}
                <Gap vertical={40} />
              </>
            }
            data={employeeListReq.data || []}
            ItemSeparatorComponent={() => <Gap vertical={spaces.base} />}
            renderItem={({item}) => (
              <EmployeeTile
                company={item?.company_name}
                onPress={() =>
                  props.navigation.navigate('EmployeeDetail', {id: 3})
                }
                name={joinString(item?.first_name, item?.last_name)}
                address={joinString(item?.county, item?.city)}
                phone={item?.phone1}
                email={item?.email}
                web={item?.web}
              />
            )}
          />
        </ContentWrapper>
      </View>
      <ButtonIcon onPress={() => props.navigation.navigate('EmployeeCreate')} />
    </Screen>
  );
}
