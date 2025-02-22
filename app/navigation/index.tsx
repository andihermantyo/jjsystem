import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme, useWindowDimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

import AboutStackNavigator from '@/app/navigation/AboutStackNavigator';
import CustomDrawerContent from '@/app/navigation/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const dimensions = useWindowDimensions();
  const colorScheme = useColorScheme() ?? 'light';
  const theme = useTheme();

  const lightHeaderStyle = {
    backgroundColor: theme.colors.secondaryContainer,
  };
  const headerStyle = colorScheme === 'light' ? lightHeaderStyle : null;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
          drawerStyle: { width: 200 },
          headerStyle: headerStyle,
        }}
      >
        <Drawer.Screen
          name="About"
          component={AboutStackNavigator}
          options={{
            title: 'JJSystem : About',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
