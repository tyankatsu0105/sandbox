import React, { FunctionComponent } from 'react';

import { useLocalStateDemoQuery } from '~client/graphql/__generated__/schema';

import { LocalStateDemoPresentational } from './local-state-demo.presentational';

type Props = {};

export const LocalStateDemo: FunctionComponent<Props> = (props) => {
  const { data } = useLocalStateDemoQuery();

  const locaStateDemoPresentationalProps = {
    data,
  };

  return <LocalStateDemoPresentational {...locaStateDemoPresentationalProps} />;
};
