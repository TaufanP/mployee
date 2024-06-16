import {StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  containerContent: {
    gap: 8,
    overflow: 'hidden',
  },
  containerContentInner: {position: 'absolute', gap: 16},
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spaces.lg,
    flex: 1,
  },
  containerParent: {
    padding: spaces.m,
    backgroundColor: colors.primary2,
    borderRadius: 8,
  },
});

export default styles;
