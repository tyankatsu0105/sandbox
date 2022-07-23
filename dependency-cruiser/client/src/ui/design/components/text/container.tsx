import * as React from "react";
import * as Presentational from "./presentational";

type FeatureProps = {};

export const Text = <
  Element extends React.ElementType = typeof Presentational.DefaultElement
>(
  props: Presentational.Props<
    Element,
    Presentational.FeatureProps & FeatureProps
  >
): JSX.Element => {
  return <Presentational.Component {...props} />;
};
