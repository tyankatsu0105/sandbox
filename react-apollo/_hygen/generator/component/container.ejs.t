---
to: _hygen/_generated/<%= name %>.container.tsx
---
import React, { FunctionComponent } from 'react';

import { <%= h.toUpperCamelCase(name) %>Presentational } from './<%= name %>.presentational';

type Props = {};

export const <%= h.toUpperCamelCase(name) %>: FunctionComponent<Props> = (props) => {
  return <<%= h.toUpperCamelCase(name) %>Presentational />;
};
