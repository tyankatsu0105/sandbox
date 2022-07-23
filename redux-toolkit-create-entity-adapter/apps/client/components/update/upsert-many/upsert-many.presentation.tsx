import * as React from 'react';

import * as MaterialUI from '@material-ui/core';

import * as ReactHookForm from 'react-hook-form';
import * as UsersEntity from '~client/application/domains/users/entity';

// ===============================
// types
// ===============================
type Props = {
  onSubmit: () => void;
  hookFormMethods: ReactHookForm.UseFormMethods<
    UsersEntity.FormData['addMany']
  >;
  hookFormMethodsArray: ReturnType<typeof ReactHookForm.useFieldArray>;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  const formLength = React.useMemo(
    () => props.hookFormMethodsArray.fields.length,
    [props.hookFormMethodsArray.fields.length]
  );

  return (
    <form onSubmit={props.onSubmit}>
      {props.hookFormMethodsArray.fields.map((field, index) => (
        <React.Fragment key={field.formID}>
          {index > 0 && (
            <MaterialUI.Box marginTop={2} marginBottom={2}>
              <MaterialUI.Divider />
            </MaterialUI.Box>
          )}

          <MaterialUI.Box>
            <MaterialUI.TextField
              name={`users[${index}].id`}
              label="id"
              variant="outlined"
              type="number"
              inputRef={props.hookFormMethods.register()}
              error={
                props.hookFormMethods.errors.users &&
                props.hookFormMethods.errors.users[index] &&
                Boolean(props.hookFormMethods.errors.users[index].id)
              }
              helperText={
                props.hookFormMethods.errors.users &&
                props.hookFormMethods.errors.users[index] &&
                props.hookFormMethods.errors.users[index].id &&
                props.hookFormMethods.errors.users[index].id.message
              }
            />
          </MaterialUI.Box>
          <MaterialUI.Box marginTop={2}>
            <MaterialUI.TextField
              name={`users[${index}].name`}
              label="name"
              variant="outlined"
              inputRef={props.hookFormMethods.register()}
              error={
                props.hookFormMethods.errors.users &&
                props.hookFormMethods.errors.users[index] &&
                Boolean(props.hookFormMethods.errors.users[index].name)
              }
              helperText={
                props.hookFormMethods.errors.users &&
                props.hookFormMethods.errors.users[index] &&
                props.hookFormMethods.errors.users[index].name &&
                props.hookFormMethods.errors.users[index].name.message
              }
            />
          </MaterialUI.Box>

          <MaterialUI.Box marginTop={2}>
            <MaterialUI.TextField
              name={`users[${index}].age`}
              label="age"
              variant="outlined"
              type="number"
              inputRef={props.hookFormMethods.register()}
              error={
                props.hookFormMethods.errors.users &&
                props.hookFormMethods.errors.users[index] &&
                Boolean(props.hookFormMethods.errors.users[index].age)
              }
              helperText={
                props.hookFormMethods.errors.users &&
                props.hookFormMethods.errors.users[index] &&
                props.hookFormMethods.errors.users[index].age &&
                props.hookFormMethods.errors.users[index].age.message
              }
            />
          </MaterialUI.Box>

          {formLength > 1 && (
            <MaterialUI.Box marginTop={1}>
              <MaterialUI.Button
                variant="outlined"
                color="primary"
                type="button"
                onClick={() => props.hookFormMethodsArray.remove(index)}
              >
                Remove item
              </MaterialUI.Button>
            </MaterialUI.Box>
          )}
        </React.Fragment>
      ))}

      <MaterialUI.Box display="flex" marginTop={2}>
        <MaterialUI.Box>
          <MaterialUI.Button
            variant="outlined"
            color="primary"
            type="button"
            onClick={() => props.hookFormMethodsArray.append({})}
          >
            Append form item
          </MaterialUI.Button>
        </MaterialUI.Box>

        <MaterialUI.Box marginLeft={1}>
          <MaterialUI.Button variant="contained" color="primary" type="submit">
            submit
          </MaterialUI.Button>
        </MaterialUI.Box>
      </MaterialUI.Box>
    </form>
  );
};

// ===============================
// styles
// ===============================
