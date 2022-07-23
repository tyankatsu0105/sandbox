// @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';
import { useCallback } from 'react';
import { useSnackbar, OptionsObject, VariantType } from 'notistack';

import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  default: {
    backgroundColor: theme.palette.common.white,
  },

  success: {
    backgroundColor: theme.palette.success.main,
  },

  error: {
    backgroundColor: theme.palette.error.main,
  },

  warning: {
    backgroundColor: theme.palette.warning.main,
  },

  info: {
    backgroundColor: theme.palette.info.main,
  },
}));

type Props = {
  id: OptionsObject['key'];
  message: string;
  variant: VariantType;
};

export const Simple = React.forwardRef((props: Props, ref) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();

  const handleClose = useCallback(
    (key: OptionsObject['key']) => {
      closeSnackbar(key);
    },
    [closeSnackbar]
  );

  return (
    <Card ref={ref} className={classes[props.variant]}>
      <CardActions>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{props.message}</Typography>

          <Box paddingLeft={3}>
            <Button type="button" onClick={() => handleClose(props.id)}>
              閉じる
            </Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
});
