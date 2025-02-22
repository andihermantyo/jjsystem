import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, useTheme } from 'react-native-paper';

export default function CustomDrawerContent(props) {
  const theme = useTheme();

  const { state, navigation } = props;

  const isSelected = (index) => index === state.index;

  const scrollViewStyle = {
    backgroundColor: theme.colors.background,
  };

  return (
    <DrawerContentScrollView style={scrollViewStyle} {...props}>
      {state.routes.map((route, index) => (
        <Drawer.Item
          key={route.key}
          label={route.params.label}
          accessibilityLabel={route.params.label}
          active={isSelected(index)}
          onPress={() => navigation.navigate(route.name)}
        />
      ))}
    </DrawerContentScrollView>
  );
}
