import { type PropsWithChildren } from 'react';
import { View, ViewStyle, type StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export default function ScreenBackground({ children, style }: Props) {
  const theme = useTheme();
  const baseStyle = { flex: 1, backgroundColor: theme.colors.background };

  return <View style={[baseStyle, style]}>{children}</View>;
}
