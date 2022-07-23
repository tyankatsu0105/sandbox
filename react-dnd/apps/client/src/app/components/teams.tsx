import * as React from 'react';

import * as DomainsOrganization from '~client/app/store/domains/organization';

import * as Team from './team';

type Props = {
  team: DomainsOrganization.State['tree'][number];
};

export const Component = (props: Props) => {
  return <Team.Component key={props.team.id} team={props.team} />;
};
