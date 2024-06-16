import colors from '../../../constants/colors';
import {Touch, Words} from '../../atoms';
import FloatWrapper from '../../atoms/FloatWrapper';
import {Button} from '../../molecules';

interface Props {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export default function LoginFooter(props: Props) {
  return (
    <FloatWrapper>
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
    </FloatWrapper>
  );
}
