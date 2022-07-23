import * as React from "react";

import { Header } from "../../design/layouts/header";

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <Header />
    <p>home</p>
  </>
);

export const Component = React.memo(Presentational);
