import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap, Words} from '../../../components/atoms';
import {
  Accordion,
  LinkRow,
  PhoneQuickActions,
  RowIcon,
} from '../../../components/molecules';
import {Header, Screen, StateWrapper} from '../../../components/organisms';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import spaces from '../../../constants/spaces';
import {joinFullAddress, joinString, openApps} from '../../../helpers';
import {useEmployeeDetail} from '../../../hooks';
import {RootStackScreenProps} from '../../../types/routes';
import ANIMATIONS from '../../../assets/animations';

export default function EmployeeDetailScreen(
  props: RootStackScreenProps<'EmployeeDetail'>,
) {
  const employeeDetailReq = useEmployeeDetail(props.route.params.id);

  const employee = employeeDetailReq.data;

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
      {employeeDetailReq.isLoading ? (
        <StateWrapper
          stateLabel={`Searching information...`}
          animation={ANIMATIONS.Airplane}
          fullPage
        />
      ) : !employeeDetailReq.isError ? (
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
              <RowIcon label={employee?.address} type="address" />
              <RowIcon label={fullAddress} type="country" />
            </View>
          )}
          {!!employee?.phone1 && (
            <Accordion label={'Primary Number'} value={employee?.phone1 || ''}>
              <PhoneQuickActions
                callPress={() => openApps('phone', employee?.phone1)}
                messagePress={() => openApps('sms', employee?.phone1)}
              />
            </Accordion>
          )}
          {!!employee?.phone2 && (
            <Accordion
              label={'Secondary Number'}
              value={employee?.phone2 || ''}>
              <PhoneQuickActions
                callPress={() => openApps('phone', employee?.phone2)}
                messagePress={() => openApps('sms', employee?.phone2)}
              />
            </Accordion>
          )}
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
          <Gap vertical={24} />
        </ScrollView>
      ) : (
        <StateWrapper
          stateLabel={employeeDetailReq?.error?.message}
          animation={ANIMATIONS.NotFound}
          fullPage
          stateButtonLabel="Back to Home"
          statePress={() => props.navigation.goBack()}
        />
      )}
    </Screen>
  );
}
