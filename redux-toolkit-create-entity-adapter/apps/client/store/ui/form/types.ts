import { Status } from '~client/store/status';
import * as FormEntity from '~client/application/domains/form/entity';

// ==================================================
// State
// ==================================================

export interface InitialState {
  status: Status.PRISTINE;
  activeReactHookFormDevTool: FormEntity.activeReactHookFormDevTool | undefined;
}

export interface ValidState {
  status: Exclude<Status, Status.PRISTINE>;
  activeReactHookFormDevTool: FormEntity.activeReactHookFormDevTool;
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {
    updateActiveReactHookFormDevTool: FormEntity.activeReactHookFormDevTool;
  };
  operation: {};
};
