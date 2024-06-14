import {QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Toast from 'react-native-toast-message';
import queryClient from './src/config/queryClient';
import toastConfig from './src/config/toast';
import {MainRoute} from './src/routes';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRoute />
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}
