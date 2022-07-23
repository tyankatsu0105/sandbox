import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentation from './create.presentation';

import * as UIForm from '~client/store/ui/form';

import * as FormEntity from '~client/application/domains/form/entity';

// ===============================
// types
// ===============================

type Props = {};

// ===============================
// component
// ===============================
export const Component = (props): React.ReactElement => {
  const dispatch = ReactRedux.useDispatch();

  const updateActiveReactHookFormDevTool = React.useCallback(
    (activeReactHookFormDevTool: FormEntity.activeReactHookFormDevTool) => {
      dispatch(
        UIForm.actions.updateActiveReactHookFormDevTool(
          activeReactHookFormDevTool
        )
      );
    },
    [dispatch]
  );
  return (
    <Presentation.Component
      updateActiveReactHookFormDevTool={updateActiveReactHookFormDevTool}
    />
  );
};

// ===============================
// styles
// ===============================
