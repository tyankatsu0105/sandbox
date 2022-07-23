import {
  MutationResolvers,
  Page,
} from '~client/graphql/__generated__/localSchema';

import { gql } from '@apollo/client';

export const updatePage: MutationResolvers['updatePage'] = (
  _,
  { input },
  { cache }
) => {
  const page: Page = {
    ...input,
  };

  const data = {
    page,
  };

  cache.writeQuery({
    query: gql`
      {
        page
      }
    `,
    data,
  });

  return page;
};
