import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import {ButtonSize, ButtonType} from './';
import spaces from '../../../constants/spaces';

const general = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContent: {
    flexDirection: 'row',
    gap: spaces.sm,
    alignItems: 'center',
  },
});

const typeStyle = ({type, disabled}: {type: ButtonType; disabled?: boolean}) =>
  StyleSheet.create({
    container: {
      backgroundColor:
        type === 'primary'
          ? disabled
            ? colors.dark650
            : colors.secondary1
          : type == 'text'
          ? colors.white
          : colors.white,
      borderColor:
        type === 'primary'
          ? disabled
            ? colors.dark650
            : colors.secondary1
          : disabled
          ? colors.dark650
          : colors.white,
    },
  });

const sizeStyle = (size: ButtonSize) => {
  const SIZE =
    size === 'lg'
      ? spaces.xl
      : size === 'md'
      ? spaces.lg + spaces.xs
      : spaces.base;

  return StyleSheet.create({
    container: {
      paddingHorizontal: SIZE,
      paddingVertical: SIZE / 2,
    },
  });
};

export default {general, typeStyle, sizeStyle};
