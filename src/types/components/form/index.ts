import {FieldValues, Path, RegisterOptions} from 'react-hook-form';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
}

type OmittedRegisterOptions =
  | 'disabled'
  | 'valueAsNumber'
  | 'valueAsDate'
  | 'setValueAs';

type CustomRegisterOptions<T extends FieldValues, K extends Path<T>> = Omit<
  RegisterOptions<T, K>,
  OmittedRegisterOptions
>;

interface FormFieldRules<T extends FieldValues, K extends Path<T>> {
  rule: CustomRegisterOptions<T, K>;
  input: InputProps;
}

export interface FormLogin {
  username: string;
  password: string;
}

export type FormLoginField = Record<
  keyof FormLogin,
  FormFieldRules<FormLogin, keyof FormLogin>
>;

export interface FormNameInfo {
  first_name: string;
  last_name: string;
  company_name: string;
}

export type FormNameInfoField = Record<
  keyof FormNameInfo,
  FormFieldRules<FormNameInfo, keyof FormNameInfo>
>;

export interface FormAddressInfo {
  address: string;
  city: string;
  county: string;
  state: string;
  zip: string;
}

export type FormAddressInfoField = Record<
  keyof FormAddressInfo,
  FormFieldRules<FormAddressInfo, keyof FormAddressInfo>
>;
