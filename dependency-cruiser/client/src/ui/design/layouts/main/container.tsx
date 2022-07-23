import * as React from "react";

import { Component } from "./presentational";

type Props = React.ComponentProps<typeof Component>;

export const Main = (props: Props) => <Component {...props} />;
