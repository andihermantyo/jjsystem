import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { large, useBreakpoint } from '../hooks/useBreakpoints';
import AboutScreen from '../screens/About/AboutScreen';
import SupportScreen from '../screens/About/SupportScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';
import CustomDrawerContent from './CustomDrawerContent';
import CustomHeader from './CustomHeader';

const SignInStack = createNativeStackNavigator();

function SignIn() {
  return (
    <SignInStack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
      }}
    >
      <SignInStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ title: 'Masuk' }}
      />
    </SignInStack.Navigator>
  );
}

const AboutStack = createNativeStackNavigator();

function About() {
  return (
    <AboutStack.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
      }}
    >
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: 'Tentang' }}
      />
      <AboutStack.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ title: 'Dukungan' }}
      />
    </AboutStack.Navigator>
  );
}

const getDrawerTypeForBreakpoint = (breakpoint) =>
  breakpoint === large ? 'permanent' : 'front';

export default function Navigation() {
  const Drawer = createDrawerNavigator();
  const breakpoint = useBreakpoint();
  const drawerType = getDrawerTypeForBreakpoint(breakpoint);

  // IMPORTANT: NavigationContainer needs to not rerender too often or
  // else Safari and Firefox error on too many history API calls. Put
  // any hooks in RootNavigator so this parent doesn't rerender.
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerType,
          drawerStyle: { width: 200 },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          initialParams={{ label: 'Masuk' }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          initialParams={{ label: 'Tentang' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
