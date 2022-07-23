import 'styled-components';
import { Theme } from '@material-ui/core';

// and extend them!
declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}
