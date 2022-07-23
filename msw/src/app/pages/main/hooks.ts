import * as React from "react";
import axios from "axios";

import { Poke } from "../../../api/types";

export const usePage = () => {
  const [poke, setPoke] = React.useState<Poke>({
    name: "",
    sprites: { front_default: "" },
  });
  React.useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
      );

      setPoke(data);
    }
    fetchData();
  }, []);

  return { poke };
};
