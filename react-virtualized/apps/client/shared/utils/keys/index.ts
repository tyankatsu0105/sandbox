import * as ApplicationUtils from '~client/application/utils';

type MoveFocusParams<E> = {
  element: E;
  event: React.KeyboardEvent;
  key: ApplicationUtils.Key.Key;
};
/**
 * keyCodeが入力されるとelementに向けてfocusをあわせる
 */
export const moveFocus = <E extends HTMLOrSVGElement>(
  params: MoveFocusParams<E>
) => {
  if (params.event.key === params.key && params.element) {
    params.event.preventDefault();
    params.element.focus();
  }
};

type KeyDownHandlerParams = {
  callback: () => void;
  event: React.KeyboardEvent;
  key: ApplicationUtils.Key.Key;
};
export const keyDownHandler = (params: KeyDownHandlerParams) => {
  params.event.key === params.key && params.callback();
};
