import { featureKey } from './constants';

export const ActionTypes = {
  TOGGLE_LOADING: `${featureKey}/toggleLoading`,
};

export type Payload = {
  toggleLoading: {
    amount: number;
  };
};

type ToggleLoading = {
  type: typeof ActionTypes['TOGGLE_LOADING'];
};

export type State = {
  isLoading: boolean;
};
