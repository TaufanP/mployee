import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import spaces from '../../../constants/spaces';

export default StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 56,
    backgroundColor: colors.primary1,
    flexDirection: 'row',
  },
  containerBack: {
    width: 48,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {flexDirection: 'row', gap: spaces.sm, alignItems: 'center'},
});
