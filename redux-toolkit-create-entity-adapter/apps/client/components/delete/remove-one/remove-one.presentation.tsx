import * as React from 'react';
import * as ReduxToolkit from '@reduxjs/toolkit';

import * as MaterialUI from '@material-ui/core';

import * as ReactHookForm from 'react-hook-form';

import * as Store from '~client/store';

import * as UsersEntity from '~client/application/domains/users/entity';

// ===============================
// types
// ===============================
type Props = {
  onSubmit: () => void;
  hookFormMethods: ReactHookForm.UseFormMethods<
    UsersEntity.FormData['removeOne']
  >;

  ids: ReturnType<
    ReduxToolkit.EntitySelectors<UsersEntity.User, Store.RootState>['selectIds']
  >;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <form onSubmit={props.onSubmit}>
      <MaterialUI.Box>
        <MaterialUI.Box width={218}>
          <ReactHookForm.Controller
            name="id"
            control={props.hookFormMethods.control}
            as={
              <MaterialUI.TextField
                select
                label="id"
                variant="outlined"
                type="number"
                fullWidth
                error={!!props.hookFormMethods.errors.id}
                helperText={props.hookFormMethods.errors.id?.message}
              >
                {props.ids.map((id) => (
                  <MaterialUI.MenuItem key={id} value={id}>
                    {id}
                  </MaterialUI.MenuItem>
                ))}
              </MaterialUI.TextField>
            }
          />
        </MaterialUI.Box>
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={2}>
        <MaterialUI.Button variant="contained" color="primary" type="submit">
          submit
        </MaterialUI.Button>
      </MaterialUI.Box>
    </form>
  );
};

// ===============================
// styles
// ===============================
