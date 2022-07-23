import * as React from 'react';

import * as ApplicationUtils from '~client/application/utils';
import * as Shared from '~client/shared';

import * as Presenter from './presenter';

// ----------------------------------------
// types
// ----------------------------------------
export type Option = {
  label: string;
  value: string;
};
export type ChangeHandler = (options: Option[]) => void;

// ----------------------------------------
// props
// ----------------------------------------
type Props = {
  disabled?: boolean;

  /**
   * Error message when isError is true
   */
  errorMessage?: string;

  /**
   * props to input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  isError?: boolean;
  /**
   * Handler for selecting option item
   */
  onChange: ChangeHandler;
  /**
   * Handler for Removing selected option item
   */
  onChangeRemove: ChangeHandler;

  /**
   * options
   * @example options = [{label: 'label-1', value: '1'}]
   */
  options: Option[];
};

// ----------------------------------------
// component
// ----------------------------------------

export const Component: React.VFC<Props> = (props) => {
  const { componentWrapRef, isClickOutside } = Shared.Hooks.useClickOutSide();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = React.useState<
    Map<string, Option>
  >(new Map());

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
      const option = JSON.parse(event.currentTarget.dataset.option) as Option;

      props.onChange([option]);
      if (selectedOptions.has(option.value)) {
        setSelectedOptions((prev) => {
          prev.delete(option.value);
          return prev;
        });
      } else {
        setSelectedOptions((prev) => {
          prev.set(option.value, option);
          return prev;
        });
      }
    },
    [props, selectedOptions, setSelectedOptions]
  );

  const handleKeyDownOptionListItem = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      const option = JSON.parse(event.currentTarget.dataset.option) as Option;

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
          props.onChange([option]);
          if (selectedOptions.has(option.value)) {
            setSelectedOptions((prev) => {
              prev.delete(option.value);
              return prev;
            });
          } else {
            setSelectedOptions((prev) => {
              prev.set(option.value, option);
              return prev;
            });
          }
        },
        event,
        key: ApplicationUtils.Key.key.Enter,
      });
    },
    [props, selectedOptions, setSelectedOptions]
  );

  const handleClickRemoveItemButton = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const option = JSON.parse(event.currentTarget.dataset.option) as Option;

      props.onChangeRemove([option]);
      setSelectedOptions((prev) => {
        prev.delete(option.value);
        return prev;
      });
    },
    [props]
  );

  const handleKeyDownRemoveItemButton = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      const option = JSON.parse(event.currentTarget.dataset.option) as Option;

      Shared.Utils.Keys.keyDownHandler({
        callback: () => {
          props.onChangeRemove([option]);
          setSelectedOptions((prev) => {
            prev.delete(option.value);
            return prev;
          });
        },
        event: event,
        key: ApplicationUtils.Key.key.Enter,
      });
    },
    [props]
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
      handleClickRemoveItemButton={handleClickRemoveItemButton}
      handleKeyDownControlClose={handleKeyDownControlClose}
      handleKeyDownControlOpen={handleKeyDownControlOpen}
      handleKeyDownOptionListItem={handleKeyDownOptionListItem}
      handleKeyDownRemoveItemButton={handleKeyDownRemoveItemButton}
      inputProps={props.inputProps}
      isError={props.isError}
      isOpen={isOpen}
      menuItemRef={menuItemRef}
      options={props.options}
      selectedOptions={selectedOptions}
    />
  );
};
