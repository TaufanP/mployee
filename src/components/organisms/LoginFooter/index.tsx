import {View} from 'react-native';
import {Touch, Words} from '../../atoms';
import colors from '../../../constants/colors';
import {Button} from '../../molecules';
import styles from './styles';

interface Props {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function LoginFooter(props: Props) {
  return (
    <View style={styles.container}>
      <Touch>
        <Words textAlign="center">
          Do not have an account?{' '}
          <Words color={colors.primary1} style={{fontWeight: 'bold'}}>
            Sign Up
          </Words>
        </Words>
      </Touch>
      <Button
        text="Login"
        onPress={props.onPress}
        isLoading={props.isLoading}
        disabled={props.disabled}
      />
    </View>
  );
}
