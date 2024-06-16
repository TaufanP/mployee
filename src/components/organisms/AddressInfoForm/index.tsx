import {forwardRef, useImperativeHandle} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {addressInfoForm} from '../../../constants/components/forms';
import spaces from '../../../constants/spaces';
import {FormAddressInfo} from '../../../types/components/form';
import {InputField} from '../../molecules';

export interface AddressInfoRef {
  nextStep: () => void;
}

interface Props {
  onValid: () => void;
}

const AddressInfoForm = forwardRef<AddressInfoRef, Props>((props, ref) => {
  const {
    control,
    setFocus,
    formState: {errors},
    handleSubmit,
  } = useFormContext<FormAddressInfo>();

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
        rules={addressInfoForm.address.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.address?.message}
            isError={!!errors.address}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('city')}
            ref={ref}
            value={value}
            {...addressInfoForm.address.input}
          />
        )}
        name="address"
      />
      <Controller
        control={control}
        rules={addressInfoForm.city.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.city?.message}
            isError={!!errors.city}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('county')}
            ref={ref}
            value={value}
            {...addressInfoForm.city.input}
          />
        )}
        name="city"
      />
      <Controller
        control={control}
        rules={addressInfoForm.county.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.county?.message}
            isError={!!errors.county}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('state')}
            ref={ref}
            value={value}
            {...addressInfoForm.county.input}
          />
        )}
        name="county"
      />
      <Controller
        control={control}
        rules={addressInfoForm.state.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.state?.message}
            isError={!!errors.state}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={() => setFocus('zip')}
            ref={ref}
            value={value}
            {...addressInfoForm.state.input}
          />
        )}
        name="state"
      />
      <Controller
        control={control}
        rules={addressInfoForm.zip.rule}
        render={({field: {onChange, onBlur, value, ref}}) => (
          <InputField
            error={errors.zip?.message}
            isError={!!errors.zip}
            onBlur={onBlur}
            onChangeText={onChange}
            onSubmitEditing={nextStep}
            ref={ref}
            value={value}
            {...addressInfoForm.zip.input}
          />
        )}
        name="zip"
      />
    </View>
  );
});

export default AddressInfoForm;
