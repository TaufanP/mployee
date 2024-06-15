import {StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: spaces.lg,
    bottom: spaces.xl,
    borderRadius: 999,
    backgroundColor: colors.secondary1,
    width: 48,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
