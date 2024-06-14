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
    login.mutate({password: data.password, username: data.username});
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="always">
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
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}
