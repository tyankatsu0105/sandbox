import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Dx } from './components';

import { useCreateDxInfoMutation } from '~client/graphql/__generated__/schema';

const DxPage = () => {
  const [createDxInfo] = useCreateDxInfoMutation({
    variables: { input: { heading: 'Developer Experience' } },
  });

  useEffect(() => {
    createDxInfo();
  }, [createDxInfo]);

  return (
    <>
      <Helmet>
        <title>Developer Experience</title>
      </Helmet>
      <Dx />
    </>
  );
};

export default DxPage;
