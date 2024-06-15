import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import styles from './styles';
import {Touch, Words} from '../../atoms';
import colors from '../../../constants/colors';

export type ButtonType = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'lg' | 'md' | 'sm';

export interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
  onPress?: () => void;
  size?: ButtonSize;
  text?: string;
  type?: ButtonType;
  fluid?: boolean;
}

export default function ({
  isLoading,
  onPress,
  size = 'md',
  text,
  type = 'primary',
  fluid,
  ...props
}: Props) {
  const typeStyles = styles.typeStyle({
    type,
    disabled: props.disabled,
  }).container;

  const sizeStyles = styles.sizeStyle(size).container;

  const textType =
    size === 'lg'
      ? 'heading1/regular'
      : size === 'md'
      ? 'normal/regular'
      : 'caption/regular';

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
        <Words
          textAlign="center"
          color={textColor}
          style={{fontSize: 16, fontWeight: '500'}}>
          {text}
        </Words>
      )}
    </Touch>
  );
}
