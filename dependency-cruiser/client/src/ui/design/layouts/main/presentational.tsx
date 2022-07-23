import * as React from "react";
import styled from "styled-components";

import { Recipes, Components } from "~ui/design";

type Props = {
  children?: React.ReactNode;
};

const Presentational = (props: Props) => {
  return (
    <>
      <Recipes.Header />
      <main>{props.children}</main>
    </>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
const Wrap = styled.div`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAvatar = styled(Components.Avatar)`
  margin-left: 8px;
`;
