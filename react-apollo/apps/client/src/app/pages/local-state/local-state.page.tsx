import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { LocalState } from './components';

import { useCreateLocalStateInfoMutation } from '~client/graphql/__generated__/schema';

const LocalStatePage = () => {
  const [createLocalStateInfo] = useCreateLocalStateInfoMutation({
    variables: { input: { heading: 'Local State' } },
  });

  useEffect(() => {
    createLocalStateInfo();
  }, [createLocalStateInfo]);

  return (
    <>
      <Helmet>
        <title>Local State</title>
      </Helmet>
      <LocalState />
    </>
  );
};

export default LocalStatePage;
