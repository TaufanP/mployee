import {FormField} from '../../../../types/components/form';

const login: FormField = {
  username: {
    rule: {
      required: {message: 'Please enter your username!', value: true},
      maxLength: {
        message: 'Username should be less than 72 characters!',
        value: 71,
      },
      minLength: {
        message: 'Username should be more than 2 characters!',
        value: 3,
      },
    },
    input: {
      maxLength: 71,
      label: 'Username',
      placeholder: 'Enter your username',
      autoCapitalize: 'none',
      autoFocus: true,
      keyboardType: 'email-address',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  password: {
    rule: {
      maxLength: {
        message: 'Password should be less than 24 characters!',
        value: 23,
      },
      minLength: {
        message: 'Password should be more than 3 characters!',
        value: 4,
      },
      required: {message: 'Please enter your password!', value: true},
    },
    input: {
      maxLength: 23,
      placeholder: 'Enter your password',
      label: 'Password',
      autoCapitalize: 'none',
    },
  },
};

export default login;
