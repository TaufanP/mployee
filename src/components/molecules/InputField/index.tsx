import {ReactNode, forwardRef, useEffect} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import colors from '../../../constants/colors';
import spaces from '../../../constants/spaces';
import {Gap, Touch, Words} from '../../atoms';
import styles from './styles';

interface Props extends TextInputProps {
  isError?: boolean;
  error?: string;
  label?: string;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  rightIconPress?: () => void;
}

const InputField = forwardRef<any, Props>(
  (
    {isError, error, label, LeftIcon, RightIcon, rightIconPress, ...props},
    ref,
  ) => {
    const borderColor = useSharedValue<string>(colors.primary3);

    const animatedContainerStyle = useAnimatedStyle(() => ({
      borderColor: borderColor.value,
    }));

    useEffect(() => {
      borderColor.value = withTiming(isError ? colors.danger : colors.primary1);
    }, [isError]);

    return (
      <View style={{gap: spaces.sm}}>
        <View style={styles.containerInputLabel}>
          {!!label && <Words>{label}</Words>}
          <Animated.View
            style={[styles.containerInput, animatedContainerStyle]}>
            {!!LeftIcon && <View style={styles.containerIcon}>{LeftIcon}</View>}
            <TextInput
              {...props}
              style={styles.input}
              ref={ref}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            {!!RightIcon && (
              <Touch onPress={rightIconPress} style={styles.containerIcon}>
                {RightIcon}
              </Touch>
            )}
          </Animated.View>
        </View>
        {isError && <Words color={colors.danger}>{error}</Words>}
      </View>
    );

    function onFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
      props?.onFocus && props?.onFocus(event);
      borderColor.value = withTiming(isError ? colors.danger : colors.primary1);
    }

    function onBlur(event: NativeSyntheticEvent<TextInputFocusEventData>) {
      props?.onBlur && props?.onBlur(event);
      borderColor.value = withTiming(isError ? colors.danger : colors.primary3);
    }
  },
);

export default InputField;
