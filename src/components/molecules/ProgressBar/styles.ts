import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: '100%',
    backgroundColor: colors.secondary2,
    position: 'relative',
    borderRadius: 999,
    flex: 1,
  },
  containerAnimated: {
    position: 'absolute',
    height: '100%',
    backgroundColor: colors.secondary1,
    borderRadius: 999,
  },
});

export default styles;
