import {useReducer} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ScrollView} from 'react-native';
import ICONS from '../../../assets/icons';
import {Gap, Touch, Words} from '../../../components/atoms';
import {InputField} from '../../../components/molecules';
import {LoginFooter, Screen} from '../../../components/organisms';
import colors from '../../../constants/colors';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import {loginForm} from '../../../constants/components/forms';
import spaces from '../../../constants/spaces';
import {useLogin} from '../../../hooks';

interface FormLogin {
  username: string;
  password: string;
}

export default function LoginScreen() {
  const login = useLogin();

  const [secureEntry, toggleSecureEntry] = useReducer(c => !c, true);

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
    <Screen>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: SCREEN_HORIZONTAL_PADDING}}
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Gap vertical={spaces['3xl']} />
        <Words style={{fontSize: 36, fontWeight: 'bold'}}>Login</Words>
        <Gap vertical={8} />
        <Words>Please login to continue with your account</Words>
        <Gap vertical={32} />
        <Controller
          control={control}
          rules={loginForm.username.rule}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <InputField
              error={errors.username?.message}
              isError={!!errors.username}
              LeftIcon={<ICONS.Person />}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={() => setFocus('password')}
              ref={ref}
              value={value}
              {...loginForm.username.input}
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          rules={loginForm.password.rule}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <InputField
              error={errors.password?.message}
              isError={!!errors.password}
              LeftIcon={<ICONS.Lock />}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={handleSubmit(onSubmit)}
              ref={ref}
              RightIcon={
                secureEntry ? (
                  <ICONS.EyeClose fill={colors.secondary1} />
                ) : (
                  <ICONS.EyeOpen fill={colors.secondary1} />
                )
              }
              rightIconPress={toggleSecureEntry}
              secureTextEntry={secureEntry}
              value={value}
              {...loginForm.password.input}
            />
          )}
          name="password"
        />
        <Gap vertical={spaces.m} />
        <Touch>
          <Words underline textAlign="right" color={colors.primary1}>
            Forgot Password
          </Words>
        </Touch>
      </ScrollView>
      <LoginFooter
        onPress={handleSubmit(onSubmit)}
        isLoading={login.isPending}
        disabled={login.isPending}
      />
    </Screen>
  );
}
