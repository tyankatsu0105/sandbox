import { createMuiTheme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: teal[500],
    },
  },
});
