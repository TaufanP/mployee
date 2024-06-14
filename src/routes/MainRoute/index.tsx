import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import api from '../../config/api';
import {
  EmployeeCreateScreen,
  EmployeeDetailScreen,
  EmployeeListScreen,
  LoginScreen,
} from '../../containers/';
import {useStoreUserAuth} from '../../hooks';
import {MainParam} from '../../types/routes';

const Stack = createNativeStackNavigator<MainParam>();

export default function MainRoute() {
  const token = useStoreUserAuth(state => state.token);
  const isLoggedIn = !!token;

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EmployeeList"
        screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
            <Stack.Screen
              name="EmployeeDetail"
              component={EmployeeDetailScreen}
            />
            <Stack.Screen
              name="EmployeeCreate"
              component={EmployeeCreateScreen}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
