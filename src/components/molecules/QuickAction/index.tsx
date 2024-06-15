import ICONS from '../../../assets/icons';
import colors from '../../../constants/colors';
import {Touch, Words} from '../../atoms';
import styles from './styles';

type QuickActionType = 'call' | 'mail' | 'web';

interface Props {
  onPress?: () => void;
  disabled?: boolean;
  type: QuickActionType;
}

export default function QuickAction(props: Props) {
  const Icon = findIcon(props.type);
  return (
    <Touch
      style={styles.container}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.disabled ? Icon.disabled : Icon.enabled}
      <Words color={props.disabled ? colors.dark400 : colors.primary1}>
        {props.type === 'call'
          ? 'Call'
          : props.type === 'mail'
          ? 'Mail'
          : 'Visit'}
      </Words>
    </Touch>
  );
}

function findIcon(type: QuickActionType) {
  switch (type) {
    case 'call':
      return {
        enabled: <ICONS.Phone />,
        disabled: <ICONS.PhoneDisabled />,
      };
    case 'mail':
      return {
        enabled: <ICONS.Mail />,
        disabled: <ICONS.MailDisabled />,
      };
    case 'web':
      return {
        enabled: <ICONS.Arrow fill={colors.primary1} />,
        disabled: <ICONS.Arrow fill={colors.dark400} />,
      };

    default:
      return {enabled: null, disabled: null};
  }
}
