import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentaion from './result.presentation';

import { stateSelector } from '~client/store/selectors';
import * as EntitiesUsers from '~client/store/entities/users';
import { mockData } from './mock-data';

// ===============================
// types
// ===============================

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  const dispatch = ReactRedux.useDispatch();
  const [isAddMockData, setIsAddMockData] = React.useState(false);
  const state = ReactRedux.useSelector(stateSelector);

  const handleAddMockData = React.useCallback(() => {
    setIsAddMockData(true);
    dispatch(EntitiesUsers.actions.addUsers(mockData));
  }, [dispatch]);

  return (
    <Presentaion.Component
      state={state}
      handleAddMockData={handleAddMockData}
      isAddMockData={isAddMockData}
    />
  );
};

// ===============================
// styles
// ===============================
