import {FormContactsInfoField} from '../../../../types/components/form';

const nameInfo: FormContactsInfoField = {
  email: {
    rule: {
      pattern: {
        value: /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/,
        message: 'Please enter a valid email address!',
      },
    },
    input: {
      maxLength: 72,
      label: 'Email Address',
      placeholder: 'Enter employee email address',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
      keyboardType: 'email-address',
    },
  },
  phone1: {
    rule: {
      maxLength: {
        message: 'Phone number should be less than 16 characters!',
        value: 15,
      },
      minLength: {
        message: 'Phone number should be more than 10 characters!',
        value: 10,
      },
      pattern: {
        value: /^\d+$/,
        message: 'Phone number should be numbers only!',
      },
    },
    input: {
      maxLength: 15,
      placeholder: 'Enter employee primary phone',
      label: 'Primary Phone',
      keyboardType: 'phone-pad',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  phone2: {
    rule: {
      maxLength: {
        message: 'Phone number should be less than 16 characters!',
        value: 15,
      },
      minLength: {
        message: 'Phone number should be more than 10 characters!',
        value: 10,
      },
      pattern: {
        value: /^\d+$/,
        message: 'Phone number should be numbers only!',
      },
    },
    input: {
      maxLength: 15,
      placeholder: 'Enter employee secondary phone',
      label: 'Secondary Phone',
      keyboardType: 'phone-pad',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  web: {
    rule: {
      maxLength: {value: 2048, message: 'The URL is too long!'},
      pattern: {
        value:
          /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
        message: 'Please enter a valid website URL!',
      },
    },
    input: {
      maxLength: 2048,
      placeholder: 'Enter employee website',
      label: 'Website',
      keyboardType: 'url',
    },
  },
};

export default nameInfo;
