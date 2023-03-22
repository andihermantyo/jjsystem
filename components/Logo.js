import { Image } from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={{
        width: 360,
        height: 96,
        resizeMode: 'contain',
      }}
    />
  );
}
