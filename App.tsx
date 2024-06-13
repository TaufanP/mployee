import {QueryClientProvider} from '@tanstack/react-query';
import type {PropsWithChildren} from 'react';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Toast from 'react-native-toast-message';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import api from './src/config/api';
import queryClient from './src/config/queryClient';
import toastConfig from './src/config/toast';
import {employeeCreate, employeeList} from './src/services/employee';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  api.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOiJUaHUgSnVuIDEzIDIwMjQgMTU6NTc6MTQgR01UKzAwMDAgKENvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lKSIsInVzZXJfcm9sZSI6Im9wZXJhdG9yIiwidXNlcl9pZCI6MjAyMiwiaWF0IjoxNzE4Mjk0MjM0LCJleHAiOjE3MTgzODA2MzR9.Ona_EWGXtJFUqioKeTD4_PdUZFXDMk1-DLTW7WrApNs'}`;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  async function testAPI() {
    try {
      const data = await employeeCreate({
        first_name: 'Yuna Test',
        last_name: 'Song Test',
        company_name: 'Colliers International Indonesia',
        address: 'Jl. Soedirman Kav.29-31 WTC1 lt.14',
        city: 'South Jakarta',
        county: 'Setiabudi',
        state: 'DKI Jakarta',
        zip: 12059,
        phone1: '021-2342-2424',
        phone2: '021-2222-4444',
        email: 'colliersfm@gmail.com',
        web: 'cfm-system.com',
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    testAPI();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
