import {View} from 'react-native';
import styles from './styles';
import ICONS from '../../../assets/icons';
import {Words} from '../../atoms';

interface Props {
  label?: string;
  type?: 'address' | 'country';
}

export default function RowIcon(props: Props) {
  if (props?.label)
    return (
      <View style={styles.container}>
        {props.type === 'country' ? (
          <ICONS.World style={{top: 2}} />
        ) : (
          <ICONS.Location style={{top: 2}} />
        )}
        <Words>{props?.label} </Words>
      </View>
    );
}
