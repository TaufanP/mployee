import {forwardRef, useImperativeHandle} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {nameInfoForm} from '../../../constants/components/forms';
import spaces from '../../../constants/spaces';
import {FormNameInfo} from '../../../types/components/form';
import {InputField} from '../../molecules';

export interface NameInfoRef {
  nextStep: () => void;
}

interface Props {
  onValid: () => void;
}

const NameInfoForm = forwardRef<NameInfoRef, Props>((props, ref) => {
  const {
    control,
    setFocus,
    formState: {errors},
    handleSubmit,
  } = useFormContext<FormNameInfo>();

  useImperativeHandle(ref, () => ({
    nextStep,
  }));

  function nextStep() {
    handleSubmit(
      () => {
        props.onValid();
      },
      () =>
        Toast.show({
          type: 'error',
          text1: 'Please recheck your form',
          position: 'bottom',
        }),
    )();
  }

  return (
    <View style={{gap: spaces.m}}>
      <Controller
        control={control}
        rules={nameInfoForm.first_name.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.first_name?.message}
            isError={!!errors.first_name}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('last_name')}
            ref={ref}
            value={value}
            {...nameInfoForm.first_name.input}
          />
        )}
        name="first_name"
      />
      <Controller
        control={control}
        rules={nameInfoForm.last_name.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.last_name?.message}
            isError={!!errors.last_name}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('company_name')}
            ref={ref}
            value={value}
            {...nameInfoForm.last_name.input}
          />
        )}
        name="last_name"
      />
      <Controller
        control={control}
        rules={nameInfoForm.company_name.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.company_name?.message}
            isError={!!errors.company_name}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={nextStep}
            ref={ref}
            value={value}
            {...nameInfoForm.company_name.input}
          />
        )}
        name="company_name"
      />
    </View>
  );
});

export default NameInfoForm;
