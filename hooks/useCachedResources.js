import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

export default function useCachedResources() {
  // Keep the splash screen visible while we fetch resources
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = Font.useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'NotoSans-Regular': require('../assets/fonts/NotoSans-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}
