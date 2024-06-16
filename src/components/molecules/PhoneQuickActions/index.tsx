import {View} from 'react-native';
import styles from './styles';
import Button from '../Button';
import ICONS from '../../../assets/icons';

export default function PhoneQuickActions() {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Button text="Message" fluid type="secondary" size="sm" />
      </View>
      <View style={styles.flex}>
        <Button text="Call" fluid size="sm" Icon={<ICONS.PhoneSmall />} />
      </View>
    </View>
  );
}
