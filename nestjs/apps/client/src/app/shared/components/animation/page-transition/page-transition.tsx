import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as ReactTransitionGroup from 'react-transition-group';

import styled from 'styled-components';

// ==========================
// types
// ==========================
type Props = {
  match: ReactRouter.match | null;
};

// ==========================
// setups
// ==========================
const transitionClassName = 'fade';

// ==========================
// component
// ==========================
export const Component: React.FC<Props> = (props) => {
  return (
    <ReactTransitionGroup.CSSTransition
      classNames={transitionClassName}
      timeout={700}
      in={props.match != null}
      appear
      mountOnEnter
      unmountOnExit
    >
      <AnimateComponent>{props.children}</AnimateComponent>
    </ReactTransitionGroup.CSSTransition>
  );
};

// ==========================
// styles
// ==========================

const AnimateComponent = styled.div`
  position: absolute;

  &.${transitionClassName}-appear, &.${transitionClassName}-enter {
    opacity: 0;
    transform: translate(0, 20px);
  }

  &.${transitionClassName}-appear-active,
    &.${transitionClassName}-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: transform 0.6s, opacity 0.6s;
  }

  &.${transitionClassName}-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  &.${transitionClassName}-exit-active {
    opacity: 0;
    transform: translate(0, 20px);
    transition: transform 0.3s, opacity 0.3s;
  }
`;
