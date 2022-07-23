import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as Slice from './slice';

import * as OrganizationEntity from '~client/app/application/domains/organization/entity';

export const adapterSelector = Slice.adapter.getSelectors(
  (state: Store.RootState) => state.entities.teams
);

export const teamsSelector = adapterSelector.selectAll;

export const teamsTreeSelector = ReduxToolkit.createSelector(
  teamsSelector,
  (teams) => {
    const { tree } = OrganizationEntity.getOrganizationTree(teams);
    return [tree];
  }
);
