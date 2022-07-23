import * as ReduxToolkit from '@reduxjs/toolkit';

import Status from '~client/app/store/status';
import * as MembersEntity from '~client/app/application/entities/members/entity';

// ==================================================
// State
// ==================================================

export interface InitialState
  extends ReduxToolkit.EntityState<MembersEntity.Member> {
  status: Status.Pristine;
}

export interface ValidState
  extends ReduxToolkit.EntityState<MembersEntity.Member> {
  status: Exclude<Status, Status.Pristine>;
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {
    membersReceived: {
      members: MembersEntity.Member[];
    };
  };
  operation: {};
};
