import * as React from "react";

import { IType } from "pokeapi-typescript";

import { Card } from "../../components/card";
// ------------------------------------
// Props
// ------------------------------------

type Props = {
  data: IType;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  return (
    <Card
      renderBody={() => (
        <div>
          <p>{props.data.id}</p>
          <p>{props.data.name}</p>
        </div>
      )}
    />
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
