import { deepOrange, purple, pink } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const customTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[300],
    },
    secondary: {
      main: pink.A400,
    },
    error: deepOrange,
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', 'Roboto', '"Helvetica Neue"', 'Arial'].join(
      ','
    ),
  },
});
