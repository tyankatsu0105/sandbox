import * as React from 'react';

import * as ApplicationUtils from '~client/application/utils';
import * as Shared from '~client/shared';

import * as Presenter from './presenter';

// ----------------------------------------
// types
// ----------------------------------------
export type Values = string[];
export type ChangeHandler = (values: Values) => void;

// ----------------------------------------
// props
// ----------------------------------------
type Props = {
  disabled?: boolean;
  errorMessage?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  isError?: boolean;
  onChange: ChangeHandler;
  options: {
    label: string;
    value: string;
  }[];
  values: string[];
  /**
   * ex) useState hooks setter
   */
  valuesUpdateHandler: (values: Props['values']) => void;
};

// ----------------------------------------
// component
// ----------------------------------------

export const Component: React.VFC<Props> = (props) => {
  const { componentWrapRef, isClickOutside } = Shared.Hooks.useClickOutSide();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const menuItemRef = React.useRef<HTMLDivElement>(null);
  const controlRef = React.useRef<HTMLDivElement>(null);

  const focusOptionMenuItem = React.useCallback(() => {
    menuItemRef.current && menuItemRef.current.focus();
  }, [menuItemRef]);

  const focusControl = React.useCallback(() => {
    controlRef.current && controlRef.current.focus();
  }, [controlRef]);

  const changeOpenStatus = React.useCallback(
    (openStatus: typeof isOpen) => {
      setIsOpen(openStatus);
    },
    [setIsOpen]
  );

  const handleClickControlOpen = React.useCallback(() => {
    if (props.disabled) return;

    changeOpenStatus(true);
    focusOptionMenuItem();
  }, [changeOpenStatus, focusOptionMenuItem, props.disabled]);
  const handleClickControlClose = React.useCallback(() => {
    changeOpenStatus(false);
  }, [changeOpenStatus]);

  const handleKeyDownControlOpen = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (props.disabled) return;
      if (event.key === ApplicationUtils.Key.key.Enter) {
        changeOpenStatus(true);
        focusOptionMenuItem();
      }
    },
    [changeOpenStatus, focusOptionMenuItem, props.disabled]
  );
  const handleKeyDownControlClose = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === ApplicationUtils.Key.key.Enter) {
        changeOpenStatus(false);
        focusControl();
      }
    },
    [changeOpenStatus, focusControl]
  );

  const handleClickOptionListItem = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      props.onChange([event.currentTarget.dataset.value]);
      props.valuesUpdateHandler([event.currentTarget.dataset.value]);
      changeOpenStatus(false);
      focusControl();
    },
    [changeOpenStatus, props, focusControl]
  );

  const handleKeyDownOptionListItem = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      Shared.Utils.Keys.moveFocus({
        element: event.currentTarget.previousElementSibling as HTMLDivElement,
        event,
        key: ApplicationUtils.Key.key.ArrowUp,
      });

      Shared.Utils.Keys.moveFocus({
        element: event.currentTarget.nextElementSibling as HTMLDivElement,
        event,
        key: ApplicationUtils.Key.key.ArrowDown,
      });

      Shared.Utils.Keys.keyDownHandler({
        callback: () => {
          props.onChange([event.currentTarget.dataset.value]);
          props.valuesUpdateHandler([event.currentTarget.dataset.value]);
          changeOpenStatus(false);
          focusControl();
        },
        event,
        key: ApplicationUtils.Key.key.Enter,
      });
    },
    [changeOpenStatus, focusControl, props]
  );

  React.useEffect(() => props.disabled && changeOpenStatus(false), [
    props.disabled,
    changeOpenStatus,
  ]);

  React.useEffect(() => isClickOutside && setIsOpen(false), [
    isClickOutside,
    setIsOpen,
  ]);

  const handleKeyDownEscape = React.useCallback(
    (event: KeyboardEvent) => {
      if (isOpen && event.key === ApplicationUtils.Key.key.Escape) {
        setIsOpen(false);
        focusControl();
      }
    },
    [isOpen, focusControl]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEscape, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEscape, true);
    };
  }, [handleKeyDownEscape]);

  return (
    <Presenter.Component
      componentWrapRef={componentWrapRef}
      controlRef={controlRef}
      disabled={props.disabled}
      errorMessage={props.errorMessage}
      handleClickControlClose={handleClickControlClose}
      handleClickControlOpen={handleClickControlOpen}
      handleClickOptionListItem={handleClickOptionListItem}
      handleKeyDownControlClose={handleKeyDownControlClose}
      handleKeyDownControlOpen={handleKeyDownControlOpen}
      handleKeyDownOptionListItem={handleKeyDownOptionListItem}
      inputProps={props.inputProps}
      isError={props.isError}
      isOpen={isOpen}
      menuItemRef={menuItemRef}
      options={props.options}
      values={props.values}
    />
  );
};
