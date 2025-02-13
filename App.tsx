/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather';
import DailyForecast from './src/screens/DailyForecast';
import AppNavigation from './src/navigation/index';
import WeatherContextProvider from './src/store/context/WeatherContext';
import ErrorBoundary from './src/error/ErrorBoundary';


function App(): React.JSX.Element {

  return (
    <View style={styles.sectionContainer}>
      <ErrorBoundary>
        <WeatherContextProvider>
          <AppNavigation/>
        </WeatherContextProvider>
      </ErrorBoundary>
    </View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'black',
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
