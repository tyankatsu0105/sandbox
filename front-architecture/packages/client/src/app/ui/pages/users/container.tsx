import * as React from 'react';
import * as ReactRouter from 'react-router';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';
import * as SharedTypes from '~client/app/ui/shared/types';

import * as Presentational from './presentational';
import { usePage } from './usePage';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  routeMatch: ReactRouter.match<
    SharedTypes.Routes.GetParams<typeof RoutesEntity.URI.users>
  >;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => {
  const { fetchMoreUsers, users } = usePage();

  return (
    <Presentational.Component
      fetchMoreUsers={fetchMoreUsers}
      routeMatch={props.routeMatch}
      users={users}
    />
  );
};
