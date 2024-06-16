import {View} from 'react-native';
import {ProgressBar} from '../../molecules';
import spaces from '../../../constants/spaces';
import {Words} from '../../atoms';

interface Props {
  stepNumber: number;
}

export default function MultiStepProgress(props: Props) {
  const label = findLabel(props.stepNumber);
  return (
    <View style={{gap: spaces.sm}}>
      <View
        style={{
          flexDirection: 'row',
          gap: spaces.xs,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {[0, 1, 2, 3].map(item => (
          <ProgressBar key={item} isFull={item <= props.stepNumber} />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Words>{label}</Words>
        <Words>{`(${props.stepNumber + 1}/4)`}</Words>
      </View>
    </View>
  );
}

function findLabel(step: number) {
  switch (step) {
    case 0:
      return 'Name Information';
    case 1:
      return 'Address Information';
    case 2:
      return 'Contacts Information';
    case 3:
      return 'Confirm Information';

    default:
      return '';
  }
}
