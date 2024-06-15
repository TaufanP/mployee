import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import spaces from '../../../constants/spaces';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.primary4,
    paddingVertical: spaces.base,
    paddingHorizontal: spaces.m,
    borderRadius: spaces.sm,
    gap: spaces.base,
  },
  containerAction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaces.sm,
  },
  containerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spaces.lg,
  },

  dash: {
    height: 1,
    width: '100%',
    backgroundColor: colors.dark700,
  },
});

export default styles;
