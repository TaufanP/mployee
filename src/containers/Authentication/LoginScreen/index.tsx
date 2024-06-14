import {Controller, useForm} from 'react-hook-form';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';

interface FormLogin {
  username: string;
  password: string;
}

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
    setFocus,
  } = useForm<FormLogin>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit = (data: FormLogin) => console.log(data);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 72,
            minLength: 3,
          }}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <TextInput
              placeholder="enter your username"
              keyboardType="email-address"
              maxLength={72}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              autoFocus
              onSubmitEditing={() => setFocus('password')}
              ref={ref}
              returnKeyLabel="next"
              returnKeyType="next"
            />
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: 24,
            minLength: 3,
            required: true,
          }}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <TextInput
              secureTextEntry
              maxLength={24}
              placeholder="enter your password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              ref={ref}
              onSubmitEditing={handleSubmit(onSubmit)}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
      </View>
      <Button title="Submit" onPress={() => handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
