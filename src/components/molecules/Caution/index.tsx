import {View} from 'react-native';
import {Words} from '../../atoms';
import colors from '../../../constants/colors';
import styles from './styles';

interface Props {
  title: string;
  description: string;
}

export default function Caution(props: Props) {
  return (
    <View style={styles.container}>
      <Words color={colors.success1} weight="bold">
        {props.title}
      </Words>
      <Words color={colors.success1}>{props.description}</Words>
    </View>
  );
}
