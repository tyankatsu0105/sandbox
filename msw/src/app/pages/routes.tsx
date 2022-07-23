import * as React from "react";
import { Suspense } from "react";

import { Route, Switch } from "react-router";

import { MainPage } from "./main";

export const Routes = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  </Suspense>
);
