import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';
import colors from '../../../constants/colors';

export function BaseElement(props: BaseToastProps) {
  return (
    <BaseToast
      {...props}
      style={{borderLeftColor: colors.primary1, backgroundColor: '#F6F6F6'}}
      text1Style={{color: colors.text, fontSize: 14}}
    />
  );
}

export function ErrorElement(props: BaseToastProps) {
  return (
    <ErrorToast
      {...props}
      style={{borderLeftColor: colors.danger, backgroundColor: '#F6F6F6'}}
      text1Style={{color: colors.text, fontSize: 14}}
    />
  );
}
