import colors from '../../../constants/colors';
import spaces from '../../../constants/spaces';
import {Touch, Words} from '../../atoms';
import styles from './styles';

interface Props {
  label: string;
  value: string;
  onPress?: () => void;
}

export default function LinkRow(props: Props) {
  return (
    <Touch style={styles.container} onPress={props.onPress}>
      <Words>{props.label}</Words>
      <Touch
        style={styles.containerValue}
        onLongPress={undefined}
        onPress={props.onPress}>
        <Words underline textAlign="right" color={colors.primary1}>
          {props.value}
        </Words>
      </Touch>
    </Touch>
  );
}
