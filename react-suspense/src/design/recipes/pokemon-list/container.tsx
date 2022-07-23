import * as React from "react";

import { Component } from "./presentational";
import { useFetch } from "./facade";
// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.ComponentPropsWithRef<typeof Component>, "data"> & {
  pokemonName: string;
};

// ------------------------------------
// Component
// ------------------------------------

const PokemonList: React.FC<Props> = (props) => {
  const { data } = useFetch(props.pokemonName);

  if (data == null) return <div>Loading data...</div>;

  return <Component data={data} />;
};

export default PokemonList;
