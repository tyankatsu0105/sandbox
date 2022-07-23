import * as React from "react";

import { Header } from "../../design/layouts/header";
import { PokemonListLazy } from "../../design/recipes/pokemon-list";

const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
].map((v) => v.toLowerCase());

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <Header />

    {pokemons.map((pokemonName) => (
      <React.Suspense fallback={<div>Pokemon Loading...</div>}>
        <PokemonListLazy pokemonName={pokemonName} key={pokemonName} />
      </React.Suspense>
    ))}
  </>
);

export const Component = React.memo(Presentational);
