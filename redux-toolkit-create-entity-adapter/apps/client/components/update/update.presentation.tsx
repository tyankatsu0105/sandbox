import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as UpdateOne from './update-one';
import * as UpdateMany from './update-many';
import * as UpsertOne from './upsert-one';
import * as UpsertMany from './upsert-many';

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
          <MaterialUI.Typography variant="h3">updateOne</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.updateOne
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts an "update object" containing an entity ID and an object
          containing one or more new field values to update inside a changes
          field, and performs a shallow update on the corresponding entity.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <UpdateOne.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">updateMany</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.updateMany
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts an array of update objects, and performs shallow updates on
          all corresponding entities.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <UpdateMany.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">upsertOne</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.upsertOne
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts a single entity. If an entity with that ID exists, it will
          perform a shallow update and the specified fields will be merged into
          the existing entity, with any matching fields overwriting the existing
          values. If the entity does not exist, it will be added.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <UpsertOne.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={6}>
        <MaterialUI.Box display="flex" alignItems="flex-end">
          <MaterialUI.Typography variant="h3">upsertMany</MaterialUI.Typography>
          <MaterialUI.Box marginLeft={1}>
            <MaterialUI.Button
              type="button"
              variant="outlined"
              onClick={() =>
                props.updateActiveReactHookFormDevTool(
                  FormEntity.activeReactHookFormDevTool.upsertMany
                )
              }
            >
              Form dev tool on
            </MaterialUI.Button>
          </MaterialUI.Box>
        </MaterialUI.Box>
        <MaterialUI.Typography variant="subtitle1">
          accepts an array of entities or an object in the shape of
          Record&lt;EntityId, T&gt; that will be shallowly upserted.
        </MaterialUI.Typography>
        <MaterialUI.Box marginTop={2}>
          <UpsertMany.Component />
        </MaterialUI.Box>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================
