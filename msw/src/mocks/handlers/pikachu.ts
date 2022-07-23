import { rest } from "msw";
import { Poke } from "../../api/types";

const mask = `https://pokeapi.co/api/v2/pokemon/pikachu`

export const data: Poke = {
  name: "msw data",
  sprites: {
    front_default: "https://robohash.org/etquamharum.png?size=50x50&set=set1",
  },
};

export const handler = rest.get(
  mask,
  (_, res, ctx) => {
    return res(ctx.json<Poke>(data));
  }
);

export const handlerSlow = rest.get(
  mask,
  (_, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.json<Poke>(data)
    );
  }
);
