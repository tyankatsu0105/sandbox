import { createSelector } from '@reduxjs/toolkit';

import { featureStateSelectorCreator } from '../../helpers';
import { State } from './types';
import { featureKey } from './constants';

const { featureStateSelector } = featureStateSelectorCreator<State>(featureKey);

export const dataSelector = createSelector(
  featureStateSelector,
  (state) => state.data
);
