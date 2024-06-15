import LottieView from 'lottie-react-native';
import {useState} from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import ANIMATIONS from '../../../assets/animations';
import ICONS from '../../../assets/icons';
import {Gap, Words} from '../../../components/atoms';
import {
  Button,
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
        ListEmptyComponent={
          <View
            style={{
              width: '100%',
              height: Dimensions.get('screen').height * 0.7,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {employeeListReq.isLoading ? (
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  gap: spaces.lg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{width: '100%', aspectRatio: 1.5}}>
                  <LottieView
                    source={ANIMATIONS.Airplane}
                    style={{width: '100%', height: '100%', flex: 1}}
                    autoPlay
                    loop
                  />
                </View>
                <View style={{flex: 1, gap: 24}}>
                  <Words textAlign="center" size="lg">
                    Searching for employees...
                  </Words>
                </View>
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  gap: spaces.lg,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{width: '100%', aspectRatio: 1.5}}>
                  <LottieView
                    source={ANIMATIONS.Empty}
                    style={{width: '100%', height: '100%', flex: 1}}
                    autoPlay
                    loop
                  />
                </View>
                <View style={{flex: 1, gap: 24}}>
                  <Words textAlign="center" size="lg">
                    There is no one here.
                  </Words>
                  <Button
                    text="Create New"
                    onPress={() => props.navigation.navigate('EmployeeCreate')}
                  />
                </View>
              </View>
            )}
          </View>
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
      <ButtonIcon onPress={() => props.navigation.navigate('EmployeeCreate')} />
    </Screen>
  );
}
