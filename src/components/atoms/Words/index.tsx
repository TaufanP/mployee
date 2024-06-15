import {PropsWithChildren} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import styles from './styles';

export type WordSize = 'sm' | 'xs' | 'base' | 'lg' | 'xl' | '2xl';
export type WordWeight = 'regular' | 'semibold' | 'bold';

interface Props extends TextProps {
  color?: string;
  underline?: boolean;
  textAlign?: TextStyle['textAlign'];
  size?: WordSize;
  weight?: WordWeight;
}

export default function Words({
  children,
  color,
  textAlign,
  underline,
  weight = 'regular',
  size = 'sm',
  ...props
}: PropsWithChildren<Props>) {
  const style = styles({color, underline, size, weight});
  return (
    <Text {...props} style={[style.base, {textAlign}, props.style]}>
      {children}
    </Text>
  );
}
