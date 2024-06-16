import {View} from 'react-native';
import styles from './styles';
import Button from '../Button';
import ICONS from '../../../assets/icons';

interface Props {
  callPress?: () => void;
  messagePress?: () => void;
}

export default function PhoneQuickActions(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button
          text="Message"
          fluid
          type="secondary"
          size="sm"
          onPress={props?.messagePress}
        />
      </View>
      <View style={styles.flex}>
        <Button
          text="Call"
          fluid
          size="sm"
          Icon={<ICONS.PhoneSmall />}
          onPress={props?.callPress}
        />
      </View>
    </View>
  );
}
