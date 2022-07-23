import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as ReactHookForm from 'react-hook-form';
import * as ReactHookFormDevTool from '@hookform/devtools/dist/index.cjs.development.js';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as EntitiesUsers from '~client/store/entities/users';
import * as UsersEntity from '~client/application/domains/users/entity';
import * as FormEntity from '~client/application/domains/form/entity';

import * as UIForm from '~client/store/ui/form';

import * as Presentation from './upsert-one.presentation';

// ===============================
// types
// ===============================

// ===============================
// schema
// ===============================
const schema = yup.object().shape<UsersEntity.FormData['upsertOne']>({
  id: yup.number().integer(),
  name: yup.string(),
  age: yup.number().positive().integer(),
});

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const dispatch = ReactRedux.useDispatch();

  const activeReactHookFormDevTool = ReactRedux.useSelector(
    UIForm.activeReactHookFormDevToolSelector
  );

  const hookFormMethods = ReactHookForm.useForm<
    UsersEntity.FormData['upsertOne']
  >({
    resolver: yupResolver(schema),
  });

  const onSubmit = hookFormMethods.handleSubmit((data) => {
    dispatch(EntitiesUsers.actions.upsertUser(data));
  });

  return (
    <>
      <Presentation.Component
        onSubmit={onSubmit}
        hookFormMethods={hookFormMethods}
      />
      {activeReactHookFormDevTool ===
        FormEntity.activeReactHookFormDevTool.upsertOne && (
        <ReactHookFormDevTool.DevTool control={hookFormMethods.control} />
      )}
    </>
  );
};

// ===============================
// styles
// ===============================
