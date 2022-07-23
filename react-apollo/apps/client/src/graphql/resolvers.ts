import { Resolvers } from '~client/graphql/__generated__/localSchema';
import { updatePage } from './states/page';
import { updateYou } from './states/you';

export const resolvers: Resolvers = {
  Mutation: {
    updatePage,
    updateYou,
  },
};
