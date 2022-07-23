import { combineReducers } from 'redux';

import * as PageTransition from './ui/page-transition';

const reducersMapObject = {
  // [PageTransition.featureKey]: PageTransition.reducer,
};

export type FeatureKey = keyof typeof reducersMapObject;

export const reducer = combineReducers({
  ...reducersMapObject,
});
