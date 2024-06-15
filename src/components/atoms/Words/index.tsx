import {PropsWithChildren} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import styles from './styles';

interface Props extends TextProps {
  color?: string;
  underline?: boolean;
  textAlign?: TextStyle['textAlign'];
}

export default function Words({
  children,
  color,
  textAlign,
  underline,
  ...props
}: PropsWithChildren<Props>) {
  const style = styles({color, underline});
  return (
    <Text {...props} style={[style.base, {textAlign}, props.style]}>
      {children}
    </Text>
  );
}
