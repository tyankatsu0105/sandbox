import axios from "axios";
import { useEffect, useState } from "react";

import { IType } from "pokeapi-typescript";

import { useQuery } from "@apollo/client";

import { SpeciesnameDocument, LanguagesDocument } from "../../../api/graphql";

type Data = IType;

export const useFetch = () => {
  const { data: languages } = useQuery(LanguagesDocument);
  const { data: speciesname } = useQuery(SpeciesnameDocument);
  const laugnageJa = languages?.pokemon_v2_language.find(
    (language) => language.name === "ja-Hrkt"
  );
  const species = speciesname?.pokemon_v2_pokemonspeciesname.filter(
    (specy) => specy.language_id === laugnageJa?.id
  );

  return {
    data: species,
  };
};
