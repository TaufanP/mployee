import {FormAddressInfoField} from '../../../../types/components/form';

const nameInfo: FormAddressInfoField = {
  address: {
    rule: {
      maxLength: {
        message: 'Address should be less than 200 characters!',
        value: 199,
      },
      minLength: {
        message: 'Please enter a valid address!',
        value: 3,
      },
    },
    input: {
      maxLength: 199,
      label: 'Address',
      placeholder: 'Enter employee address',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  city: {
    rule: {
      maxLength: {
        message: 'City should be less than 100 characters!',
        value: 99,
      },
      minLength: {
        message: 'City should be more than 1 characters!',
        value: 2,
      },
    },
    input: {
      maxLength: 99,
      placeholder: 'Enter employee city',
      label: 'City',
      autoCapitalize: 'words',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  county: {
    rule: {
      maxLength: {
        message: 'County should be less than 100 characters!',
        value: 99,
      },
      minLength: {
        message: 'County should be more than 1 characters!',
        value: 2,
      },
    },
    input: {
      maxLength: 99,
      placeholder: 'Enter employee county',
      label: 'County',
      autoCapitalize: 'words',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  state: {
    rule: {
      maxLength: {
        message: 'State should be less than 100 characters!',
        value: 99,
      },
      minLength: {
        message: 'State should be more than 1 characters!',
        value: 2,
      },
    },
    input: {
      maxLength: 99,
      placeholder: 'Enter employee state',
      label: 'State',
      autoCapitalize: 'words',
      returnKeyLabel: 'next',
      returnKeyType: 'next',
    },
  },
  zip: {
    rule: {
      maxLength: {
        message: 'ZIP code should be less than 12 characters!',
        value: 11,
      },
      minLength: {
        message: 'ZIP code should be more than 2 characters!',
        value: 3,
      },
      pattern: {
        value: /^[0-9\-]+$/,
        message: 'ZIP code should only contains numbers!',
      },
    },
    input: {
      maxLength: 11,
      placeholder: 'Enter employee zip code',
      label: 'ZIP Code',
      keyboardType: 'number-pad',
    },
  },
};

export default nameInfo;
