import AppInfoScreen from '@/app/screens/About/AppInfoScreen';
import SupportScreen from '@/app/screens/About/SupportScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AboutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="AppInfo"
        component={AppInfoScreen}
        options={{ title: 'App Info' }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{ title: 'Support' }}
      />
    </Stack.Navigator>
  );
}
