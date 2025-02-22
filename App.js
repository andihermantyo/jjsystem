import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ScreenBackground from './app/components/ScreenBackground';
import Navigation from './app/navigation';

export default function App() {
  useKeepAwake();

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <ScreenBackground>
          <Navigation />
        </ScreenBackground>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
