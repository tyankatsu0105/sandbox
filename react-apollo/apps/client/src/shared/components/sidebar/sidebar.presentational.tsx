import React, { FunctionComponent } from 'react';

import { MenuList, Drawer, Divider, Box } from '@material-ui/core';

import { SidebarHeader, SidebarMenuItem } from './components';

type Props = {};

export const SidebarPresentational: FunctionComponent<Props> = (props) => (
  <Box width="280px">
    <Drawer open variant="permanent">
      <Box width="280px">
        <SidebarHeader />
        <Divider />
        <MenuList>
          <SidebarMenuItem to="/error-handling">Error handling</SidebarMenuItem>
          <SidebarMenuItem to="/dx">Developer Experience</SidebarMenuItem>
          <SidebarMenuItem to="/local-state">Local State</SidebarMenuItem>
        </MenuList>
      </Box>
    </Drawer>
  </Box>
);
