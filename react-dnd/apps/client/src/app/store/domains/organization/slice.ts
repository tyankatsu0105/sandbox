import * as ReduxToolkit from '@reduxjs/toolkit';

import Status from '~client/app/store/status';
import * as OrganizationEntity from '~client/app/application/domains/organization/entity';

import * as Constants from './constants';
import * as Types from './types';

// ==================================================
// Helpers
// ==================================================

export function assertStatus(
  state: Types.State
): asserts state is Types.ValidState {
  if (state.status === Status.Pristine) {
    throw new Error(
      'Invalid status. Cannot operate on reducer when status is Pristine.'
    );
  }
}

// ==================================================
// Setups
// ==================================================

export const initialState: Types.InitialState = {
  status: Status.Pristine,
  tree: [],
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {
    createOrganizationTree(
      state,
      action: ReduxToolkit.PayloadAction<
        Types.Payload['action']['createOrganizationTree']
      >
    ) {
      const { tree } = OrganizationEntity.getOrganizationTree(
        action.payload.teams
      );

      state.tree = [tree];
    },
  },
});

export const { actions, reducer } = slice;
