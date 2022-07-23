import React, { FunctionComponent } from 'react';
import { Box, Paper } from '@material-ui/core';

import { HeaderUser } from './components';

type Props = {};

export const HeaderPresentational: FunctionComponent<Props> = (props) => {
  return (
    <Paper>
      <Box
        minHeight="48px"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <HeaderUser />
      </Box>
    </Paper>
  );
};
