import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as ReactHookForm from 'react-hook-form';

import * as UsersEntity from '~client/application/domains/users/entity';

// ===============================
// types
// ===============================
type Props = {
  onSubmit: () => void;
  hookFormMethods: ReactHookForm.UseFormMethods<UsersEntity.FormData['addOne']>;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <form onSubmit={props.onSubmit}>
      <MaterialUI.Box>
        <MaterialUI.TextField
          name="id"
          label="id"
          variant="outlined"
          type="number"
          inputRef={props.hookFormMethods.register}
          error={!!props.hookFormMethods.errors.id}
          helperText={props.hookFormMethods.errors.id?.message}
        />
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={2}>
        <MaterialUI.TextField
          name="name"
          label="name"
          variant="outlined"
          inputRef={props.hookFormMethods.register}
          error={!!props.hookFormMethods.errors.name}
          helperText={props.hookFormMethods.errors.name?.message}
        />
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={2}>
        <MaterialUI.TextField
          name="age"
          label="age"
          variant="outlined"
          type="number"
          inputRef={props.hookFormMethods.register}
          error={!!props.hookFormMethods.errors.age}
          helperText={props.hookFormMethods.errors.age?.message}
        />
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
