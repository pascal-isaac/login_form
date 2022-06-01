import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigation from './components/StackNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#191970" barStyle="auto" />
    <NavigationContainer>
      <StackNavigation />
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
