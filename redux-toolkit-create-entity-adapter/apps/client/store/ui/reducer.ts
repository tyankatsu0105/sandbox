import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Form from './form';

export type State = {
  [Form.featureKey]: Form.State;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Form.featureKey]: Form.reducer,
});
