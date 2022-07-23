import {
  MutationResolvers,
  You,
} from '~client/graphql/__generated__/localSchema';

import { gql } from '@apollo/client';

export const updateYou: MutationResolvers['updateYou'] = (
  _,
  { input },
  { cache }
) => {
  const you: You = {
    ...input,
  };

  const data = {
    you,
  };

  cache.writeQuery({
    query: gql`
      {
        you
      }
    `,
    data,
  });

  return you;
};
