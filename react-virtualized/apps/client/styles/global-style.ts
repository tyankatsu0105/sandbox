import { createGlobalStyle } from 'styled-components';

import { superFormReset } from './super-form-reset';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
${superFormReset}
body{
  font-family: ${theme.typography.fontFamily};
  font-size: 14px;
}

a{
  color: inherit;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
}
`;
