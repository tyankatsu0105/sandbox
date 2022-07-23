import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as RemoveOne from './remove-one';
import * as RemoveMany from './remove-many';

import * as FormEntity from '~client/application/domains/form/entity';

// ===============================
// types
// ===============================
type Props = {
  updateActiveReactHookFormDevTool: (
    activeReactHookFormDevTool: FormEntity.activeReactHookFormDevTool
  ) => void;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <>
      <MaterialUI.Box>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">removeOne</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.removeOne
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts a single entity ID value, and removes the entity with that ID
          if it exists.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <RemoveOne.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">removeMany</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.removeMany
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts an array of entity ID values, and removes each entity with
          those IDs if they exist.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <RemoveMany.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================
