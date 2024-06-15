import {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import colors from '../../../constants/colors';

interface Props {
  hasHeader?: boolean;
  headerColor?: ViewStyle['backgroundColor'];
  translucent?: boolean;
}

export default function ({
  hasHeader = false,
  children,
  headerColor,
}: PropsWithChildren<Props>) {
  const height = useSafeAreaInsets().top;

  return (
    <SafeAreaView style={styles.container}>
      {!hasHeader && (
        <View
          style={{
            width: '100%',
            height,
            backgroundColor: headerColor || colors.white,
          }}
        />
      )}
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <>{children}</>
    </SafeAreaView>
  );
}
