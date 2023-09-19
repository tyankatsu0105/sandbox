import * as React from "react";
import { Route, Routes } from "react-router-dom";

import * as Home from "./pages/home";
import * as Pokemons from "./pages/pokemons";

export const App = () => (
  <React.Suspense fallback={<div>Loading Page...</div>}>
    <Routes>
      <Route element={<Home.Component />} path="/" />
      <Route element={<Pokemons.Component />} path="/pokemons" />
    </Routes>
  </React.Suspense>
);
