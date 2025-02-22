import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Item
        label="About"
        onPress={() =>
          props.navigation.navigate('About', {
            screen: 'AppInfo',
          })
        }
      />
    </DrawerContentScrollView>
  );
}
