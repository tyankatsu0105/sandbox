// @see https://github.com/iamhosseindhv/notistack
import * as React from 'react';
import { useState, useCallback } from 'react';
import { useSnackbar, OptionsObject, VariantType } from 'notistack';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  IconButton,
  Typography,
  Box,
  Collapse,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { nl2br } from '@sandbox-react-apollo/helpers';

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

  panel: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
}));

type Props = {
  id: OptionsObject['key'];
  message: string;
  details: string;
  variant: VariantType;
};

export const WithDetails = React.forwardRef((props: Props, ref) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpand = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

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
            <IconButton onClick={handleExpand} size="small">
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <Button type="button" onClick={() => handleClose(props.id)}>
              閉じる
            </Button>
          </Box>
        </Box>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box padding={1} className={classes.panel}>
          <Typography variant="body2">{nl2br(props.details)}</Typography>
        </Box>
      </Collapse>
    </Card>
  );
});
