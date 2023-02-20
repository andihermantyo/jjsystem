import { Provider } from 'react-native-paper';

import Container from './src';
import { theme } from './src/core/theme';

export default function App() {
  return (
    <Provider theme={theme}>
      <Container />
    </Provider>
  );
}
