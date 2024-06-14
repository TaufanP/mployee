import {SafeAreaView} from 'react-native';
import api from '../../config/api';
import {EmployeeCreateScreen} from '../../containers/';
import {useStoreUserAuth} from '../../hooks';

export default function MainRoute() {
  const token = useStoreUserAuth(state => state.token);

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return (
    <SafeAreaView>
      <EmployeeCreateScreen />
    </SafeAreaView>
  );
}
