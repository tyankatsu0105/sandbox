import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = () => (
  <header>
    <MaterialUI.Typography variant="h1">
      Redux Toolkit createEntityAdapter CRUD関数使い方
    </MaterialUI.Typography>
    <MaterialUI.Typography variant="subtitle1" component="p">
      <MaterialUI.Link
        target="_blank"
        href="https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions"
      >
        RTKのCRUD Functionの節
      </MaterialUI.Link>
      の説明
    </MaterialUI.Typography>

    <MaterialUI.Typography variant="subtitle1" component="p">
      <MaterialUI.Link
        target="_blank"
        href="https://github.com/tyankatsu0105/sandbox-redux-toolkit-create-entity-adapter"
      >
        GitHub Repository
      </MaterialUI.Link>
    </MaterialUI.Typography>
  </header>
);

// ===============================
// styles
// ===============================
