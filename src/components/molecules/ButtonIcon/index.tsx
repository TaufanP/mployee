import ICONS from '../../../assets/icons';
import colors from '../../../constants/colors';
import {Touch} from '../../atoms';
import styles from './styles';

interface Props {
  onPress?: () => void;
}

export default function ButtonIcon(props: Props) {
  return (
    <Touch onPress={props.onPress} style={styles.container}>
      <ICONS.PersonAdd fill={colors.white} />
    </Touch>
  );
}
