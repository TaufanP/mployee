import {PropsWithChildren, useRef} from 'react';
import {LayoutChangeEvent, View} from 'react-native';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gap, Touch, Words} from '../../atoms';
import styles from './styles';
import spaces from '../../../constants/spaces';
import colors from '../../../constants/colors';
import ICONS from '../../../assets/icons';

const RIGHT = '180deg';
const DOWN = '90deg';

interface Props {
  label: string;
  value: string;
}

export default function Accordion({
  value,
  label,
  children,
}: PropsWithChildren<Props>) {
  const height = useSharedValue(0);
  const contentHeight = useRef<number>(0);

  const rotate = useDerivedValue(() => {
    return height.value === 0 ? [RIGHT, DOWN] : [DOWN, RIGHT];
  }, [height.value]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
  }));

  function rotateState(collapsed?: boolean) {
    return useAnimatedStyle(() => ({
      transform: [
        {rotate: withTiming(rotate.value[collapsed ? 0 : 1], {duration: 300})},
      ],
    }));
  }

  const iconStyle = rotateState(true);

  return (
    <Touch onPress={onToggle}>
      <Animated.View style={styles.containerParent}>
        <View style={styles.container}>
          <Words>{label}</Words>
          <View style={styles.containerHeader}>
            <Words textAlign="right" style={{flex: 1}}>
              {value}
            </Words>
            <Animated.View style={iconStyle}>
              <ICONS.Chevron fill={colors.dark350} />
            </Animated.View>
          </View>
        </View>
        <Animated.View style={[styles.containerContent, animatedStyle]}>
          <View
            style={styles.containerContentInner}
            onLayout={setInitialContentHeight}>
            <Gap vertical={spaces.sm} />
            {children}
          </View>
        </Animated.View>
      </Animated.View>
    </Touch>
  );

  function setInitialContentHeight({nativeEvent: {layout}}: LayoutChangeEvent) {
    contentHeight.current = layout.height;
  }

  function onToggle() {
    height.value =
      height.value === 0
        ? withTiming(contentHeight.current, {duration: 200})
        : withTiming(0);
  }
}
