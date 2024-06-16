import {View} from 'react-native';
import styles from './styles';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

interface Props extends ViewProps {}

export default function FloatWrapper({style, children, ...props}: Props) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}
