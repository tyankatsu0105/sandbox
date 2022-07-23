import React, { FunctionComponent } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    contentsLoading: {
      position: 'fixed',
      left: '10px',
      bottom: '10px',
      zIndex: 9999,
    },
  })
);

type Props = {
  loading: boolean;
};

export const ContentsLoader: FunctionComponent<Props> = (props) => {
  const classes = useStyles({});

  return (
    <>
      {props.loading ? (
        <Box className={classes.contentsLoading}>
          <CircularProgress thickness={5} />
        </Box>
      ) : (
        ''
      )}
    </>
  );
};
