import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Linking, Platform } from 'react-native';

export default function usePersistanceState(persistanceKey) {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    async function restoreState() {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(persistanceKey);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  return { isReady, initialState };
}
