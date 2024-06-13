import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';

export function BaseElement(props: BaseToastProps) {
  return (
    <BaseToast
      {...props}
      // style={{borderLeftColor: colors.accent, ...style}}
      // text1Style={textStyle}
    />
  );
}

export function ErrorElement(props: BaseToastProps) {
  return (
    <ErrorToast
      {...props}
      // style={{borderLeftColor: colors.danger, ...style}}
      // text1Style={textStyle}
    />
  );
}
