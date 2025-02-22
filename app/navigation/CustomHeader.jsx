import { useColorScheme } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { large, useBreakpoint } from '../hooks/useBreakpoints';

const showDrawerToggleForBreakpoint = (breakpoint) => breakpoint !== large;

export default function CustomHeader({ navigation, options, back }) {
  const breakpoint = useBreakpoint();
  const theme = useTheme();
  const showDrawerToggle = showDrawerToggleForBreakpoint(breakpoint);
  const colorScheme = useColorScheme() ?? 'light';

  const lightHeaderStyle = {
    backgroundColor: theme.colors.secondaryContainer,
  };
  const headerStyle = colorScheme === 'light' ? lightHeaderStyle : null;

  return (
    <Appbar.Header style={headerStyle}>
      {back ? (
        <Appbar.BackAction
          accessibilityLabel="Back"
          onPress={navigation.goBack}
        />
      ) : null}
      <Appbar.Content title={options.title} />
      {showDrawerToggle && (
        <Appbar.Action
          accessibilityLabel="Menu"
          icon="menu"
          onPress={navigation.toggleDrawer}
        />
      )}
    </Appbar.Header>
  );
}
