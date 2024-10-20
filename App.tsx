import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { WeatherProvider } from './src/context/WeatherContext';

const App = () => {
  return (
    <WeatherProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </WeatherProvider>
  );
};

export default App;
