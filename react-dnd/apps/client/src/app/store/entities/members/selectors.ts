import * as Store from '~client/app/store';

import * as Slice from './slice';

const adapterSelector = Slice.adapter.getSelectors(
  (state: Store.RootState) => state.entities.members
);

export const membersSelector = adapterSelector.selectAll;
