import {Controller, useForm} from 'react-hook-form';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {useEmployeeCreate} from '../../../hooks';
import {Employee} from '../../../types/apiResponse/employee';
import {Header, MultiStepProgress, Screen} from '../../../components/organisms';
import colors from '../../../constants/colors';
import {Gap} from '../../../components/atoms';
import spaces from '../../../constants/spaces';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useState} from 'react';

function stringValidate(text: string) {
  if (!text) return '';
  else return text.trim().replace(/\s+/g, ' ');
}

export default function EmployeeCreateScreen() {
  const employeeCreateReq = useEmployeeCreate();

  const [stepNumber, stepNumberSet] = useState<number>(0);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setFocus,
  } = useForm<Employee>({
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
      phone1: stringValidate(data.phone1),
      phone2: stringValidate(data.phone2),
      email: stringValidate(data.email),
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
        <Button
          title="Next"
          onPress={() => {
            stepNumberSet(c => {
              if (c < 3) return c + 1;
              return c;
            });
          }}
        />
        <Button
          title="Prev"
          onPress={() => {
            stepNumberSet(c => {
              if (c > 0) return c - 1;
              return c;
            });
          }}
        />

        <Gap vertical={spaces.lg} />
        <Controller
          control={control}
          rules={{
            required: {
              message: 'Please enter employee first name!',
              value: true,
            },
            maxLength: {
              message: 'First name should be less than 72 characters!',
              value: 71,
            },
            minLength: {
              message: 'First name should be more than 2 characters!',
              value: 3,
            },
            pattern: {
              value: /^[a-zA-Z-']+$/,
              message: 'Cannot contain special characters or numbers!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee first name"
              maxLength={72}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="first_name"
        />
        {errors.first_name && <Text>{errors.first_name.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'Last name should be less than 72 characters!',
              value: 71,
            },
            minLength: {
              message: 'Last name should be more than 2 characters!',
              value: 3,
            },
            pattern: {
              value: /^[a-zA-Z-']+$/,
              message: 'Cannot contain special characters or numbers!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee last name"
              maxLength={71}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="last_name"
        />
        {errors.last_name && <Text>{errors.last_name.message}</Text>}
        <Controller
          control={control}
          rules={{
            required: {
              message: 'Please enter employee company name!',
              value: true,
            },
            maxLength: {
              message: 'Company name should be less than 100 characters!',
              value: 99,
            },
            minLength: {
              message: 'Company name should be more than 2 characters!',
              value: 3,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee company name"
              maxLength={99}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="company_name"
        />
        {errors.company_name && <Text>{errors.company_name.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'Address should be less than 200 characters!',
              value: 199,
            },
            minLength: {
              message: 'Please enter a valid address!',
              value: 3,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee address"
              maxLength={199}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="address"
        />
        {errors.address && <Text>{errors.address.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'City should be less than 100 characters!',
              value: 99,
            },
            minLength: {
              message: 'City should be more than 1 characters!',
              value: 2,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee city"
              maxLength={99}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="city"
        />
        {errors.city && <Text>{errors.city.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'County should be less than 100 characters!',
              value: 99,
            },
            minLength: {
              message: 'County should be more than 1 characters!',
              value: 2,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee county"
              maxLength={99}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="county"
        />
        {errors.county && <Text>{errors.county.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'State should be less than 100 characters!',
              value: 99,
            },
            minLength: {
              message: 'State should be more than 1 characters!',
              value: 2,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee state"
              maxLength={99}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="state"
        />
        {errors.state && <Text>{errors.state.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'ZIP code should be less than 12 characters!',
              value: 11,
            },
            minLength: {
              message: 'ZIP code should be more than 2 characters!',
              value: 3,
            },
            pattern: {
              value: /^[0-9\-]+$/,
              message: 'ZIP code should only contains numbers!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee zip"
              maxLength={11}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="number-pad"
            />
          )}
          name="zip"
        />
        {errors.zip && <Text>{errors.zip.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'Phone number should be less than 16 characters!',
              value: 15,
            },
            minLength: {
              message: 'Phone number should be more than 10 characters!',
              value: 11,
            },
            pattern: {
              value: /^\d+$/,
              message: 'Phone number should be numbers only!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee primary phone"
              maxLength={15}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
            />
          )}
          name="phone1"
        />
        {errors.phone1 && <Text>{errors.phone1.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'Phone number should be less than 16 characters!',
              value: 15,
            },
            minLength: {
              message: 'Phone number should be more than 10 characters!',
              value: 11,
            },
            pattern: {
              value: /^\d+$/,
              message: 'Phone number should be numbers only!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee secondary phone"
              maxLength={15}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
            />
          )}
          name="phone2"
        />
        {errors.phone2 && <Text>{errors.phone2.message}</Text>}
        <Controller
          control={control}
          rules={{
            pattern: {
              value: /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/,
              message: 'Please enter a valid email address!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee email"
              maxLength={72}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
            />
          )}
          name="email"
        />
        {errors.email && <Text>{errors.email.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {value: 2048, message: 'The URL is too long!'},
            pattern: {
              value:
                /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
              message: 'Please enter a valid website URL!',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="enter employee website address"
              maxLength={2048}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="url"
            />
          )}
          name="web"
        />
        {errors.web && <Text>{errors.web.message}.</Text>}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Screen>
  );
}
