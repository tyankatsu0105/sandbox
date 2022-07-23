import * as colors from '@material-ui/core/colors';

const BASE_SPACE_AMOUNT = 4;

export const theme = {
  colors: {
    ...colors,
  },
  spacer: (amount: string | number) =>
    `${Number(amount) * BASE_SPACE_AMOUNT}px`,
  transition: {},
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
  },
};
