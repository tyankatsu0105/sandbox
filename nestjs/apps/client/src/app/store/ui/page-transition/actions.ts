import { createAction } from '@reduxjs/toolkit';
import { ActionTypes, Payload } from './types';

export const toggleLoading = createAction<Payload['toggleLoading']>(
  ActionTypes.TOGGLE_LOADING
);
