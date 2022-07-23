import 'styled-components';
// ______________________________________________________
//
export const theme = {
  colors: {
    background: `#FAFCFC`,
  },
} as const;
// ______________________________________________________
//
type AppTheme = typeof theme;
// ______________________________________________________
//
declare module 'styled-components' {
  // eslint-disable-next-line
interface DefaultTheme extends AppTheme {}
}
