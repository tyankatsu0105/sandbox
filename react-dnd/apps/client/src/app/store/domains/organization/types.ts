import Status from '~client/app/store/status';
import * as OrganizationEntity from '~client/app/application/domains/organization/entity';

import * as EntitiesStoreTeams from '~client/app/store/entities/teams';

// ==================================================
// State
// ==================================================

export interface InitialState extends OrganizationEntity.Organization {
  status: Status.Pristine;
}

export interface ValidState extends OrganizationEntity.Organization {
  status: Exclude<Status, Status.Pristine>;
}

export type State = InitialState | ValidState;

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {
    createOrganizationTree: {
      teams: ReturnType<typeof EntitiesStoreTeams.teamsSelector>;
    };
  };
  operation: {};
};
