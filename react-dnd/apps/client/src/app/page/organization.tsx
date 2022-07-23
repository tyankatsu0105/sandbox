import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Organization from '../templates/organization';

import * as EntitiesTeams from '~client/app/store/entities/teams';
import * as EntitiesMembers from '~client/app/store/entities/members';

import * as DomainsOrganization from '~client/app/store/domains/organization';

import * as MockData from './mock-data';

export const Component = () => {
  const dispatch = ReactRedux.useDispatch();

  dispatch(EntitiesTeams.actions.addTeams(MockData.teams));
  dispatch(EntitiesMembers.actions.addMembers(MockData.members));

  const teams = ReactRedux.useSelector(EntitiesTeams.teamsSelector);

  const tree = ReactRedux.useSelector(
    DomainsOrganization.treeSelector,
    ReactRedux.shallowEqual
  );

  React.useEffect(() => {
    dispatch(
      DomainsOrganization.actions.createOrganizationTree({
        teams,
      })
    );
  }, [dispatch, teams]);

  return tree.length !== 0 && <Organization.Component tree={tree} />;
};
