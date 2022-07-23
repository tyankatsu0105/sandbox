import * as React from 'react';
import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component: React.FC = (props) => (
  <Main component="main">{props.children}</Main>
);

// ===============================
// styles
// ===============================
const Main = styled(MaterialUI.Box)`
  margin-top: ${(props) => props.theme.spacing(4)}px;
`;
