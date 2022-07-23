import * as React from "react";
import { Routes, Route } from "react-router-dom";

import * as Home from "./pages/home";

export const App = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Routes>
      <Route path="/" element={<Home.Component />}></Route>
    </Routes>
  </React.Suspense>
);
