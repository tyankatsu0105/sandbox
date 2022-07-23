import { createReducer } from '@reduxjs/toolkit';
import { toggleLoading } from './actions';
import { State } from './types';

const initialState: State = {
  isLoaded: boolean,
};

export const reducer = createReducer(initialState, (builder) =>
  builder.addCase(fetch.fulfilled, (state, action) => ({
    ...state,
    data: action.payload,
  }))
);
