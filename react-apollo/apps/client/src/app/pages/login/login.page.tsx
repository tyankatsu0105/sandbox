import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from 'react-helmet';

import { getCookies } from '@sandbox-react-apollo/helpers';

import { Login } from './components';

import { Cookies } from '~client/shared/types';

const LoginPage = () => {
  const { replace } = useHistory();

  useEffect(() => {
    const { githubAccessToken } = getCookies<Cookies>();
    if (githubAccessToken) replace('/');
  }, [replace]);

  return (
    <>
      <Helmet>
        <title>login</title>
      </Helmet>

      <Login />
    </>
  );
};

export default LoginPage;
