import * as React from "react";
import styled from "styled-components";

import { Components } from "~ui/design";

const Presentational = () => {
  return (
    <Wrap>
      <div>
        <Components.Text>Hello. This is sample project</Components.Text>
      </div>
      <UserWrap>
        <Components.Text>John</Components.Text>
        <StyledAvatar variant="rounded" />
      </UserWrap>
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
const Wrap = styled.header`
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
