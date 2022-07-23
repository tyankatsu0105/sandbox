import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component: React.FC = (props) => (
  <MaterialUI.Box padding={2} minHeight="100vh">
    {props.children}
  </MaterialUI.Box>
);

// ===============================
// styles
// ===============================
