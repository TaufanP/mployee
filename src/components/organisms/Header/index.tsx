import {useNavigation} from '@react-navigation/native';
import colors from '../../../constants/colors';
import {ContentWrapper, Touch, Words} from '../../atoms';
import styles from './styles';
import {View} from 'react-native';
import ICONS from '../../../assets/icons';
import spaces from '../../../constants/spaces';
import {SCREEN_HORIZONTAL_PADDING} from '../../../constants/components';

interface Props {
  title?: string;
  actionLabel?: string;
  actionPress?: () => void;
  hasAction?: boolean;
}

export default function (props: Props) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        props.hasAction && {paddingHorizontal: SCREEN_HORIZONTAL_PADDING},
      ]}>
      <View style={styles.containerTitle}>
        {!props.hasAction && (
          <Touch style={styles.containerBack} onPress={onPressBack}>
            <ICONS.Chevron fill={colors.white} />
          </Touch>
        )}
        <Words weight="semibold" size="base" color={colors.white}>
          {props.title}
        </Words>
      </View>
      {props.hasAction && (
        <Touch onPress={props.actionPress}>
          <Words underline color={colors.white}>
            {props?.actionLabel}
          </Words>
        </Touch>
      )}
    </View>
  );

  function onPressBack() {
    navigation.goBack();
  }
}
