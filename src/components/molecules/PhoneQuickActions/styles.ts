import {StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spaces.lg,
  },
  flex: {flex: 1},
});

export default styles;
