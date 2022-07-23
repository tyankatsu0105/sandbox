import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuItem } from '@material-ui/core';

type Props = {
  to: string;
};

export const SidebarMenuItemPresentational: FunctionComponent<Props> = (
  props
) => (
  <MenuItem component={NavLink} to={props.to}>
    {props.children}
  </MenuItem>
);
