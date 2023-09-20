import * as React from "react";

import { useFetch } from "./facade";
import { DocumentType, SpeciesnameDocument } from "../../../api/graphql";
import { Card } from "../../components/card";
// ------------------------------------
// Props
// ------------------------------------

type Props = {
  data: DocumentType<
    typeof SpeciesnameDocument
  >["pokemon_v2_pokemonspeciesname"][number];
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  return (
    <Card
      renderBody={() => (
        <div>
          <p>{props.data.name}</p>
          <p>{props.data.genus}</p>
          <p>{props.data.pokemon_v2_pokemonspecy?.is_legendary && "伝説"}</p>
        </div>
      )}
    />
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
