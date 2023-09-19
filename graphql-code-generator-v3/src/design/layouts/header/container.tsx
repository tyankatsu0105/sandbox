import * as React from "react";

import { Component } from "./presentational";

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const Header: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

export default Header;
