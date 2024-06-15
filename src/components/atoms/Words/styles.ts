import {StyleSheet, TextStyle} from 'react-native';
import colors from '../../../constants/colors';
import {WordSize, WordWeight} from '.';

export default function styles({
  color,
  underline,
  size,
  weight,
}: {
  color?: string;
  underline?: boolean;
  size?: WordSize;
  weight?: WordWeight;
}) {
  return StyleSheet.create({
    base: {
      color: color || colors.text,
      textDecorationLine: underline ? 'underline' : 'none',
      fontWeight:
        weight === 'regular'
          ? 'normal'
          : weight === 'semibold'
          ? '500'
          : 'bold',
      fontSize:
        size === 'xs'
          ? 12
          : size === 'sm'
          ? 14
          : size === 'base'
          ? 16
          : size === 'lg'
          ? 18
          : size === 'xl'
          ? 20
          : 24,
    },
  });
}
