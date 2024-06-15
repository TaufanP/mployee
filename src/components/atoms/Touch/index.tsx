import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {}

export default function Touch({...props}: Props) {
  return (
    <TouchableOpacity activeOpacity={props?.activeOpacity || 0.8} {...props}>
      {props?.children}
    </TouchableOpacity>
  );
}
