import {StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spaces.lg,
  },
  containerValue: {flex: 1},
});

export default styles;
