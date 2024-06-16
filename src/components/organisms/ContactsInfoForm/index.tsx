import {forwardRef, useImperativeHandle} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {contactsInfoForm} from '../../../constants/components/forms';
import spaces from '../../../constants/spaces';
import {FormContactsInfo} from '../../../types/components/form';
import {Caution, InputField} from '../../molecules';

export interface ContactsInfoRef {
  nextStep: () => void;
}

interface Props {
  onValid: () => void;
}

const ContactsInfoForm = forwardRef<ContactsInfoRef, Props>((props, ref) => {
  const {
    control,
    setFocus,
    formState: {errors},
    handleSubmit,
  } = useFormContext<FormContactsInfo>();

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
    <View style={{gap: spaces.xl}}>
      <View style={{gap: spaces.m}}>
        <Controller
          control={control}
          rules={contactsInfoForm.phone1.rule}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <InputField
              error={errors.phone1?.message}
              isError={!!errors.phone1}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={() => setFocus('phone2')}
              ref={ref}
              value={value}
              {...contactsInfoForm.phone1.input}
            />
          )}
          name="phone1"
        />
        <Controller
          control={control}
          rules={contactsInfoForm.phone2.rule}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <InputField
              error={errors.phone2?.message}
              isError={!!errors.phone2}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={() => setFocus('email')}
              ref={ref}
              value={value}
              {...contactsInfoForm.phone2.input}
            />
          )}
          name="phone2"
        />
        <Controller
          control={control}
          rules={contactsInfoForm.email.rule}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <InputField
              error={errors.email?.message}
              isError={!!errors.email}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={() => setFocus('web')}
              ref={ref}
              value={value}
              {...contactsInfoForm.email.input}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={contactsInfoForm.web.rule}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <InputField
              error={errors.web?.message}
              isError={!!errors.web}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={nextStep}
              ref={ref}
              value={value}
              {...contactsInfoForm.web.input}
            />
          )}
          name="web"
        />
      </View>
      <Caution
        description="Make sure to provide https protocol inside the URL. It assures the web
          to work properly."
        title="Pro Tip 💡"
      />
    </View>
  );
});

export default ContactsInfoForm;
