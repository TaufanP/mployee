import {BaseToastProps} from 'react-native-toast-message';
import {BaseElement, ErrorElement} from '../../components/atoms/ToastElement';

const toastConfig = {
  success: (props: BaseToastProps) => <BaseElement {...props} />,
  error: (props: BaseToastProps) => <ErrorElement {...props} />,
};

export default toastConfig;
