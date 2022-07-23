import * as React from "react";

import { Component } from "./presentational";

type Props = React.ComponentPropsWithRef<typeof Component>;

export const Avatar = (props: Props) => <Component {...props} />;
