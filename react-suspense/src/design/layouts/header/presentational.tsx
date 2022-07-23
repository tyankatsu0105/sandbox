import * as React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  return (
    <Wrap {...props}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/pokemons">Pokemons</StyledLink>
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  & + & {
    margin-left: 8px;
  }
`;
