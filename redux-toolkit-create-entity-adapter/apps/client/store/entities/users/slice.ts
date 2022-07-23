import * as ReduxToolkit from '@reduxjs/toolkit';

import { Status } from '~client/store/status';
import * as UsersEntity from '~client/application/domains/users/entity';

import * as Constants from './constants';
import * as Types from './types';

// ==================================================
// Helpers
// ==================================================

export function assertStatus(
  state: Types.State
): asserts state is Types.ValidState {
  if (state.status === Status.PRISTINE) {
    throw new Error(
      'Invalid status. Cannot operate on reducer when status is Pristine.'
    );
  }
}

// ==================================================
// Setups
// ==================================================

export const adapter = ReduxToolkit.createEntityAdapter<UsersEntity.User>({
  selectId: (user) => user.id,
});

export const initialState: Types.InitialState = adapter.getInitialState({
  status: Status.PRISTINE,
  selectedId: undefined,
});

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {
    addUser: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['addUser']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.addOne(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    addUsers: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['addUsers']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.addMany(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    setUsers: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['setUsers']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.setAll(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    selectId: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['selectId']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        state.selectedId = action.payload;
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    updateUser: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['updateUser']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.updateOne(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    updateUsers: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['updateUsers']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.updateMany(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    upsertUser: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['upsertUser']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.upsertOne(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    upsertUsers: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['upsertUsers']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.upsertMany(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    removeUser: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['removeUser']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.removeOne(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
    removeUsers: (
      state,
      action: ReduxToolkit.PayloadAction<Types.Payload['action']['removeUsers']>
    ) => {
      state.status = Status.PRISTINE;

      state.status = Status.SUBMITTING;
      try {
        adapter.removeMany(state, action.payload);
        state.status = Status.SUCCESS;
      } catch (error) {
        state.status = Status.INVALID;
      }
    },
  },
});

export const { actions, reducer } = slice;
