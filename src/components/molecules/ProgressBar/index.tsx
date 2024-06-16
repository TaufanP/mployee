import {View} from 'react-native';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useEffect} from 'react';

interface Props {
  isFull?: boolean;
}

export default function ProgressBar(props: Props) {
  const progress = useSharedValue(0);

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
  }));

  useEffect(() => {
    progress.value = props?.isFull
      ? withTiming(100, {duration: 1000})
      : withTiming(0, {duration: 1000});
  }, [props?.isFull]);

  return (
    <View style={styles.container}>
      <Animated.View style={[progressStyle, styles.containerAnimated]} />
    </View>
  );
}
