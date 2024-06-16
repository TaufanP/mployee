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
  fullPage?: boolean;
}

export default function StateWrapper(props: Props) {
  const style = styles({fullPage: props.fullPage});
  return (
    <View style={style.container}>
      <View style={style.containerContent}>
        <View style={style.containerAnimation}>
          <LottieView
            source={props.animation}
            style={style.animation}
            autoPlay
            loop
          />
        </View>
        <View style={style.containerDetails}>
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
