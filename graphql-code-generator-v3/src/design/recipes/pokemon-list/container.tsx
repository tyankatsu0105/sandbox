import * as React from "react";

import { Component } from "./presentational";
import { useFetch } from "./facade";
// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.ComponentPropsWithRef<typeof Component>, "data"> & {};

// ------------------------------------
// Component
// ------------------------------------

const PokemonList: React.FC<Props> = (props) => {
  const { data } = useFetch();

  if (data == null) return <div>Loading data...</div>;

  return data.map((pokemon) => <Component key={pokemon.name} data={pokemon} />);
};

export default PokemonList;
