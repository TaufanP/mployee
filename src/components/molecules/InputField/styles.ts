import {StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  containerIcon: {
    width: 24,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    borderRadius: spaces.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary2,
    paddingHorizontal: spaces.m,
    gap: spaces.sm,
    borderWidth: 1,
    borderColor: colors.primary3,
  },
  containerInputLabel: {gap: 4},

  input: {
    paddingVertical: spaces.base,
    padding: 0,
    flex: 1,
    color: colors.text,
  },
});

export default styles;
