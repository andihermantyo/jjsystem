import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import usePersistanceState from './hooks/usePersistanceState';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

export default function App() {
  useKeepAwake();

  const { fontsLoaded, onLayoutRootView } = useCachedResources();
  const { isReady, initialState } = usePersistanceState(PERSISTENCE_KEY);

  if (!fontsLoaded || !isReady) {
    return null;
  } else {
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
              <Text style={{ fontFamily: 'Inter-Black' }}>
                Open up App.js to start working on your app!
              </Text>
              <Text style={{ fontFamily: 'NotoSans-Regular' }}>
                Open up App.js to start working on your app!
              </Text>
            </SafeAreaView>
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
