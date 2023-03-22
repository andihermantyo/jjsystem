import { Text } from 'react-native';

export default function Header({ children }) {
  return (
    <Text
      style={{
        fontSize: 26,
        fontWeight: 'bold',
        color: 'blue',
      }}
    >
      {children}
    </Text>
  );
}
