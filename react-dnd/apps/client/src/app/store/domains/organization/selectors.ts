import * as ReduxToolkit from '@reduxjs/toolkit';
import * as Store from '~client/app/store';

import * as EntitiesMembers from '~client/app/store/entities/members';
import * as MembersEntity from '~client/app/application/entities/members/entity';

export const featureStateSelector = (state: Store.RootState) =>
  state.domains.organization;

export const treeSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (organization) => organization.tree
);

export const statusSelector = ReduxToolkit.createSelector(
  featureStateSelector,
  (organization) => organization.status
);

// ==================================================
// Members
// ==================================================

type MembersByTeamId = {
  [teamId: string]: ReturnType<typeof EntitiesMembers.membersSelector>;
};

const membersByTeamIdSelector = ReduxToolkit.createSelector(
  EntitiesMembers.membersSelector,
  (members) =>
    members.reduce<MembersByTeamId>((acc, current) => {
      if (acc[current.teamId] === undefined) acc[current.teamId] = [];

      acc[current.teamId] = [...acc[current.teamId], current];

      return acc;
    }, {})
);

export const teamsMemberSelector = (teamId: MembersEntity.Member['teamId']) =>
  ReduxToolkit.createSelector(
    membersByTeamIdSelector,
    (members) => members[teamId]
  );
