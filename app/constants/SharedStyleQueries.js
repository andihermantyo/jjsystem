import { breakpointMedium } from '../hooks/useBreakpoints';
import { ScreenWidthMin } from './ScreenWidthMin';

export default {
  button: [
    {
      marginTop: 10,
    },
    ScreenWidthMin(breakpointMedium, {
      marginLeft: 10,
    }),
  ],
};
