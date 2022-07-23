import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { reducer } from './reducer';

const middleware = getDefaultMiddleware({
  thunk: true,
  immutableCheck: true,
  serializableCheck: true,
});

export const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

// ------------------------
// override hooks
// ------------------------
export const useSelector: TypedUseSelectorHook<ReturnType<
  typeof store.getState
>> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();
