import * as React from 'react';

import * as DomainsOrganization from '~client/app/store/domains/organization';

import * as TeamRoot from '../components/team-root';

type Props = {
  tree: DomainsOrganization.State['tree'];
};

export const Component = (props: Props) => {
  return <TeamRoot.Component tree={props.tree} />;
};
