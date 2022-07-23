import * as React from "react";

import { usePage } from "./hooks";

const MainPage: React.FC = () => {
  const { poke } = usePage();
  return (
    <>
      <h1>msw fetch test</h1>
      <p>{poke.name}</p>
      <img src={poke.sprites.front_default} alt="" />
    </>
  );
};

export default MainPage;
