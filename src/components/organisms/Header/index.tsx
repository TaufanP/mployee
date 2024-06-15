import {useNavigation} from '@react-navigation/native';
import colors from '../../../constants/colors';
import {ContentWrapper, Touch, Words} from '../../atoms';
import styles from './styles';

interface Props {
  title?: string;
  actionLabel?: string;
  actionPress?: () => void;
  hasAction?: boolean;
}

export default function (props: Props) {
  const navigation = useNavigation();

  return (
    <ContentWrapper style={styles.container}>
      <Words weight="semibold" size="base" color={colors.white}>
        {props.title}
      </Words>
      {props.hasAction && (
        <Touch onPress={props.actionPress}>
          <Words underline color={colors.white}>
            {props?.actionLabel}
          </Words>
        </Touch>
      )}
    </ContentWrapper>
  );

  function onPressBack() {
    navigation.goBack();
  }
}
