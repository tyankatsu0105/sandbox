import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentation from './select-tortal.presentation';

import * as EntitiesUsers from '~client/store/entities/users';

// ===============================
// types
// ===============================

type Props = {};

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const tortal = ReactRedux.useSelector(EntitiesUsers.totalSelector);

  return <Presentation.Component tortal={tortal} />;
};

// ===============================
// styles
// ===============================
