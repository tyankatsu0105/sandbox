import * as React from "react";

import { Header } from "../../design/layouts/header";
import { PokemonList } from "../../design/recipes/pokemon-list";

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <Header />

    <PokemonList />
  </>
);

export const Component = React.memo(Presentational);
