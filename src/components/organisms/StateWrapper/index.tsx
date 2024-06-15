import {View} from 'react-native';
import styles from './styles';
import LottieView, {AnimationObject} from 'lottie-react-native';
import {Words} from '../../atoms';
import {Button} from '../../molecules';

interface Props {
  animation?: string | AnimationObject;
  stateLabel: string;
  statePress?: () => void;
  stateButtonLabel?: string;
}

export default function StateWrapper(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.containerAnimation}>
          <LottieView
            source={props.animation}
            style={styles.animation}
            autoPlay
            loop
          />
        </View>
        <View style={styles.containerDetails}>
          <Words textAlign="center" size="lg">
            {props.stateLabel}
          </Words>
          {!!props.stateButtonLabel && (
            <Button text={props.stateButtonLabel} onPress={props.statePress} />
          )}
        </View>
      </View>
    </View>
  );
}
