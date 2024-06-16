import {StyleSheet} from 'react-native';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';
import spaces from '../../../constants/spaces';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingBottom: spaces.xl,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    gap: spaces.m,
  },
});

export default styles;
