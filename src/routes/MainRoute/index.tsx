import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import api from '../../config/api';
import localStorage from '../../config/localStorage';
import {
  EmployeeCreateScreen,
  EmployeeDetailScreen,
  EmployeeListScreen,
  LoginScreen,
} from '../../containers/';
import {isTokenExpired} from '../../helpers';
import {useStoreUserAuth} from '../../hooks';
import {MainParam} from '../../types/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<MainParam>();

export default function MainRoute() {
  const expiry = useStoreUserAuth(state => state.expirationDate);
  const token = useStoreUserAuth(state => state.token);
  const isLoggedIn = !!token;

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  function checkToken() {
    if (token && expiry) {
      if (isTokenExpired(expiry)) {
        localStorage.clearAll();
      }
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="EmployeeList"
          screenOptions={{headerShown: false}}>
          {isLoggedIn ? (
            <Stack.Group>
              <Stack.Screen
                name="EmployeeList"
                component={EmployeeListScreen}
              />
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
    </GestureHandlerRootView>
  );
}
