import {Dimensions, StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';

export default function styles({fullPage}: {fullPage?: boolean}) {
  return StyleSheet.create({
    animation: {width: '100%', height: '100%', flex: 1},
    container: {
      width: '100%',
      height: Dimensions.get('screen').height * (fullPage ? 0.7 : 0.5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerAnimation: {width: '100%', aspectRatio: 1.5},
    containerContent: {
      width: '100%',
      height: '100%',
      gap: spaces.lg,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerDetails: {width: 'auto', gap: 24},
  });
}
