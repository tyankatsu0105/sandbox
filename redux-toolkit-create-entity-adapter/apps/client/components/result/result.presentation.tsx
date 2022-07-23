import * as React from 'react';
import styled from 'styled-components';
import * as MaterialUI from '@material-ui/core';

import * as Store from '~client/store';

// ===============================
// types
// ===============================

type Props = {
  state: Store.RootState;
  handleAddMockData: () => void;
  isAddMockData: boolean;
};
// ===============================
// component
// ===============================

export const Component = (props: Props): React.ReactElement => {
  return (
    <>
      <MaterialUI.Box display="flex" justifyContent="flex-end">
        <MaterialUI.Button
          onClick={props.handleAddMockData}
          variant="contained"
          type="button"
          disabled={props.isAddMockData}
        >
          {props.isAddMockData ? 'Added mock data' : 'Add mock data'}
        </MaterialUI.Button>
      </MaterialUI.Box>
      <MaterialUI.Box marginTop={2} marginBottom={2}>
        <MaterialUI.Divider />
      </MaterialUI.Box>
      <MaterialUI.Paper>
        <StyledPre>
          <MaterialUI.Typography variant="subtitle2">
            <code>{JSON.stringify(props.state, null, 4)}</code>
          </MaterialUI.Typography>
        </StyledPre>
      </MaterialUI.Paper>
    </>
  );
};

// ===============================
// styles
// ===============================
const StyledPre = styled.pre`
  height: 500px;
  overflow: scroll;
`;
