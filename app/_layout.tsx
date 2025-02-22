import { useKeepAwake } from 'expo-keep-awake';
import { Stack } from 'expo-router';

export default function RootLayout() {
  useKeepAwake();

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
