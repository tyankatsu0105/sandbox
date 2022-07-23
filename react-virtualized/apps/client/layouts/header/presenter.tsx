import * as React from 'react';
import styled from 'styled-components';

// ----------------------------------------
// props
// ----------------------------------------

// ----------------------------------------
// component
// ----------------------------------------

export const Component: React.VFC = () => (
  <Wrapper>
    <Heading>Sandbox React Virtualized</Heading>
    <Link
      href="https://github.com/tyankatsu0105/sandbox-react-virtualized"
      rel="noreferrer"
      target="_blank"
    >
      GitHub
    </Link>
  </Wrapper>
);

// ----------------------------------------
// styles
// ----------------------------------------
const Wrapper = styled.header`
  padding: ${(props) => props.theme.spacer(2)};
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.grey[900]};
  color: ${(props) => props.theme.colors.common.white};
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
`;

const Link = styled.a`
  font-size: 1.8rem;
`;
