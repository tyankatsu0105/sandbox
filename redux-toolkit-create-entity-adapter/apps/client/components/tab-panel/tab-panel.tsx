import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

// ===============================
// types
// ===============================

type Props = {
  hidden: Pick<MaterialUI.BoxProps, 'hidden'>['hidden'];
  component?: Pick<MaterialUI.BoxProps, 'component'>['component'];
};

// ===============================
// component
// ===============================
export const Component: React.FC<Props> = (props) => {
  return (
    <MaterialUI.Box hidden={props.hidden} component={props.component || 'div'}>
      {props.children}
    </MaterialUI.Box>
  );
};

// ===============================
// styles
// ===============================
