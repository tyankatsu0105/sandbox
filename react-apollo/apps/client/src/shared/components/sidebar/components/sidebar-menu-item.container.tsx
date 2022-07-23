import React, { FunctionComponent } from 'react';

import { SidebarMenuItemPresentational } from './sidebar-menu-item.presentational';

type Props = {
  to: string;
};

export const SidebarMenuItem: FunctionComponent<Props> = (props) => {
  return <SidebarMenuItemPresentational {...props} />;
};
