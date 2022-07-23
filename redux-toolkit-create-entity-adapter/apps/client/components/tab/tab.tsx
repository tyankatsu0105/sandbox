import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

// ===============================
// types
// ===============================

type Props = {
  isActiveTab: number;
  handleChangeActiveTab: (_, activeTab: number) => void;
  tabItems: { label: string }[];
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <MaterialUI.Box>
      <MaterialUI.AppBar position="static">
        <MaterialUI.Tabs
          value={props.isActiveTab}
          onChange={props.handleChangeActiveTab}
        >
          {props.tabItems.map((tabItem, index) => (
            <MaterialUI.Tab key={index} label={tabItem.label} />
          ))}
        </MaterialUI.Tabs>
      </MaterialUI.AppBar>
    </MaterialUI.Box>
  );
};

// ===============================
// styles
// ===============================
