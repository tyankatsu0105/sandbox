import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentation from './select-entities.presentation';

import * as EntitiesUsers from '~client/store/entities/users';

// ===============================
// types
// ===============================

type Props = {};

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const entities = ReactRedux.useSelector(EntitiesUsers.entitiesSelector);

  return <Presentation.Component entities={entities} />;
};

// ===============================
// styles
// ===============================
