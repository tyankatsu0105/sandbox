import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entities from './entities';
import * as Domains from './domains';

export const createReducer = () => {
  const reducer = ReduxToolkit.combineReducers({
    [Entities.featureKey]: Entities.reducer,
    [Domains.featureKey]: Domains.reducer,
  });

  return { reducer };
};
