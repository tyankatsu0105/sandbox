import * as React from "react";
import styled from "styled-components";

import { Layouts, Components } from "~ui/design";

import { User } from "~application/presenters";

type Props = {
  users: User[];
};

const Presentational = (props: Props) => {
  return (
    <Layouts.Main>
      <ul>
        {props.users.map((user) => (
          <React.Fragment key={user.id}>
            <ListItem>
              <Components.Avatar src={user.avatar} variant="circle" />
              <p>name: {user.name}</p>
            </ListItem>
          </React.Fragment>
        ))}
      </ul>
    </Layouts.Main>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
const ListItem = styled.li`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 20px;
  }
`;
