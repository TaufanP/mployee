import {FieldValues, Path, RegisterOptions} from 'react-hook-form';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
}

interface FormLogin {
  username: string;
  password: string;
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

export type FormField = Record<
  keyof FormLogin,
  FormFieldRules<FormLogin, keyof FormLogin>
>;
