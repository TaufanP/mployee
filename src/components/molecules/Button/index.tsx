import {ActivityIndicator, TouchableOpacityProps, View} from 'react-native';
import styles from './styles';
import {Touch, Words} from '../../atoms';
import colors from '../../../constants/colors';
import {ReactNode} from 'react';

export type ButtonType = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'lg' | 'md' | 'sm';

export interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
  onPress?: () => void;
  size?: ButtonSize;
  text?: string;
  type?: ButtonType;
  fluid?: boolean;
  Icon?: ReactNode;
}

export default function ({
  isLoading,
  onPress,
  size = 'md',
  text,
  type = 'primary',
  fluid,
  Icon,
  ...props
}: Props) {
  const typeStyles = styles.typeStyle({
    type,
    disabled: props.disabled,
  }).container;

  const sizeStyles = styles.sizeStyle(size).container;

  const fontSize = size === 'lg' ? 'lg' : size === 'md' ? 'base' : 'sm';

  const textColor =
    type === 'primary'
      ? props.disabled
        ? colors.dark400
        : colors.white
      : props.disabled
      ? colors.dark400
      : colors.secondary1;

  return (
    <Touch
      style={[
        styles.general.container,
        typeStyles,
        sizeStyles,
        fluid && {flex: 1},
      ]}
      onPress={onPress}
      disabled={isLoading || props.disabled}
      {...props}>
      {isLoading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <View style={styles.general.containerContent}>
          {Icon}
          <Words
            textAlign="center"
            color={textColor}
            size={fontSize}
            weight={'semibold'}>
            {text}
          </Words>
        </View>
      )}
    </Touch>
  );
}
