import {Controller, useForm} from 'react-hook-form';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import {useLogin, useStoreUserAuth} from '../../../hooks';

interface FormLogin {
  username: string;
  password: string;
}

export default function LoginScreen() {
  const login = useLogin();
  const expiry = useStoreUserAuth(state => state.expirationDate);

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

  async function onSubmit(data: FormLogin) {
    login.mutate({
      password: data.password.trim(),
      username: data.username.trim(),
    });
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="always">
      <View>
        <Controller
          control={control}
          rules={{
            required: {message: 'Please enter your username!', value: true},
            maxLength: {
              message: 'Username should be less than 72 characters!',
              value: 72,
            },
            minLength: {
              message: 'Username should be more than 3 characters!',
              value: 3,
            },
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
        {errors.username && <Text>{errors.username?.message}</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: {
              message: 'Password should be less than 24 characters!',
              value: 24,
            },
            minLength: {
              message: 'Password should be more than 3 characters!',
              value: 3,
            },
            required: {message: 'Please enter your password!', value: true},
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
        {errors.password && <Text>{errors.password?.message}</Text>}
      </View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
