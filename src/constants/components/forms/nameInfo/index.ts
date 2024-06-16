import {FormNameInfoField} from '../../../../types/components/form';

const nameInfo: FormNameInfoField = {
  first_name: {
    rule: {
      required: {
        message: 'Please enter employee first name!',
        value: true,
      },
      maxLength: {
        message: 'First name should be less than 32 characters!',
        value: 32,
      },
      minLength: {
        message: 'First name should be more than 2 characters!',
        value: 3,
      },
      pattern: {
        value: /^[a-zA-Z-' ]+$/,
        message: 'Cannot contain special characters or numbers!',
      },
    },
    input: {
      maxLength: 32,
      label: 'First Name',
      placeholder: 'Enter employee first name',
      autoCapitalize: 'words',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  last_name: {
    rule: {
      maxLength: {
        message: 'Last name should be less than 72 characters!',
        value: 71,
      },
      minLength: {
        message: 'Last name should be more than 2 characters!',
        value: 3,
      },
      pattern: {
        value: /^[a-zA-Z-' ]+$/,
        message: 'Cannot contain special characters or numbers!',
      },
    },
    input: {
      maxLength: 71,
      placeholder: 'Enter employee last name',
      label: 'Last Name',
      autoCapitalize: 'words',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  company_name: {
    rule: {
      required: {
        message: 'Please enter employee company name!',
        value: true,
      },
      maxLength: {
        message: 'Company name should be less than 100 characters!',
        value: 99,
      },
      minLength: {
        message: 'Company name should be more than 2 characters!',
        value: 3,
      },
    },
    input: {
      maxLength: 99,
      placeholder: 'Enter employee company',
      label: 'Company Name',
      autoCapitalize: 'words',
    },
  },
};

export default nameInfo;
