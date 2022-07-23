import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Store from '~client/store';

const featureStateSelector = (state: Store.RootState) => state.ui.form;

export const activeReactHookFormDevToolSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (state) => state.activeReactHookFormDevTool
);
