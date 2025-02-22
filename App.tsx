import ScreenBackground from '@/app/components/ScreenBackground';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyDrawer from '@/app/navigation';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <ScreenBackground>
          <MyDrawer />
        </ScreenBackground>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
