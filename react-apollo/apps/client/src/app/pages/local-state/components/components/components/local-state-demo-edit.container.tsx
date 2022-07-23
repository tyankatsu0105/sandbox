import React, { FunctionComponent } from 'react';

import { LocalStateDemoEditPresentational } from './local-state-demo-edit.presentational';

import {
  useUpdateLocalStateDemoEditMutation,
  LocalStateDemoQuery,
} from '~client/graphql/__generated__/schema';

type Props = {
  data: LocalStateDemoQuery;
};

export const LocalStateDemoEdit: FunctionComponent<Props> = (props) => {
  const [updateYou, { loading }] = useUpdateLocalStateDemoEditMutation();

  const locaStateDemoEditPresentationalProps = {
    ...props,
    updateYou,
    loading,
  };
  return (
    <LocalStateDemoEditPresentational
      {...locaStateDemoEditPresentationalProps}
    />
  );
};
