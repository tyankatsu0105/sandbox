import * as React from "react";
import { Routes, Route } from "react-router-dom";

import * as UserList from "../pages/user-list";

export const Component = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Routes>
      <Route element={<UserList.Component />} path="/" />
    </Routes>
  </React.Suspense>
);
