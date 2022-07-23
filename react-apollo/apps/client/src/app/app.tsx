import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';

import { PageLoader } from '@sandbox-react-apollo/components';

import { LoginPage } from './pages/login';
import { Authentication } from './authentication';
import { Authenticated } from './route';

import { SITE_NAME } from '../shared/const';

export const App = () => (
  <>
    <Helmet titleTemplate={`%s | ${SITE_NAME}`} />

    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Authentication path="/" component={Authenticated} />
      </Switch>
    </Suspense>
  </>
);
