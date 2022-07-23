import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Organization from './organization';

export type State = {
  [Organization.featureKey]: Organization.State;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Organization.featureKey]: Organization.reducer,
});
