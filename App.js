import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useKeepAwake } from 'expo-keep-awake';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import usePersistanceState from './hooks/usePersistanceState';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  useKeepAwake();

  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'NotoSans-Regular': require('./assets/fonts/NotoSans-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const { isReady, initialState } = usePersistanceState(PERSISTENCE_KEY);

  if (!fontsLoaded || !isReady) {
    return null;
  }

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer
          initialState={initialState}
          onStateChange={(state) =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }
        >
          <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
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
