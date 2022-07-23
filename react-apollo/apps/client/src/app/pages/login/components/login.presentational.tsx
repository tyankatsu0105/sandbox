import React, { FunctionComponent } from 'react';

import { Avatar, Button, Box, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@sandbox-react-apollo/components';

import { environment } from '../../../../environments/environment';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

type Props = {};

export const LoginPresentational: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Paper>
        <Box
          minWidth="220px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            GitHub OAuth
          </Typography>

          <Box marginTop={4}>
            <Button
              color="primary"
              href={`https://github.com/login/oauth/authorize?client_id=${environment.githubOAuth.clientId}&scope=user%20public_repo`}
              variant="outlined"
            >
              認証ページへ
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
