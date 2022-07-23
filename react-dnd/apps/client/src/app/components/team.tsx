import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactDnD from 'react-dnd';

import styled from 'styled-components';

import * as DomainsOrganization from '~client/app/store/domains/organization';
import * as EntitiesTeams from '~client/app/store/entities/teams';

import * as OrganizationEntity from '~client/app/application/domains/organization/entity';

import * as Members from './members';

type Props = {
  team: DomainsOrganization.State['tree'][number];
};

type DragItem = {
  type: typeof OrganizationEntity.itemTypes.team;
  id: Props['team']['id'];
};

export const Component = (props: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = ReactRedux.useDispatch();

  const members = ReactRedux.useSelector(
    DomainsOrganization.teamsMemberSelector(props.team.id),
    ReactRedux.shallowEqual
  );

  const moveTeam = React.useCallback(
    (
      dragItemId: Props['team']['id'],
      dropTargetParentTeamId: Props['team']['parentTeamId']
    ) => {
      dispatch(
        EntitiesTeams.actions.updateTeam({
          id: dragItemId,
          changes: { parentTeamId: dropTargetParentTeamId },
        })
      );
    },
    [dispatch]
  );

  const [{}, refDrag] = ReactDnD.useDrag({
    item: {
      type: OrganizationEntity.itemTypes.team,
      id: props.team.id,
    },
  });

  const [{}, refDrop] = ReactDnD.useDrop({
    accept: OrganizationEntity.itemTypes.team,
    drop: (item: DragItem) => {
      const dragItem = item;
      const dropItem = props.team;
      if (dragItem.id === dropItem.id) return;

      moveTeam(dragItem.id, dropItem.id);
    },
  });

  refDrop(refDrag(ref));

  return (
    <StyledTeamContainer>
      <div>
        <StyledTeam ref={ref}>
          <StyledHeading>{props.team.name}</StyledHeading>
          <p>parent: {props.team.parentTeamId}</p>
          <Members.Component members={members} teamId={props.team.id} />
        </StyledTeam>
      </div>

      <StyledChildTeam>
        {props.team.children.map((team) => (
          <Component key={team.id} team={team} />
        ))}
      </StyledChildTeam>
    </StyledTeamContainer>
  );
};

const StyledTeamContainer = styled.div`
  display: flex;
`;

const StyledTeam = styled.div`
  cursor: move;
  width: 300px;

  &.isDragging {
    opacity: 0;
  }
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const StyledChildTeam = styled.div``;
