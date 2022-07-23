import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';

import { Box } from '@material-ui/core';

import { PageLoader } from '@sandbox-react-apollo/components';

import { HomePage } from '../../pages/home';
import { ErrorHandlingPage } from '../../pages/error-handling';
import { DxPage } from '../../pages/dx';
import { LocalStatePage } from '../../pages/local-state';
import { Sidebar, Header, Layout } from '~client/shared/components';

const Authenticated = () => (
  <>
    <Box display="flex">
      <Sidebar />
      <Box flexGrow="1" paddingLeft={3} paddingRight={3}>
        <Header />
        <Box component="main">
          <Suspense fallback={<PageLoader />}>
            <Layout>
              <Switch>
                <Route exact path="/dx" component={DxPage} />
                <Route exact path="/local-state" component={LocalStatePage} />
                <Route
                  exact
                  path="/error-handling"
                  component={ErrorHandlingPage}
                />
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Layout>
          </Suspense>
        </Box>
      </Box>
    </Box>
  </>
);

export default Authenticated;
