import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as AddOne from './add-one';
import * as AddMany from './add-many';
import * as SetAll from './set-all';

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
          <MaterialUI.Typography variant="h3">addOne</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.addOne
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts a single entity, and adds it.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <AddOne.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">addMany</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.addMany
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts an array of entities or an object in the shape of Record
          &lt;EntityId, T&gt;, and adds them.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <AddMany.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">setAll</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.setAll
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts an array of entities or an object in the shape of Record
          &lt;EntityId, T&gt;, and replaces the existing entity contents with
          the values in the array.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SetAll.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================
