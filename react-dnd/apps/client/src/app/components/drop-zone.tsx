import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactDnD from 'react-dnd';

import styled from 'styled-components';

import * as OrganizationEntity from '~client/app/application/domains/organization/entity';
import * as MembersEntity from '~client/app/application/entities/members/entity';
import * as DomainsOrganization from '~client/app/store/domains/organization';

import * as EntitiesMembers from '~client/app/store/entities/members';

import * as DropZoneMember from './drop-zone-member';

type Props = {};

type DragItem = {
  type: typeof OrganizationEntity.itemTypes.member;
  id: MembersEntity.Member['id'];
};

export const Component = (props: Props) => {
  const dispatch = ReactRedux.useDispatch();
  const members = ReactRedux.useSelector(
    DomainsOrganization.teamsMemberSelector(undefined),
    ReactRedux.shallowEqual
  );

  const moveMember = React.useCallback(
    (dragItemId: typeof members[number]['id']) => {
      dispatch(
        EntitiesMembers.actions.updateMember({
          id: dragItemId,
          changes: { teamId: undefined },
        })
      );
    },
    [dispatch]
  );

  const [{}, refDrop] = ReactDnD.useDrop({
    accept: OrganizationEntity.itemTypes.member,
    drop: (item: DragItem) => {
      const dragItem = item;

      moveMember(dragItem.id);
    },
  });

  return (
    <StyledDropZone ref={refDrop}>
      {members &&
        members.map((member) => (
          <DropZoneMember.Component key={member.id} {...member} />
        ))}
    </StyledDropZone>
  );
};

const StyledDropZone = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 400px;
  height: 200px;
  border: 1px solid #000;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.5);
`;
