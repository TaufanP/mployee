import {View} from 'react-native';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';
import styles from './styles';

interface Props extends ViewProps {}

export default function ContentWrapper({children, style, ...props}: Props) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}
