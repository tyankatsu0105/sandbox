import { gql } from '@apollo/client';

import { you } from './states/you';

export const query = gql`
  query {
    you
  }
`;
export const data = {
  you,
};
