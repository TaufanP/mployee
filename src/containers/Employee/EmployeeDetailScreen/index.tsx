import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, Screen} from '../../../components/organisms';
import {useEmployeeDetail} from '../../../hooks';
import {RootStackScreenProps} from '../../../types/routes';
import {Gap, Touch, Words} from '../../../components/atoms';
import {joinFullAddress, joinString, openApps} from '../../../helpers';
import spaces from '../../../constants/spaces';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import colors from '../../../constants/colors';
import {
  Accordion,
  Button,
  LinkRow,
  PhoneQuickActions,
} from '../../../components/molecules';
import ICONS from '../../../assets/icons';

export default function EmployeeDetailScreen(
  props: RootStackScreenProps<'EmployeeDetail'>,
) {
  const employeeListReq = useEmployeeDetail(props.route.params.id);

  const employee = employeeListReq.data;

  const fullAddress = joinFullAddress(
    employee?.county,
    employee?.city,
    employee?.state,
    employee?.zip,
  );

  const hasAddress = !!employee?.address;
  const hasFullAddress = !!fullAddress;

  return (
    <Screen>
      <Header title="Employee Information" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
          gap: spaces.m,
        }}>
        <Gap vertical={spaces.sm} />
        <View style={{gap: spaces.sm}}>
          <Words size="lg" weight="bold">
            {joinString(employee?.first_name, employee?.last_name, 'name')}
          </Words>
          <Words weight="semibold">{employee?.company_name}</Words>
        </View>
        {(hasFullAddress || hasAddress) && (
          <View style={{gap: spaces.sm}}>
            {hasAddress && (
              <View
                style={{
                  flexDirection: 'row',
                  gap: spaces.sm,
                }}>
                <ICONS.Location style={{top: 2}} />
                <Words>{employee?.address} </Words>
              </View>
            )}
            {hasFullAddress && (
              <View
                style={{
                  flexDirection: 'row',
                  gap: spaces.sm,
                }}>
                <ICONS.World style={{top: 2}} />
                <Words>{fullAddress}</Words>
              </View>
            )}
          </View>
        )}
        <Accordion label={'Primary Number'} value="021-1221-5123">
          <PhoneQuickActions />
        </Accordion>
        <Accordion label={'Secondary Number'} value="021-121-5123">
          <PhoneQuickActions />
        </Accordion>
        {!!employee?.email && (
          <LinkRow
            label="Email"
            value={employee?.email || ''}
            onPress={() => openApps('mail', employee?.email)}
          />
        )}
        {!!employee?.web && (
          <LinkRow
            label="Website"
            value={employee?.web || ''}
            onPress={() => openApps('web', employee?.web)}
          />
        )}
      </ScrollView>
    </Screen>
  );
}
