import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entities from './entities';
import * as UI from './ui';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    [Entities.featureKey]: Entities.reducer,
    [UI.featureKey]: UI.reducer,
  });

  return { reducer };
};
