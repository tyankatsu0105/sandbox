import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { List, ListItem, Box, Typography } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) =>
  createStyles({
    'sidebar-header': {
      color: 'inherit',
    },
  })
);

type Props = {};

export const SidebarHeaderPresentational: FunctionComponent<Props> = (
  props
) => {
  const classes = useStyles({});
  return (
    <List disablePadding>
      <ListItem
        component={NavLink}
        to="/"
        className={classes['sidebar-header']}
      >
        <Box marginRight={1}>
          <BuildIcon color="primary" />
        </Box>
        <Typography variant="h6">Sandbox React Apollo</Typography>
      </ListItem>
    </List>
  );
};
