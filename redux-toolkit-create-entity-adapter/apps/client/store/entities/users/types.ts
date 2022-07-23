import * as ReduxToolkit from '@reduxjs/toolkit';

import { Status } from '~client/store/status';
import * as UsersEntity from '~client/application/domains/users/entity';

// ==================================================
// State
// ==================================================

export interface InitialState
  extends ReduxToolkit.EntityState<UsersEntity.User> {
  status: Status.PRISTINE;
  selectedId: UsersEntity.User['id'];
}

export interface ValidState extends ReduxToolkit.EntityState<UsersEntity.User> {
  status: Exclude<Status, Status.PRISTINE>;
  selectedId: UsersEntity.User['id'];
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {
    addUser: UsersEntity.User;
    addUsers: UsersEntity.User[];
    setUsers: UsersEntity.User[];

    selectId: UsersEntity.User['id'];

    updateUser: {
      id: UsersEntity.User['id'];
      changes: UsersEntity.User;
    };
    updateUsers: {
      id: UsersEntity.User['id'];
      changes: UsersEntity.User;
    }[];

    upsertUser: UsersEntity.User;
    upsertUsers: UsersEntity.User[];

    removeUser: UsersEntity.User['id'];
    removeUsers: UsersEntity.User['id'][];
  };
  operation: {};
};
