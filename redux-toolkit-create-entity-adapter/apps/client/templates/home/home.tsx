import * as React from 'react';
import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

import * as Componnets from '~client/components';

// ===============================
// types
// ===============================
type Props = {};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  const [isActiveTab, setIsActiveTab] = React.useState(0);

  const handleChangeActiveTab = React.useCallback((_, activeTab: number) => {
    setIsActiveTab(activeTab);
  }, []);

  return (
    <>
      <Componnets.Tab.Component
        isActiveTab={isActiveTab}
        handleChangeActiveTab={handleChangeActiveTab}
        tabItems={[
          { label: 'Create' },
          { label: 'Read' },
          { label: 'Update' },
          { label: 'Delete' },
        ]}
      />
      <MaterialUI.Box marginTop={2}>
        <MaterialUI.Grid container spacing={1}>
          <MaterialUI.Grid item xs={6}>
            <MaterialUI.Box padding={2}>
              <Componnets.TabPanel.Component hidden={isActiveTab !== 0}>
                <MaterialUI.Typography variant="h2">
                  Create
                </MaterialUI.Typography>
                <MaterialUI.Box marginTop={2}>
                  <Componnets.Create.Component />
                </MaterialUI.Box>
              </Componnets.TabPanel.Component>

              <Componnets.TabPanel.Component hidden={isActiveTab !== 1}>
                <MaterialUI.Typography variant="h2">Read</MaterialUI.Typography>
                <MaterialUI.Box marginTop={2}>
                  <Componnets.Read.Component />
                </MaterialUI.Box>
              </Componnets.TabPanel.Component>

              <Componnets.TabPanel.Component hidden={isActiveTab !== 2}>
                <MaterialUI.Typography variant="h2">
                  Update
                </MaterialUI.Typography>
                <MaterialUI.Box marginTop={2}>
                  <Componnets.Update.Component />
                </MaterialUI.Box>
              </Componnets.TabPanel.Component>

              <Componnets.TabPanel.Component hidden={isActiveTab !== 3}>
                <MaterialUI.Typography variant="h2">
                  Delete
                </MaterialUI.Typography>
                <MaterialUI.Box marginTop={2}>
                  <Componnets.Delete.Component />
                </MaterialUI.Box>
              </Componnets.TabPanel.Component>
            </MaterialUI.Box>
          </MaterialUI.Grid>

          <MaterialUI.Grid item xs={6}>
            <StyledCard>
              <MaterialUI.Typography variant="h2">
                Redux Store Tree
              </MaterialUI.Typography>
              <MaterialUI.Box marginTop={2}>
                <Componnets.Result.Component />
              </MaterialUI.Box>
            </StyledCard>
          </MaterialUI.Grid>
        </MaterialUI.Grid>
      </MaterialUI.Box>
    </>
  );
};

// ===============================
// styles
// ===============================

const StyledCard = styled(MaterialUI.Card)`
  padding: ${(props) => props.theme.spacing(2)}px;
`;
