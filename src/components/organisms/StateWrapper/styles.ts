import {Dimensions, StyleSheet} from 'react-native';
import spaces from '../../../constants/spaces';

const styles = StyleSheet.create({
  animation: {width: '100%', height: '100%', flex: 1},
  container: {
    width: '100%',
    height: Dimensions.get('screen').height * 0.7,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAnimation: {width: '100%', aspectRatio: 1.5},
  containerContent: {
    flex: 1,
    width: '100%',
    height: '100%',
    gap: spaces.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDetails: {flex: 1, gap: 24},
});

export default styles;
