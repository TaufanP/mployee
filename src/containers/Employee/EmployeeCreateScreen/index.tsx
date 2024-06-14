import {Controller, useForm} from 'react-hook-form';
import {Button, ScrollView, Text, TextInput} from 'react-native';
import {useEmployeeCreate} from '../../../hooks';

interface FormEmployee {
  first_name: string;
  last_name: string;
  company_name: string;
  address: string;
  city: string;
  county: string;
  state: string;
  zip: string;
  phone1: string;
  phone2: string;
  email: string;
  web: string;
}

export default function EmployeeCreateScreen() {
  const employeeCreateReq = useEmployeeCreate();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setFocus,
  } = useForm<FormEmployee>({
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

  async function onSubmit(data: FormEmployee) {
    employeeCreateReq.mutate({...data, zip: parseInt(data.zip)});
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="always">
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your first name"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
            autoFocus
          />
        )}
        name="first_name"
      />
      {errors.first_name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your last name"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="last_name"
      />
      {errors.last_name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your company name"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="company_name"
      />
      {errors.company_name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your address"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="address"
      />
      {errors.address && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your city"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="city"
      />
      {errors.city && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your county"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="county"
      />
      {errors.county && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your state"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="state"
      />
      {errors.state && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your zip"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="zip"
      />
      {errors.zip && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your primary phone"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="phone1"
      />
      {errors.phone1 && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your secondary phone"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="phone2"
      />
      {errors.phone2 && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your email"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 72,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="enter your web"
            maxLength={72}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="words"
          />
        )}
        name="web"
      />
      {errors.web && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
