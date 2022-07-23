import * as ReduxToolkit from '@reduxjs/toolkit';

import { Status } from '~client/store/status';

import * as Constants from './constants';
import * as Types from './types';

// ==================================================
// Helpers
// ==================================================

// ==================================================
// Setups
// ==================================================

export const initialState: Types.InitialState = {
  status: Status.PRISTINE,
  activeReactHookFormDevTool: undefined,
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {
    updateActiveReactHookFormDevTool: (
      state,
      action: ReduxToolkit.PayloadAction<
        Types.Payload['action']['updateActiveReactHookFormDevTool']
      >
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        state.activeReactHookFormDevTool = action.payload;
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
  },
});

export const { actions, reducer } = slice;
