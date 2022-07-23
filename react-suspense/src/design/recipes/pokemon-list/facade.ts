import axios from "axios";
import { useEffect, useState } from "react";

import { IType } from "pokeapi-typescript";

type Data = IType;

export const useFetch = (pokemonName: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const time = Math.random() * 4000;
      const res = await axios.get<Data>(url);
      setTimeout(() => {
        setData(res.data);
      }, time);
    };

    fetch();
  }, []);

  return { data };
};
