import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactDnD from 'react-dnd';

import styled from 'styled-components';

import * as Member from './member';

import * as MembersEntities from '~client/app/application/entities/members/entity';
import * as TeamsEntities from '~client/app/application/entities/teams/entity';
import * as OrganizationEntity from '~client/app/application/domains/organization/entity';

import * as EntitiesMembers from '~client/app/store/entities/members';

type Props = {
  members: MembersEntities.Member[];
  teamId: TeamsEntities.Team['id'];
};

type DragItem = {
  type: typeof OrganizationEntity.itemTypes.member;
  id: Props['members'][number]['id'];
};

export const Component = (props: Props) => {
  const dispatch = ReactRedux.useDispatch();

  const moveMember = React.useCallback(
    (
      dragItemId: Props['members'][number]['id'],
      dropTargetTeamId: Props['teamId']
    ) => {
      dispatch(
        EntitiesMembers.actions.updateMember({
          id: dragItemId,
          changes: { teamId: dropTargetTeamId },
        })
      );
    },
    [dispatch]
  );

  const [{}, refDrop] = ReactDnD.useDrop({
    accept: OrganizationEntity.itemTypes.member,
    drop: (item: DragItem) => {
      const dragItem = item;
      const dropItem = props;

      moveMember(dragItem.id, dropItem.teamId);
    },
  });
  return (
    <StyledMembersContainer ref={refDrop}>
      {props.members &&
        props.members.map((member, index) => (
          <Member.Component key={member.id} {...member} />
        ))}
    </StyledMembersContainer>
  );
};

const StyledMembersContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: red;
  max-height: 150px;
  min-height: 150px;
  overflow-y: scroll;
  padding: 12px;
`;
