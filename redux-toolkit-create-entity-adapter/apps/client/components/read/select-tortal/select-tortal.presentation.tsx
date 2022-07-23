import * as React from 'react';
import * as ReduxToolkit from '@reduxjs/toolkit';
import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

import * as UsersEntity from '~client/application/domains/users/entity';

import * as Store from '~client/store';

// ===============================
// types
// ===============================
type Props = {
  tortal: ReturnType<
    ReduxToolkit.EntitySelectors<
      UsersEntity.User,
      Store.RootState
    >['selectTotal']
  >;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <MaterialUI.Paper>
      <StyledPre>
        <MaterialUI.Typography variant="subtitle2">
          <code>{JSON.stringify(props.tortal, null, 4)}</code>
        </MaterialUI.Typography>
      </StyledPre>
    </MaterialUI.Paper>
  );
};

// ===============================
// styles
// ===============================
const StyledPre = styled.pre`
  height: 100px;
  overflow: scroll;
`;
