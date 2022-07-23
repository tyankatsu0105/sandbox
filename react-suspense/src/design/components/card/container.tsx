import * as React from "react";

import { Component } from "./presentational";

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

export const Card: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
