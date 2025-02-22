import { View } from 'react-native';
import { ScreenWidthMin } from '../constants/ScreenWidthMin';
import { breakpointMedium } from '../hooks/useBreakpoints';
import useStyleQueries from '../hooks/useStyleQueries';

export default function ButtonGroup({ children }) {
  const styles = useStyleQueries(styleQueries);
  return <View style={styles.buttonContainer}>{children}</View>;
}

const styleQueries = {
  buttonContainer: [
    {
      flexDirection: 'column',
    },
    ScreenWidthMin(breakpointMedium, {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }),
  ],
};
