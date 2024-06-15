import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export default function styles({
  color,
  underline,
}: {
  color?: string;
  underline?: boolean;
}) {
  return StyleSheet.create({
    base: {
      color: color || colors.text,
      textDecorationLine: underline ? 'underline' : 'none',
    },
  });
}
