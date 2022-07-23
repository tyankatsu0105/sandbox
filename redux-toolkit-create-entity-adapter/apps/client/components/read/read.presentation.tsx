import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as SelectIds from './select-ids';
import * as SelectEntities from './select-entities';
import * as SelectAll from './select-all';
import * as SelectTortal from './select-tortal';
import * as SelectByID from './select-by-id';

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
          <MaterialUI.Typography variant="h3">selectIds</MaterialUI.Typography>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          returns the state.ids array.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectIds.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">
            selectEntities
          </MaterialUI.Typography>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          returns the state.entities lookup table.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectEntities.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">selectAll</MaterialUI.Typography>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          maps over the state.ids array, and returns an array of entities in the
          same order.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectAll.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">
            SelectTortal
          </MaterialUI.Typography>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          returns the total number of entities being stored in this state.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectTortal.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">SelectById</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.SelectById
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          given the state and an entity ID, returns the entity with that ID or
          undefined.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <SelectByID.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================
