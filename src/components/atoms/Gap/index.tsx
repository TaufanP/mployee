import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface GapProps {
  vertical?: number;
  horizontal?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * View component for filling gaps. Could receive children.
 * @param vertical paddingVertical value.
 * @param horizontal paddingHorizontal value.
 * @return a view component.
 */
const Gap = ({
  vertical,
  horizontal,
  children,
  style,
}: PropsWithChildren<GapProps>) => {
  const paddingVertical = (vertical || 0) / (!!children ? 1 : 2);
  const paddingHorizontal = (horizontal || 0) / (!!children ? 1 : 2);
  return (
    <View
      style={[
        vertical !== undefined && {
          paddingVertical,
        },
        horizontal !== undefined && {
          paddingHorizontal,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Gap;
