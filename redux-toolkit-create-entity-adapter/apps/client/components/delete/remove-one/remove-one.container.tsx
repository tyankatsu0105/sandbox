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

import * as Presentation from './remove-one.presentation';

// ===============================
// types
// ===============================

// ===============================
// schema
// ===============================
const schema = yup.object().shape<UsersEntity.FormData['removeOne']>({
  id: yup.number().integer().required(),
});

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const dispatch = ReactRedux.useDispatch();

  const ids = ReactRedux.useSelector(EntitiesUsers.idsSelector);

  const activeReactHookFormDevTool = ReactRedux.useSelector(
    UIForm.activeReactHookFormDevToolSelector
  );

  const hookFormMethods = ReactHookForm.useForm<
    UsersEntity.FormData['removeOne']
  >({
    resolver: yupResolver(schema),
  });

  const onSubmit = hookFormMethods.handleSubmit((data) => {
    dispatch(EntitiesUsers.actions.removeUser(data.id));
  });

  return (
    <>
      <Presentation.Component
        onSubmit={onSubmit}
        hookFormMethods={hookFormMethods}
        ids={ids}
      />
      {activeReactHookFormDevTool ===
        FormEntity.activeReactHookFormDevTool.removeOne && (
        <ReactHookFormDevTool.DevTool control={hookFormMethods.control} />
      )}
    </>
  );
};

// ===============================
// styles
// ===============================
