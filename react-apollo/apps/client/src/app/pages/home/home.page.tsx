import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Home } from './components';

import { useCreateHomeInfoMutation } from '~client/graphql/__generated__/schema';

const HomePage = () => {
  const [createHomeInfo] = useCreateHomeInfoMutation({
    variables: { input: { heading: 'このサイトについて' } },
  });

  useEffect(() => {
    createHomeInfo();
  }, [createHomeInfo]);

  return (
    <>
      <Helmet>
        <title>TOP</title>
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
