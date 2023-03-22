import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ActivityIndicatorComponent from './components/ActivityIndicatorComponent';
import useCachedResources from './hooks/useCachedResources';
import usePersistanceState from './hooks/usePersistanceState';
import HomeScreen from './screens/HomeScreen';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
const Stack = createNativeStackNavigator();

export default function App() {
  useKeepAwake();

  const isLoadingComplete = useCachedResources();
  const { isReady, initialState } = usePersistanceState(PERSISTENCE_KEY);

  if (!isLoadingComplete || !isReady) {
    return <ActivityIndicatorComponent />;
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
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </PaperProvider>
    );
  }
}
