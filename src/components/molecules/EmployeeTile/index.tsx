import {Linking, View} from 'react-native';
import {Touch, Words} from '../../atoms';
import styles from './styles';
import spaces from '../../../constants/spaces';
import ICONS from '../../../assets/icons';
import colors from '../../../constants/colors';
import Toast from 'react-native-toast-message';

interface Props {
  onPress?: () => void;
  name?: string;
  address?: string;
  company?: string;
  web?: string;
  email?: string;
  phone?: string;
}

export default function EmployeeTile(props: Props) {
  return (
    <Touch style={styles.container} onPress={props.onPress}>
      <View style={{gap: spaces.sm}}>
        {(!!props.address || !!props.name) && (
          <View style={styles.containerTitle}>
            {!!props.name && (
              <Words numberOfLines={1} size="base" weight="semibold">
                {props.name}
              </Words>
            )}
            {!!props.address && (
              <Words size="xs" numberOfLines={1}>
                {props.address}
              </Words>
            )}
          </View>
        )}
        {!!props.company && <Words>{props.company}</Words>}
      </View>
      <View style={styles.dash} />
      <View style={styles.containerActions}>
        <Touch
          style={styles.containerAction}
          onPress={() => quickAction('phone', props.phone)}>
          <ICONS.Phone />
          <Words color={colors.primary1}>Call</Words>
        </Touch>
        <Touch
          style={styles.containerAction}
          onPress={() => quickAction('mail', props.email)}>
          <ICONS.Mail />
          <Words color={colors.primary1}>Mail</Words>
        </Touch>
        <Touch
          style={styles.containerAction}
          onPress={() => quickAction('web', props?.web)}>
          <ICONS.Arrow />
          <Words color={colors.primary1}>Visit</Words>
        </Touch>
      </View>
    </Touch>
  );

  async function quickAction(type: 'web' | 'phone' | 'mail', payload?: string) {
    if (!!payload) {
      let link = '';
      switch (type) {
        case 'phone':
          link = `tel:${payload}`;
          break;
        case 'web':
          link = payload;
          break;
        case 'mail':
          link = `mailto:${payload}`;
          break;

        default:
          break;
      }
      try {
        Linking.openURL(link);
      } catch (error) {
        console.log(error);
        Toast.show({
          position: 'bottom',
          type: 'error',
          text1: 'Cannot do the action!',
        });
      }
    }
  }
}
