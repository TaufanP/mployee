import {SvgProps} from 'react-native-svg';
import colors from '../../../constants/colors';
import Icon from './Chevron.svg';

interface Props extends SvgProps {
  colorFill?: string;
}

export default function IconComp({
  colorFill = colors.primary1,
  ...props
}: Props) {
  return <Icon fill={colorFill} {...props} />;
}
