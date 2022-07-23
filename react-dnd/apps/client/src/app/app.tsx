import * as React from 'react';

import styled from 'styled-components';

import * as Organization from './page/organization';

export const App = () => (
  <Wrap>
    <Organization.Component />
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
`;
