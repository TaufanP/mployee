import {useRef, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {Gap, Words} from '../../../components/atoms';
import FloatWrapper from '../../../components/atoms/FloatWrapper';
import {Button, LinkRow} from '../../../components/molecules';
import {
  AddressInfoForm,
  ContactsInfoForm,
  Header,
  MultiStepProgress,
  NameInfoForm,
  Screen,
} from '../../../components/organisms';
import {AddressInfoRef} from '../../../components/organisms/AddressInfoForm';
import {ContactsInfoRef} from '../../../components/organisms/ContactsInfoForm';
import {NameInfoRef} from '../../../components/organisms/NameInfoForm';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import spaces from '../../../constants/spaces';
import {formatPhoneNumber, openApps, stringValidate} from '../../../helpers';
import {useEmployeeCreate} from '../../../hooks';
import {Employee} from '../../../types/apiResponse/employee';
import {RootStackScreenProps} from '../../../types/routes';

export default function EmployeeCreateScreen(
  props: RootStackScreenProps<'EmployeeCreate'>,
) {
  const nameInfoRef = useRef<NameInfoRef>(null);
  const addressInfoRef = useRef<AddressInfoRef>(null);
  const contactsInfoRef = useRef<ContactsInfoRef>(null);

  const employeeCreateReq = useEmployeeCreate(() =>
    props.navigation.replace('EmployeeList'),
  );

  const [stepNumber, stepNumberSet] = useState<number>(0);

  const formMethod = useForm<Employee>({
    defaultValues: {
      first_name: '',
      last_name: '',
      company_name: '',
      address: '',
      city: '',
      county: '',
      state: '',
      zip: '',
      phone1: '',
      phone2: '',
      email: '',
      web: '',
    },
  });

  async function onSubmit(data: Employee) {
    employeeCreateReq.mutate({
      ...data,
      zip: parseInt(stringValidate(data.zip)),
      first_name: stringValidate(data.first_name),
      last_name: stringValidate(data.last_name),
      company_name: stringValidate(data.company_name),
      address: stringValidate(data.address),
      city: stringValidate(data.city),
      county: stringValidate(data.county),
      state: stringValidate(data.state),
      phone1: formatPhoneNumber(stringValidate(data.phone1)),
      phone2: formatPhoneNumber(stringValidate(data.phone2)),
      email: stringValidate(data.email),
    });
  }

  function changeStep(type: 'inc' | 'dec') {
    stepNumberSet(c => {
      if (type === 'inc') {
        if (c < 3) return c + 1;
      } else if (c > 0) return c - 1;
      return c;
    });
  }

  return (
    <Screen>
      <Header title="New Employee" />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: SCREEN_HORIZONTAL_PADDING}}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="always">
        <Gap vertical={spaces.lg} />
        <MultiStepProgress stepNumber={stepNumber} />

        <Gap vertical={spaces.lg} />
        <FormProvider {...formMethod}>
          {stepNumber === 0 && (
            <NameInfoForm ref={nameInfoRef} onValid={() => changeStep('inc')} />
          )}
          {stepNumber === 1 && (
            <AddressInfoForm
              ref={addressInfoRef}
              onValid={() => changeStep('inc')}
            />
          )}
          {stepNumber === 2 && (
            <ContactsInfoForm
              ref={contactsInfoRef}
              onValid={() => changeStep('inc')}
            />
          )}
          {stepNumber === 3 && (
            <View style={{gap: spaces.lg}}>
              <Words size="lg" weight="bold">
                Please ensure the data is correct!
              </Words>
              <View style={{gap: spaces.m}}>
                <LinkRow
                  label="First Name"
                  value={formMethod.getValues('first_name') || '-'}
                />
                <LinkRow
                  label="Last Name"
                  value={formMethod.getValues('last_name') || '-'}
                />
                <LinkRow
                  label="Company Name"
                  value={formMethod.getValues('company_name') || '-'}
                />
                <LinkRow
                  label="Address"
                  value={formMethod.getValues('address') || '-'}
                />
                <LinkRow
                  label="City"
                  value={formMethod.getValues('city') || '-'}
                />
                <LinkRow
                  label="County"
                  value={formMethod.getValues('county') || '-'}
                />
                <LinkRow
                  label="State"
                  value={formMethod.getValues('state') || '-'}
                />
                <LinkRow
                  label="ZIP Code"
                  value={formMethod.getValues('zip') || '-'}
                />
                <LinkRow
                  label="Primary Phone"
                  value={formMethod.getValues('phone1') || '-'}
                />
                <LinkRow
                  label="Secondary Phone"
                  value={formMethod.getValues('phone2') || '-'}
                />
                <LinkRow
                  label="Email"
                  value={formMethod.getValues('email') || '-'}
                />
                <LinkRow
                  label="Website"
                  onPress={() =>
                    !!formMethod.getValues('web')
                      ? openApps('web', formMethod.getValues('web'))
                      : undefined
                  }
                  value={formMethod.getValues('web') || '-'}
                />
              </View>
            </View>
          )}
        </FormProvider>
        <Gap vertical={64 * 3} />
      </ScrollView>
      <FloatWrapper style={{flexDirection: 'row', alignItems: 'center'}}>
        {stepNumber === 0 ? (
          <View style={{flex: 1}}>
            <Button
              size="md"
              text="Next"
              onPress={nameInfoRef?.current?.nextStep}
            />
          </View>
        ) : stepNumber === 3 ? (
          <>
            <View style={{flex: 1}}>
              <Button
                size="md"
                type="secondary"
                text="Previous"
                onPress={() => changeStep('dec')}
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                text="Save"
                onPress={formMethod.handleSubmit(onSubmit)}
                isLoading={employeeCreateReq.isPending}
                disabled={employeeCreateReq.isPending}
              />
            </View>
          </>
        ) : (
          <>
            <View style={{flex: 1}}>
              <Button
                size="md"
                type="secondary"
                text="Previous"
                onPress={() => changeStep('dec')}
              />
            </View>
            <View style={{flex: 1}}>
              <Button size="md" text="Next" onPress={() => changeStep('inc')} />
            </View>
          </>
        )}
      </FloatWrapper>
    </Screen>
  );
}
