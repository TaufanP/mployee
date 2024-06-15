import {Linking, View} from 'react-native';
import Toast from 'react-native-toast-message';
import spaces from '../../../constants/spaces';
import {Touch, Words} from '../../atoms';
import QuickAction from '../QuickAction';
import styles from './styles';

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
        <QuickAction
          onPress={() => quickAction('phone', props?.phone)}
          type="call"
          disabled={!props?.phone}
        />
        <QuickAction
          onPress={() => quickAction('mail', props?.email)}
          type="mail"
          disabled={!props?.email}
        />
        <QuickAction
          onPress={() => quickAction('web', props?.web)}
          type="web"
          disabled={!props?.web}
        />
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
        if (type === 'web') {
          const canOpen = await Linking.canOpenURL(link);
          if (canOpen) Linking.openURL(link);
          else {
            Toast.show({
              position: 'bottom',
              type: 'error',
              text1: 'Cannot visit the site!',
            });
          }
        } else Linking.openURL(link);
      } catch (error) {
        Toast.show({
          position: 'bottom',
          type: 'error',
          text1: 'Cannot do the action!',
        });
      }
    } else {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: 'Cannot do the action!',
      });
    }
  }
}
