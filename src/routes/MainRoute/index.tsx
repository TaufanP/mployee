import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import api from '../../config/api';
import {useEffect} from 'react';
import {LoginScreen} from '../../containers';

export default function MainRoute() {
  api.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOiJUaHUgSnVuIDEzIDIwMjQgMTU6NTc6MTQgR01UKzAwMDAgKENvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lKSIsInVzZXJfcm9sZSI6Im9wZXJhdG9yIiwidXNlcl9pZCI6MjAyMiwiaWF0IjoxNzE4Mjk0MjM0LCJleHAiOjE3MTgzODA2MzR9.Ona_EWGXtJFUqioKeTD4_PdUZFXDMk1-DLTW7WrApNs'}`;

  async function testAPI() {
    try {
      // const data = await employeeCreate({
      //   first_name: 'Yuna Test',
      //   last_name: 'Song Test',
      //   company_name: 'Colliers International Indonesia',
      //   address: 'Jl. Soedirman Kav.29-31 WTC1 lt.14',
      //   city: 'South Jakarta',
      //   county: 'Setiabudi',
      //   state: 'DKI Jakarta',
      //   zip: 12059,
      //   phone1: '021-2342-2424',
      //   phone2: '021-2222-4444',
      //   email: 'colliersfm@gmail.com',
      //   web: 'cfm-system.com',
      // });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    testAPI();
  }, []);
  return (
    <SafeAreaView>
      <LoginScreen />
    </SafeAreaView>
  );
}
