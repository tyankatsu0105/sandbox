import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentation from './select-ids.presentation';

import * as EntitiesUsers from '~client/store/entities/users';

// ===============================
// types
// ===============================

type Props = {};

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const ids = ReactRedux.useSelector(EntitiesUsers.idsSelector);

  return <Presentation.Component ids={ids} />;
};

// ===============================
// styles
// ===============================
