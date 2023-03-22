import { Text } from 'react-native';

export default function Paragraph({ children }) {
  return (
    <Text
      style={{
        fontSize: 16,
        lineHeight: 26,
        color: 'indigo',
      }}
    >
      {children}
    </Text>
  );
}
