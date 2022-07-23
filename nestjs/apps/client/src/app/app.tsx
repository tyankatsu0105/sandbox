import * as React from 'react';

import { Routes } from './route';

import * as PageLoader from './shared/components/animation/page-loader';

export const App = () => (
  <React.Suspense fallback={<PageLoader.Component />}>
    <Routes />
  </React.Suspense>
);
