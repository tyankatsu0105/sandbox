import * as ReduxToolkit from '@reduxjs/toolkit';

import Status from '~client/app/store/status';
import * as TeamsEntity from '~client/app/application/entities/teams/entity';

// ==================================================
// State
// ==================================================

export interface InitialState
  extends ReduxToolkit.EntityState<TeamsEntity.Team> {
  status: Status.Pristine;
}

export interface ValidState extends ReduxToolkit.EntityState<TeamsEntity.Team> {
  status: Exclude<Status, Status.Pristine>;
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {};
};
