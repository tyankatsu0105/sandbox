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

import * as Presentation from './set-all.presentation';

// ===============================
// types
// ===============================

// ===============================
// schema
// ===============================
const schema = yup.object().shape<UsersEntity.FormData['addMany']>({
  users: yup.array().of(
    yup.object().shape({
      id: yup.number().positive().integer().required(),
      name: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
  ),
});

// ===============================
// component
// ===============================
export const Component = (): React.ReactElement => {
  const dispatch = ReactRedux.useDispatch();

  const activeReactHookFormDevTool = ReactRedux.useSelector(
    UIForm.activeReactHookFormDevToolSelector
  );

  const hookFormMethods = ReactHookForm.useForm<UsersEntity.FormData['setAll']>(
    {
      resolver: yupResolver(schema),
      defaultValues: {
        users: [{}],
      },
    }
  );

  const hookFormMethodsArray = ReactHookForm.useFieldArray({
    control: hookFormMethods.control,
    name: 'users',

    /**
     * Note: react hook formは、fieldsの各要素に対してidを入れてくれる。
     * id名はuseFieldArrayのkeyNameで変更可能（defaultは`id`）
     * formのアイテムに`id`というものがあると、react hook formが入れてくれるdefaultキー名のidと衝突するので、
     * keyNameで変更する必要がある
     */
    keyName: 'formID',
  });

  const onSubmit = hookFormMethods.handleSubmit((data) => {
    dispatch(EntitiesUsers.actions.setUsers(data.users));
  });

  return (
    <>
      <Presentation.Component
        onSubmit={onSubmit}
        hookFormMethods={hookFormMethods}
        hookFormMethodsArray={hookFormMethodsArray}
      />
      {activeReactHookFormDevTool ===
        FormEntity.activeReactHookFormDevTool.setAll && (
        <ReactHookFormDevTool.DevTool control={hookFormMethods.control} />
      )}
    </>
  );
};

// ===============================
// styles
// ===============================
