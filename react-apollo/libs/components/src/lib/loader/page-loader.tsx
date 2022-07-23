import React, { FunctionComponent } from 'react';

import { Box, CircularProgress } from '@material-ui/core';

export const PageLoader: FunctionComponent = (props) => (
  <Box
    width="100vw"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <CircularProgress />
  </Box>
);
