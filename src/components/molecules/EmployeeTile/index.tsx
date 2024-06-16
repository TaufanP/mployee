import {View} from 'react-native';
import spaces from '../../../constants/spaces';
import {openApps} from '../../../helpers';
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
          onPress={() => openApps('phone', props?.phone)}
          type="call"
          disabled={!props?.phone}
        />
        <QuickAction
          onPress={() => openApps('mail', props?.email)}
          type="mail"
          disabled={!props?.email}
        />
        <QuickAction
          onPress={() => openApps('web', props?.web)}
          type="web"
          disabled={!props?.web}
        />
      </View>
    </Touch>
  );
}
