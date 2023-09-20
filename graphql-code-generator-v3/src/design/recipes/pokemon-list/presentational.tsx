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
        </div>
      )}
    />
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
